const useRefCode = `
import { useRef, useState } from "react";

function UseRefExample() {
    const [name, updatedName] = useState("black");
    const useRefElement = useRef("");
    // console.log(useRefElement);

    function Reset() {
        updatedName("")
        useRefElement.current.focus()
    }
    function Change() {
        useRefElement.current.style.color = name;
    }
    return (

        <>
            <h3>Learning useRef Hook</h3>
            <label>Enter the color name</label><br />
            <input
                ref={useRefElement} type="text"
                value={name}
                onChange={(e) => updatedName(e.target.value)} />
            <button onClick={Reset}>Reset</button>
            <button onClick={Change}>Change Color</button>
        </>
    );
}

export default UseRefExample;
`;
export default useRefCode;