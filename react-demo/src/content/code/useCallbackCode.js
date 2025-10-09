const useCallbackCode = `
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


//UseCallbackChild.jsx
import { memo, useEffect } from "react";

function UseCallbackChild({ Learning, count }) {
    console.log("Child Component Rendered");

    // Execute Learning function when component mounts or count changes
    useEffect(() => {
        Learning();
    }, [Learning]);

    return (
        <>
            <h4>Child Component</h4>
            <p>Count value received from parent: {count}</p>
        </>
    );
}

// Child will only re-render if props (Learning or count) change
export default memo(UseCallbackChild);
`;
export default useCallbackCode;