const useContextTheory =
`useContext() is a React Hook that makes it easy to access data from a Context directly inside a functional component, removing the need for nested Consumers and making code cleaner and more readable

important:
useContext() must be used inside a functional component.
The component using useContext() will re-render whenever the context value changes.
If the component tree is large and context changes frequently, it might cause unnecessary re-renders, so it should be used wisely.
`
export default useContextTheory;