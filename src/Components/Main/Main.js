import React from 'react'
import "./Main.css"

const Main = () => {
    return (
        <div className='Main__div'>
        <div className="info">
            <h2>Market Forecast </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt tenetur adipisci sit vitae ab blanditiis cumque voluptate quidem laborum, placeat maxime voluptatibus quisquam debitis inventore magnam est corporis autem?</p>
            <button className='btn'>Get started</button>
        </div>
        <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_lvwsz1iqTP8sIbUBIfuUUaBSSZWOQM_lA&usqp=CAU" alt="" />
        </div>

        </div>
    )
}

export default Main