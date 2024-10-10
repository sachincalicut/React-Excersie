import React, { useRef } from "react";
import Dashboard from "./Dashboard";
import './LoginWithLocalStorage.css';
function LoginWithLocalStorage() {
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit = () => {
        if (email.current.value=="sachisavera@gmail.com"&&password.current.value=="1234") {
            localStorage.setItem("emailData", "sachisavera@gmail.com")
            localStorage.setItem("passwordData", "1234")
        }
    }

    return (
        <main className="form-log w-100 m-auto">
           

            {
                getEmail && getPassword ?
                    <Dashboard /> :
                    <form onSubmit={handleSubmit}>
                             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input type="email" className="form-control"  ref={email} required />
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control"  ref={password} required />
                            <label>Password</label>
                        </div>

                        <button className="btn btn-md btn-primary btn-width">Login</button>
                    </form>
            }

        </main>
    );
}
export default LoginWithLocalStorage;