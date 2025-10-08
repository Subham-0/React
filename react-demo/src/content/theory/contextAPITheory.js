const contextAPITheory=`
Context API helps us avoid unnecessary prop passing.
Instead of sending props to every child, 
we create a context, wrap components with a provider, and directly access the data in the required child component by function.
create context ---> Provide with value ---> Consumer with function

we can write only one function inside a cosumer.

Problematic Soluation: Multiple Contexts
Sometimes we may need to share more than one piece of data, such as name and gender.
If we use multiple contexts, we end up nesting Consumers inside each other, which can make the code messy.
check problematic code bellow

To over come it we use useContext hook instade of Consumer but it's not mandatory,for our convinient we generally use useContext.
`;
export default contextAPITheory;