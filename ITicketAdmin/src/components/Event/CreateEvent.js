import React from 'react'

import { Button, Form, FormGroup } from 'react-bootstrap'

function CreateEvent() {
    return (
        <div className='container'>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Event Name" />

                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>BackGround Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDatetime">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="date" placeholder="Event Date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Event Price" />
                </Form.Group>
                <FormGroup>
                    <Form.Select aria-label="Event Category">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup>
                    <Form.Select aria-label="Event Hall">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FormGroup>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateEvent