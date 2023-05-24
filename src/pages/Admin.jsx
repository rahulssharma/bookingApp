import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
const Container=styled.div`
    .hotelContainer{
        border: 4px solid #0071c2;
        display: flex;
        height: 42.95em;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        text-align: start;
        form{
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            row-gap:5px;
            .col{
                display: flex;
                gap: 5px;
                justify-content: space-between;
                label{
                    font-weight: 500;
                }
                input{
                    padding:  0 5px;
                    height: 30px;
                    width: 300px;
                }
                textarea{
                    padding:  5px 5px;
                    height: 30px;
                    width: 300px;
                }
            }
            button{
                width: 20em;
                margin: 1em 5em;
                height: 45px;
                margin-bottom: 1em;
                border-radius: 2px;
                justify-self: center;
                background-color: #0071c2;
                border: none;
                font-weight: 700;
                font-size: 16px;
                color: #ffffff;
            }
        }
    }
`;
const Admin = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [distance, setDistance] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [featured, setFeatured] = useState(false)
    const [type, setType] = useState("");
    const [rating, setRating] = useState("");
    const [photos, setPhotos] = useState([]);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(name,address,city,distance,desc,price,featured,type,rating,photos) 
        await axios.post("http://localhost:8800/api/hotels/",{name,type,city,address,distance,photos,desc,rating,cheapestPrice:price,featured})
    }

  return (
    <Container>
        <Navbar/>
        <div className="hotelContainer">
            <h2>Hotel details</h2>
            <form onSubmit={handleSubmit} >
                <div className="col">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id='name' name='name' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="address">Address :</label>
                    <input type="text" id='address' name='address' onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="city">City :</label>
                    <input type="text" id='city' name='city' onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="distance">Distance from nearby station :</label>
                    <input type="text" id='distance' name='distance' onChange={(e)=>setDistance(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="desc">Description :</label>
                    <textarea id='desc' name='desc' onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="cheapprice">Cheapest price of room available :</label>
                    <input type="text" id='cheapprice' name='cheapprice' onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="photos">Photos of Hotel :</label>
                    <input type="file" id='photos' name='photos' accept='image/*' onChange={(e)=>setPhotos(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="featured">Featured :</label>
                    <input type="checkbox" id='featured' name='featured'  onChange={(e)=>setFeatured(e.target.checked)}/>
                </div>
                <div className="col">
                    <label htmlFor="type">type :</label>
                    <select name="type" id="type" onChange={(e)=>setType(e.target.value)}>
                        <option disabled>SELECT</option>
                        <option value="hotel">hotel</option>
                        <option value="apartment">apartment</option>
                        <option value="resort">resort</option>
                        <option value="villa">villa</option>
                        <option value="cabin">cabin</option>
                    </select>                
                </div>
                <div className="col">
                    <label htmlFor="">Rating :</label>
                    <select name="rating" id="rating" onChange={(e)=>setRating(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="col">
                    <button > Submit</button>
                </div>
            </form>
        </div>
    </Container>
  )
}

export default Admin