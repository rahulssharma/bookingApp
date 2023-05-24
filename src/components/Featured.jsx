import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 15em;
    font-size: 15px;
    .featured{
        width: 70em;
        overflow-x: scroll;
        margin-top: 2rem ;
        display: flex;
        height: 100%;
        gap:10px;
        scroll-behavior: smooth;
        scrollbar-width: none;
        transition-duration: 2s;

        &::-webkit-scrollbar{
        display: none;
    }
        .featuredItems{
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          height: 12em;
          width: 12em;
          img{
            height: 10em;
            width: 10em;

          }
          .featuredTitles{
            margin: 0.3em ;
            height: 2em;
            display: flex;
            flex-direction: column;
            padding: 0.4em 1em;
            /* font-size: 14px; */
            font-weight: 500;
            color: #2926269d;

          }
        }
    }
`;

const Featured = ({type}) => {
  return (
    <Container>
      <div className="featured">
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        <div className="featuredItems">
          <img className='featuredImg' src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="featuredTitles">
            <span>Berlin</span>
            <span>2345 properties</span>
          </div>
        </div>
        </div>
    </Container>
  )
}

export default Featured