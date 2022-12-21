import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <nav className="header__nav">
                    <a href="/" className="header__logo">
                        <h2 className="logo">Todo App</h2>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
