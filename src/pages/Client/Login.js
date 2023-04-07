import { Await, Link, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';
function Login() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = localStorage.getItem("token");

    const user = {
        email: email,
        password: password
    }
    const navigate = useNavigate();



    const submit = (e) => {
        e.preventDefault();
        if(email == "" || password == ""){
            setLogin("Không được để trống")
        }else{
            axios.post('http://localhost:6060/user/login/', user)
            .then(res => {
                if (res.data.status === 1) {
                    localStorage.setItem("token", res.data.token)
                    navigate('/profile')
                }
                setLogin(res.data.message)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <>
            <div className="login">
                <div className="login-left">
                    <h2>Sign In</h2>
                    <form onSubmit={submit}>
                    <p className='err'>{login}</p>
                        <label htmlFor="email">Email</label>
                        
                        <br />
                        <input type="email" id='email' onChange={e => setEmail(e.target.value)} value={email}/>
                        <br />
                        <label htmlFor="password" >Password</label>
                        <br />
                        <input type="password" id='password' onChange={e => setPassword(e.target.value)} value={password}/>
                        <br />
                        <a href="">Forgot your Password?</a>
                        <br />
                        <button>Sign In</button>
                    </form>
                    <p>Or sigin in with</p>
                    <a href="">
                        <img src="images/facebook.png" alt="" />
                    </a>
                    <a href="">
                        <img src="images/gmail.png" alt="" />
                    </a>
                    <br />

                    <span>
                        Don't have an account? <Link to="/regin">Sign up</Link>
                    </span>
                </div>
                <div className="login-right">
                    <img src="images/undraw_file_sync_ot38.svg" alt="" />
                </div>
            </div>
        </>
    );
}

export default Login;
