//UseCallbackExample.jsx
import { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(0);

    // Memoized function - only recreated when 'count' changes
    const Learning = useCallback(() => {
        // console.log("Learning function executed with count:", count);
    }, [count]);

    return (
        <>
            {/* Passing memoized function and count to child */}
            <UseCallbackChild Learning={Learning} count={count} />

            <h5>Addition button clicked {add} times</h5>
            <button onClick={() => setAdd(add + 1)}>Addition</button>

            <h5>Count button clicked {count} times</h5>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </>
    );
}
export default UseCallbackExample;
