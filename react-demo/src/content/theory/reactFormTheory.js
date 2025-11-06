const reactFormTheory = 
`Before understanding the concept of React Forms, you should first know the difference between an HTML form and a React form.

In React, we can't directly change the value of a form field like we do in plain HTML forms.
In React, the value of a form field acts as a prop.

So, in the console, you might see a warning like:
"You provided a value prop to a form field without an onChange handler. This will render a read-only field. If the field should be mutable, use defaultValue. Otherwise, set either onChange or readOnly."

This means React suggests that to change the value, you should use defaultValue.

But then the question comes — how do we manage (use, display, or handle) that value?
We can use the useState hook. By using it, the React form can control that component, and such components are called Controlled Components.

Let’s understand this with an example:
(Example of React form, controlled component, and how to control multiple controlled components.)

Suppose I have an input component as a password field with a value called \`pswd\` and an onChange handler function named \`handlePassword\`.
To control that input, I use useState for that value as well.

Now, suppose I have another field called 'address' and it has multiple input fields. To handle each input separately, I would have to write multiple onChange handler functions and assign each one individually — which is a time-consuming process.

Instead of writing different handlers for each input, we can write one single event handler.

But how?
How will the handleChange function know which input field to update?

→ For that, we use the name attribute (e.g., name="fname").  
→ Using the name attribute, we can identify each input field inside the single handleChange function and update the state accordingly.

In this way, React forms become more efficient and easier to manage.

What's about uncontrolled Component?
go to next page.
In most cases it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref(useRef hook) to get form values from the DOM.
`

export default reactFormTheory
