/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/
/* WRITE YOUR CODE HERE */
let Number1 = 12;
let Number2 = 20;
let SUM = Number1 + Number2;
console.log(SUM);
/* EXERCISE 2
Create a variable named X containing the number 12
*/
/* WRITE YOUR CODE HERE */
let X = 12;
console.log(X);
/* EXERCISE 3
Create a variable named name containing the string John Doe
*/
/* WRITE YOUR CODE HERE */
let name = "John Doe";
console.log(name);
/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/
/* WRITE YOUR CODE HERE */
let DIFFERENCE = 12 - X;
console.log(DIFFERENCE);
/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/
/* WRITE YOUR CODE HERE */
let name1 = "john";
let name2 = "John";
if (name1!==name2) {
    console.log("name1 is different form name2");
}
if (name1===name2.toLowerCase()){
    console.log("name1 and name2 are the same");
}
/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/
/* WRITE YOUR CODE HERE */
X = 5;
if (X === 1) {
    console.log("One");
}else if (X === 2){
    console.log ("Two");
}else if (X ===3){
    console.log("Three");
}
else if (X === 4){
    console.log("Four");
}
else if (X === 5){
    console.log("Five");
}
else if (X === 6){
    console.log("Six");
}
else if (X === 7){
    console.log("Seven");
}
else if (X === 8){
    console.log("Eight");
}
else if (X === 9){
    console.log("Nine");
}
/* EXERCISE 7
Insert a value in a variable based on the resut of a ternary if
*/
/* WRITE YOUR CODE HERE */
let result = Number1 + Number2;
result = (result>20) ? console.log(result) : console.log("Result is lower then 20")

/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/
