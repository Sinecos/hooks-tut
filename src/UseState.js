import React, { useState } from "react";


const Usestate = () => {

    const [inputValue, setInputValue] = useState("Zufa");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div>
            <input placeholder="enter something..." onChange={onChange} />
            {inputValue}
        </div>

    );

    //// Using useState by incrementing number
    // const [counter, setCounter] = useState(0);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    // return(
    //     <div>
    //         {counter} 
    //         <button onClick={increment}>Increment</button>
    //     </div>
    // );
};

export default Usestate;