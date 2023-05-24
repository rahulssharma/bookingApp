import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
.fp{
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.fpItem{
    flex: 1;
    gap: 10px;
    display: flex;
    flex-direction: column;

}

.fpImg{
    width: 100%;
}


.fpName{
    font-weight: bold;
}

.fpPrice{
    font-weight: 500;
}

.fpRating>button{
    background-color: rgb(11, 11, 142);
    color: white ;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold ;
}

.fpRating.span{
    font-size: 14px;

}

`;
const FeaturedProperties = () => {
  return (
    <Container>
      <div className='fp'>
        <div className='fpItem' >
          <img alt="" className='fpImg' />
          <span className='fpName'></span>
          <span className='fpCity'></span>
          <span className='fpPrice'>Starting from </span>
          <div className='fpRating'>
            <button>sfdghj</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>


    </Container>
  )
}

export default FeaturedProperties