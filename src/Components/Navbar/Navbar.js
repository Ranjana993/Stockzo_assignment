import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='heading'>
                <h1>Stockzo</h1>
            </div>
            <div className="nav__lists">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Login Up</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li><TwitterIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><FacebookIcon/></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar