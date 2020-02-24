import React, { Component } from 'react'
import Axios from 'axios';
import {Redirect} from 'react-router'

export class Edit extends Component {
    constructor(props) {
        super(props)

        this.onChangeFirstname = this.onChangeFirstname.bind(this)
        this.onChangeLastname = this.onChangeLastname.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
        this.state = {
             firstname:'',
             lastname:'',
             email:'',
             redirect: false
        }
    }

    componentDidMount(){
        Axios.get('http://localhost/ReactPHPCRUD/getById.php?id='+this.props.match.params.id)
        .then(response => {
            this.setState({
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                email: response.data.email
            })
        })
        .catch(err => console.log(err))
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
        const obj = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }

        Axios.post('http://localhost/ReactPHPCRUD/update.php?id='+this.props.match.params.id, obj)
        .then(response => console.log(response.data),
            this.setState({redirect:true})
        )
    }

    render() {
        const {redirect} = this.state

        if(redirect){
            return <Redirect to='/view'/>
        }
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
                        <input type="submit" value="Update User" className="btn btn-info"/>
                    </div>
                </form>
            </div>
        )
    } 
}

export default Edit
