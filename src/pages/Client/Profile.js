import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link,Outlet,useNavigate } from 'react-router-dom';


function Profile() {

    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');
    const navigative = useNavigate()

    const logout = () =>{
        localStorage.removeItem("token");
        navigative('/login');
    }

    return (
        <>
            <div className="profile">
                <div className="profile-left">
                    <img src={ data.avatar || "/images/user.png"} alt="" />
                    <h4>{"DASHBOARD NAVIGATION"}</h4>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/profile">
                                    <i className="fa-solid fa-bag-shopping"></i> My Oder
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <i className="fa-solid fa-heart"></i> Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile/info">
                                    <i className="fa-solid fa-user"></i> Profile Info
                                </Link>
                            </li>
                            <li>
                                <a onClick={logout}>
                                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Outlet  />
            </div>
        </>
    );
}

export default Profile;
