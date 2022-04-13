import { Component } from "react";
import "./App.css";
class  RegisterComponent extends Component{
    state={
        userName:'',
        password:'',
    }
    changeNameHandler=(event)=>{
        this.setState({userName:event.target.value});
    }
    changepasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }
    saveRecord=()=>{
        let user={userName:this.state.userName,password:this.state.password};
        console.log("userDetails:"+JSON.stringify(user));
        alert("user "+user.userName+"  is added successfully")
    }
    render() { 
        return( <div>
            <p>i am register component</p>
            <form>
            UserName:<input type="text" value={this.state.userName} onChange={this.changeNameHandler}></input><br></br>
            Password:<input type="text"  value={this.state.password} onChange={this.changepasswordHandler}></input><br></br>
            <button className="btn btn-primary" type="submit" onClick={this.saveRecord}>submit</button>
            </form>
            

        </div>
        )
    }
}
 
export default RegisterComponent;