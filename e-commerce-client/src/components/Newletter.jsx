import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import React from 'react';
import { mobile } from '../responsive';

const Container = styled.div`
    height:60vh;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title = styled.div`
    font-size:70px;
    margin-bottom:20px;
`
const Description = styled.div`
    font-size:35px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({textAlign:'center'})}

`   
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border: 1px solid lightgray;
    ${mobile({width:'80%'})}

`   
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`

const Button = styled.button`
flex:1;
padding-left:20px;
background-color:teal;
color:white;
border:none;`

const Newletter = () => {
  return (
      <Container>
          <Title>Newsletter</Title>
          <Description>Get updates about our latest drops</Description>
          <InputContainer>
            <Input placeholder='Enter your email'/>
            <Button>
                <Send/>
            </Button>
          </InputContainer>

      </Container>
  );
};

export default Newletter;
