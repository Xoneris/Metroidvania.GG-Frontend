import './dashboard.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { apiUrlContext } from "../../Homepage";

import EditGames from './EditGames';
import Reports from './Reports';
import Logout from './Logout';
import AddGame from './AddGame';

export default function Dashboard () {

    // const [authenticated, setAuthenticated] = useState(false)

    const apiBaseUrl = useContext(apiUrlContext);
    const accessToken = localStorage.getItem("token")

    const authenticate = async () => {
        const res = await fetch(apiBaseUrl + "/api/user/", {
            method: "GET",
            changeOrigin: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
        })
        const data = await res.json()
        if (!res.ok) {
            console.log(data)
            console.log("error")
            return "error"
        } 
        
    }
    
    

    const handleLogout = async () => {
        const res = await fetch(apiBaseUrl + "/api/logout/", {
            method: "POST",
            changeOrigin: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
        })
        const data = await res.json()
        console.log(data)
    }

    const test = authenticate()
    if (test === "error") {
        return "Not allowed!"
    }

    return (
        <section className="dashboard">
            {
                accessToken 
                ? <div className="wrapper">
                    <div className="dashboard-nav">
                        <h3>Dashboard</h3>
                        <ul>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="new">Add a Game</Link></li>
                            <li><Link to="all">Edit Games</Link></li>
                            <li><Link to="submitted">Submitted Games</Link></li>
                            <li><Link to="reports">Reports</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                            <li onClick={handleLogout}>Logout</li>
                        </ul>
                    </div>
                    <div className="dashboard-content">
                        <Routes>
                            <Route path="/" element={<p>Home</p>}></Route>
                            <Route path="new" element={<AddGame/>} ></Route>
                            <Route path="all" element={<EditGames/>} ></Route>
                            <Route path="submitted" element={<p>Submitted</p>}></Route>
                            <Route path="reports" element={<Reports/>} ></Route>
                            <Route path="contact" element={<p>contact</p>} ></Route>
                            {/* <Route path="logout" element={<Logout/>} ></Route> */}
                        </Routes>
                    </div>
                </div>
                : <h2>Bro you not allowed to be here</h2>
            }
            

        </section>
        )
    }
    
// }   