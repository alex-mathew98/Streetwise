import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newletter from '../components/Newletter';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Title = styled.h1`
    color:black;
    font-size:50px;
    font-weight:900;
    margin:30px;
    margin-bottom:10px;
`

const Home = () => {
  return( 
    <div>
       <Navbar/>
       <Announcement/>
       <Slider/>
       <Categories/>
       <Title>Trending Products:</Title>
       <Products/>  
       <Newletter/>
       <Footer/>
    </div>
  )
};

export default Home;
