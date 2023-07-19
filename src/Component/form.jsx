import React, { Component } from "react";
import './style.css'

class Form extends Component{
    state = {
        Name : '',
        Dept : '',
        Rating : '',
        Data : []
    }
    setvalue = (e)=> {
        this.setState({[e.target.name] : e.target.value})
    }
    setsubmit = (e)=>{
        e.preventDefault()
        const obj = {
            name : this.state.Name,
            dept : this.state.Dept,
            rating : this.state.Rating
        }
        this.state.Data.push(obj)
        this.setState({Data : this.state.Data})
    }
    render(){
        return(
            <>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"  name="Name" value={this.state.Name} onChange={this.setvalue} required/><br/>
                <label htmlFor="dept">Department</label>
                <input type="text" id="dept"  name="Dept" value={this.state.Dept} onChange={this.setvalue} required/><br/>
                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating"  name="Rating" min={1} max={10} value={this.state.Rating} onChange={this.setvalue} required/>
            <div className="btn">
                <button onClick={this.setsubmit}>Submit</button>
            </div>
            </form>

            <div className="container">
                {
                    this.state.Data.map((item) =>{
                        return(
                            <>
                            <span>Name : {item.name} | Dept : {item.dept} | Rating : {item.rating}</span>
                            </>
                        )
                    })
                }
            </div>
            </>
        )
    }
}
export default Form