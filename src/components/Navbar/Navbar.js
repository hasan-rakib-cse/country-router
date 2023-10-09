import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navStyle = {
        display: 'flex', justifyContent: 'center', gap: '20px'
    }
    return(
        <nav style={navStyle}>
            <NavLink to='/'>Home</NavLink>
            {/* <NavLink to='/countries'>Countries</NavLink> */}
        </nav>
    )
}

export default Navbar