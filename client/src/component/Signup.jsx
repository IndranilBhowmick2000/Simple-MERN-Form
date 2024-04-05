import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [stnm,setName]= useState()
    const [stemail,setEmail]= useState()
    const [stpwd,setPassword]= useState()
    const [stdept,setDept]= useState()
    const [stmarks,setMarks]= useState()
    const [stgrade,setGrade]= useState()
    const navigate= useNavigate()
    const handelSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/batch/register',{stnm,stemail,stpwd,stdept,stmarks,stgrade})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <div>
            <h2>Register</h2>
            <form action="" onSubmit={handelSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" 
                    placeholder='enter name' name='email' 
                    className='form-control rounded-0'
                    onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" 
                    placeholder='enter email' name='email' 
                    className='form-control rounded-0'
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='enter password' name='email' 
                    className='form-control rounded-0'
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="dept">
                        <strong>Dept</strong>
                    </label>
                    <input type="text" 
                    placeholder='enter dept' name='dept' 
                    className='form-control rounded-0'
                    onChange={(e)=>setDept(e.target.value)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="Marks">
                        <strong>Marks</strong>
                    </label>
                    <input type="text" 
                    placeholder='enter Marks' name='Marks' 
                    className='form-control rounded-0'
                    onChange={(e)=>setMarks(e.target.value)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="Grade">
                        <strong>Grade</strong>
                    </label>
                    <input type="text" 
                    placeholder='enter Grade' name='Grade' 
                    className='form-control rounded-0'
                    onChange={(e)=>setGrade(e.target.value)}/>
                </div>

                <button type="submit" class="btn btn-primary">Register</button>
                </form>
                <p>Already have an account</p>
                <button onClick={()=>navigate("/login")} class="btn btn-primary">Login</button>
            
        </div>
    </div>
  )
}

export default Signup