import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import img from "../images/hotel.jpg";
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux/es/exports';
import format from 'date-fns/format';
import { parseISO } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { dateRange } from '../store/userSlice';
const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container{
        margin-top: 3rem;
        display: flex;
      
        width: 75%;
        .sidebar{
            width: 25%;
            .search{
                background-color: #febb02;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 1em;
                span{
                    font-size: 0.8em;
                }
                button{
                width: 10.5em;
                height: 35px;
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
        .mainbar{
            width: 80%;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            .headline{
                display: flex;
                justify-content: space-between;

                button{
                    position: relative;
                    top: 2em;
                    right: 3em;
                    width: 10em;
                    height: 35px;
                    margin-bottom: 1em;
                    border-radius: 2px;
                    background-color: #0071c2;
                    border: none;
                    font-weight: 700;
                    font-size: 0.7em;
                    color: #ffffff;
                }
            }
            .hotelDetail{
                display: flex;
                border: 2px solid #0000002b;
                border-radius: 5px;
                height: 14em;
                background-color: #ffffff;
                .hotel{
                    display: flex;
                    padding: 1rem;
                    width: 100%;
                    gap: 1em;
                    .hotelleft{
                        flex: 2;
                        img{
                            height: 12em;
                            width: 12em;
                            border-radius: 5px;
                        }
                    }
                    .hotelmain{
                        flex: 4;
                        display: flex;
                        flex-direction: column;
                        h2{
                            color: #0071c2;
                        }
                        .address{
                            font-size: 12px;
                        }
                        .line{
                            font-size: 12px;
                        }
                        .roomDetail{
                            border-left:2px solid #0000002b;
                            padding:  0 0.3em;
                            display: flex;
                            flex-direction: column;
                            .delux{
                                font-size: 12px;
                                font-weight: 700;
                            }
                            .beds{
                                font-size: 12px;
                            }
                            .desc{
                                font-size: 12px;
                                font-weight: 700;
                                color: green;
                            }
                            .no{
                                font-size: 12px;
                                color: green;
                            }
                        }
                    }
                    .hotelright{
                        display: flex;
                        flex: 2;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: flex-end;
                        .toprating{
                            display: flex;
                            .review{
                                display: flex;
                                flex-direction: column;
                                padding-right: 0.5em;
                                color: #000000aa;
                                .good{
                                    text-align: end;
                                    font-size: 14px;
                                    font-weight: 700;
                                }
                                .num{
                                    font-size: 12px;
                                }
                            }
                            .rating{
                                background-color: #172f9b;
                                height: 30px;
                                width: 30px;
                                border-radius: 5px 5px 5px 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: #ffffff;
                            }
                        }
                        .priceDetail{
                            display: flex;
                            flex-direction:column;
                            .person{
                                font-size: 12px;
                                margin-top: 50px;
                            }
                            h2{
                                margin: 0;
                            }
                            .tax{
                                font-size: 12px;
                                margin-bottom: 5px;
                            }
                        }
                        button{
                            width: 10em;
                            height: 35px;
                            border-radius: 2px;
                            background-color: #0071c2;
                            border: none;
                            font-weight: 700;
                            font-size: 0.9em;
                            color: #ffffff;
                        }
                    }
                }

            }
        }
    }
`;
const HotelList = ({hotels}) => {
    const persons=useSelector((state)=>state?.option); 
    const dataRange=useSelector((state)=>state?.dates); 
    const navigate=useNavigate()
    // const hotels=useSelector((state)=>state?.response); 
    console.log(hotels)
    console.log(persons)
    console.log(dataRange)
  return (
    <Container>
        <Navbar/>
        <div className="container">
            <div className="sidebar">
                <div className="search">
                    <h2>Search</h2>
                    <span>Destination/property name:</span>
                    <input type="text" value={hotels[0].city}/>
                    <span>Check-in date</span>
                    <input type="text" value={dataRange.startDate}/>
                    <span>Check-out date</span>
                    <input type="text" value={dataRange.endDate}/>
                    <span>1-night stay</span>
                    <input type="text" />
                    <div className="check">
                        <input type="checkbox" />
                        <span>Entire homes & apartments</span>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <span>I'm travelling for work</span>
                    </div>
                    <button>Search</button>
                </div>
                <div className="filter"></div>
            </div>
            <div className="mainbar">
                <div className="headline">
                    <h2>{hotels[0].city}: {hotels.length} properties found</h2>
                    <button>Show on map</button>
                </div>
                {/* <div className="hotelDetail">
                    <div className="hotel">
                        <div className="hotelleft">
                            <img src={img} alt="hotel" />
                        </div>
                        <div className="hotelmain">
                            <h2>Pride Plaza Hotel,Kolkata</h2>
                            <span className='address'>New Town,Kolkata . Show on map . 9.7km from centre</span>
                            <span className='line'>Recommended for your family</span>
                            <div className="roomDetail">
                                <span className='delux'>Deluxe Room</span>
                                <span className='beds'>Beds: 1 double or 2 singles</span>
                                <span className='desc'>Free Cancelation- no prerepayment needed</span>
                                <span className='no'>You can cancel later,so lock in this great price today.</span>
                            </div>
                        </div>
                        <div className="hotelright">
                            <div className="toprating">
                                <div className="review">
                                    <span className='good'>Good</span>
                                    <span className='num'>342 reviews</span>
                                </div>
                                <div className="rating">7.3</div>
                            </div>
                            <div className="priceDetail">
                                <span className='person'>1 night,2 adults,2 children</span>
                                <h2 style={{"textAlign":"end"}}> $6,298</h2>
                                <span className='tax'>+ $756 taxes and charges</span>
                            </div>
                            <button>See availability </button>
                        </div>
                    </div>
                </div> */}

                {hotels.map((hotel)=>
                    (
                        <div className="hotelDetail" key={hotel._id}>
                            <div className="hotel">
                                <div className="hotelleft">
                                    <img src={img} alt="hotel" />
                                </div>
                                <div className="hotelmain">
                                    <h2>{hotel.name},{hotels[0].city}</h2>
                                    <span className='address'>{hotel.address},Kolkata . Show on map . {hotel.distance}km from centre</span>
                                    <span className='line'>Recommended for your family</span>
                                    <div className="roomDetail">
                                        <span className='delux'>{hotel.type} Room</span>
                                        <span className='beds'>Beds: 1 double or 2 singles</span>
                                        <span className='desc'>Free Cancelation- no prerepayment needed</span>
                                        <span className='no'>You can cancel later,so lock in this great price today.</span>
                                    </div>
                                </div>
                                <div className="hotelright">
                                    <div className="toprating">
                                        <div className="review">
                                            <span className='good'>Good</span>
                                            <span className='num'>1223 reviews</span>
                                        </div>
                                        <div className="rating">{hotel.rating}</div>
                                    </div>
                                    <div className="priceDetail">
                                        <span className='person'>{persons.room} night,{persons.adult} adults,{persons.children} children</span>
                                        <h2 style={{"textAlign":"end"}}> ${(persons.room+persons.adult+persons.children)* hotel.cheapestPrice}</h2>
                                        <span className='tax'>+ $756 taxes and charges</span>
                                    </div>
                                    <Link to={`/hotels/${hotel._id}`}><button>See availability </button></Link>
                                </div>
                            </div>
                        </div>
                    )
                )}
               
            </div>
        </div>
    </Container>
  )
}

export default HotelList