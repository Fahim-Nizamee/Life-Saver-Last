import React, { useState, useEffect } from 'react';
import './SignUp.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [autoFetchAddress, setAutoFetchAddress] = useState(false);

    let navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();

        const user = { username, city, address, email, password, phone ,longitude,latitude};

        if (email && password && username && phone && address && city && longitude && latitude) {
            axios.post('http://localhost:5000/signup', user).then((response) => {
                if (response.data === 'Successfully registered') {
                    swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully registered',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/sign-in');
                } else {
                    swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'This email already registered',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
        } else {
            swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Invalid Info',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    // Geolocation code
    useEffect(() => {
        const getUserLocation = async () => {
            if (navigator.geolocation && autoFetchAddress) {
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

        getUserLocation();
    }, [autoFetchAddress]);



    return (
        <div>
            <Header />
            <div className='sign-sec'>
                <div className='sign-card form-control shadow'>
                    <h1>Sign Up</h1>
                    <div className='form-group'>
                        <label htmlFor='username'>Name</label>
                        <input type='username' className='form-control' id='username' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputEmail4'>Email</label>
                        <input type='email' className='form-control' id='inputEmail4' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputPassword4'>Password</label>
                        <input type='password' className='form-control' id='inputPassword4' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputAddress'>Phone</label>
                        <input type='phone' className='form-control' id='inputAddress' placeholder='Phone number' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputAddress'>Address</label>
                        <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' value={address} readOnly />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputCity'>City</label>
                        <input type='text' className='form-control' id='inputCity' placeholder='City' onChange={(e) => setCity(e.target.value)} value={city} readOnly />
                    </div>
                    <div className='d-flex align-item-center'>
                        <input
                            type="radio"
                            checked={autoFetchAddress}
                            onChange={() => setAutoFetchAddress(!autoFetchAddress)}
                        />
                        <label>Take address automatically</label>
                    </div>

                    <button type='submit' className='btn' onClick={signUp}>
                        <i className='fa-solid fa-arrow-right'></i>
                    </button>
                    <p>
                        Already have an account?<Link to='/sign-in'> Sign In</Link>
                    </p>
                    <Link to={'/'}>Back to Home <i className='fa fa-home'></i></Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
