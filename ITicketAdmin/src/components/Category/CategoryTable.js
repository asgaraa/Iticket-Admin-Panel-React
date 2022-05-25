import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CategoryTable() {
  let count = 0;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategory();

  }, []);

  const loadCategory = async () => {
      const result = await axios.get("/api/Category/GetAllCategories");
      setCategories(result.data);

  }



  return (
      <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
              <div className="card-body">
                  <h4 className="card-title d-flex justify-content-between">Event
                      <Link to='/categorycreate' className="btn btn-success btn-fw">Create Category</Link>
                  </h4>
                  <table className="table table-striped">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th> Category Name </th>
                              <th> Settings </th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              categories.map((category =>
                                  <tr key={category.id}>
                                      <td>{++count}</td>
                                      <td className="py-1">
                                          {category.name}
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

export default CategoryTable