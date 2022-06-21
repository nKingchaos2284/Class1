## Control flow


   The control flow is the order in which the computer executes statements in a script. Code is run in order from the first line in the file to the last line.

   ### EXAMPLE:

if (field==empty) {
    promptUser();     → if the field is empty, it prompts user to do____
} else {
    submitForm();     → if it isn't empty, then submit form.
}

the above excerpt might be inside a function that runs when the user clicks the Submit button for the form. The function could also include a loop, which 
iterates through all of the fields in the form, checking each one in turn. Looking back at the code in the if and else sections, the lines promptUser and 
submitForm could also be calls to other functions in the script. As you can see, control structures can dictate complex flows of processing even with only 
a few lines of code. Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how 
it affects order of execution.

JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when “something” invokes it (calls it).

Example
function myFunction(p1, p2) {
  return p1 * p2;     →  // The function returns the product of p1 and p2
}
JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

[bACK TO the start](README.md) 
