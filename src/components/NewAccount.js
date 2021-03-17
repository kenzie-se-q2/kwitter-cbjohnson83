import React from 'react'
import useNewAccountStore from '../store/useNewAccountStore'
import NewAccountForm from '../views/NewAccountForm'
const NewAccount = () => {
    const isSubmitted = useNewAccountStore(state =>state.isSubmitted)
    return (
        <NewAccountForm/>
       

    )
}

export default NewAccount
