import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddAdvisor = () => {
  const [data,setData]=useState(
    {
        
        "tname":"",
        "tid":"",
        "tcourse":"",
        "salary":""
    }
  )
  const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(data)
            if(response.data.status=="success"){
                alert("Successfully added")
            }
            else{
                alert("Error")
            }
        }
    ).catch().finally()
  }
  return (
    <div>
         <NavBar/>
        <div className="container">
           
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Advisor Name</label>
                            <input type="text" className="form-control" name='tname' value={data.tname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Advisor Id</label>
                            <input type="text" className="form-control" name='tid' value={data.tid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <input type="text" className="form-control" name='tcourse' value={data.tcourse} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Salary</label>
                            <input type="text" className="form-control" name='salary' value={data.salary} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddAdvisor