const uncontrolledComponemtTheory = `
What's about uncontrolled Component?
In most cases it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref(useRef hook) to get form values from the DOM.

useRef is used to directly access DOM elements — this makes it uncontrolled
`;
export default uncontrolledComponemtTheory