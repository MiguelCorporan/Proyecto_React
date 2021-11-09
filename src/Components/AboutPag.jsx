import styled from "styled-components";


const All = styled.section`
width: 16rem;
height: 21rem;
margin-left: 4rem;
border:2px solid #0dbda5;
border-radius: 10px;


.Imga{
 width: 100%;
 height: 50%;
 
}

.Content{
  width: 100%;
  height: 50%;
  border-bottom-left-radius: 10px;
 border-bottom-right-radius: 10px;
}

.pan{
 width: 100%;
 height: 100%;
 border-top-left-radius: 10px;
 border-top-right-radius: 10px;
 
}

.Name{
 
 text-align: center;
 color: #ffffff;
 margin-bottom: 1rem;
 font-weight: bold;
}

.Hora{
 text-align: center;
 color: #ffffff;
 font-weight: bold;

}

@media screen and (max-width:600px){
    height: 20rem;
    margin-left: 1rem;
    margin-right: 1rem;
}

`



const AboutPag = ({Sitio}) => {

    
    return(
        <>
         
         {

             <All>
                 <div className="Imga"> < img  className="pan" src={Sitio.Img} alt="" /></div>
                 <div className="Content">
                     <p className="Name">{Sitio.Name}</p>
                     <p className="Hora">{Sitio.Hora}</p>
                 </div>
             </All>

         }

         
        </>
    )
}

export default AboutPag