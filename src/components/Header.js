import React from 'react'
import logo from "./masterbuilderslogo.png";

class Header extends React.Component {
    render(){
        return (
            <header>
                <img src={logo} alt="websitelogo" />
            </header>
        )
    }
}

export default Header
