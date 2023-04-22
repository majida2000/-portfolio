import logo from './logo.svg';
import './App.css';
import { Button, Image } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavbarCom';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Profil from "./components/Profil.js";
import Certificats from './components/Certificats.jsx';
function App() {

  return (
    <div className="App" >
      <Header />
      <div style={{ backgroundColor: "white" }}>
      <BrowserRouter>
        <Navbar />

        <div>
          
            <Routes>
              <Route path="/*" element={<Home />}></Route>
              <Route path="/formation/*" element={<Formation />}></Route>
              <Route path="/experience/*" element={<Experience />}></Route>
              <Route path="/profil/*" element={<Profil />}></Route>
              <Route path="/certificats/*" element={<Certificats />}></Route>
            </Routes>
          
        </div>
        </BrowserRouter>

      </div>

      <Footer/>
    </div>
  );
}

export default App;