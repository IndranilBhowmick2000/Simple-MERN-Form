import React from 'react';
import axios from 'axios';

import {useState,useEffect} from 'react';

export default function Listimages()
{
   const [info,setInfo]=useState([]);

   useEffect(()=>{
      axios.get('http://localhost:4000/upload/all')
      .then(
        (res)=>{
            setInfo(res.data.users)
        }
      )
      .catch(
        (err)=>{
            console.log(err)
        }
      )
   },[])

   return(
    <>
          {
            info.map((val)=>{
               return (
                <>
                <div style={{display:'flex'}}>
                <div style={{color:'brown',backgroundColor:'lightpink',width:'40%',border:'2px solid green'}}>
                  <ul>
                     <li><b>USERNAME : {val.name}</b></li>
                     {
                        val.profileImg.split(",").map((data)=>{
                          if(data!='')
                          return <li><img src={data} width='30%' height='30%' alt='sorry'/></li>
                        })
                     }
                  </ul>
                </div>
                </div>
                </>
               )
            })
          }
    </>
   )
}