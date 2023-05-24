import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Experiment from '../components/Experiment';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import GridElement from '../components/GridElement';
import Header from '../components/Header';
import MailList from '../components/MailList';
import Navbar from '../components/Navbar';

const Container=styled.div`
  .homeContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .srinkedContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    /* background-color: aqua; */
  }
  .item{

  }

`;
const Home = () => {
      const hotels=useSelector(async(state)=>await state?.response); 
      console.log(hotels)

  return (
    <Container>
        <Navbar/>
        <Header hotels={hotels}/>
        <div className="homeContainer">
           <br />
          <div className="srinkedContainer">
            <div className="item">
              <h2 className="homeTitle">Explore India</h2>
              <Featured type="small"/>
            </div>
            <div className="item">
              <h2 className="homeTitle">Browse by Property Type</h2>
              <Featured type="large"/>
            </div>
            <div className="item">
              <GridElement/>
            </div>
            <div className="item">
              <h2 className="homeTitle">Homes guests love</h2>
              <Experiment/>
            </div>
            <div className="item">
              <h2 className="homeTitle">Connect with other travellers</h2>
              <Featured type="large"/>
            </div>
          </div> 
         </div>
          <MailList/>   
          <Footer/>   
    </Container>
  )
}

export default Home