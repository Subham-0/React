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
