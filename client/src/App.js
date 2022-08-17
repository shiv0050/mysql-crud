import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Add from "./pages/AddEdit";
import Home from "./pages/home";
import View from "./pages/view";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <nav className="navbar navbar-dark bg-dark">
    <h1 className="text-justify" style={{margin:"auto",color:"white"}}>Carbon Footprint Calculator</h1>
    </nav>
    <br/>
    <br/>
    <ToastContainer position='top-center'/>
    <Routes>
      <Route path ="/*" element ={<Home/>}/>
      <Route path ="/add" element={<Add/>}></Route>
      <Route path ="/edit/:id" element={<Add/>}></Route>
      <Route path ="/view/:id" element={<View/>}></Route>
    </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
