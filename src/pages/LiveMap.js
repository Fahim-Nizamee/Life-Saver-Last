import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import './LiveMap.css'

import donorMarkerIcon from '../img/Location.png';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

//   const center = {
//     lat: 23.8041,
//     lng: 90.4152,
//   };

function LiveMap() {
  const [donorMarkers, setDonorMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [myMarker, setMyMarker] = useState(null);
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [mapCenter, setMapCenter] = useState({ lat: 23.8041, lng: 90.4152 });
  const [size, setSize] = useState(8)
  


  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude)
          setLongitude(longitude)
          setMyMarker({ id: 0, position: { lat: latitude, lng: longitude } });
          setMapCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };

  useEffect(() => {
    const fetchDonorData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-donor-loc');
        const donorData = response.data;

        const transformedDonorData = donorData.map((donor) => ({
          id: donor._id,
          position: {
            lat: parseFloat(donor.latitude),
            lng: parseFloat(donor.longitude),
          },
          donorInfo: {
            name: donor.username,
            profile: donor.phone,
          },
        }));

        setDonorMarkers(transformedDonorData);
      } catch (error) {
        console.error('Error fetching donor data:', error.message);
      }
    };

    fetchDonorData();
  }, []);

  const t = true;

  const handleMyMarkerClick = () => {
    // setSelectedMarker(myMarker);
  };

  const load = () => {
    getMyLocation()
    setSize(15)
    // window.location.reload();
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className='container text-center custom-rw'>
        <br></br>
        <h1>Blood Donor Map</h1>
        <br>
        </br>
        <button className='get_location_btn' onClick={load}>
          Show nearby Donors
        </button>
        <br></br> <br></br>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={size}>
          {donorMarkers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              onClick={() => setSelectedMarker(marker)}
              icon={{
                url: donorMarkerIcon,
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
          {myMarker && (
            <Marker position={myMarker.position} onClick={handleMyMarkerClick} />
          )}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h2>{selectedMarker.donorInfo.name}</h2>
              
                <a
                  href={`tel:${selectedMarker.donorInfo.profile}`}
                  rel="noopener noreferrer"
                >
                  Contact
                </a>


              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
      <Footer />
    </>
  );
}

export default LiveMap;