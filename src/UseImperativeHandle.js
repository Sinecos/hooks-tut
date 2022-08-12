import React, {useRef} from "react";
import Button from "./Button";

//Invoke a child function from parent

function UseImperativeHandle() {

    const buttonRef = useRef(null);

    return (
        <div>
            <button onClick={() => {buttonRef.current.alterToggle();}}>
                Button From Parent
                </button>
            <Button ref={buttonRef}/>
        </div>
    );
};

export default UseImperativeHandle;