import React from 'react';
import { Link } from 'react-router-dom';

// import './styles.scss';
import bannerImg from './banner1.png';
import './styles.css'
import Button from './../forms/Button'

const Directory = props => {
  // return (
  //   <div className="directory">
  //     <div className="wrap">
  //       <div
  //         className="item"
  //         style={{
  //           backgroundImage: `url(${ShopMen})`
            
  //         }}
  //       >
  //         <Link to="/search">
  //           Shop Chineese
  //         </Link>
  //       </div>
  //       <div
  //         className="item"
  //         style={{
  //           backgroundImage: `url(${ShopWomen})`
  //         }}
  //       >
  //         <Link to="/search">
  //           Shop Pizza
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
  return(
    <div className='dir'>
      <div className="content">
        
      <div className='content-main'>
        <h1>Lens Love</h1>
        <p>Wear The Trend</p>
      
        <Link to='/search'>
        <Button>View Frames <i className='fas fa-long-arrow-alt-right'></i></Button>
        </Link>
        
      </div>
      </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </div>
  )
};

export default Directory;
