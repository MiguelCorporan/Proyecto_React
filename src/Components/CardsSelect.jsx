import styled from "styled-components"
import Abajo from "./abajo"


const Continuar = styled.article`

  background-color: #0dbda5;
  width: 80%;
  height: 100%;
  margin-right: 1rem;
  border: 3px solid  #7a0d63;
  border-radius: 1rem;


.imgdiv{
  height: 40%;
  display: grid;
  place-items: center;
}

.imgdiv svg{
  font-size: 4rem;
  color: #ffffff;
}

.divp{
  font-size: 1.5rem;
  margin-top: 2.3rem;
  color:#7a0d63;
}

@media screen and (max-width:600px){
  width: 100%;
  height: 13rem;
    margin-right: 0;
  }

`

const SelectP = ({NewCards}) => {
   
    



    return(
      < >
        <Continuar className="article1" key={NewCards?.id}>
                    
        <div className="imgdiv">
          <NewCards.Logo />
        </div>

         <div className="divp">
            <h3>{NewCards?.Name}</h3>
         </div>
        </Continuar>
        </>
    )

}

export default SelectP