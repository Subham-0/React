import { createContext, useContext } from "react";

const nameData = createContext()
const genderData = createContext()
function UseContextExample() {
    const name = "subham";
    const gender = "male";
    return (
        <>
            <nameData.Provider value={name}>
                <genderData.Provider value={gender}>
                    <Child3 />
                </genderData.Provider>
            </nameData.Provider>
        </>
    );
}
export default UseContextExample
//if you use in diffent page you should export your contexts also


function Child3() {
    return (
        <Child2 />
    );
}
function Child2() {
    return (
        <Child1 />
    );
}

//to access the data through useContext that created context name
function Child1() {
    const nameCopy = useContext(nameData)
    const genderCopy = useContext(genderData)
    return (
        <>My name is {nameCopy} and my gender is {genderCopy}</>
    );
}

