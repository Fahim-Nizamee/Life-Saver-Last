import React, { useEffect, useState } from 'react'
import AdminNavbar from '../adminComponents/AdminNavbar'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert2';
import user from '../img/User.png';
import location from '../img/Location.png';
import phoneL from '../img/Phone.png';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';

export default function AdminHome() {

    const [city, setCity] = useState('All City');
    const [donor, setDonor] = useState([]);
    const [bloodGroup, setBloodGroup] = useState('All Blood Group');
    const [search, setSearch] = useState('')

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
        const isName = search === '' || person.username.toLowerCase().includes(search.toLowerCase());
        const isMail = search === '' || person.email.toLowerCase().includes(search.toLowerCase());
        return isName || isMail;
    };

    function Delete(data) {
        const id = data._id
        const username= data.username
        const bloodgroup= data.bloodgroup
        const city= data.city
        const address= data.address
        const latitude= data.latitude
        const longitude= data.longitude
        const email= data.eamil
        const phone= data.phone
        const donor= data.donor

        const user = { id, username, bloodgroup,city,address,latitude,longitude,email,phone,donor  }

        axios.post(`http://localhost:5000/donor-delete`,user).then(response => {
          if (response.data === 'success') {
            swal.fire({
              position: "center",
              icon: "success",
              title: "Donor Removed Successfully",
              showConfirmButton: false,
              timer: 1500,
            })
            load()
          }
          else {
            swal.fire({
              position: "center",
              icon: "success",
              title: "Try Again Later",
              showConfirmButton: false,
              timer: 1500,
            })
          }
    
    
    
        })
    
      }

    return (
        <div>
            <Header />
            <AdminNavbar />
            <div className=" my-3 container px-5 w-75">
                <div className="post-container ">
                    <div className="sort shadow">
                        <label htmlFor="search">Search by name & mail</label>
                        <input className='search shadow form-control' type="search" placeholder='Search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    </div>
                    {donor.filter(filterDonors).map(data => (
                        <div className="show-post shadow" key={data.id}>
                            <div className="post-card">
                                <img className="user" src={user} alt="" />
                                <div className="post-user-info">
                                    <h5>{data.username}</h5>
                                </div>
                                <a href="#" onClick={() => { Delete(data) }}><i className='fa fa-trash'></i></a>
                            </div>
                            <div className="post-description">
                                <div className="blood-group">
                                    <h1>{data.bloodgroup}</h1>
                                </div>
                                <div className="end-description">
                                    <div className="location">
                                        <img className="location-point" src={location} alt="" />
                                        <h6>{data.city}</h6>
                                    </div>
                                    <div className="location btn" onClick={() => copy(data.phone)}>
                                        <img className="location-point" src={phoneL} alt="" />
                                        <a className=""><h6>Contact now</h6></a>
                                    </div>
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
