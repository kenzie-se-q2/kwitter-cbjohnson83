import React,{useEffect,useState} from 'react'
import useNewAccountStore from '../store/useNewAccountStore'

import NewAccountForm from '../views/NewAccountForm'
import NewUserregistered from '../views/NewUserregistered'

const NewAccount = () => {
    
    let isSubmitted = useNewAccountStore(state=>state.isSubmitted)
    const errors = useNewAccountStore(state =>state.errors)
    const [formSubmitted, setFormSubmitted] = useState(false)
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitted){
           setFormSubmitted(true)
        }
        return ()=>{isSubmitted = false}
       
        
    }, [errors])
   
    return (
        (!formSubmitted?<NewAccountForm />:<NewUserregistered formSubmitted = {isSubmitted}/>)
    )
}
export default NewAccount
