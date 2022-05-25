import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Swal from "sweetalert2";

function UpdateCategory() {
     //Prop for api start
     const [categoryupdate, setCategoryupdate] = useState();


     async function create(e) {
         e.preventDefault();
         await axios.post('/api/Category/UpdateCategory/{id}', {
 
             Name: categoryupdate,
 
 
 
         }, { 'Content-Type': 'multipart/form-data' })
             .then(function (response) {
 
                 Swal.fire(
                    categoryupdate,
                     'Updated',
                     'success'
                 )
             })
             .catch(function (error) {
                 Swal.fire({
                     icon: 'error',
                     title: 'Oops...',
                     text: 'Something went wrong!',
                     footer: '<a href="">Why do I have this issue?</a>'
                 })
 
             });
 
 
 
     };
 
    
     //Prop for api end
  return (
    <div className='container'>
    <Form onSubmit={(e) => create(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hall Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Hall Name" onChange={(e) => setCategoryupdate(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3' >
            Submit
        </Button>
    </Form>
</div>
  )
}

export default UpdateCategory