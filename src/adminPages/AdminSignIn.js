import React, { useState } from 'react'
import '../pages/SignIn.css'
import Header from '../components/Header'
import Footer from './../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert2';
import axios from 'axios';


export default function AdminSignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  const signIn = (e) => {
    e.preventDefault()

    if (email && password) {
      const user = { email, password }
      axios.post('http://localhost:5000/admin-login', user).then(response => {
        if (response.data.message === 'success') {
          swal.fire({
            position: "center",
            icon: "success",
            title: "Login Succesful",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("admin-username", response.data.username)
          localStorage.setItem("admin-email", response.data.email)

          navigate('/admin-home')
        }
        else if (response.data === 'wrong pass') {
          swal.fire({
            position: "center",
            icon: "error",
            title: "Wrong Password",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        else if (response.data === 'wrong mail') {
          swal.fire({
            position: "center",
            icon: "error",
            title: "Wrong Mail",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
    }
    console.log(email, password)

    // toast.success('Login Successful', {
    //     position: 'top-center',
    // });

  };
  return (
    <div>
      <Header />
      <div className='sign-sec'>
        <div className='sign-card form-control shadow'>
          <h1>Admin Sign In</h1>
          <div >
            <label >Email address</label>
            <input type="email" class="form-control inp" placeholder="Enter email" name='email' onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div >
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control inp" id="exampleInputPassword1" placeholder="Password" name='password' onChange={(e) => { setPassword(e.target.value) }} />
            <Link>Forgot password?</Link>
          </div>
          <button type="submit" class="btn" onClick={signIn}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}
