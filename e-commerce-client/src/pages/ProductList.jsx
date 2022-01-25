import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newletter from '../components/Newletter';
import Products from '../components/Products';
import { categories } from '../data';

const Container = styled.div`

`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`
const Filter = styled.div`
margin:20px;
`
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`
const Select = styled.select`
    margin-left: 20px;
    padding: 5px;
`
const Option = styled.option`
`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter,setFilters] =useState({});
  const [sort,setSort]=useState("newest");
  const handleFilters =(e) =>{
      const value = e.target.value;
      setFilters({
           ...filter,
          [e.target.name]:value,
      });
  };
  console.log(filter);
  return (
  <Container>
    <Navbar></Navbar>
    <Announcement></Announcement>
    <Title>{cat}</Title>
    <FilterContainer>
        <Filter>
           <FilterText>
               Filter Products:
           </FilterText>
           <Select name="color" onChange={handleFilters}>
               <Option disabled>
                   Color
               </Option>
               <Option> white</Option>
               <Option> black</Option>
               <Option> red</Option>
               <Option> blue</Option>
               <Option> green</Option>
               <Option> gray</Option>
           </Select>
           <Select name="size" onChange={handleFilters}>
               <Option disabled selected>
                   Size
               </Option>
               <Option> XS</Option>
               <Option> S</Option>
               <Option> M</Option>
               <Option> L</Option>
               <Option> XL</Option>
               <Option> XXL</Option>
           </Select>
        </Filter>
        <Filter>
            <FilterText>
               Sort Products:
           </FilterText>
           <Select name="size" onChange={e=>setSort(e.target.value)}>
               <Option value="newest">
                   Newest
               </Option>
               <Option value="asc"> Price(asc)</Option>
               <Option value="desc"> Price(desc)</Option>
           </Select>
        </Filter>
    </FilterContainer>
    <Products categories={cat} filters={filter} sort={sort}></Products>
    <Newletter></Newletter>
    <Footer></Footer>
  </Container>);
};

export default ProductList;
