## Class 03 Notes

### React Docs - lists and keys

 - What does .map() return?
*a new array.*

- If I want to loop through an array and display each value in JSX, how do I do that in React?
You can build collections of elements and include them in JSX using curly braces {}.
We loop through the numbers array using the JavaScript map() function. We return a li element for each item, assign the resulting array of elements to listItems.

- Each list item needs a unique ____.
key

- What is the purpose of a key?
 “key” is a special string attribute you need to include when creating lists of elements.

//----source: https://reactjs.org/docs/lists-and-keys.html


### The Spread Operator

- What is the spread operator?
 A useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.

 List 4 things that the spread operator can do.
  
  <ol>
  <li>Copying an array
  <li>Using Math functions
  <li>Using an array as arguments
  <li>Combining objects
  </ol>

- Give an example of using the spread operator to combine two arrays.
const myArray = [`🤪`,`🐻`,`🎌`]
const yourArray = [`🙂`,`🤗`,`🤩`]
const ourArray = [...myArray,...yourArray]
console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩

- Give an example of using the spread operator to add a new item to an array.
const fewFruit = ['🍏','🍊','🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]*

- Give an example of using the spread operator to combine two objects into one.
*const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = {...objectOne, ...objectTwo, laugh: () => {console.log("😂".repeat(5))}}
objectFour.laugh() // 😂😂😂😂😂


//----source:https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab

### How to Pass Functions Between Components

- In the video, what is the first step that the developer does to pass functions between components?
Creates increment function, passing in person object

- In your own words, what does the increment function do?
  Increment, adds 1 to a total it its being incremented to, and decremenet is subtracting one.
How can you pass a method from a parent component into a child component?
Using props

-How does the child component invoke a method that was passed to it from a parent component?
this.props.methodName

//----source: https://www.youtube.com/watch?v=c05OL7XbwXU