import styled from "styled-components"
import {MdDelete} from "react-icons/md"
import Abajo from "./abajo"


const Todo = styled.div`
width: 80%;
margin:1rem auto 0 auto;
padding: 1.5rem;
border:2px solid #29adce;

.cars{
    width: 100%;
    height: 25%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    margin-bottom:.5rem;
    
}

.card{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    margin-bottom: .5rem;
}

.h3{

}

.h4{

}

.ima{
    width: 4rem;
    height: 4rem;
}

.img{
    width: 100%;
    height: 100%;
}

.p{

    width: 70%;
    height: 80%;
    background-color: #ff000055;
    display: flex;
    align-items: center;
   justify-content: center;
   font-size: 1.5rem;
  cursor: pointer;
}

.le{
    font-weight: bold;
}

@media screen and (max-width:600px){
    width: 90%;
}
`

const Carrito = ({Run,deleteRun}) => {
    return(
<>


        <Todo>  
        <div className="card">
                 <div className="le">Imagen</div>
                 <h3>Nombre</h3>
                 <h4>Precio</h4>
                 <p className="le">Eliminar</p>
              </div>   
        {Run.map( Cars => { 
            return(
              <div className="cars">
                  <div className="ima"> <img className="img" src={Cars.Img} alt="" /> </div>
                 <h3 className="h3">{Cars.Name}</h3>
                 <h4 className="h4">{Cars.Precio}</h4>
                 <p className="p" onClick={() => deleteRun(Cars.ID)}> <MdDelete /> </p>
              </div>
              )
        }) }
        </Todo>
        <Abajo />

        
</>        
    )

    

}

export default Carrito