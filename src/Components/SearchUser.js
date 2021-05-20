import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

import DataFetching from './Datafetching'


function SearchUser () {
    const [posts, setposts] = useState([])
    const [name, setName] = useState('')
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users/')

    useEffect(() => {

        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get(url)
        .then(res => {
       //     console.log(res)
            console.log(name);
            setposts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  
    const handleChange = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
      }
 

    function handleClick() {
        console.log(name);
        setUrl('https://jsonplaceholder.typicode.com/users/'+ name);
        
      }

      
    function infoClick(id) {
        console.log(id);
        
     //   setUrl('https://jsonplaceholder.typicode.com/users/'+ name);
      }

    return(
        <div >
           <div class="container col-4">
                <h1 class="">Get user information</h1>
                <div class="col align-self-center">
                    <div class="input-group mb-3">
                        <input onChange={handleChange} type="text" class="form-control" placeholder="Search by name" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    <button class="btn btn-outline-primary" type="button" id="button-search" onClick={handleClick}>Search</button>
                    </div>
                </div>
            </div>
          
            <br/>

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
                        <th>More</th>

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
                        <td>
                            <button type="button" class="btn btn-info btn-sm" onClick={() => infoClick(post.id)} >Info</button>
                        </td>
                        
                    </tr>) }
                </tbody>
                </Table>
           </div>     

        </div>

    )
}


export default SearchUser;



