import React, { Component } from 'react';
import './FamousPerson.css'

class FamousPerson extends Component {
    constructor(){
        super();
        this.state = { personName : '',
                       personRole: ''};
    }
    handleNameChange = (event) => {
        this.setState({
            personName: event.target.value
        })
    }
    handleRoleChange = (event) => {
        this.setState({
            personRole: event.target.value
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.personName} {this.state.personRole}</p>
                <input onChange={this.handleNameChange}
                    type="text" placeholder="Person Name" />
                <input onChange={this.handleRoleChange}
                    type="text" placeholder="Person Role" />
            </div>
        )
    }
}
export default FamousPerson;