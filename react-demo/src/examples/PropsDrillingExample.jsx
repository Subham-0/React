function PropsDrillingExample() {
    return (
        <>
            <Child3 name1="subham" />
            <Child3 name1="World!" />
        </>
    );
}
export default PropsDrillingExample;

function Child3(props) {
    return (
        <Child2 name2={props.name1} />
    );
}
function Child2(props) {
    return (
        <Child1 name3={props.name2} />
    );
}
function Child1(props) {
    return (
        <p>Hello {props.name3}</p>
    );
}

