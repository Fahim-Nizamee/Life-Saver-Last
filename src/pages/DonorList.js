import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import user from '../img/User.png';
import location from '../img/Location.png';
import phoneL from '../img/Phone.png';
import './DonorList.css';
import Footer from '../components/Footer';

export default function DonorList() {
    const [city, setCity] = useState('All City');
    const [donor, setDonor] = useState([]);
    const [bloodGroup, setBloodGroup] = useState('All Blood Group');

    function load() {
        axios.get('http://localhost:5000/get-donor').then(response => {
            setDonor(response.data);
        });
    }

    useEffect(() => {
        load();
    }, []);

    function copy(data) {
        navigator.clipboard.writeText(data);
        toast.success('Contact number copied', {
            position: 'bottom-right',
        });
    }

    // Function to filter donors based on both city and blood group
    const filterDonors = (person) => {
        const isCityMatch = city === 'All City' || person.city.toLowerCase().includes(city.toLowerCase());
        const isBloodGroupMatch = bloodGroup === 'All Blood Group' || person.bloodgroup === bloodGroup;
        return isCityMatch && isBloodGroupMatch;
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="list-container container">
                <div className="donor-container px-5">
                    <div className="sort shadow d-flex justify-content-between">
                        <div className="form-group w-100 px-1">
                            <label htmlFor="inputState">Filter by city</label>
                            <select
                                id="inputState"
                                className="form-control"
                                onChange={event => setCity(event.target.value)}
                                value={city}
                            >
                                <option>All City</option>
                                <option>Dhaka North</option>
                                <option>Dhaka South</option>
                                <option>Chittagong</option>
                                <option>Khulna</option>
                                <option>Rajshahi</option>
                                <option>Mymensingh</option>
                                <option>Sylhet</option>
                                <option>Comilla</option>
                                <option>Barisal</option>
                                <option>Rangpur</option>
                            </select>
                        </div>
                        <div className="form-group w-100 px-1">
                            <label htmlFor="inputState">Filter by Blood</label>
                            <select
                                id="inputState"
                                className="form-control"
                                onChange={event => setBloodGroup(event.target.value)}
                                value={bloodGroup}
                            >
                                <option>All Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                    </div>
                    {donor.filter(filterDonors).map(data => (
                        <div className="show-post shadow" key={data.id}>
                            <div className="post-card">
                                <img className="user" src={user} alt="" />
                                <div className="post-user-info">
                                    <h5>{data.username}</h5>
                                    <p></p>
                                </div>
                            </div>
                            <div className="post-description">
                                <div className="blood-group">
                                    <h1>{data.bloodgroup}</h1>
                                </div>
                                <div className='end-description'>
                                    <div className='location'>
                                        <img className='location-point' src={location} alt="" />
                                        <h6>{data.city}</h6>
                                    </div>
                                    <a href={`tel:${data.phone}`} className='location btn' >
                                        <img className='location-point' src={phoneL} alt="" />
                                        <a className='text-black' href={`tel:${data.phone}`} ><h6>Contact now</h6></a>
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
