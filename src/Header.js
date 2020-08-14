import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="nav-bar">
                    <li>
                        <Link className="nav-item" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/boxLeft">
                            Box Left
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/boxCenter">
                            Box Center
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/boxRight">
                            Box Right
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
