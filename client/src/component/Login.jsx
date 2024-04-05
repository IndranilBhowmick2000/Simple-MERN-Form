// import React from 'react'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import axios from 'axios'


const Login = () => {
  const navigate= useNavigate()
  const [stemail, setEmail] = useState("");
  const [stpwd, setPassword] = useState("");



  const login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/batch/login", { stemail, stpwd })
      .then((res) => {
        if (!res.data.error) {
         

          sessionStorage.setItem("user", JSON.stringify(res.data));

          navigate("/");
        } else if (res.data.error) {
          alert(res.data.error);
        }
      })
      .catch((err) => console.warn(err));
  };

    return (
        <div>
         

     
        <h3>Sign-In</h3>

        
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={stemail}
          />
        
        
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={stpwd}
          />
        

        <button onClick={login} class="btn btn-primary">Login</button>

        <p>
           <span>Conditions of Use </span>
          and <span> Privacy Notice</span>
        </p>
    
</div>
        
    )
}


export default Login