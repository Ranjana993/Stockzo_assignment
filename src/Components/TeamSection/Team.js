import React from 'react'
import "./Team.css"

const Team = () => {
    return (
        <div className='Team'>
            <h1>Our Team</h1>
            <div className="container">
                <div className="leftContainer">
                    <div className="Container__Image"></div>
                    <p>Lorem ipsum dolor</p>
                    <h3>Full Name</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="centerContainer">
                    <div className="Container__Image"></div>
                    <p>Lorem ipsum dolor</p>
                    <h3>Full Name</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="rightContainer">
                    <div className="Container__Image"></div>
                    <p>Lorem ipsum dolor</p>
                    <h3>Full Name</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    )
}

export default Team