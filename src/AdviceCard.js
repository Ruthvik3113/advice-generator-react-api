import dividerDesktop from '../src/images/pattern-divider-desktop.svg'
import dividerMobile from '../src/images/pattern-divider-mobile.svg'
import dice from "../src/images/icon-dice.svg"
import { useState } from 'react'
import Axios from "axios"

export const AdviceCard = () => {

    const [advice, setAdvice] = useState('Click the dice to generate Advice') 
    const [adviceNum, setAdviceNum] = useState('')

    const handleClick = async () => {
        await Axios.get("https://api.adviceslip.com/advice")
        .then((res) => {
            setAdvice(res.data.slip.advice)
            setAdviceNum(res.data.slip.id)
        })   
    }


    return (
        <div className='card'>
            <p>Advice #{adviceNum}</p>
            <h2>"{advice}"</h2> 
            <img src = {dividerDesktop} className="divider-desktop" alt = "divider"/>
            <img src={dividerMobile} className="divider-mobile" alt="divider" /> 
            <div onClick = {handleClick} className="dice" >
                <img src = {dice} alt = "dice"/>
            </div>
        </div>
    );
}