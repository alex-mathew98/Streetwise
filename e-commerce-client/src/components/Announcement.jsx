import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color:teal;
    color: white;
    justify-content:center;
    align-items: center;
    display:flex;
    font-size:20px;
    font-weight:bold;
    // margin-bottom:20px;
`
const Announcement = () => {
  return (
  <Container>
    Sale in progress 
  </Container>
  );
};

export default Announcement;
