const useRefTheory = `
The useRef hook in React is used to access and interact with DOM elements directly or to store a mutable value that doesn’t cause re-rendering when updated.

You can directly control or read a DOM element (for example, focus an input or change its color).
Updating a ref value won’t trigger a re-render, unlike useState.
Even if a component re-renders, the ref value stays the same.

How It Works:
useRef() returns an object with a property called current.
Whatever you assign to ref={...} will be stored in current.
You can then use it anywhere inside the component to read or change that element.
`;
export default useRefTheory;