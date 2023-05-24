import React from 'react'
import styled from 'styled-components';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

const Container=styled.div`
    display: grid;
    height: 40em;
    width: 100%;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 12px;
    grid-column-gap: 12px;
    grid-auto-rows: 150px;
    grid-template-areas: 
        "kolkata Jojera Rajgir"
        "kolkata andaman misere"
    ;

    .item{
        height: 100%;
        width: 100%;
        background-color: beige;
        position: relative;
        border-radius: 10px;
        img{
            height: 100%;
            width: 100%;
            border-radius: 10px;
        }
        .headerline{
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            padding: 1em 1em;
            color: #FFF;
            text-shadow: 2px 2px #0202025b;
            
            .name{
                font-size: 2em;
                font-weight: 700;
            }
            .property{
                font-weight: 500;
            }
        }
    }
    
    .item1{
        grid-area: kolkata;  
    }
    .item2{
        grid-area: Jojera;  
        
    }
    .item3{
        grid-area: Rajgir;
       
    }
    .item4{
        grid-area: andaman;
        
    }
    .item5{
        grid-area: misere;
    }
`;
const GridElement = () => {
  return (
    <Container>
        <div className="item item1">
            <img src={img1} alt="" />
            <div className="headerline">
                <span className='name'>Salt Lake City</span>
                <span className='property'>64 properties</span>
            </div>
        </div>
        <div className="item item2">
        <img src={img2} alt="" />
            <div className="headerline">
                <span className='name'>Salt Lake City</span>
                <span className='property'>64 properties</span>
            </div>
        </div>
        <div className="item item3">
        <img src={img3} alt="" />
            <div className="headerline">
                <span className='name'>Salt Lake City</span>
                <span className='property'>64 properties</span>
            </div>
        </div>
        <div className="item item4">
        <img src={img4} alt="" />
            <div className="headerline">
                <span className='name'>Salt Lake City</span>
                <span className='property'>64 properties</span>
            </div>
        </div>
        <div className="item item5">
        <img src={img5} alt="" />
            <div className="headerline">
                <span className='name'>Salt Lake City</span>
                <span className='property'>64 properties</span>
            </div>
        </div>
    </Container>
  )
}

export default GridElement