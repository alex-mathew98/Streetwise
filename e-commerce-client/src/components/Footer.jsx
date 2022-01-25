import { Facebook, Pinterest,Instagram, Twitter, Room, Phone, Mail } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:'column'})}

`
const Logo = styled.h1`
    
`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    magin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;s
    margin-bottom:10px;
`
const Description = styled.p`
    margin:20px 0px;
`
const Socials = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=> props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`
const ContactItem = styled.div`
    display:flex;
    margin-bottom:20px;
    align-items:center;
`
const Payment = styled.img`
    width:100%
`

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:'none'})}

`
const Right = styled.div`
    flex:1
    // margin-top:10px;
    ${mobile({ backgroundColor:'#fff8f8'})}
`
const Footer = () => {
  return (
  <Container>
        <Left>
            <Logo>Streetwise</Logo>
            <Description>Established,2021</Description>
            <Socials>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </Socials>
        </Left> 
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's fashion</ListItem>
                <ListItem>Women's fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Order tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Information</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>900 Dynes Road,Ottawa,Ontario</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+1 --- --- ----</ContactItem>
            <ContactItem><Mail style={{marginRight:"10px"}}/>streetwise@gmail.com</ContactItem>
            {/* <Payment src='https:/payment.jpeg'/> */}
        </Right>
  </Container>);
};

export default Footer;
