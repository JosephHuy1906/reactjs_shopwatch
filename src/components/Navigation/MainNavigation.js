import '../GlobalStyle/Global.css'
import { Link } from "react-router-dom";

function MainNavigation() {
   
    return ( 
        <header className="destop">
        <div className="header-left">
            <h2>
                <Link to="/">Huy Watch</Link>
            </h2>
        </div>
        <nav className="header-main">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <nav className="header-right">
            <ul>
                <li>
                    <Link to="/">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>1</span>
                    </Link>
                </li>
                <li className="user">
                    <Link to="/profile">
                        <i className="fa-solid fa-user"></i>
                    </Link>
                    <div className="login-regin">
                        <p>User account</p>
                        <Link to="/login">Login / </Link>
                        <Link to="/regin">Regin</Link>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
     );
}

export default MainNavigation;