import React, { useState, useEffect, useMemo } from "react";
import axios from "axios"; //HTTP client for the browser and node.js

//Only recompute when actual data or dependency change using UseMemo

function UseMemo() {

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";

        for (let i = 0; i < comments.length; i++) {
            const currentName = comments[i].name;

            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        console.log("THIS WAAS COMPUTED");

        return longestName;
    };

    //CAll findLongestName(data) only when data changes
    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            <div> {getLongestName} </div>
            <button onClick={() => {
                setToggle(!toggle);
            }}> {""} Toggle</button>
            {toggle && <h1> toggle </h1>}

        </div>
    );

}

export default UseMemo