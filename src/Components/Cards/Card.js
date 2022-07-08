import React from 'react'
import "./Card.css"
const Card = () => {
    return (
        <div className='main__container'>
            <div className="Info__left">
                <h4>Services</h4>
                <h2>Check Out Our
                    Specialized
                    Services</h2>
            </div>
            <div className="info__center">
                <img src="https://img.freepik.com/free-vector/animation-motion-concept-illustration_114360-2549.jpg" alt="" />
                <h5>Discount Broking</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.</p>
                <button>Learn More</button>
            </div>
            <div className="info__right">
                <img src="https://img.freepik.com/free-vector/animation-motion-concept-illustration_114360-2549.jpg" alt="" />
                <h5>Portfolio Match</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Card