import { Add, Remove, RemoveCircle } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newletter from '../components/Newletter';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { publicRequest } from '../APIMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:75%;
    height:80vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding:10px 50px;
    margin:100px;
`
const Title = styled.h1`
    font-weight:bold;
    font-size:35px;
`
const Description = styled.p`
    margin:20px 0px;
    font-size:30px;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer = styled.div`
width:50%;
margin;30px 0px;
display:flex;
justify-content:space-between;
`
const Filter = styled.div`
margin:20px;
margin-left:5px;
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
    margin-right:5px;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;

`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;

`

const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    justify-content:space-between;

`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin;0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border:1px solid teal;
    background-color: white;
    cursor:pointer;
    font-weight:500;
    &:hover{
        background-color:#f8f4f4
    }
    `

const Product = () => {

   const location = useLocation();
   const id = location.pathname.split("/")[2];  
   const [product,setProduct]=useState({});
   const [quantity, setQuantity] = useState(1);
   const [color, setColor] = useState("");
   const [size, setSize] = useState("");
   const dispatch = useDispatch();

   useEffect(()=>{
      const getProduct = async() =>{
          try{
             const res = await publicRequest.get("/products/search/"+id);
             setProduct(res.data); 
          }catch{}
      };
      getProduct();
   },[id]);
   
  const handleQuantity =(type)=>{
      if(type === "dec"){
          quantity>1 && setQuantity(quantity - 1);
      }else{
          setQuantity(quantity + 1);
      }
  };
  
  const handleClick = () =>{ 
    dispatch(
     addProduct({...product,quantity,color,size})
    //addProduct({product,quantity,price:product.price*quantity})
    );
  }; 
  
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <ImageContainer>
                <Image src={product.image}/>
              </ImageContainer>
              <InfoContainer>
                  <Title>{product.title}</Title>
                  <Description>{product.description}</Description>
                  <Price>${product.price}</Price>
                  <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        {product.color?.map((c)=>(
                            <FilterColor color={c} onClick={()=>
                                setColor(c)
                            }/>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>(e.target.value)}>
                        {product.size?.map((s) => (
                            <FilterSizeOption >{s}</FilterSizeOption>
                         ))}
                        </FilterSize>
                    </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove onClick={()=>handleQuantity("dec")}/>
                          <Amount>{quantity}</Amount>
                          <Add onClick={()=>handleQuantity("inc")}/>
                      </AmountContainer>
                      <Button onClick={handleClick}>Add to cart</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Footer/>
      </Container>
  );
};

export default Product;
