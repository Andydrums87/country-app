import React from "react";
import Logo from "/src/images/Logo.svg"
import "./header.css"

function Header () {
return (
<div className="header__container">
    <img className="hero__logo" src={Logo} alt="logo" />
</div>
)
}

export default Header;