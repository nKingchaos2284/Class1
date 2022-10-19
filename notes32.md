# Class 02 Notes

## React lifecycle

- Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’? Render

- What is the very first thing to happen in the lifecycle of React? Mounting

- Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates 1 Constructor, 2 Render, 3 React Updates, 4 componentDidMount, 5 componentWillUnmount

- What does componentDidMount do? This method allows you to clean up the DOM and netwrok requests/ subscriptions.

//----source: https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093

## React State Vs Props

- What types of things can you pass in the props? Things you can pass to a constructor, are the same things you can pass to props

 - What is the big difference between props and state? Props you pass into a component handled outside, State is within the component.

- When do we re-render our application? Storing things in state.

- What are some examples of things that we could store in state? Things from within the component, things kept in a parent component.
