import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import {  BsFillPeopleFill, BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Abajo from "./abajo";

const HeaderStyle = styled.header`
    width: 100%;
    height: 4rem;
    background-color: #19d3c3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #7a0d63;

    .title{
        margin-left:2rem;
        font-size: 2.5rem;
        color: #7a0d63;
    }

    .nav{
        width: 22%;
        margin-right: 5px;
    }

    .nav a {
        margin-left: 12px;
        text-decoration: none;
        font-size: 1.7rem;
        color: #7a0d63;
    }
    

    @media screen and (max-width:600px){

        .title{
        margin-left:1rem;
        font-size: 2rem;
    }

    .nav{
        width: 50%;
        display: flex;
        justify-content: space-between;
    }

    .nav a{
        margin-left: 0;
    }
    }

   
`;

const Header = ({}) => {
      return (
          <HeaderStyle>
               <h2 className="title">Tu tienda</h2>
               

               <div className="nav" >
                   <Link to="/">  <AiOutlineHome />  </Link>
                   <Link to="/About" > <BsFillPeopleFill /> </Link>
                   <Link to="/Productos" > <BsFillBagFill /> </Link>
                   <Link to="/Carrito" > <AiOutlineShoppingCart /> </Link>
                   <Link to="/Usuario" > <BsFillPersonFill />    </Link>
               </div>
          </HeaderStyle>              
      )
}

export default Header