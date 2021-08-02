
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
function App() {
  return (
    <div>
     
      <Router> 
      <Navbar></Navbar>
      <Switch> 
     <Route exact path="/">  
       <Home></Home>
     </Route>
     <Route path="/home">  
       <Home></Home>
     </Route>
     <Route path="/about">  
       <About></About>
     </Route>
     <Route path="/service">  
       <Service></Service>
     </Route>
     <Route path="/contact">  
       <Contact></Contact>
     </Route>

    
    </Switch>
      </Router>
    </div>
  );
}

export default App;
