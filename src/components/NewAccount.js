import React,{useEffect} from 'react'
import useNewAccountStore from '../store/useNewAccountStore'
import Home from '../views/Home'
import NewAccountForm from '../views/NewAccountForm'

const NewAccount = () => {
    const isSubmitted = useNewAccountStore(state =>state.issubmitted)
    useEffect(()=>{},[])

    return (
        (!isSubmitted?<NewAccountForm/>:<Home/>)
    )
}

export default NewAccount
