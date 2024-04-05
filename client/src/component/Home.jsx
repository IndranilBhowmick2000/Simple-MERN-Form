import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate= useNavigate()
    const logout=()=>{
        sessionStorage.removeItem("user")
        navigate('/login')
    }
  return (
    <div>
        <h1>Home</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home