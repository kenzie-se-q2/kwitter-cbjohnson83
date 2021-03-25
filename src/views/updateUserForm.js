import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { useStore } from '../store/store'


const UserUpdate = (props) => {
    const currentUser = useStore(state=>state.user.username)
    const [updates, setUpdates] = useState({
        password:"",
        about:"good",
        displayName:"",
        
    })
    const [submitted, setSubmitted] = useState(false)

   
        // handle onchange 
        const handleOnChange = (event)=>{
            const {name, value} = event.target
        setUpdates({
            ...updates, 
           [ name]:value
        })
        }
        const handleOnSubmit = (event)=>{
            event.preventDefault()
            setSubmitted(true)
            
            
        } 
        //console.log(currentUser)
        // fetch request updates
        const fetchUserUpdate =()=>{
            return fetch('https://kwitter-api-b.herokuapp.com/users/amosi',{
              method: "PATCH",
              body:    JSON.stringify({
                   password: "amosi2",
                  about: "gone to school",
                displayName: "amosi4"
                }),
                headers: { "Content-Type": "application/json", "accept": "application/json" }

          
            }).then(res =>res.json()).then(json=>console.log(json))
          
    }
    // use effect
    // useEffect(()=>{
    //     if(submitted=== true){
            
           
    //     }
    // }, [currentUser])
    //   const data =fetch("https://kwitter-api-b.herokuapp.com/users/")
    // .then(res=>res.json())
    // const inf = data.then(infor => console.log(infor.users.filter(info =>{return info.username ==="amosi"})))
    
    

        if(submitted===false){

    return (
        <>
        <div>
            <div><h2>Update User {currentUser}</h2></div>
    
        <form className = "updateForm" onSubmit={handleOnSubmit}>
            <div>
            <label>password</label>
            <input type="password" name= "password"  id ="password" 
            value = {updates.password} onChange = {handleOnChange}></input>
            
           
            </div>

            <div>
            <label> Display Name </label>  
            <input type="text" name= "displayName" id ="displayName" 
            value = {updates.displayName} onChange = {handleOnChange}></input>
            </div>
            <div>
                <label>about</label>
                <input type = "text" name ="about" id = "about"
                value = {updates.about} onChange = {handleOnChange}/>
            </div>

            <div><Link to = "/"><button>Cancel</button></Link>
            <button type = "submit">update User</button></div>
        </form>
            
        </div>
        </>
       
    )
        }
        else{
            fetchUserUpdate()
            return (<div><Link to ="/">back home</Link></div>)

        }
            
        
}

export default UserUpdate
