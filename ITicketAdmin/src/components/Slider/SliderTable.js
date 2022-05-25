import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SliderTable() { let count = 0;

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        loadSlider();

    }, []);

    const loadSlider = async () => {
        const result = await axios.get("/api/Slider/GetAll");
        setSlider(result.data);

    }
    let data = "data:image/jpeg;base64,";
    let fullImg = data + slider.image;

    return (

        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-between">Event
                        <Link to='/eventcreate' className="btn btn-success btn-fw">Create Event</Link>
                    </h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Slider Image </th>
                             
                                <th> Settings </th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                slider.map((sliders =>                                    
                                    <tr key={sliders.id}>
                                        <td>{++count}</td>
                                        <td className="py-1">
                                            <img src={fullImg} alt="" />
                                          
                                        </td>
                                        
                                        <td> <i className="fas fa-trash-alt"></i> </td>
                                        
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default SliderTable