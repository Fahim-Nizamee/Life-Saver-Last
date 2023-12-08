import React from 'react'
import './Navbar.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert2';
import axios from 'axios';

export default function Navbar() {
  let navigate = useNavigate()
  const ggs = () => {
    toast.success("You are a donor now", {
      position: "bottom-right",
    });
  }

  const toggle = () => {
    document.getElementById('ggs').innerHTML = `None`
    // alert(element.getAttribute("aria-expanded"))
    if (document.getElementById('ggs').getAttribute("value") == 'false') {
      document.getElementById('ggs').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
    </svg>`
      document.getElementById('ggs').setAttribute('value', 'true')
    }
    else if (document.getElementById('ggs').getAttribute("value") == 'true') {
      document.getElementById('ggs').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
    </svg>`
      document.getElementById('ggs').setAttribute('value', 'false')
    }
  }

  const signout = () =>{
    swal.fire({
      position: "center",
      icon: "success",
      title: "Signout Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
    
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('donor')
    window.location.reload()
  }

  return (
    <div className='sr'>
      <div className="desktop-1-item border">
        <nav class="navbar navbar-expand-lg bg-body-tertiary  ">
          <div class="container-fluid justify-content-center  ">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="btn ggs" id='ggs' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{ height: "35px" }} onClick={toggle} value='false'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
              </svg>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul class="navbar-nav text-center">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" href="#" to={'/'}>Home</Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link "  aria-current="page" to={'/donor-list'}>
                    Donor List
                  </Link>
                </li>
                {
                  (localStorage.getItem("donor")==='true')?<li class="nav-item">
                  <Link class="nav-link" aria-current="page"  to={'/be-a-donor'} >Update info</Link>
                </li>:<li class="nav-item">
                  <Link class="nav-link" aria-current="page"  to={'/be-a-donor'} >Be a Donor</Link>
                </li>
                }
                {/* <li class="nav-item">
                  <Link class="nav-link" aria-current="page"  to={'/be-a-donor'} >Be a Donor</Link>
                </li> */}
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page"  to={'/live-map'} >Live on Map</Link>
                </li>
                <li class="nav-item">
                  <div  aria-current="page" href="#" >{
                    (localStorage.getItem("username"))?
                    <li class="nav-item dropdown ">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{localStorage.getItem("username")}</a>
                  <ul class="dropdown-menu text-center">
                    <li><a class="dropdown-item" href="#" onClick={signout}>Sign out</a></li>
                  </ul>
                </li>:
                    <Link class="nav-link active" to={'/sign-in'}>Signin</Link>
                  }</div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <ToastContainer /> */}
    </div>

  )
}
