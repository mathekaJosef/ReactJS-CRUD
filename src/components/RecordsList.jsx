import React, { Component } from 'react'

export class RecordsList extends Component {
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
                <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default RecordsList
