import React, { Component } from 'react'
import Axios from 'axios'

export class RecordsList extends Component {
    constructor(props){
        super(props)
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete(){
        Axios.get('http://localhost/ReactPHPCRUD/delete.php?id='+this.props.obj.id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err)) 
    }

    render() {
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
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button onClick={this.onDelete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default RecordsList
