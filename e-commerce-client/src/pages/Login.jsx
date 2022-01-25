import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
const Container = styled.div`
    width:100vw;
    height:100vh;
    background:url("https://images.pexels.com/photos/3759249/pexels-photo-3759249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center;
    display:flex;
    background-size:cover;
    align-items:center;
    justify-content:center;
    text-align:center;
    `
const Wrapper = styled.div`
    padding:20px;
    width:40%;
    background-color:white;
`
const Form = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
`
const Title = styled.h1`
    color:black;
    font-size:25px;
    font-weight:300;
    // border: 2px solid black;
`
const Input = styled.input`
    flex:1;
    min-height:45%;
    margin:10px 0px;
    padding:10px;

`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
    margin: 20px;
    justify-content:center;
    &:disabled{
        color:green;
        cursor:not-allowed;
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size:12px;
    text-decoration; underline;
    cursor:pointer;
`
const Error = styled.span`
    color:red;
`
const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching,error } = useSelector((state) => state.user);
  const handleClick = (e) =>{
     e.preventDefault(); 
     login(dispatch,{username,password});
  }  

  return (
    <Container>
        <Wrapper>
            <Title>Sign-In</Title>
            <Form>
                <Input 
                    placeholder="username" 
                    onChange={(e)=> setUsername(e.target.value)}
                ></Input>
                <Input 
                    placeholder="password"
                    type="password"
                    onChange={(e)=> setPassword(e.target.value)}
                ></Input>
                {/* <Agreement>Sample Agreement</Agreement> */}
                <Button onClick={handleClick} >Login</Button>
                {error && <Error>Something went wrong</Error>}
                <Link>Forgot password?</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Login;
