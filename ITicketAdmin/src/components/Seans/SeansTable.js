import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SeansTable() { let count = 0;

    const [seans, setSeans] = useState([]);

    useEffect(() => {
        loadSeans();

    }, []);

    const loadSeans = async () => {
        const result = await axios.get("/api/Seans/GetAllSeans");
        setSeans(result.data);

    }



    return (
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-between">Event
                        <Link to='/seanscreate' className="btn btn-success btn-fw">Create Hall</Link>
                    </h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Seans Name </th>
                                <th> Seans Hour </th>
                                <th> Settings </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                seans.map((seanss =>
                                    <tr key={seanss.id}>
                                        <td>{++count}</td>
                                        <td className="py-1">
                                            {seanss.name}
                                        </td>
                                        <td> {seanss.hour} </td>
                                       
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

export default SeansTable