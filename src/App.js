import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdminSignIn from './adminPages/AdminSignIn';
import AdminHome from './adminPages/AdminHome';
import DonorList from './pages/DonorList';
import BeADonor from './pages/BeADonor';
import LiveMap from './pages/LiveMap';
import AboutUs from './pages/AboutUs';
import Privacypolicy from './pages/Privacypolicy';
import Ads from './adminPages/Ads';



function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/sign-in' element={<SignIn/>}> </Route>
        <Route path='/sign-up' element={<SignUp/>}> </Route>
        <Route path='/donor-list' element={<DonorList/>}> </Route>
        <Route path='/be-a-donor' element={<BeADonor/>}> </Route>
        <Route path='/live-map' element={<LiveMap/>}> </Route>
        <Route path='/about-us' element={<AboutUs/>}> </Route>
        <Route path='/privacy-policy' element={<Privacypolicy/>}> </Route>


        <Route path='/admin' element={<AdminSignIn/>}> </Route>
        <Route path='/admin-home' element={<AdminHome/>}> </Route>
        <Route path='/ads-edit' element={<Ads/>}> </Route>

        </Routes>
      </div>
    </Router>
  )
}

export default App;