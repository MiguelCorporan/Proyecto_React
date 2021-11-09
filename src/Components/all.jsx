import Header from "./Header"
import { Switch, Route } from "react-router"
import Productos from "./Productos"
import Usuario from "./Usuario"
import About from "./About"
import Carrito from "./Carrito"
import Home from "./Home"
import Not from "./404"
import Comida from "./ProductsComida"


const Todo = ({handleRun,Run,deleteRun}) => {
    return (
        <>
        <Header />
        <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/About" component={About} />
             <Route path="/Productos/:Servicio" children={<Comida handleRun={handleRun}/>}/> 
             <Route path="/Productos" component={Productos} /> 

             <Route path="/Carrito" >
                 <Carrito  Run={Run} deleteRun={deleteRun}/>
             </Route>

             <Route path="/Usuario" component={Usuario} /> 
             <Route path="*" component={Not}/>
        </Switch>
        
        </>
    )
}

export default Todo 