import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'

export class RecordsList extends Component {
    constructor(props){
        super(props)
        this.onDelete = this.onDelete.bind(this)
        this.state = {
            redirect: false
        }
    }

    onDelete(){
        Axios.get('http://localhost/ReactPHPCRUD/delete.php?id='+this.props.obj.id)
        .then(
            this.setState({redirect: true})
        )
        .catch(err => console.log(err)) 
    }

    render() {
        const {redirect} = this.state

        if(redirect){
            return <Redirect to='/view'/>
        }
        return (
            <tr>
                <td>
                    {this.props.obj.firstname}
                </td>
                <td>
                    {this.props.obj.lastname}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.onDelete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default RecordsList
