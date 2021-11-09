import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Ali from "./DataB";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Abajo from "./abajo";


const Piramide = styled.section`
 


.conten{
    display: flex;
    justify-content: center;
    margin-top:1.5rem;
    
    

    .card{
        width: 14rem;
        height: 18rem;
        background-color: #978e8e;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1.7rem;
        border-radius: 20px;
        outline: 4px solid #d116b8;
    }

    .Img{
        width: 100%;
        height: 60%;
        
    }

    .ima{
        width: 100%;
        height: 100%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    .Dname{
        width: 100%;
    }

    .Letras{
        color: #000000;
        font-weight: bold;
        text-align: center;
    }

    .Letra{
      width: 20%;
      color: #000000;
      margin-left: 15px;
      font-weight: bold;
      background-color: #19d3c3; 
      text-align: center;
    }
    
    .car{
     margin-left: 10rem;
      font-size: 2rem;
      color: #000000;
      font-weight: bold;
      width: 21%;
      background-color: #d116b8;
      border-radius: 10px;
      text-align: center; 
    }

    
}
@media screen and (max-width:600px){

  width: 100%;
  height: 87vh;
  overflow: scroll;

  .conten{
    display: block;

    .card{
    margin-right: auto;
    margin-left: auto;
    outline: none;
    border: 4px solid #d116b8;
  }

  .ima{
        width: 100%;
        height: 100%;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        
    }

    .car{
        border-radius: 10px;
    }
  }



  

}
`;

const Comida = ({handleRun}) => {
  const [Allprodu, setAllprodu] = useState(null);
  const { Servicio } = useParams();

  useEffect(() => {
    const find = Ali.find((pro) => pro.Name === Servicio);
    setAllprodu(find);
  }, []);

  const Carrito = (Y) => {
    handleRun(Y)
  }

  return (
    <>
    <Piramide>
      {Allprodu &&
        Allprodu.Products.map((u) => {
    
          return (
            <div className="conten">
              {
              u.map( y => <div className="card">
                  <div className="Img"><img className="ima" src={y.Img} alt="" /></div>
                  <div className="Dname">
                      <p className="Letras">{y.Name}</p>
                      <p className="Letra">{y.Precio}</p>
                      <div className="car" onClick={() => Carrito(y)}> <AiOutlineShoppingCart /> </div>
                  </div>
              </div>)
              }
            </div>
          );
        })}
    </Piramide>
      <Abajo />
    </>
  );
};

export default Comida;