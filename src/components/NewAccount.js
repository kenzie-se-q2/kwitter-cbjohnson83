import React from 'react'
import { Route,Switch} from "react-router-dom"
import NewAccountForm from '../views/NewAccountForm'

const NewAccount = () => {
    return (
       
        <Switch>
            <Route exact path = "/NewAccount" component = {NewAccountForm}/>
        </Switch>
        
       
        
    )
}

export default NewAccount
