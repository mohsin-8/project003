import React, { useState } from 'react';

const Room = () => {
    let [isLit, setLit] = useState(false);
    // console.log(setLit);
    let [age, setAge] = useState(25);
    return (
        <div>
            <h1>This Room is {isLit? "Lit": "dark"}</h1>
            <br />
            Age : {age}
            <button onClick={() => setLit(!isLit)}>Toggle Light</button>
            <button onClick={() => { console.log("Increase Button"); setAge(++age); }}>increaseAge</button>
        </div>
    )
}

export default Room