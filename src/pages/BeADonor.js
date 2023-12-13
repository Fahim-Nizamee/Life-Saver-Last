import React, { useState, useEffect } from 'react';
import './BeADonor.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

import donorMarkerIcon from '../img/Location.png';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import Footer from '../components/Footer';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

export default function BeADonor() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [myMarker, setMyMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 23.8041, lng: 90.4152 });
  const [userLocationInfo, setUserLocationInfo] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [bloodgroup, setBloodGroup] = useState('A+')
  const [bloodNull, setBloodNull] = useState('')
  const [size, setSize] = useState(8)


  let navigate = useNavigate()




  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude)
          setLongitude(longitude)

          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCyDGujfNmVm9fmsIpkrYU1qRcVhmgFhMw`
            );

            if (!response.ok) {
              throw new Error('Failed to fetch address data');
            }

            const data = await response.json();

            if (data.results && data.results.length > 0) {
              const addressComponents = data.results[0].address_components;

              const cityComponent = addressComponents.find((component) =>
                component.types.includes('locality')
              );

              const formattedCity = cityComponent ? cityComponent.long_name : '';
              console.log(addressComponents)
              setCity(`${formattedCity}`);
              setAddress(data.results[0].formatted_address);
              setMyMarker({ id: 0, position: { lat: latitude, lng: longitude } });
              setSize(17)
              setMapCenter({ lat: latitude, lng: longitude });
            }
          } catch (error) {
            console.error('Error fetching address data:', error);
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };

  const handleMyMarkerClick = () => {
    setSelectedMarker(myMarker);
  };


  useEffect(() => {
    if (localStorage.getItem('username')) {
      function load() {
        const email = localStorage.getItem('email')
        const mail = { email }

        console.log(email)
        axios.post('http://localhost:5000/get-user', mail).then(response => {

          setEmail(response.data.email)
          setName(response.data.username)
          setPhone(response.data.phone)
          setAddress(response.data.address)
          setCity(response.data.city)
          setLatitude(response.data.latitude)
          setLongitude(response.data.longitude)
          if (response.data.bloodgroup === 'null') {
            setBloodNull(response.data.bloodgroup)
          }
          else {
            setBloodNull(response.data.bloodgroup)
            setBloodGroup(response.data.bloodgroup)
          }

          console.log(response.data.bloodgroup)
          console.log(bloodgroup)

        })
      }
      load()
    }
    else {
      navigate('/sign-in')

    }

  }, []);

  function donorupdate() {
    const user = { username, city, address, email, phone, longitude, latitude, bloodgroup }
    console.log(bloodgroup)
    if (bloodgroup !== '' && longitude && address && city && latitude) {
      axios.post(`http://localhost:5000/donor-update`, user).then(response => {
        console.log(response.data)
        // window.location.reload(false);
        if (response.data === 'success') {
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Added',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        window.location.reload(false);

      })
      localStorage.removeItem('username')
      localStorage.setItem('username', username)
    } else {
      swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error Added',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }




  return (
    <div>
      <Header />
      <Navbar />
      <br></br>
      <h1 className='text-center' style={{color:" rgb(138, 2, 2)"}}>Be a donor!</h1>
      <br></br>
      <div className='form-control py-2  container'>


        <div className=' my-2 py-2 align-item-center d-flex flex-column flex-md-row '>


          <div className='w-100 px-2'>
            <div className='form-group'>
              <label >Name</label>
              <input type='username' className='form-control ' id='username' placeholder='Name' value={username} onChange={event => setName(event.target.value)} />
            </div>

            <div className='form-group'>
              <label >Set phone</label>
              <input type='username' className='form-control' id='username' placeholder='Name' value={phone} onChange={event => setPhone(event.target.value)} />
            </div>
            <div className='form-group'>
              <label className='text-muted'>Current blood group</label>
              <div type='username' className='form-control text-muted' id='username' placeholder='Name' readOnly>{bloodNull}</div>
            </div>
            <div className="form-group">
              <label for="inputState">Select Blood Group</label>
              <select id="inputState" class="form-control" onChange={event => setBloodGroup(event.target.value)} value={bloodgroup} required>
                {/* <option selected>Select Blood Group</option> */}
                <option >A+</option>
                <option >A-</option>
                <option >B+</option>
                <option >B-</option>
                <option >AB+</option>
                <option >AB-</option>
                <option >O+</option>
                <option >O-</option>
              </select>
            </div>
          </div>
          <div class=" sel w-100 px-2">
            <div className='form-group'>
              <label className='text-muted' >Email</label>
              <div type='username' className='form-control text-muted' id='username' placeholder='Name' readOnly >{email}</div>
            </div>
            <div className='form-group'>
              <label className='text-muted' >Address</label>
              <div type='username' className='form-control text-muted' id='username' placeholder='Name' readOnly >{address}</div>
            </div>
            <div className='form-group'>
              <label className='text-muted'>City</label>
              <div type='username' className='form-control text-muted' id='username' placeholder='Name' readOnly >{city}</div>
            </div>
            <div id='submit-btn'> </div>
            <div className='text-center'>
              <a href='#submit-btn'>
                <button className=' get_location_btn my-2 ' onClick={getMyLocation}>
                  Get my current location
                </button>
              </a>
            </div>
          </div>

        </div>
        <br></br>
        <div className='text-center'>

          <button id='submit-btn' className='get_location_btn w-25' onClick={donorupdate}>Submit</button>
        </div>
        <br></br>
      </div>

      <div className='form-control container my-5'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={size}
        >
          {myMarker && (
            <Marker
              position={myMarker.position}
              onClick={handleMyMarkerClick}
              icon={{
                url: donorMarkerIcon,
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          )}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h2>Your Location</h2>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
      <Footer />
    </div>
  );
}