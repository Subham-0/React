const contextAPICode = `
import { createContext } from "react";

const data = createContext()
function ContextAPIExample() {
    const name = "subham";
    return (
        <>
            <data.Provider value={name}>
                <Child3 />
            </data.Provider>
        </>
    );
}
//if you use in diffent page you should export your data 

export default ContextAPIExample;


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
function Child1() {
    return (
        <data.Consumer>
            {
                (name) => {
                    return (
                        <>my name is {name}</>
                    );
                }
            }
        </data.Consumer>
    );
}
   


//Proplematic sotuation
//For only two component To get data from Consumer and show it 
// we wtite the code that might create confusion

import { createContext } from "react";

const data = createContext()
const scocial = createContext()
function ContextAPIExample() {
    const name = "subham";
    const gender = "male"
    return (
        <>
            <data.Provider value={name}>
                <scocial.Provider value={gender}>
                    <Child3 />
                </scocial.Provider>
            </data.Provider>
        </>
    );
}
//if you use in diffent page you should export your data 

export default ContextAPIExample;


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
function Child1() {
    return (
        <data.Consumer>
            {
                (name) => {
                    return (
                        <scocial.Consumer>
                            {
                                (gender) => {
                                    return (
                                        <>
                                            My name is {name} and my gender is {gender}.
                                        </>
                                    );
                                }
                            }
                        </scocial.Consumer>
                    );
                }
            }
        </data.Consumer>
    );
}`

export default contextAPICode;