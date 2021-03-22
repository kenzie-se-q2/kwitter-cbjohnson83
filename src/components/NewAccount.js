import React,{useEffect,useState} from 'react'
import useNewAccountStore from '../store/useNewAccountStore'
import { NewUserRequest } from "../fetchRequests"
import NewAccountForm from '../views/NewAccountForm'
import NewUserregistered from '../views/NewUserregistered'

const NewAccount = () => {
    const user = useNewAccountStore(state=>state.user)
    let isSubmitted = useNewAccountStore(state=>state.isSubmitted)
    const errors = useNewAccountStore(state =>state.errors)
    const [formSubmitted, setFormSubmitted] = useState(false)
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitted){
           NewUserRequest(user.userName, user.displayName, user.password)
           setFormSubmitted(true)
        }
        return ()=>{
            if(Object.keys(errors).length === 0 && isSubmitted){
                setFormSubmitted(false)
             }

        }
       
       
        
    }, [errors])
   
    return (
        (!formSubmitted?<NewAccountForm />:
        <NewUserregistered formSubmitted = {isSubmitted}/>)
    )
}
export default NewAccount
