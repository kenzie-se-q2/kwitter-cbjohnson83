import React from 'react'
import {Link} from "react-router-dom"

const Image = (props) => {
    const user = props.match.params.username


    return (
        <>
        <div>
            <h2>{user}</h2>
           
            
        <img src = {(`https://kwitter-api-b.herokuapp.com/users/${user}/picture`)} 
             alt = {user}/> 
             <div> Click here to go back to <Link to ="/">Home Page</Link> </div>
        
        
        </div>
        </>
    )
}

export default Image
