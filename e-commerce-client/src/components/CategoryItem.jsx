import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { categories } from '../data';
import { mobile } from '../responsive';
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height:60vh;
    position:relative;

`
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit:cover;
`
const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    // background-color: yellow;
    align-items: center;
    flex-direction:column;
    padding-top: 30%;
    justify-content:center;
    margin-bottom: 40px;
`
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding:10px;
    background-color:white;
    color: grey;
    cursor: pointer;
    font-weight: 600;

`

const CategoryItem = ({item}) => {
  return( 
  <Container>
    <Link to={`/products/${item.categories}`}>
        <Image src={item.img}/>
        <Info>
            <Title >{item.title}</Title>
            <Button>Shop</Button>
        </Info>
    </Link>    
  </Container>
  );
};

export default CategoryItem;
