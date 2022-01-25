import { popularProducts,categories } from '../data';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Products = ({categories,filters,sort}) => {
  
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);
  // const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get(categories? `http://localhost:5000/api/products?category=${categories}`
                                              : `http://localhost:5000/api/products`);
        console.log(res);                                      
        setProducts(res.data);
      }catch(err){
      }
    };
    getProducts();
  },[categories]);

  useEffect(()=>{
    console.log(products);
    categories && setFilteredProducts(
      products.filter((item)=> Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
        )
      )
    );
  },[products,categories,filters]);
  
  useEffect(()=>{
    if(sort ==="newest"){
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if(sort ==="asc"){
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => b.price - a.price)
      );
    }
  },[products,sort]);

  return (
  <Container>
      {categories 
       ? filteredProducts.map(item=>(<Product item={item} key={item.id}></Product>))
       : products.slice(0,8).map(item=>(<Product item={item} key={item.id}></Product>)) 
      }
  </Container>
  );
};

export default Products;
