import React, { useState,useEffect } from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Add, Remove, RemoveCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from '../APIMethods';
import { useNavigate } from 'react-router-dom';

const KEY =process.env.REACT_APP_STRIPE;

const Container = styled.div`

`
const Wrapper = styled.div`
    padding:20px;
    // display:flex;
`
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`
const Bottom = styled.div`
    padding:10px;
    display:flex;
    justify-content:space-between;
`
const TopButton = styled.button`
    padding: 15px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type ==="filled" && "none"};
    background-color:${props=>props.type ==="filled" ? "black":"transparent"};
    color:${props=>props.type ==="filled" && "white"};
    `
const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`
const Info = styled.div`
    flex:3;
`

const Product = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:40px;
`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`
const Image = styled.img`
    width:200px;
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;s
`
const ProductName = styled.span`
    
`
const ProductID = styled.span`
    
`
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50px;
    background-color:${(props)=>props.color};
`
const ProductSize = styled.span`
   
`
const PriceDetails = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-items:center;
    margin-top:50px;
`
const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
` 
const ProductAmount = styled.div`
   font-size:24;
   margin:5px;
` 
const ProductPrice = styled.div`
    font-size:24;
    font-weight:200;
` 
const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`
const SummaryTitle = styled.h1`
    font-weight:200;
`
const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type === "Total" && "500"};
    font-size:${props=>props.type === "Total" && "24px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const SummaryButton = styled.button`
    width:100%;
    padding:10px;
    background-color: black;
    color:white;
    font-weight:600;
`
const Hr = styled.hr`
   background-color:#eee;
   border:none;
   height:1px;
   margin:20px;
`
const Cart = () => {
  const cart =  useSelector(state=>state.cart);
  const [stripeToken,setStripeToken] = useState(null); 
  const navigate = useNavigate();
  const onToken =(token) =>{
    setStripeToken(token);
  };

  useEffect(()=>{
    const makeRequest = async() =>{
        try{
            const res = await userRequest("/checkout/payment",{
                tokenId: stripeToken.id,
                // amount: cart.total * 100,  
                amount: 5 * 100,       
     
            });
            navigate("/success",{data:res.data});
        }catch{}
    };
    stripeToken && makeRequest();
  },[stripeToken,cart.total,navigate]);

  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
            <Title>
                Your cart
            </Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                </TopTexts>
                <TopButton type="filled">Checkout</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product =>(
                    <Product>
                        <ProductDetail>
                            <Image src={product.image}/>
                            <Details>
                                <ProductName><b>Product:</b>{product.Title}</ProductName>
                                <ProductID><b>ID:</b> {product._id}</ProductID>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>Size:</b> {product.size} </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                           <ProductAmountContainer>
                               <Add/>
                               <ProductAmount>{product.quantity}</ProductAmount>
                               <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>${product.price*product.quantity}  </ProductPrice>
                        </PriceDetails>
                    </Product>
                    ))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount Applied</SummaryItemText>
                        <SummaryItemPrice>$ - 5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="Total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="My Shop"
                        image="https://thumbs.dreamstime.com/z/online-store-shopping-online-logo-graphics-come-file-types-very-easy-to-apply-any-software-download-contains-138450676.jpg"
                        billingAddress
                        shippingAddress
                        description={`Total amount to pay:${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <SummaryButton>Checkout Now</SummaryButton>
                    </StripeCheckout>    
                </Summary>
            </Bottom>
          </Wrapper>
          <Announcement/>
          <Footer/>
      </Container>
  );
};

export default Cart;
