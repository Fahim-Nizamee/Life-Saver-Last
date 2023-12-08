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


        <Route path='/admin' element={<AdminSignIn/>}> </Route>
        <Route path='/admin-home' element={<AdminHome/>}> </Route>

        </Routes>
      </div>
    </Router>
  )
}

export default App;
