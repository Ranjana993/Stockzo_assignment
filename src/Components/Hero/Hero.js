import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero__div'>
            <div className="image__section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpxiRH3pENsrYMGEvn2IaIi3FEOEYZHNNgs7kRDubg1Orqs8G7DvXa_0_b8D2chRs67o&usqp=CAU" alt="" />
            </div>
            <div className="Info__Section">
                <h2>Market Forecast </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt tenetur adipisci sit vitae ab blanditiis cumque voluptate quidem laborum, placeat maxime voluptatibus quisquam debitis inventore magnam est corporis autem?</p>
                <button className='btn'>Get started</button>
            </div>
        </div>
    )
}

export default Hero