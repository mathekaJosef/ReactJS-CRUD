import React, { Component } from 'react'
import axios from 'axios'

export class Insert extends Component {
    constructor(props) {
        super(props)

        this.onChangeFirstname = this.onChangeFirstname.bind(this)
        this.onChangeLastname = this.onChangeLastname.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
        this.state = {
             firstname:'',
             lastname:'',
             email:''
        }
    }

    onChangeFirstname(e){
        this.setState({firstname:e.target.value})
    }
    onChangeLastname(e){
        this.setState({lastname:e.target.value})
    }
    onChangeEmail(e){
        this.setState({email:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        // alert(`${this.state.firstname}, ${this.state.lastname}, ${this.state.email}`)
        const obj = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }

        // console.log(obj)
        axios.post('http://localhost/ReactPHPCRUD/insert.php', obj)
        .then(res => console.log(res.data))

        this.setState({
            firstname:'',
            lastname:'',
            email:''
        })
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New User</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.firstname}
                            onChange={this.onChangeFirstname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.lastname}
                            onChange={this.onChangeLastname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Insert
