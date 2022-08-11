import Reac, { useRef } from "react";

const UseRef = () => {

    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Theal</h1>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onClick}> Change Name </button>
        </div>
    )
};

export default UseRef;