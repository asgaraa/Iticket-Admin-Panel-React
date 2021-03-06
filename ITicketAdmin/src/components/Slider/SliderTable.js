import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SliderTable() { let count = 0;

    const [sliders, setSlider] = useState([]);
    

    useEffect(() => {
        loadSlider();

    }, []);

    const loadSlider = async () => {
        let token = JSON.parse(localStorage.getItem('token'))
        const result = await axios.get("https://localhost:44351/api/Slider/GetAll", { headers: { "Authorization": `Bearer ${token}` } });
        setSlider(result.data);

    }
    const deleteSlider= async id => {
        debugger
        await axios.delete(`/api/Slider/Delete/${id}`);
        loadSlider();
    }

    const SliderUpdate= async id => {
        console.log(id);
    }
   
    
    return (

        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-between">Sliders
                        <Link to='/slidercreate' className="btn btn-success btn-fw">Create Slider</Link>
                    </h4>
                    <table className="table table-striped">
                        <thead  >
                            <tr>
                                <th>#</th>
                                <th>Slider Image </th>
                             
                                <th> Settings </th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                sliders.map((slider=>                                    
                                    <tr key={slider.id}>
                                        <td>{++count}</td>
                                        <td className="py-1 ">
                                            <img style={{width:'100px', height:'70px',borderRadius:'unset'}} src={`data:image/jpeg;base64,${slider.image}`} alt="" />
                                          
                                        </td>
                                        
                                        <td><Link to={`/sliderupdate/${slider.id}`}  ><button className='btn btn-outline-warning' onClick={()=> SliderUpdate(slider.id)} ><i className="far fa-edit"></i></button></Link>  <button className='btn btn-outline-danger' onClick={() => deleteSlider(slider.id)}> <i className="fas fa-trash-alt"></i></button> </td>
                                        
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