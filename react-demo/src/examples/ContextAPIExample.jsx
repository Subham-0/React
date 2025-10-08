import { createContext } from "react";

const data = createContext()
function ContextAPIExample() {
    const name = "subham";
    return (
        <>
            <data.Provider value={name}>
                <Child3/>
            </data.Provider>
        </>
    );
}
//if you use in diffent page you should export your component 

export default ContextAPIExample;


function Child3() {
    return (
        <Child2/>
    );
}
function Child2() {
    return (
        <Child1/>
    );
}

function Child1() {
    return (
       <data.Consumer>
        {
            (name)=>{
            return(
                <>my name is {name}</>
            );
        }
        }
       </data.Consumer>
    );
}