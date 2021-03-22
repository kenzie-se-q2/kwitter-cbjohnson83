import React,{useState,useEffect} from 'react'
const tstyle ={
    table:  {textAlign: "center",
    fontFamily: "Trebuchet MS, Arial, Helvetica, sansSerif",
    borderCollapse: "collapse",
    // border: "3px solid #ddd",
    width: "85%"},
    tr:{color:"red"},
    trdata:{color:"black"},
    td:{  border: "1px solid #ddd", padding: "8px"}
}

function AllUsers() {
    const [users,setUsers]= useState([])
    
    useEffect(()=>{
        
        fetch("https://kwitter-api-b.herokuapp.com/users")
        .then(resp =>resp.json())
        .then(resp =>setUsers(resp.users))
    },[])


    return (
        <div>
            <h1>LIST OF USERS</h1>
            <table style = {tstyle.table}>
                <tbody>
            <tr style={tstyle.tr}>
                <td style= {tstyle.td}>User Name</td>
                <td style= {tstyle.td}>Display Name</td>
                <td style= {tstyle.td}>About</td></tr>
                {users.map(user =>{
                    return(
                        
                    <tr style={tstyle.trdata}>
                        <td style= {tstyle.td}> {user.username}</td>
                        <td style= {tstyle.td}> {user.displayName}</td>
                        <td style= {tstyle.td}> {user.about}</td>   
                        <td > <button>show image</button> </td>   
                    </tr>)
                })}
            </tbody>
            </table>
            
            
        </div>
    )
}

export default AllUsers
