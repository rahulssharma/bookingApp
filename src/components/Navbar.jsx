import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import {useSelector,useDispatch} from "react-redux";
import { logout } from '../store/userSlice';

const Container=styled.div`
    height: 65px;
    width: 100%;
    background-color: #003580;
    font-style: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;;
    display: flex;
    .navContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0  1rem;
        height: 100%;
        width: 100vw;
        color: white;
        span{
            font-weight: 500;
            font-size: 24px;
        }
        .navItems{
            display: flex;
            gap: 1rem;
            button{
                padding: 0.5rem 0.8rem;
                color: #0071c2;
                font-weight: 600;
                border: 1px solid #0071c2;
                &:hover{
                    background-color: #d3e2ed ;
            }
        }
        }
    }
`;
const Navbar = () => {
    const user=useSelector((state)=>state.currentUser)
    const dispatch=useDispatch()
    return (
        <Container>
                <div className="navContainer">
                <Link to="/" style={{color:'inherit',textDecoration:"none"}}>
                    <span >Booking.com</span>
                </Link>
                    <div className="navItems">
                        <FontAwesomeIcon icon={faCircleQuestion} style={{"height":"28px", }}/>
                        <Link to="/admin"><button style={{"backgroundColor": "#003580" , "color" :"white" , "border": "1px solid white" , "cursor":"pointer", "transition":"all 0.3s ease"}} >List your property</button></Link>
                        {user.username!==null ? (
                            <button>{user.username}</button>
                        ) :
                        (<>
                        <Link to="/register"><button >Register</button></Link> 
                        <Link to="/login"><button >Sign In</button></Link> </> )}
                    </div>
                </div>    
       </Container>
    )
}

export default Navbar