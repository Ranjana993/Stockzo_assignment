import React from 'react'
import "./UserCard.css"

const UserCard = () => {
    return (
        <div className='Users'>
            <h2>Here's what our users have to say:</h2>
            <div className="UserContainer">
                <div className="leftContainer__User">
                    <p className='User'>01</p>
                    <h2>KATIDHAN</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor perferendis ea incidunt eligendi molestias quod, tenetur nesciunt architecto maiores fuga exercitationem iusto unde voluptatem soluta, consectetur aperiam sunt repellendus.</p>
                    <button>Read More</button>
                </div>
                <div className="CenterContainer__User">
                    <p className='User'>02</p>
                    <h2>Head of Strategic Marketing ,IT Company</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor perferendis ea incidunt eligendi molestias quod, tenetur nesciunt architecto maiores fuga exercitationem iusto unde voluptatem soluta, consectetur aperiam sunt repellendus.</p>
                    <button className='BTN'>Read More</button>
                </div>
                <div className="RightContainer__User">
                    <p className='User'>03</p>
                    <h2>Abhay Gupta</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor perferendis ea incidunt eligendi molestias quod, tenetur nesciunt architecto maiores fuga exercitationem iusto unde voluptatem soluta, consectetur aperiam sunt repellendus.</p>
                    <button className='BTN'>Read More</button>
                </div>

            </div>
        </div>
    )
}

export default UserCard