import { useState } from "react";


export default function Form(){
    let [FromData,setFormData]=useState({
        fullname:"",
        username:""
    });

    const extractValue = (e) => {
        const { name, value } = e.target;
    
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    console.log(FromData)
 

    return(
        <form >
        <input type="text" name="fullname" value={FromData.fullname} onChange={extractValue}/>
        <input type="text" name="username" value={FromData.username} onChange={extractValue}/>
        <button>Submint</button>
        </form>
    );
}