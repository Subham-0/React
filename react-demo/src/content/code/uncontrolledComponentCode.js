const uncontrolledComponentCode = `
import { useRef, useState } from "react";

const uncontrolledComponemtExample = () => {

    const [name, setName] = useState("")
    const [pswd, setPswd] = useState("")

    const fnameRefObject = useRef();
    const pswdRefObject = useRef();
    const handelSubmit = (e) => {
        e.preventDefault();
        setName((fnameRefObject.current.value).toUpperCase())
        setPswd(pswdRefObject.current.value)
    }

    return (
        <>
            <p><b style={{ color: 'green' }}>controlled the First name as only uppercase</b></p>
            <form className='uncontrolledComponemt' onSubmit={handelSubmit}>
                <label>FirstName : </label><br />
                <input type="text" ref={fnameRefObject} /><br />
                <label>Password : </label><br />
                <input type="text" ref={pswdRefObject} /><br />
                <button>Submit</button>

                {name && <div>Your name is {name}</div>}
                {pswd && <div>Your password is {pswd}</div>}

            </form>
        </>
    )
}

export default uncontrolledComponemtExample
`;

export default uncontrolledComponentCode