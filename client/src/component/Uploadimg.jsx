import React,{useState} from "react";
import axios from "axios";
import Listimages from "./Listimages";

export default function Uploadimg()
{
    const[usernm,setUsernm]=useState('');
    const[profileImg,setProfileImg]=useState('');

    const onFileChange=(e)=> { 
        console.log(e.target.files[0]);
        setProfileImg(e.target.files[0]);
    }
    const valchng=(e)=>{
       setUsernm(e.target.value);
    }
    const onSubmit=(e)=> {
        //e.preventDefault();
        const formData = new FormData()
        formData.append('profileImg', profileImg);
        formData.append('name',usernm);
        axios.post("http://localhost:4000/upload/fileup", formData, {}).then(res => {
            console.log(res.data);
        })
        .catch(
            (err)=>{console.log(err);}
        )
    }

    return(
        <>
           <h3>Single Upload:</h3>
           <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            Enter Name :
                            <input  type='text' name="usernm" onChange={valchng}/>
                        </div>
                        <div className="form-group">
                            Upload Image:
                            <input type="file" onChange={onFileChange} name="profileImg"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
                <br></br>
                <h3>USERS UPLOADED DATA :</h3>
                <Listimages/>
            </div>
        </>
    )
}