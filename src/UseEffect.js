import React, { useEffect, useState, useMemo } from "react";
import axios from "axios"; //HTTP client for the browser and node.js

function UseEffect() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {

            setData(response.data[count].email)
            console.log("API WAS CALLED")
        });
    }, [count]); //Here only when setCount is called then use render.

    return <div>
        Hello World
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={() => {
            let randNum = Math.floor(Math.random() * 100);
            setCount(randNum);
        }}> Click </button>

    </div>
};

export default UseEffect;