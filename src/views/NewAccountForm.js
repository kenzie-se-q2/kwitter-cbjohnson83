import React from 'react'

const NewAccountForm = () => {
    return (
        <>
        <div className = "newAccountFormContainer">
            <div className = "firstName">
                <label>First Name:</label>
                <input type = "text"/>
            </div>
            <div className = "lastName">
                <label>Last Name:</label>
                <input type = "text"/>
            </div>
            <div className = "email">
                <label>Email:</label>
                <input type = "email"/>
            </div>
            <div className = "userName">
                <label>User Name:</label>
                <input type = "text"/>
            </div>
            <div className = "password">
                <label>password:</label>
                <input type = "password"/>
                <div className = "confirmPassword">
                <label>Confirm Password:</label>
                <input type = "password"/>
            </div>
            </div>

            
        </div>
        </>
    )
}

export default NewAccountForm

