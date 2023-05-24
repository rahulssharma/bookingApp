import React from 'react'
import styled from 'styled-components'
const Container =styled.div`
.pList{
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.pListItems{
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
}

.pListImg{
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.pListTitles>h1{
    font-size: 18px;
    color: #444;
    text-transform: capitalize;
}

.pListTitles>h2{
    font-size: 14px;
    font-weight: 300;
}
`;

const PropertyList = () => {

  const Images = [
      "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  ]

  return (
    <Container>
      <div className="pList">
        <div className='pListItems' >
        <img className='pListImg' src={Images[0]} alt="" />
        <div className="pListTitles">
        </div>
            </div>
    </div>
    </Container>
  )
}

export default PropertyList