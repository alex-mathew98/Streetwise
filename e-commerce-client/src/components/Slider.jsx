import { ArrowLeftOutlined, ArrowRight, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderContent } from '../data';
import {mobile} from "../responsive"
const Container = styled.div`
    margin-top:20px;
    height: 80vh;
    weight: 100%;
    display:flex;
    position:relative;
    overflow: hidden;
    ${mobile({display:'none'})}

`
const Arrow = styled.div`
    width: 50px;
    height:50px;
    background-color: white;
    border-radius; 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top:0;
    bottom:0;
    left:${props=> props.direction === 'left' && '10px'};
    right:${props=> props.direction === 'right' && '10px'};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
`
const  Slide = styled.div`
    display:flex;
    align-itemss:center;
    width:100vw;
    height:100vh;
    background:${props=>props.bg};
`
const  ImageContainer = styled.div`
    height:100%;
    flex:1;
`
const Image = styled.img`
    height:80%;
`
const  TextContainer = styled.div`
    flex:1;
    padding:50px;
    padding-top: 100px;
`

const Title = styled.h1`
    font-size:70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing: 3px;
`

const Button = styled.button`   
    padding: 10px;
    font-size: 20px;
    background-color:transparent;
    cursor:pointer;

`


const Slider = () => {

  const [slideIndex,setSlideIndex] = useState();  
  const handleClick = (direction) => {
    if(direction === "left"){
        setSlideIndex(slideIndex > 0? slideIndex-1: 2 );
    }else{
        setSlideIndex(slideIndex < 2? slideIndex+1: 0 );
    }
  } 

  return (
  <Container>
    <Arrow direction ="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
        {sliderContent.map(item =>(
                <Slide bg={item.bg}>
                    <ImageContainer>
                        {/* <Image src="https://i.ibb.co/XsdmR2c/1.png"></Image> */}
                        <Image src={item.img}/>
                    </ImageContainer>
                    <TextContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>Show Now</Button>
                    </TextContainer>
                </Slide>
            ))
        }
    </Wrapper>
    <Arrow direction ="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
    </Arrow>
  </Container>
  );
};

export default Slider;
