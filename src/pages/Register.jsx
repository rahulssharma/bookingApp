import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
const Container=styled.div`
    .base-layout{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .br{
      position: relative;
      width: 100%;
      border: 0.5px solid #e9e7e7;
      margin-top: 0.7rem;
    }

    .login-form{
      display: flex;
      width: 30%;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2rem 2rem;

      form{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: start;
        width: 100%;
        input{
          width: 33.7em;
          height: 35px;
          margin-bottom: 1em;
          border-radius: 2px;
          border: 1px solid gray;
          padding: 0 10px;
          color: black;
    
      }
        button{
          width: 28.5em;
          height: 45px;
          margin-bottom: 1em;
          border-radius: 2px;
          background-color: #0071c2;
          border: none;
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
        }
      }
    }

`;
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const handleLogin=async(e)=>{
    e.preventDefault();
    console.log(username,email,password)
    await axios.post("http://localhost:8800/api/auth/register",{username,email,password});
    navigate("/login");
  }
  return (
    <Container>
      <Navbar/>
      <div className="base-layout">
        <div className="login-form">
          <h2 className="title" style={{ "color": "#404040"}}>Sign in or create an account</h2>
          <form action='submit'>
            <span style={{"fontWeight":"500" , "fontSize": "14px" , "paddingBottom": "4px "}} >Username</span>
            <input type="text" className='transition' onChange={(e)=>setUsername(e.target.value)}/>
            <span style={{"fontWeight":"500" , "fontSize": "14px" , "paddingBottom": "4px "}} >Email Address</span>
            <input type="text" className='transition'  onChange={(e)=>setEmail(e.target.value)}/>
            <span style={{"fontWeight":"500" , "fontSize": "14px" , "paddingBottom": "4px "}} >Password</span>
            <input type="text" className='transition'  onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' onClick={handleLogin}>Submit</button>
          </form>
          <div className="br"></div>
          <span style={{ "fontSize": "14px" , "padding": "0.1rem 0.7rem" , "color": "#404040" ,"position":"relative", "top":"-14px", "backgroundColor":"white" }}>or use one of these options</span>
          <h3 style={{"fontWeight":"700" , "fontSize": "14px" , "paddingBottom": "4px ","color": "#2a70ad"}}>More ways to sign in</h3>
          <div className="br"></div>
          <h5 style={{"fontWeight":"400" , "fontSize": "12px" , "color": "#404040", "paddingBottom": "4px "}}>By signing in or creating an account,you agree with our <span style={{"color":"#0071c2"}}>Terms & conditions</span>  and <span style={{"color":"#0071c2"}}>Privacy statements</span> </h5>
          <div className="br"></div>
          <span style={{"fontWeight":"400" , "fontSize": "12px" , "color": "#404040", "paddingBottom": "4px "}}>All rights reserved.</span>
          <span style={{"fontWeight":"400" , "fontSize": "12px" , "color": "#404040", "paddingBottom": "4px "}}>Copyright(2006-2022)-Booking.com</span>
        </div>
      </div>
    </Container>
  )
}

export default Register