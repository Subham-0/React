import React, { useEffect, useState } from "react";

function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect for count with [count] — runs every time count updates");
    }, [count]);

    useEffect(() => {
        console.log("useEffect with [] — runs only once (on mount)");
    }, []);

    useEffect(() => {
        console.log("useEffect  — runs every time if any component render");
    });

    function updateCounter() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>
                clicked me {count} times
            </h1>
            <button onClick={updateCounter}>Increase Counter</button><br />
            <mark><i>check in console</i></mark>
        </>
    );
}

export default UseEffectExample;
