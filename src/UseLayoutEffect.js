import React, {useLayoutEffect, useEffect, useRef} from "react";

function UseLayoutEffect() {
    
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);
    
    useEffect( () => {
        inputRef.current.value = "HELLO";
    }, []);

    return <div>
        <input ref={inputRef} value="Theal"></input>
    </div>
};

export default UseLayoutEffect;