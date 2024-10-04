import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { apiUrlContext } from "../../Homepage";

export default function Logout() {

    const apiBaseUrl = useContext(apiUrlContext);
           
    const logout = async () => {
        const accessToken = localStorage.getItem('token')
        const res = await fetch(apiBaseUrl + "/api/logout/", {
            method: "POST",
            changeOrigin: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
        const data = await res.json()
    
        if (data.message) {
            localStorage.removeItem("token")
            // useNavigate("/")
        } else {
            console.log("Something went wrong lol")
        }
    }
            
        
    // The Above is not working currently

        
    return (
        <h1>This is logout smile </h1>
    )
}