import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchUser = () => {
    const [data, setData] = useState(
        {
            "tname": ""
        }
    )
    const [result, changeResult] = useState([])
    const deleteCourse=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("Succesfully deleted")
                }
                else{
                    alert("Error in deletion")
                }
            }
        ).catch()
    }

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                console.log(response.data)
                changeResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log("error")
            }
        ).finally()
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Advisor name</label>
                        <input type="text" className="form-control" name='tname' value={data.tname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Search</button>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Advisor Name</th>
                                            <th scope="col">Advisor Id</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {result.map(
                                            (value,index)=>{
                                                return  <tr>
                                                <th scope="row">{value.tname}</th>
                                                <td>{value.tid}</td>
                                                <td>{value.tcourse}</td>
                                                <td>{value.salary}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
                                                </td>
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
    )
}

export default SearchUser