const prosDrillingTheory =`
Props drilling happens in React when you need to pass data from a parent component to a deeply nested child component, but instead of passing it directly, you have to pass it through multiple intermediate components — even if those middle components don’t need the data.

Problem:
Middle components get cluttered with props they don’t need.
It’s hard to update when data flow changes.
Code becomes less readable and reusable.

Bellow Code:
The main component (PropsDrillingExample) wants to send "subham" and "World!" to Child1.
But instead of sending it directly, it passes the data through Child3 and Child2, even though they don’t use it.
This is unnecessary prop passing, and it makes the code hard to maintain when your component tree grows large.

Solution : We have use Context API (Next Chapter)
`;
export default prosDrillingTheory;