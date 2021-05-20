import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

import DataFetching from './Datafetching'


function SearchUser () {
    const [posts, setposts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
//            console.log(response.data.serialnumber);
            setposts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <div>
            <div>
            <h1>Get User information</h1>
                <input></input>
                <button>Search</button>
                {/* <DataFetching /> */}
            </div>
            <div>


            <Table striped bordered hover variant="dark" size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Addess</th>
                </tr>
            </thead>
            <tbody>
                { posts.map(post => 
                <tr> 
                    <td key={post.id}>{post.id}</td>
                    <td key={post.id}>{post.name}</td>
                    <td key={post.id}>{post.username}</td>
                    <td key={post.id}>{post.email}</td>
                    <td key={post.id}>{post.phone}</td>
                    <td key={post.id}>{post.address.street}, {post.address.city} </td>
                </tr>) }
            </tbody>
            </Table>


            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.name}</li>)
                }
            </ul> */}
            </div>        

        </div>

    )
}


export default SearchUser;



