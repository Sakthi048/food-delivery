import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate=useNavigate();
  
  const[input, setInput]=useState({
    username:'',
    password:''
  });
  const[err,setError]=useState({
     username:false,
    password:false
  }
  );
  const[logerr,setLogerr]=useState({
     username:false,
    password:false
  });
  function getinput(e){
    setInput({
      ...input,[e.target.name]:e.target.value
    })
  }
  function check(){
    const error={
     username:false,
    password:false
    }
    
    if(!input.username.trim()) error.username=true;
    if(!input.password.trim()) error.password=true;
    setError(error);
    if(error.username && error.password){
      return;
    }
    const logerr={
     username:false,
    password:false}
    if(input.username !=="sakthi") logerr.username=true;
    if(input.password !=="sakthi123") logerr.password=true;
    setLogerr(logerr);
    if(!logerr.username && !logerr.password){
      navigate('/Adminlogged');
    }

  }
  return (
   <>
   <div className='container mt-100'>
    <div className='row justify-content-center align-items-center'>
      <div className='col-lg-4'>
        <div className='card food-card'>
          <div className='card-body d-flex flex-column align-items-center p-5 justify-centent-center'>
            <h3 className='h33'>ADMIN LOGIN</h3>
            <div className='mt-4'>
            <label for="usename">Username :</label>
            <input type="text" className='ms-3' name="username" onChange={getinput}></input>
            {err.username && <p className='red-alert'>* Enter the Username</p>}
            {logerr.username && <p className='red-alert'>Invalid Username</p>}
            </div>
            <div className='mt-5'>
            <label for="password">Password :</label>
            <input type='password' name='password' className='ms-3' onChange={getinput}></input>
            {err.password && <p className='red-alert'>* Enter the password</p>}
            {logerr.password && <p className='red-alert'>Invalid Password</p>}
            </div>
            <button className='btn btnn mt-20' onClick={check}>Log In</button>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}
