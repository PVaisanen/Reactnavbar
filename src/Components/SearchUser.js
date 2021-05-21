import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Modal from "react-modal";
import { styleModal } from '../styles/SearchUser.styles.css';

import DataFetching from './Datafetching'


function SearchUser () {
    const [posts, setposts] = useState([])
    const [user, setUser] = useState([])
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users/')
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setposts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  
    const handleChange = (event) => {
        // setName(event.target.value);
        console.log(event.target.value);
      }
 
    function handleClick() {
        console.log(user);
        setUrl('https://jsonplaceholder.typicode.com/users/');
      }
  
    function toggleModal(id) {
        setUser(id)
        console.log(id);
        setIsOpen(!isOpen);
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
                            <button type="button" class="btn btn-info btn-sm" onClick={() => toggleModal(post)} >Info</button>
                        </td>         
                    </tr>) }
                </tbody>
                </Table>
               
                <Modal tabindex="-1"
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="User information"
                    className="w3-modal w3-animate-opacity"
                    overlayClassName="">
                    
                    <div class="modal-dialog">
                     <div class="modal-content  w3-card-4">
                            <div class="modal-header w3-teal">
                                <h5 class="modal-title">{user.name}</h5>
                            </div>
                        <div class="w3-container">
                            <h6 class="modal-title">Username {user.username}</h6>
                            <h6 class="modal-title">Email {user.email}</h6>
                            <h6 class="modal-title">Phone {user.phone}</h6>
                        </div>
                        <div class="modal-footer w3-teal">
                            <button type="button" onClick={toggleModal} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                     </div>
                    </div>
                </Modal>  
            </div>   
        </div>

    )
}


export default SearchUser;



