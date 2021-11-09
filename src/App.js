import Todo from './Components/all'
import { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body{
   font-size: 16px;
   min-height: 100vh;
   background-color: #004568;
   color: #ffffffff;
   position: relative;
 }
`

function App() {

const getData = (key) => JSON.parse(localStorage.getItem(key));

const inicialstate = getData("datos") || [];

const [Run, setRun] = useState(inicialstate)


const handleRun = (Product) =>{
 setRun([...Run, Product])
}

const deleteRun = (ID) => {
 const Boy = Run.filter(Dell =>  Dell.ID != ID)
 setRun(Boy)
}

useEffect(() => {
  localStorage.setItem("datos", JSON.stringify(Run))
}, [Run])


  return (
    <div className="App">
      
      <Router>
         <Todo handleRun={handleRun} Run={Run} deleteRun={deleteRun}/> 
         <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
