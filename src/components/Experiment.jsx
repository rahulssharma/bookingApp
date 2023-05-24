import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import img1 from "../images/img11.jpg";



const Container = styled.div`
    display: flex;
    justify-content: center;
    .main-slider-container{
        position: relative;
        width: 65em;
        height: 370px;
        display: flex;
        align-items: center;
    }

    .slider{
        width: 100%;
        height: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        scrollbar-width:none;
        scroll-behavior: smooth;
        transition: all 2s ease;
    }

    .slider::-webkit-scrollbar{
        display: none;
    }


    .slider-icon{
        position: absolute;
        .icon{
            color: #39333372;
            font-size: 30px;
            cursor: pointer;
        }
        .icon:hover{
            color: #393333e1;
        }
    }

    .left{
        left: 0;
    }

    .right{
        right: 0;
    }

    .slider-card{
        width: 320px;
        height: 350px;
        background-color: #ffffff75;
        border-radius: 10px;
        display: inline-block;
        margin: 5px 5px;
        box-shadow: 2px 2px 2px 2px rgb(0 0 0 /12%);
    }

    .card{
        display: flex;
        flex-direction: column;
    }

    .image{
        height: 16em;
        width: 100%;
        background-color: #393333e1;
        border-radius: 10px 10px 0 0;
    }

    .description{
        display: flex;
        flex-direction: column;
        height: 5em;
        width: 100%;
        padding: 0.3em 1em;
    }

    .lower{
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .rating{
        background-color: #050589;
        height: 28px ;
        width: 28px;
        border-radius: 6px 6px 6px 0;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }



`;
const Experiment = () => {

    const slides = [1, 2, 3, 4, 5, 6, 7, 8];
    const slideLeft = () => {
        var sl = document.getElementById("slider")
        sl.scrollLeft = sl.scrollLeft + 500;
    }
    const slideRight = () => {
        var sl = document.getElementById("slider")
        sl.scrollLeft = sl.scrollLeft - 500;
    }

    return (
        <Container>
            <div className="main-slider-container">
                <div className="slider-icon left"><FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon" onClick={slideLeft} /></div>
                <div className="slider" id='slider'>
                    {slides.map((slide, index) => {
                        return (
                            <div className='slider-card' key={index}>
                                <div className="card">
                                    <img src={img1} alt="" className='image' />
                                    <div className="description">
                                        <span className='hotelname' style={{"fontSize":"0.9em" }}>3 Epoques</span>
                                        <span className='hotelPlace' style={{"fontSize":"0.8em" }}>Prague</span>
                                        <span className='hotelDesc' style={{"fontSize":"0.9em" , "fontWeight":"bold" }}>Starting from $8,352</span>
                                        <div className="lower">
                                            <div className="rating">
                                                <span className='rate' style={{"fontSize":"0.8em" , "fontWeight":"bold" }}>8.9</span>
                                            </div>
                                            <span className='desc1' style={{"fontSize":"0.9em" }}>Fabulous . </span>
                                            <span className='reviews' style={{"fontSize":"0.9em" }}>468 reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="slider-icon right">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" onClick={slideRight} />
                </div>
            </div>

        </Container>
    )
}

export default Experiment