import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Hotel from './pages/Hotel';
import Reserve from './pages/Reserve';
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Lists from "./pages/Lists";
import HotelList from "./pages/HotelList";


function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/hotels' element={<List/>}/> */}
            <Route path='/hotels/:id' element={<Hotel/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/hotellist' element={<HotelList/>}/>
            <Route path='/lists' element={<Lists/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/reserve' element={<Reserve/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
