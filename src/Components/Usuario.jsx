import styled from "styled-components"
import Abajo from "./abajo"


const All = styled.div`
width: 30%;
height: 80vh;
border:2px solid #0dbda5 ;
margin: 1rem auto 0 auto;
text-align: center;

.perfil{
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.ima{
    width: 9rem;
    height: 9rem;
    margin-left: auto;
    margin-right: auto;
    border-radius:50%; 
}

.img{
    width: 100%;
    height: 100%;
    border-radius:50%; 
}

.name{
 font-size: 1.7rem;
 margin-bottom: 1rem;
}

.Datos{
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.1rem;
       
}

.data{
    width: 50%;
    height: 2rem;
    background-color: #7a0d63;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
}

@media screen and (max-width:600px){
    width: 80%;
}
`

const Usuario = () => {
    return(
        <>
        <All>
        <h2 className="perfil">Perfil</h2>

        <div className="ima"> <img className="img" src="https://i.imgur.com/3mxQXkb.png" alt="" />  </div>
           <h2 className="name">Nombre de usuario</h2>
           <p className="Datos">• Datos personales</p>
           <p className="Datos">• Cambiar contraseña</p>
           <p className="Datos">• Gestionar estados</p>
           <p className="Datos">• Editar informacion visible</p>
           <p className="Datos">• Lista</p>
           <p className="Datos" className="data">Cerrar seccion</p>
        </All>
        <Abajo />
        </>
    )
}

export default Usuario