import './App.css';


import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import ContactComponent from './ContactComponent';
import partner1Component from './partner1Component';
import partner2Component from './partner2Component';
import AboutComponent from './AboutComponent';
import ITComponent from './ITComponent';
import OutSourcingComponent from './OutsourcingComponent';
import ConsultingComponent from './ConsultingComponent';

function App() {
  return (
    <div>
      < div className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <div className="subnav">
            <button className="subnavbtn">Services <i className="fa fa-caret-down"></i></button>
            <div className="subnav-content">
            <a href="/ITServices">IT Services</a>
            <a href="/OutSourcing">Ousourcing</a>
            <a href="/Consulting">Consulting</a>
             </div>
        </div>
        <div className="subnav">
            <button className="subnavbtn">Partners <i className="fa fa-caret-down"></i></button>
            <div className="subnav-content">
            <a href="/link1">partner 1</a>
            <a href="/link2">partner 2</a>
             </div>
        </div>
        <a href="/contact">Contact</a>
        </ div>
      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={HomeComponent}></Route>
          <Route path="/register" exact component={RegisterComponent}></Route>
          <Route path="/login" exact component={LoginComponent}></Route>
          <Route path="/about" exact component={AboutComponent}></Route>
          <Route path="/ITServices" exact component={ITComponent}></Route>
          <Route path="/Outsourcing" exact component={OutSourcingComponent}></Route>
          <Route path="/Consulting" exact component={ConsultingComponent}></Route>
          <Route path="/link1" exact component={partner1Component}></Route>
          <Route path="/link2" exact component={partner2Component}></Route>
          <Route path="/contact" exact component={ContactComponent}></Route>
          
          </Switch> 
        </div>
      </Router>
          

    </div>
    
  );
}

export default App;
