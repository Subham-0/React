const useMemoTheory = `
useMemo is a React Hook used to remember (memoize) the result of a calculation so that it doesn’t run again unless its dependencies change.

When your component re-renders, all the functions and calculations inside it are called again.
If a calculation is heavy or time-taking, this slows down your app.
useMemo helps by caching the result — so React can reuse the old value instead of recalculating.
`
export default useMemoTheory;