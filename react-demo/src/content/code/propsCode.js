const propsCode = `
import React from "react";

function Test(props) {
  return <>
    Hello {props.name}
  </>;
}

function PropsExample() {
  return <>
    <Test name="Subham" /><br />
    <Test name="World!" />

  </>;
}

export default PropsExample;
`;

export default propsCode;
