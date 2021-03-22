import React from 'react'
import {Link} from "react-router-dom"
import useNewAccountStore from"../store/useNewAccountStore"

const errorStyle = {color: "red"}
const NewAccountForm = () => {
    const user = useNewAccountStore(state =>state.user)
    const handleChange = useNewAccountStore(state =>state.handleChange)
    const handleSubmit = useNewAccountStore(state =>state.handleSubmit)
    const errors = useNewAccountStore(state =>state.errors)
    const clickLogin = useNewAccountStore(state =>state.afterSubmit)
    return (
        <>
        <div className = "newAccountFormContainer">
            <form className ="newAccountFom"  onSubmit ={handleSubmit}>
            <div className = "firstName">
                <label>User Name:</label>
                <input name = "userName" type = "text" value = {user.userName} 
                onChange = {handleChange}/>
                <p style = {errorStyle}>{errors.userName}</p>
            </div>
            <div className = "lastName">
                <label>Display Name:</label>
                <input name = "displayName" type = "text" value ={user.displayName} 
                onChange = {handleChange}/>
                  <p style = {errorStyle}>{errors.displayName}</p>
            </div>
           
            <div className = "password">
                <label>Password:</label>
                <input name = "password" type = "password" value = {user.password} 
                onChange = {handleChange}/>
                  <p style = {errorStyle}>{errors.password}</p>
            </div>

            <div className = "comfirm password">
                <label>Comfirm Password:</label>
                <input name = "comfirmPassword" type = "password" value = {user.comfirmPassword} 
                onChange = {handleChange}/>
                  <p style = {errorStyle}>{errors.comfirmPassword}</p>
                </div>

            <button className= "submit" type ="submit">Create Account</button>
             <span> You have an Account?<Link to="/" ><button onClick={clickLogin}>Login</button></Link></span>
            
            </form>     
        </div>
        </>
    )
}
export default NewAccountForm

