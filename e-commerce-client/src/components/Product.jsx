import { FavoriteBorderOutlined, SearchOutlined, ShoppingBasketOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
// background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:350px;
    height:500px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    text-align:center;
    position:relative;
    padding:30px 20px 30px 20px;
    margin:auto;
    &:hover ${Info}{
        opacity:1;
    }
`;
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white
position:absolute`

const Image = styled.img`
    height:90%;
    z-index:2;
`

const Icon = styled.div`
width:40px;
height:40px;
border-radius: 50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition: all 0.25s ease; 
&:hover{
    background-color:#e9f5f5;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  
  return ( 
  <Container>
      {/* <Circle/> */}
      <Image src={item.image}/>
      <Info>
          <Icon>
              <ShoppingBasketOutlined/>
          </Icon>
          <Icon>
              <Link to={`/product/${item._id}`}>
              <SearchOutlined/>
              </Link>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>
          </Icon>
      </Info>
  </Container>
  );
};

export default Product;
