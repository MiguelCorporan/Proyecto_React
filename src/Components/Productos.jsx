import styled from "styled-components"
import ProductCard from "./ProductCard"
import Abajo from "./abajo"


const Titulo3 = styled.h2`
text-align: center;
margin-bottom: 1rem;
font-size: 4rem;

@media screen and (max-width:600px){
 font-size:2rem;
 margin-bottom:.4rem;
}

`

const Titulo4 = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;

  @media screen and (max-width:600px){
        margin-bottom:.5rem;
        font-size: 1rem;
  }
`

const TodosT = styled.article`
width: 100%;
height: 87vh;
background-color: cadetblue;

`

const Productos = () => {
    return(
        <>
        <TodosT>
        <Titulo3>Productos</Titulo3>
        <Titulo4>Te ofrecemos una gran variedad de productos tanto para tu como para tu cuidado</Titulo4>
         
            <ProductCard />

        </TodosT>
       <Abajo />
        </>
    )
}

export default Productos