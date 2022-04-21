import React from 'react'
import { useState } from 'react'
import './colorbox.scss'

function getRandomColor(){
    const listColor = ['deeppink','blue','green','black']
    const randomIndex = Math.trunc(Math.random() * 4)
    return listColor[randomIndex]
}
const Colorbox = () => {
    const initColor = localStorage.getItem('color_box') || 'deeppink'
    const [color, setColor] = useState(initColor);
    
    function handleClick(){
        const boxColor = getRandomColor()
        setColor(boxColor)
        localStorage.setItem('color_box',boxColor)
        
    }
    return (
        <div className='color-box'
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            Colorbox
        </div>
    )
}

export default Colorbox