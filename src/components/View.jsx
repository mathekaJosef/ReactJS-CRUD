import React, { Component } from 'react'
import RecordsList from './RecordsList'
import Axios from 'axios'

export class View extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             students: []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost/ReactPHPCRUD/list.php')
        .then(response => {
            this.setState({students: response.data}) 
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <h3 align="center">Users List</h3>
                <table className="table table-striped"
                style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(item => {
                                return <RecordsList key={item.id} obj={item}/>
                            })
                            
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default View
