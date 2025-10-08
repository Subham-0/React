import { useMemo, useState } from "react";

function UseMemoExample() {
    const [num1, setAdd] = useState(0);
    const [num2, setSub] = useState(100);
    const multiplication = useMemo(function multiply() {
        console.log(num1);
        return num1 * 10;
    }, [num1])
    return (
        <>
            Multiplication value change only with Addition but without rerender with substraction<br />
            multiplication:{multiplication}<br />
            <button onClick={() => setAdd(num1 + 1)}>Addition</button>
            <span>{num1}</span><br />
            <button onClick={() => setSub(num2 - 1)}>Substration</button>
            <span>{num2}</span>
        </>
    );
}
export default UseMemoExample;