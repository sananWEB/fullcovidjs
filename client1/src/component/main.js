import React,{useContext} from 'react'
import {UserContext} from "../App"
import { useHistory} from "react-router-dom";
import Navbar from "./navbar"
function Main() {

    const {user,setuser}=useContext(UserContext)
            //console.log(user)
     
const history=useHistory();
    if(user.login==false){
                history.push("/")
    }



    if(user.login){
        history.push("/admin/dashboard")
    }

    return (
        <>
        <Navbar/>
        
        </>
    )
}

export default Main
