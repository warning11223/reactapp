import React from "react";

function News () {
    let numbers = [1, 2, 3];

    const addNumber = () => {
        numbers.push(4);
    }

    return (
        <div className="News">
            <ul>
                {numbers.map((num) => (
                    <li>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>New number</button>
        </div>
    )
}

export default News