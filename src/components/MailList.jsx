import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
.mail{
    width: 100%;
    margin-top: 50px;
    background-color: #003580;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.mailInputContainer{
    padding: 20px;
}

.mailInputContainer>input{
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 50px;
    border-radius: 5px;
    padding: 10px;

}

.mailInputContainer>button{
    height: 50px;
    background-color: rgb(77, 179, 239);
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
}



`;
function mailList() {
  return (
    <Container>
    <div className='mail'>
        <h1 className='mailTitle'>Save Time, Save Money!</h1>
        <span className='mailDesc'>Sign Up and we'll send the best deals to you</span>
          <div className='mailInputContainer'>
              <input type="text" placeholder='Your Email' />
              <button>Subscribe</button>    
          </div> 
    </div>
    </Container>
  )
}

export default mailList