import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
  .footer{
    width: 100%;
    max-width: 1024px;
    font-size: 12px;
}

.fLists{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px ;
}

.fList{
    list-style: none;
    padding: 0;
}

.fListItem{
    margin-bottom: 10px;
    color: rgb(8, 32, 114) ;
    cursor: pointer;
}

.fText{
    background-color: black;
    height: max-content;
    color: white;
    align-items: center;
    justify-content: center;
    margin-bottom : 0px ;
    text-align: center;
    width: 100%;
}
`;

const Footer = () => {
  return (
  <Container>
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
                <li className="fLstItems">Countries</li>
                <li className="fLstItems">Regions</li>
                <li className="fLstItems">Cities</li>
                <li className="fLstItems">Districts</li>
                <li className="fLstItems">Airports</li>
                <li className="fLstItems">Hotels</li>
            </ul>
            <ul className="fList">
                <li className="fLstItems">Countries</li>
                <li className="fLstItems">Regions</li>
                <li className="fLstItems">Cities</li>
                <li className="fLstItems">Districts</li>
                <li className="fLstItems">Airports</li>
                <li className="fLstItems">Hotels</li>
            </ul> 
             <ul className="fList">
                <li className="fLstItems">Countries</li>
                <li className="fLstItems">Regions</li>
                <li className="fLstItems">Cities</li>
                <li className="fLstItems">Districts</li>
                <li className="fLstItems">Airports</li>
                <li className="fLstItems">Hotels</li>
            </ul> 
            <ul className="fList">
                <li className="fLstItems">Countries</li>
                <li className="fLstItems">Regions</li>
                <li className="fLstItems">Cities</li>
                <li className="fLstItems">Districts</li>
                <li className="fLstItems">Airports</li>
                <li className="fLstItems">Hotels</li>
            </ul>
       
        </div>
    </div>
    <div className="fText">Copyright @ 2022 Booking</div>
    </Container>
  )
}

export default Footer