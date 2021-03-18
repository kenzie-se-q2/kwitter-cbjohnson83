import React,{useEffect} from 'react'
import useNewAccountStore from '../store/useNewAccountStore'
import{Link} from "react-router-dom"


const NewUserregistered = (props) => {
    const user = useNewAccountStore(state=>state.user)
    return (
        <div>
            {user.lastName} {user.firstName} is successfully registered
            {props.isSubmitted}
            <div>Click here to<Link to = "/">Login</Link></div> 
            
        </div>
    )
}

export default NewUserregistered
