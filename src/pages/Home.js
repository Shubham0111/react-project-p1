import React from 'react'
import '../Styles/Home.css'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
function Home() {
  return (
    <div className='home'style={{ background:`url(${BannerImage})`,backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'}} >
        <div className='headerContainer'>
        <h1>Shubam's Pizzeria</h1>
        <h3>PIZZA TO FIT ANY TASTE</h3>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
        </div>
    </div>
  )
}

export default Home