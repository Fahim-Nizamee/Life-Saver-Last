import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from './../components/Footer';
import './Home.css'
import user from '../img/User.png'
import postL from '../img/Post.png'
import dots from '../img/Dots.png'
import location from '../img/Location.png'
// import blooddrop from '../img/blood.png'
import blooddrop2 from '../img/blood2.png'
import phoneL from '../img/Phone.png'
import axios from 'axios';
import swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Info from '../components/Info';

export default function Home() {
  const [post, setPost] = useState([])
  let navigate = useNavigate()
  const [totalDonors, settotalDonors] = useState(0)
  const [postDescription, setPostDescription] = useState('')
  // const [username, setUsername] = useState('')
  const [bloodgrouP, setBloodGroup] = useState('A+')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('Chittagong')

  const setHeight = () => {
    document.getElementById('text1').style.height = document.getElementById('text1').scrollHeight + 'px';
  }



  function load()  {
    axios.get('http://localhost:5000/get-post').then(response => {
      setPost(response.data[0])
      settotalDonors(response.data[1])

      console.log(response.data[1])

    })
  }



  useEffect(() => {
    load()
  }, [])

  function copy(data) {
    navigator.clipboard.writeText(data)
    toast.success("Contact number copied", {
      position: "bottom-right",
    });

  }

  const upload = () => {
    if (localStorage.getItem('username')) {
      const username = localStorage.getItem('username')
      const userEmail = localStorage.getItem('email')
      const bloodgroup = bloodgrouP.slice(0, 2)
      const post = { username, userEmail, postDescription, bloodgroup, city, phone }
      if (username && userEmail && postDescription && bloodgroup && city && phone) {
        axios.post('http://localhost:5000/post', post).then(response => {
          if (response.data.message === 'success') {
            swal.fire({
              position: "center",
              icon: "success",
              title: "Post Complete",
              showConfirmButton: false,
              timer: 1500,
            })
             window.location.reload()
            // setCity('Chittagong')
            // setPhone('')
            // setBloodGroup('A+')
            // setPostDescription('')
            load()
          }
        })
      }
      else {
        toast.error("Fill out all informations", {
          position: "bottom-right",
        });
      }
    }
    else {
      navigate('/sign-in')
    }

  }

  function Delete(_id) {

    axios.delete(`http://localhost:5000/post-delete/${_id}`).then(response => {
      if (response.data === 'success') {
        swal.fire({
          position: "center",
          icon: "success",
          title: "Post Deleted",
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

  const totalpost = post.length

  const info = {totalDonors,totalpost}

  return (
    <div className='main-body'>
      <Header />
      <Navbar />
      
      
      <div className='home-container container-fluid px-4'>
        
        
        <div className='post-container px-2'>
          
          <div className='write-post shadow'>
            <div className='write'>
              <img className='user' src={user} alt="" />
              <textarea type="text" id="text1" class="form-control inp " placeholder="Write your post . . . " name='text' maxLength={200} onKeyUp={setHeight} onKeyDown={setHeight} onChange={(e) => { setPostDescription(e.target.value) }} />
              <button className='btn btn-post' href='#' onClick={upload}><img className='post' src={postL} alt="" /></button>
            </div >
            <hr />
            <div className='select-info'>
              <div class="form-group  sel">
                <label for="inputState">Blood Group</label>
                <select id="inputState" class="form-control" onChange={event => setBloodGroup(event.target.value)} defaultValue={bloodgrouP}>
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
              <div class="form-group sel">
                <label for="inputState">City</label>
                <select id="inputState" class="form-control" onChange={event => setCity(event.target.value)} defaultValue={city}>
                  <option >Dhaka North</option>
                  <option >Dhaka South</option>
                  <option >Chittagong</option>
                  <option >Khulna</option>
                  <option >Rajshahi</option>
                  <option >Mymensingh</option>
                  <option >Sylhet</option>
                  <option >Comilla</option>
                  <option >Barisal</option>
                  <option >Rangpur</option>
                </select>
              </div>

            </div>
            <div class="form-group">
              <label for="inputAddress">Phone</label>
              <input required type="phone" class="form-control" id="inputAddress" placeholder="01XXXXXXXXX" onChange={(e) => { setPhone(e.target.value) }} />
            </div>

          </div>
          {
            post.toReversed().map((data) => {
              return (
                <div className='show-post shadow'>
                  <div className='post-card'>
                    <img className='user' src={user} alt="" />
                    <div className='post-user-info'>
                      <h5>{data.username}</h5>
                      <p>{data.postDate.slice(0, 10)}</p>
                    </div>
                    <a href="#">{
                      (localStorage.getItem('email') === data.userEmail) ?
                        <a onClick={() => { Delete(data._id) }}><img className='dots' src={dots} alt="" /></a> :
                        <div></div>
                    }
                    </a>
                  </div>
                  <div className='post-description'>
                    <div className='blood-group'>
                     <img className='blooddrop' src={blooddrop2}/>
                      <h1>{data.bloodgroup}</h1>
                    </div>
                    <div className='description'>
                      <p>
                        {data.postDescription}
                      </p>
                    </div>
                    <div className='end-description'>
                      <div className='location'>
                        <img className='location-point' src={location} alt="" />
                        <h6>{data.city}</h6>
                      </div>
                      <a  href={`tel:${phone}`} className='location btn' >
                        <img className='location-point' src={phoneL} alt="" />
                        <a className='text-black'  href={`tel:${phone}`} ><h6>Contact now</h6></a>
                      </a>

                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='w-100 infodiv px-2'>
          <Info  info={info}></Info>
        </div>
      </div>
      <br></br> <br></br>
      <Footer />
    </div>
  )
}