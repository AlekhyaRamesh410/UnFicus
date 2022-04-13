import { Component } from "react";
import "./HomeComponent.css"
import logo from './logo.svg';
import download from './download.svg'
import love from './love.jpg';
class  HomeComponent extends Component{
    

    registerUser=(event)=>{
        this.props.history.push(`/register`);

    }
    loginUser=(event)=>{
        this.props.history.push(`/login`);
    }
    
    render() { 
        return( 
        <div>
            
          <p>this provides various consulting services</p>
          <button className="btn btn-primary" onClick={()=>this.registerUser()}>Signup</button>
            <button className="btn btn-primary" onClick={()=>this.loginUser()}>Login</button><br></br>
        </div>
        )
    }
}
 
export default HomeComponent;