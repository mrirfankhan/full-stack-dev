import { useState } from "react"



export default function LikeButton(){

    let [isLiked,setIsLiked]=useState(false);

    let together=()=>{
        setIsLiked(!isLiked);
    }

    return(
        <div>
            <p onClick={together}>
            {
                isLiked ?  <i className="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>
            }
            
            </p>
        </div>
    )
}