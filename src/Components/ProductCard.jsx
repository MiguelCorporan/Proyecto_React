import { useState } from "react";
import styled from "styled-components";
import { GiBananaBunch, GiSoap} from 'react-icons/gi';
import { AiOutlineClear } from 'react-icons/ai';
import { BiDrink } from 'react-icons/bi';
import { FaCouch } from 'react-icons/fa';
import SelectP from './CardsSelect'
import { Link } from "react-router-dom";


const Card = styled.section`
width:95%;
height: 18rem;
display: flex;
margin-left: auto;
margin-right: auto;
justify-content: space-between;
text-align: center;

 a{
  display: block;
  width: 20%;
  text-decoration: none;
}

@media screen and (max-width:600px){
  height: 70vh;
  flex-direction: column;
  overflow: scroll;
  }

  a{
    width: 40%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: .5rem;
  }

`


const ProductCard = () => {

const Cards = [ {
    Name: "Comida",
    Logo: GiBananaBunch,
    id: 1
},
{
Name: "Limpieza",
Logo: GiSoap,
id:2
},
{ 
Name: "Cuidado Personal",
Logo: AiOutlineClear,
id:3
},
{ 
Name: "Bebidas",
Logo: BiDrink,
id:4
},
{    
Name: "Muebles",
Logo: FaCouch,
id:5
}
]

const [cards, setCards] = useState(Cards)

    return(
        <>
        <Card>
            {
              cards.map((NewCards) => {

                return (
                  <>
                  <Link to={`/Productos/${NewCards.Name}`}> 
                      <SelectP NewCards={NewCards}  />       
                  </Link>
                      </>
                )
              }
              )
            }
        </Card>
        </>
    )
}

export default ProductCard