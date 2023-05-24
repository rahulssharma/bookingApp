import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import Navbar from "../components/Navbar.jsx"
import Header from "../components/Header.jsx"
import MailList from "../components/MailList.jsx"
import Footer from "../components/Footer.jsx"
import { faCircleXmark,faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom'
import Reserve from './Reserve';
import { fetchHotelsById } from '../store/userSlice.js';
import styled from 'styled-components';
import axios from 'axios';

const Container=styled.div`
  .hotelContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px ;
    padding: 20px;

}

.hotelWrapper{
    width: 100%;
    min-width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
}

.bookNow{
    position: absolute;
    top: 10px;
    right: 0;
    border:none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    border-radius:5px ;
    cursor: pointer;


}


.hotelTitle{
    font-size: 24px;
}

.hotelAdress{
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
}



.hotelImgWrapper{
    width: 33%;
}


.hotelImg{
    width: 100%;

}

.hotelImages{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.hotelDistance{
    color: #0071c2;
    font-weight: 500;
}

.hotelPriceHighLight{
    color: #008009;
    font-weight: 500;
}

.hotelDetails{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
}

.hotelDetailTexts{
    flex:3;
}

.hotelDetailPrice{
    flex:1;
}

.hotelDesc{
    font-size: 14px;
    margin: 20px;
}

.hotelDetailPrice{
    flex: 1;
    background-color: #ebf3ff;
    padding: 20px;
    display: flex;
    flex-direction:column;
    gap: 20px;
}

.hotelDetailPrice>h1{
    font-size: 18px;
    color: #555;
}

.hotelDetailPrice>span{
    font-size: 14px;
}

.hotelDetailPrice>h2{
    font-weight: 300;
}

.hotelDetailPrice>button{
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
}


.slider{
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color:rgba(0,0,0,0.426);
    z-index: 999;
    display: flex;
    align-items: center;

}

.sliderWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.arrow{
    margin: 20px;
    font-size : 50px ;
    color: lightgray;
    cursor: pointer;
}

.sliderImg{
    width: 80vw ;
    height: 80vh;
    align-items: center;
}



.close{
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: lightgray;
    cursor: pointer;

}



`;

const Hotel = () => {
  const location = useLocation();
  const id= location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const dispatch=useDispatch();
  const hotels=useSelector((state)=>state.response); 
  const persons=useSelector((state)=>state.option); 
  const dataRange=useSelector((state)=>state.dates); 
  const user=useSelector((state)=>state.currentUser.username ); 
  console.log(user)
  useEffect(() => {
    dispatch(fetchHotelsById(`${id}`))
  }, [id])
  console.log(hotels)
  console.log(persons)
  console.log(dataRange)

  // const  {data,loading,error} = useFetch(`/hotels/find/${id}`);
  // const {dates,options}=useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1,date2){
    const timeDiff=Math.abs(date2.getTime()-date1.getTime());
    const dayDiff=Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
    return dayDiff;
  }

  // const days=dayDifference(dates[0].endDate,dates[0].startDate);
  const handleOpen=(i)=>{
    setSlideNumber(i)
    setOpen(true)
  }

  const changeSlide=(direction)=>{
    
    let newSlideNumber ;
    if(direction ==='l'){
      newSlideNumber=slideNumber=== 0  ?  5 : slideNumber - 1
    }
    else{
      newSlideNumber=slideNumber=== 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }
  const [data, setData] = useState()

  const navigate= useNavigate();

  const handleClick=()=>{
    const rooms=async()=>{
      const response=await axios.get(`http://localhost:8800/api/hotels/room/${id}`).then(console.log(response.data))
      // setData(response.data)
    }
       rooms();
    if(user){
      setOpenModal(true);
    }else{
      navigate("/login");
    }
  }


  return (
    <Container>
      <Navbar />
      <Header type='list' />

      {/*  ========================== SLIDER  OPEN =====================================================*/}
      <div className="hotelContainer">
       { open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>changeSlide('l')}/>
            <div className="sliderWrapper">
              <img src=""
              //  src={data.photos[slideNumber]}
                alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"  onClick={()=>changeSlide('r')}/>
        </div>}

      {/*  ========================== SLIDER  CLOSE =====================================================*/}


        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle"></h1>
          <div className="hotelAddresss">
            <FontAwesomeIcon icon={faLocationDot} />
            <span></span>
          </div>
          <span className='hotelDistance'>Excellent Location - m from the center</span>

          <span className='hotelPriceHighLight'>Book a stay over  at this property and get a free airport taxi</span>
          <div className="hotelImages">
          {/* {data.photos?.map((photo, i) => ( */}
              <div className="hotelImgWrapper" >
                <img onClick={()=>handleOpen()} alt="" src=""  className="hotelImg"  />
              </div>
            {/* ))} */}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">Best Hotel in the city </h1>
              <p className='hotelDesc'>
              {/* {data.desc} */}
              </p>
            </div>
            <div className="hotelDetailPrice">
            <h1>Perfect for a night stay!</h1>
            <span>
              Located in the rela heart of Krakow, this property ha an excellent location  score of 9.8!
            </span>
            <h2>
              {/* <b>${days * data.cheapestPrice * options.room}</b>{`   (${days} night)`} */}
            </h2>
            <button onClick={handleClick} >Reserve or Book Now!</button>

            </div>
          </div>
        </div>
      </div>
        <MailList/>
        <Footer/>
          {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </Container>
  )
}

export default Hotel