import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div>
            <div className="container__Loginform">
                <div className="loginForm">
                    <h1>Hello !<br /> Good Morning </h1>
                    <p className='login_acc'>Login Your account</p>
                    <form action="">
                        <label htmlFor="">UserName</label>
                        <input type="text" /><br />
                        <label htmlFor="">Password</label>
                        <input type="password" />
                        <p className='pass'>Forget Password</p>
                        <button>Login</button>
                        <p className='createPass'>Create Account</p>
                    </form>
                </div>
                <div className="loginImage">
                    <img src="https://o.remove.bg/downloads/98cafb56-6f6f-483b-80db-bf1377889038/9307.png_300-removebg-preview.png" alt="" />

                </div>
            </div>

        </div>
    )
}

export default Login