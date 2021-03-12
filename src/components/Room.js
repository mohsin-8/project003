import React, { useState } from 'react';
import './Room.css';

const Room = () => {

    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(19);
    let [temp, setTemp] = useState(72);
    return(
        <div className={`room ${isLit? "Lit" : "Dark"}`}>
            <h1>This Room is {isLit? "Lit" : "Dark"}</h1>
            <button onClick={() => {setLit(isLit= true)}}>Turn on</button>
            <button onClick={() => {setLit(isLit= false)}}>Turn Off</button>

            <h2>Age is: {age}</h2>
            <button onClick={() => {setAge(age= ++age)}}>Increase</button>
            <button onClick={() => (setAge(age= --age))}>Decrease</button>

            <h2>Temperature is {temp}</h2>
            <button onClick={() => {setTemp(temp= ++temp)}}>Temp Increase</button>
            <button onClick={() => {setTemp(temp= --temp)}}>Temp Decrease</button>
        </div>
    )
}

export default Room