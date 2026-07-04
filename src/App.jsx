import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Menu from "./Menu";
import Admin from "./Admin";
import User from "./User";
import Footer from "./Footer";
import Shopnow from "./Shopnow";
import Biriyani from "./Biriyani";
import Snacks from "./Snacks";
import Desserts from "./Desserts";
import Tiffin from "./Tiffin";
import Juices from "./Juices";
import Meals from "./Meals";
import Banner from "./Banner";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Orderplaced from "./Orderplaced";
import Adminlogged from "./Adminlogged";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>          
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Menu" element={<Menu></Menu>}></Route>
          <Route path="/Admin"  element={<Admin></Admin>}></Route>
          <Route path="/User" element={<User></User>}></Route>
          <Route path="/Biriyani" element={<Biriyani></Biriyani>}></Route>
          <Route path="/Snacks" element={<Snacks></Snacks>}></Route>
          <Route path="/Desserts" element={<Desserts></Desserts>}></Route>
          <Route path="/Tiffin" element={<Tiffin></Tiffin>}></Route>
          <Route path="/Meals" element={<Meals></Meals>}></Route>
          <Route path="/Juices" element={<Juices></Juices>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
          <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/Orderplaced" element={<Orderplaced></Orderplaced>}></Route>
          <Route path="/Adminlogged" element={<Adminlogged></Adminlogged>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>  
    </div>
  );
}

export default App;
