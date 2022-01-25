import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive";
import { useDispatch,useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
import { logout } from '../redux/userRedux';
import { signout } from '../redux/apiCalls';

const Container = styled.div`
    height: 80px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items: center;
]`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const Logo = styled.h1`
    font-weight:bold;
`

const SearchContainer =styled.div`
    border: 1px solid grey;
    display: flex;
    align-items: center;
    padding 5px;
    margin-left:25px;
    padding:5px;
`
const Input=styled.input`
    border:none;
    ${mobile({width:'50px'})}
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize:'12px',marginLeft:"10px"})}
`

const Left = styled.div`
    flex:1;
    align-items: center;
    display:flex;
`
const Middle = styled.div`
    flex:1;
    text-align:center;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:'center'})}
`
const Link = styled.a`
    margin: 5px 0px;
    font-size:25px;
    text-decoration:none;
    color:black;
    cursor:pointer;
`

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state=>state.cart.quantity);
  const dispatch = useDispatch();

  const handleClick = (e) =>{
    console.log("currentUser",user);
    e.preventDefault(); 
    signout(dispatch);
  }  

  return (
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Search style={{color: 'grey',fontSize:16}}/>
              <Input placeholder='Search'/>
            </SearchContainer>
          </Left>
          <Middle>
            <Link href="/">  
             <Logo>Streetwise</Logo>
            </Link>
          </Middle>
          <Right>
            {
            user===null && <MenuItem>Register</MenuItem>
            }
            {  user!=null
              ? <MenuItem onClick={handleClick} >Sign Out</MenuItem>
              : <MenuItem>Sign In</MenuItem>
            }
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingBasketOutlined></ShoppingBasketOutlined>
              </Badge>
            </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
  );
};

export default Navbar;
