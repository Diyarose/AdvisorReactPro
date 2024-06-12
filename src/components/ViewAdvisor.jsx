import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAdvisor = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view",data).then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Advisor Name</th>
                                                <th scope="col">Advisor Id</th>
                                                <th scope="col">Cousre</th>
                                                <th scope="col">Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {data.map(
                                            (value,index)=>{
                                                return  <tr>
                                                <th scope="row">{value.tname}</th>
                                                <td>{value.tid}</td>
                                                <td>{value.tcourse}</td>
                                                <td>{value.salary}</td>
                                            </tr>
                                            }
                                           )}
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAdvisor