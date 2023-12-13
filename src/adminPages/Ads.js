import React, { useEffect, useState } from 'react'
import AdminNavbar from '../adminComponents/AdminNavbar'
import Header from '../components/Header'
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert2';

export default function Ads() {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    time: '',
    location: '',
    image: '',
    date: ''
  });
  const [ads, setAds] = useState([]);

  function load() {
    axios.get('http://localhost:5000/ads-data').then(response => {
      setAds(response.data);
      console.log(response.data)
    });
  }

  useEffect(() => {
    load();
  }, []);

  const delete_ads = async (id, e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/delete-ad/${id}`).then((response) => {
      if (response.data === 'success') {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Deleted Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        // Reload data after successful deletion
        load();
      }
    });
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = formData.title
    const description = formData.description
    const time = formData.time
    const location = formData.location
    const image = formData.image
    const date = formData.date

    const data = { title, description, time, location, image, date }

    if (formData) {

      await axios.post('http://localhost:5000/add-ads', data).then(response => {
        if (response.data === 'success') {
          swal.fire({
            position: "center",
            icon: "success",
            title: "Added Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({
            title: '',
            description: '',
            time: '',
            location: '',
            image: '',
            date: ''
          });
          load()
        }
      })
    }
  };


  return (
    <div>
      <Header />
      <AdminNavbar />
      <div className='d-flex flex-column flex-md-row my-2 container-fluid px-4'>
        <div className='w-100 px-2'>
          <h2 className='my-3 text-center'>Ads List</h2>
          <div className='form-control'>
            <div className='d-flex justify-content-between align-content-center my-2 px-1'>
              <span className=''>Title</span>
              <span className=''>Date</span>
              <span>Action</span>
            </div>

            {ads.map(data => (
              <div className='form-control d-flex justify-content-between align-content-center my-2'>
                <span className=''>{data.title}</span>
                <span className=''>{data.date}</span>
                <a href='#' onClick={(e) => delete_ads(data._id, e)}><i className='fa fa-trash'></i></a>
              </div>
            ))}
          </div>


        </div>

        <div className='w-100 px-2'>
          <h2 className='my-3 text-center'>Add Advertisement</h2>
          <div className='form-control justify-content-center'>
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label className="form-label" >Title:</label>
                  <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label">Description:</label>
                  <input className="form-control" type="text" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label">Time:</label>
                  <input className="form-control" type="text" name="time" value={formData.time} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label">Location:</label>
                  <input className="form-control" type="text" name="location" value={formData.location} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label">Image:</label>
                  <input className="form-control" type="text"  name="image" value={formData.image} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label">Date:</label>
                  <input className="form-control" type="text" name="date" value={formData.date} onChange={handleChange} required />
                </div>
              </div>
              <div className='text-center my-3'>
                <button className='btn btn-outline-danger' type="submit">Submit</button>
              </div>

            </form>

          </div>




        </div>

      </div>
    </div>
  )
}
