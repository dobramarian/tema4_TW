import React, { Component } from 'react'

class RobotForm extends Component {
    constructor(){
		super()
		this.state = {
            name:"Nume Robot-Default",
            type:"Tip Robot-Default",
            mass:"Masa Robot-Default",
        }
    };
    onAdd(){
        console.log("submit");
    }
    render() {
		return (
		<div>
            <form onSubmit={this.onAdd}>
            <input id="nameRobot" value="Nume"/>
            <input id="typeRobot" value="Tip"/>
            <input id="massRobot" value="Masa"/>
            <button type="submit" value="add" onClick={this.onAdd} >ADAUGA</button>
            </form>
		</div>
		)
	}

}
export default RobotForm