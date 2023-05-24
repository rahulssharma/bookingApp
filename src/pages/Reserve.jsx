import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchHotelRoom } from '../store/userSlice';
import styled from 'styled-components';
import axios from 'axios';

const Container=styled.div`
  .reserve{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.418 );
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.rContainer{
    background-color: white;
    padding: 20px;
    position: relative;
}

.rClose{
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}

.rItem{
    display: flex;
    align-items: center;
    gap: 50px;
    padding:20px ;
}

.rItemInfo{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.rTitle{
    font-weight: 500;
}

.rDesc{
    font-weight: 300;
}

.rMax{
    font-size: 12px;
}

.rPrice{
    font-weight: 500;
}

.rButton{
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
    margin-top: 20px;
}

.rSelectRooms{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 8px;
    color: gray;
}

.room{
    display: flex;
    flex-direction: column;
}

`;

const Reserve = ({setOpen,hotelId}) => {
      const [selectedRooms, setSelectedRooms] = useState([])
      const dataRange=useSelector((state)=>state.dates); 
      const [data, setData] = useState()
      useEffect(() => {
              const rooms=async()=>{
                  const response=await axios.get(`http://localhost:8800/api/hotels/room/${hotelId}`);
                  return setData(response.data)
              }
              rooms();
        }, [hotelId])


      const getDatesInRange=(startDate,endDate)=>{
            const start = new Date(startDate);
            const end = new Date(endDate);
            const date = new Date(start.getTime());
            let dates=[];
            
            while(date <= end){
              dates.push(new Date(date).getTime());
              date.setDate(date.getDate()+1)
            }
            
            return dates;
      }
    

      const alldates=getDatesInRange(dataRange.startDate,dataRange.endDate);
      console.log(alldates)

      const isAvailable = (roomNumber)=>{
            const isFound = roomNumber.unavailableDates.some((date)=>
            (alldates.includes(new Date(date).getTime())))
            return !isFound
      }


      const handleSelect=(e)=>{
      const checked = e.target.checked;
      const value=e.target.value;
      setSelectedRooms(checked ? [...selectedRooms,value]: selectedRooms.filter((item)=>item !==value))
     } 

      const navigate=useNavigate();

      const handleClick=async()=>{
        try{
            await Promise.all(selectedRooms.map(roomId=>{
            const res= axios.put(`/rooms/availability/${roomId}`,{dates: alldates});
            return res.data;
          }))
          setOpen(false)
          navigate("/");

        }catch(err){

        }
      }

  return (
    <Container>
        <div className='reserve'>
         <div className="rContainer">
       
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)} />
            <span>Select your rooms: </span>
                 {data.map((item)=>(
                 <div className='rItem'>
                     <div className="rItemInfo">
                         <div className="rTitle">{item.title}</div>
                         <div className="rDesc">{item.desc}</div>
                         <div className="rMax">Max People:<b>{item.maxPeople}</b> </div>
                         <div className="rPrice">${item.price} </div>
                    </div>
                        <div className="rSelectRooms">
                         {item.roomNumbers.map(roomNumber=>(
                             <div className="room" key={roomNumber.number}>
                                <label>{roomNumber.number}</label>  
                                <input type="checkbox" disabled={!isAvailable(roomNumber)} value={roomNumber._id}  onChange={handleSelect} />
                             </div>
                            
                          ))}
                        </div>
                 </div>
             ))} 

            <button onClick={handleClick} className='rButton'>Reserve Now!</button>
       </div> 
        
    </div>
     </Container>
  )
}

export default Reserve