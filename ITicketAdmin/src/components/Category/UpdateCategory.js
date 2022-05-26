import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';


function UpdateCategory(props) {
    console.log(props);
    //Prop for api start
    const [categoryupdate, setCategoryupdate] = useState({ id: '', Name: '' });
    const [data, setData] = useEffect();

    useEffect(() => {


        const GetData = async (id) => {


            const result = await axios.get(`/api/Category/GetById/${id}`)

            setData(result.data);

        };


        const id = props.match.params.id
        GetData(id);

    });





    //  const [cate, setCate] = useState();


    async function update(e) {
        e.preventDefault();
        await axios.put(`/api/Category/UpdateCategory/${e.id}`)
            .then(res => {
                setData(res.data)
            })

    }






    //Prop for api end
    return (
        <div className='container'>
            <Form onSubmit={(e) => update(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Hall Name</Form.Label>
                    <Form.Control type="text" value={data.Name} onChange={(e) => setData(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-3' >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UpdateCategory