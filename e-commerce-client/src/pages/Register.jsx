import React,{ useState } from 'react';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:url("https://images.pexels.com/photos/1868475/pexels-photo-1868475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center;
    display:flex;
    align-items:center;
    justify-content:center;
    `
const Wrapper = styled.div`
    padding:20px;
    width:30%;
    background-color:white;
    justify-content:center;
    align-items:center;
    text-align:center;
`
const Form = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
`
const Title = styled.h1`
    color:black;
    font-size:25px;
    font-weight:300;
    // border: 2px solid black;
`
const Input = styled.input`
    flex:1;
    min-height:25%;
    margin:20px 10px 0px 0px;
    padding:10px;
    width: 400px;

`
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;
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
`
const Register = () => {
  
//   const [firstName,setFirstName] = useState("");
//   const [lastName,setLastName] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");  
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) =>{
    e.preventDefault(); 
    if(password === confirmPassword){
        register(dispatch,{username,email,password});
        console.log("Passwords match!");
    }else{
        console.log("Passwords don't match!");
    }
    
 }  

  return (
    <Container>
        <Wrapper>
            <Title>Register a new account</Title>
            <Form>
                {/* <Input placeholder="name"
                    onChange={(e)=> setFirstName(e.target.value)}
                ></Input>
                <Input placeholder="last name"
                    onChange={(e)=> setLastName(e.target.value)}
                ></Input> */}
                <Input placeholder="username"
                    required
                    onChange={(e)=> setUsername(e.target.value)}
                ></Input>
                <Input placeholder="email"
                    onChange={(e)=> setEmail(e.target.value)}
                ></Input>
                <Input placeholder="password"
                    onChange={(e)=> setPassword(e.target.value)}
                ></Input>
                <Input placeholder="confirm password"
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                ></Input>
                {/* <Agreement>Sample Agreement</Agreement> */}
                <Button onClick={handleClick}>Register</Button>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Register;
