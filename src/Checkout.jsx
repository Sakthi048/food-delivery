import React, { useState } from "react";
import Banner from "./Banner";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const state=location.state;
  const navigate=useNavigate();
  const[check,setCheck]=useState(false);
  const [data,setData]=useState({
    fname:'',
    lname:'',
    email:'',
    mobileno:'',
    flatno:'',
    streetname:'',
    city:'',
    pincode:'',
    cardname:'',
    cardno:'',
    billingcode:''
  });
   const [err,setErr]=useState({
    fname:false,
    lname:false,
    email:false,
    mobileno:false,
    email:false,
    flatno:false,
    streetname:false,
    city:false,
    pincode:false,
    cardname:false,
    cardno:false,
    billingcode:false
  });

  function getinput(e){
   setData({
    ...data,[e.target.name]:e.target.value
   })
  }

  console.log(data);
  function formhandle(e){
    e.preventDefault();
    const error={
       fname:false,
    lname:false,
    email:false,
    mobileno:false,
    email:false,
    flatno:false,
    streetname:false,
    city:false,
    pincode:false,
    cardname:false,
    cardno:false,
    billingcode:false
    }
if(!data.fname.trim()) error.fname=true;
if(!data.lname.trim()) error.lname=true;
if(!data.email.trim()) error.email=true;
if(!data.mobileno.trim()) error.mobileno=true;
if(!data.flatno.trim()) error.flatno=true;
if(!data.streetname.trim()) error.streetname=true;
if(!data.city.trim()) error.city=true;
if(!data.pincode.trim()) error.pincode=true;
if(!check){
if(!data.cardname.trim()) error.cardname=true;
if(!data.cardno.trim()) error.cardno=true;
if(!data.billingcode.trim()) error.billingcode=true;
}

setErr(error);
if(
  !error.fname &&
   !error.lname &&
    !error.email &&
     !error.mobileno &&
      !error.flatno &&
       !error.streetname &&
        !error.city && 
        !error.pincode &&
        !error.cardname &&
  !error.cardno &&
  !error.billingcode
)
{
  navigate('/Orderplaced');
}
}

  return (
    <>
      <Banner title="Checkout"></Banner>
      <div className="container mt-100">
        <h1 className="h11 mb-50 text-decor">Checkout</h1>
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="h33 text-center mb-30 mt-50">User Details</h3>
                <div className="card card-bg shadow justify-content-around p-5">
                  <div className="row justify-content-around">
                    <div className="col-lg-4 mt-3">
                      <h5>Contact Info :</h5>
                    </div>
                    <div className="col-lg-6 mt-3">
                      <form className="form">
                        <input
                          type="text"
                          name="fname"
                          placeholder="First Name"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.fname}
                        ></input>
                        {err.fname &&<p className="red-alert">* Please Enter the name</p>}
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last name"
                          className="mt-3"
                          autoComplete="on" 
                          onChange={getinput}
                          value={data.lname}
                        ></input>
                        {err.lname &&<p className="red-alert">* Please Enter the name</p>}
                        <input
                          type="tel"
                          name="mobileno"
                          placeholder="Mobile No"
                          className="mt-3"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.mobileno}
                        ></input>
                          {err.mobileno &&<p className="red-alert">* Please Enter the Mobile Number</p>}
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="mt-3"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.email}
                        ></input>
                          {err.email &&<p className="red-alert">* Please Enter the Email</p>}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <div className="card card-bg shadow p-5 ">
                  <div className="row justify-content-around">
                    <div className="col-lg-4 mt-3">
                      <h5>Address:</h5>
                    </div>
                    <div className="col-lg-6 mt-3">
                      <form className="form">
                        <input
                          type="text"
                          name="flatno"
                          placeholder="Door No, Flat No"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.flatno} 
                        ></input>
                          {err.flatno &&<p className="red-alert">* Please Enter the Flat No</p>}
                        <input
                          type="text"
                          name="streetname"
                          placeholder="Street Name"
                          className="mt-3"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.streetname}
                        ></input>
                          {err.streetname &&<p className="red-alert">* Please Enter the Street Name</p>}
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          className="mt-3"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.city}
                        ></input>
                          {err.city &&<p className="red-alert">* Please Enter the City</p>}
                        <input
                          type="text"
                          name="pincode"
                          placeholder="Pincode"
                          className="mt-3"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.pincode}
                        ></input>                        
                          {err.pincode &&<p className="red-alert">* Please Enter the Pincode</p>}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-12 mt-50">
                <div className="card card-bg shadow p-5 ">
                  <div className="row justify-content-around">
                    <div className="col-lg-4 mt-3">
                      <h5>Payment Method:</h5>
                    </div>
                    <div className="col-lg-6 mt-3">
                      <form className="form">
                        <input
                          type="text"
                          name="cardname"
                          placeholder="Card Name"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.cardname} 
                        ></input>
                          {err.cardname &&<p className="red-alert">* Please Enter the Card Name</p>}
                        <input
                          type="text"
                          name="cardno"
                          placeholder="Card Number"
                          className="mt-3"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.cardno}
                        ></input>
                          {err.cardno &&<p className="red-alert">* Please Enter the Card No</p>}
                        <input
                          type="text"
                          name="billingcode"
                          placeholder="Billing Pin Code"
                          className="mt-3"
                          autoComplete="on"
                          onChange={getinput}
                          value={data.billingcode}
                        ></input>                        
                          {err.billingcode &&<p className="red-alert">* Please Enter the Code</p>}
                          <h6 className="mt-3">Other Options</h6>
                          <div className="d-flex align-items-center">
                          <input type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)} id="cash" className="m-1"></input>                          
                          <label htmlFor="cash">Cash On Delivery</label>
                          </div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mt-100">
             <div className="card card-bg shadow p-2 d-flex flex-row justify-content-around align-items-center text-center">
                <div className="col-lg-4">
                  <h4 className="mt-20">
                    <strong>Total Price:</strong>{state}
                  </h4>
              <button className="btn btnn mt-20 mb-30" onClick={formhandle}>Proceed to Pay</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
