const useEffectTheory = `
The useEffect Hook lets us perform side effects in functional components.

Side effects are tasks that run outside React's normal rendering process, such as:
• Fetching data from an API
• Using setTimeout or setInterval
• Manually updating the DOM
• Logging or subscribing to external services

Basic Behavior:
• useEffect runs after every render by default.
• We can control when it runs using the dependency array.

Summary:
- useEffect runs once after mount and again whenever its dependencies change.
- Helps separate side-effect logic from main render logic.
`;

export default useEffectTheory;
