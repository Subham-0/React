const useCallbackTheory = `
useCallback is a React Hook that returns a memoized version of a function — a function that only changes when its dependencies change.
It helps prevent unnecessary re-creations of functions on every render, which can improve performance — especially when passing functions as props to child components that are memoized (using React.memo).

Why do we need?
In React, every time a component re-renders, all functions inside it are re-created (new references).
This can cause child components (that depend on these functions via props) to re-render unnecessarily, even if their data hasn’t changed.
useCallback ensures the same function reference is reused until the dependency changes, thus preventing unnecessary re-renders.

In Example-> 
Each time you click Addition, the parent re-renders.
Without useCallback, a new Learning function reference would be created each time → causing the child to re-render unnecessarily.
With useCallback, the same function reference is reused unless count changes → so the child doesn’t re-render when only add changes.
`
export default useCallbackTheory;