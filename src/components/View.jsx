import React, { Component } from 'react'
import axios from 'axios'
import RecordsList from './RecordsList'

export class View extends Component {
    constructor(props) {
        super(props)

        this.usersList = this.usersList.bind(this)

        this.state = {
            students: [] 
        }

    }
    
    componentDidMount(){
        axios.get('http://localhost/ReactPHPCRUD/list.php')
        .then(response => {
            this.setState({students: response.data})
        })
        .catch(function (error){
            console.log(error)
        })
    }

    usersList =() => {
        this.state.students.map(item => {
            return <RecordsList obj={item} key={item.id}/>
        })
    }

    

    render() {
        return (
            <div>
                <h3 align="center">Users List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
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
                            this.usersList
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default View
