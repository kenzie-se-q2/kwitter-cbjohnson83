import React from 'react'
import useNewAccountStore from '../store/useNewAccountStore'
import{Link} from "react-router-dom"


const NewUserregistered = (props) => {
    const userData = useNewAccountStore(state=>state.user)
    // const isSubmitted = useNewAccountStore(state=>state.isSubmitted)
  
   const handleOnClick = useNewAccountStore(state=>state.afterSubmit)


    return (
        <div>
            {userData.userName}  is successfully registered
           
            <div>Click here to<Link to = "/"><button onClick={handleOnClick}>Login</button></Link></div> 
            
        </div>
    )
}

export default NewUserregistered
