import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import { apiUrlContext } from "../../Homepage";

export default function Login () {

    const apiBaseUrl = useContext(apiUrlContext);

    const [formData, setFormData] = useState({
        username : "",
        password : "",
    })
    const [errors, setErrors] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault()

        const res = await fetch(apiBaseUrl + "/api/login/", {
            method: "POST",
            changeOrigin: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
        const data = await res.json()

        if (data.error || !res.ok) {
            setErrors(data.error)
            console.log(errors)
        } else {
            localStorage.setItem('token', data.token)
            navigate("/Dashboard")
        }

    }

    return (
            <section className="loginpage">
                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <label>Username:</label>
                        <input type="text" name="username" placeholder="Username"
                            value={formData.username} 
                            onChange={(e) => setFormData({...formData, username: e.target.value})} />
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Password" 
                            value={formData.password} 
                            onChange={(e) => setFormData({...formData, password: e.target.value})} />
                        <br/>
                        <button>Log In</button>
                        {errors}
                    </form>
                </div>
            </section>
    )
}