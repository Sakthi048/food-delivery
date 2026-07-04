import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='container-fluid bg'>
        <div className='row justify-content-around'>
            <div className='col-lg-2  col-md-5 col-sm-12'>
                <h4 className='linkk'>Foodie</h4>
                <p className='linkk justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae voluptatum ullam adipisci, harum voluptas id soluta ducimus laudantium quis tempore debitis, rem voluptates qui labore alias nisi beatae non!</p>
            </div>
            <div className='col-lg-2 col-md-5 col-sm-12'>
                <h4 className='linkk'>Quick Links</h4>
                 <p><Link to='/' className='linkk'>Home</Link></p>
                  <p><Link to='/About'className='linkk'>About</Link></p> 
                   <p><Link to='/Menu' className='linkk'>Menu</Link></p>
                    <p><Link to='/Admin' className='linkk'>Admin</Link></p>
                     <p><Link to='/Cart' className='linkk'>Cart</Link></p> 
            </div>
            <div className='col-lg-2 col-md-5 col-sm-12'>
                <h4 className='linkk'>Quick Links</h4>
                   <p><Link to='/Tiffin' className='linkk'>Tiffen</Link></p>
                  <p><Link to='/Meals' className='linkk'>Meals</Link></p>  
                   <p><Link to='/Biriyani' className='linkk'>Biriyani</Link></p>
                    <p><Link to='/Snacks' className='linkk'>Snacks</Link></p>
                     <p><Link to='/Desserts' className='linkk'>Desserts</Link></p>
                      <p><Link to='/Juices' className='linkk'>Juices</Link></p>
            </div>
            <div className='col-lg-2 col-md-5 col-sm-12'>
                <h4 className='linkk'>Newsletter</h4>
            
                    <p className='white'><i className="fa-solid fa-phone"></i>+91 12345 67891</p>
                    <p className='white'><i className="fa-regular fa-envelope"></i>fooddelivery@gmail.com</p>
                    <p  className='white'><i className="fa-solid fa-location-dot"></i>15, Avinashi, Tiruppur</p>
            </div>
        </div>
        <div className='row bort justify-content-center align-items-center'>
            <div className='col-lg-10 text-center align-items-center mt-50 mb--30'>
                © 2026 Foodie. All Rights Reserved.
            </div>
        </div>
    </div>
    </>
  )
}
