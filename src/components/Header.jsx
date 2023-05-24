import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { faBed, faPerson, faCalendarDays, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns'
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
import { dateRange, fetchHotelsByCity, persons } from '../store/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Container = styled.div`
  .header{
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;

}

.headerContainer{
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
}


.headerContainer.listMode
{
    margin: 20px 0px 0px 0px;
}


.headerList{
    display: flex;
    gap: 40px;
    margin-bottom: 50px;

}

.headerListItems{
    display: flex;
    align-items: center;
    gap: 10px;
}

.headerListItems.active{
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
}

.headerDesc{
    margin: 20px 0px;
}

.headerButton{
    background-color: rgb(85, 145, 229);
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
}

.headerSearch{
    height: 30px;
    background-color: white;
    border: 3px solid yellow;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 5px ;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
}



.headerIcon{
    color: lightgray;
}

.headerSearchItems{
    display: flex;
    align-items: center;
    gap: 10px;

}

.headerSearchInput{
    border: none;
    outline: none;
}

.headerSearchText{
    color: lightgray
}

.headerBtn{
    background-color: rgb(155, 185, 206) ;
    border: none;
    height: 30px;
    width: 80px;
}

.date{
    position: absolute;    
    top: 50px;
    z-index: 10;
}

.options{
    z-index: 10;
    position: absolute;
    top: 50px;
    background-color: white ;
    color: gray;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.4);
}

.optionItems{
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
}


.optionCounter{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: black;
}

.optionCounterButton{
    width: 30px;
    height: 30px;
    border: 1px solid rgb(65, 137, 237);
    color: rgb(90, 161, 231);
    cursor: pointer;
    background-color: white;
}

.optionCounterButton:disabled{
    cursor: not-allowed;
}
`;


const Header = ({ type }) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setopenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  // console.log(dates[0].startDate,dates[0].endDate)
  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const {startDate}=dates[0]
  const {endDate}=dates[0]

  const handleSubmit=async()=>{
    // console.log(destination)
    // const response=await axios.get(`http://localhost:8800/api/hotels?city=${destination}`)
    // console.log(response.data)
    dispatch(fetchHotelsByCity(destination))
    dispatch(persons(options))
    dispatch(dateRange({startDate,endDate}))
    navigate("/hotellist")
  }

  return (
    <Container>
      <div className='header'>
        <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
          <div className="headerList">
            <div className="headerListItems active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
          </div>
          {type !== 'list' && <> <h1 className='headerTitle'> A lifetime of discounts? It's Genius.</h1>
            <p className='headerDesc'>
              Get rewarded for your travels - unlock instant saving of 10% or more with a free Booking account
            </p>
            <div className="headerSearch">
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder='Where are you going?' onChange={(e) => setDestination(e.target.value)} className='headerSearchInput'></input>
              </div>
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, 'dd/MM/yyyy')} to  ${format(dates[0].endDate, 'dd/MM/yyyy')}`} </span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="date"
                  minDate={new Date()}
                />}
              </div>
              <div className="headerSearchItems">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => setopenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult. ${options.children} children .  ${options.room} room  `}</span>
                {openOptions && <div className="options">
                  <div className="optionItems">
                    <span className='optionText'>Adult</span>
                    <div className="optionCounter">
                      <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                      <span className="optionCounterNumber">{options.adult}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItems">
                    <span className='optionText'>Children</span>
                    <div className="optionCounter">
                      <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                      <span className="optionCounterNumber">{options.children}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItems">
                    <span className='optionText'>Room</span>
                    <div className="optionCounter">
                      <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                      <span className="optionCounterNumber">{options.room}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="headerSearchItems">
                <button className="headerBtn" onClick={handleSubmit}>Search</button>
              </div>
            </div>  </>}
        </div>
      </div>
    </Container>
  )
}

export default Header