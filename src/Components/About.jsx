import { useState } from "react"
import styled from "styled-components"
import AboutPag from "./AboutPag"
import Abajo from "./abajo"

const Titulo2 = styled.h2`
 text-align: center;
 margin-bottom: 1rem;
 font-size: 2.7rem;

 @media screen and (max-width:600px){
    margin-bottom: .5rem ;
    font-size: 1.8rem;
}
`

const Elh3 = styled.div`
     width: 50%;
     text-align: center;
     margin-left: auto;
     margin-right: auto;
     margin-bottom: 1rem;
     font-weight: bold;
     
     @media screen and (max-width:600px){
      width: 90%;
     }
`

const Allt = styled.div`
width: 50%;
height: 60vh;
display: flex;
margin-left: auto;
margin-right: auto;

@media screen and (max-width:600px){
  width:100% ;
  height: 55vh;
}
`

const Elh4 = styled.div`
  width: 50%;
     text-align: center;
     margin-left: auto;
     margin-right: auto;
     margin-bottom: 1rem;
     font-weight: bold;

     @media screen and (max-width:600px){
       width: 80%;
    }
`

const Nosot = styled.article`
width: 100%;
height: 90.3vh;

@media screen and (max-width:600px){

}
`



const About = () => {

  const Tiendas = [{
      Name:"Tu tienda ",
      Img: "https://i.imgur.com/8NpFDQM.jpg",
      Hora:"9:00 Am  -  9:00 Pm"
}, {
    Name:"Tu tienda",
    Img:"https://i.imgur.com/3qUS4lH.jpg",
    Hora:"9:00 Am  -  9:00 Pm",
}]

const [Tienda, setTienda] = useState(Tiendas)



    return(
        <>
        <Nosot>
        <Titulo2>Tu Tienda</Titulo2>

        <Elh3>Somos tu tienda, Tu tienda de confianza, Tu tienda que te sirve, Por eso ahora estamos mas hubicados cerca de ti para cuando nos necesites. </Elh3>
       
            <Allt>
                {
            Tienda.map(Sitio => {
              return  <AboutPag  Sitio={Sitio} />
            })
             }
            </Allt>

            <Elh4>Tu tienda tiene el mejor precio y la mejor calidad</Elh4>
            <Abajo />
        </Nosot>
        
        </>
    )
}

export default About