/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/
/* WRITE YOUR CODE HERE */
console.log("-----EXERCISE 1-----");
let myArray = [1,3,5,20,42,976];
myArray.reverse();
console.log(myArray);

/* EXERCISE 2
Create a code to get the maximum from an array
*/
/* WRITE YOUR CODE HERE */
console.log("-----EXERCISE 2-----");
myArray.sort(function(a, b){return b-a});
console.log(myArray[0]);

//console.log(a);
/* EXERCISE 3
Create a code to get the minimum from an array
*/
/* WRITE YOUR CODE HERE */
console.log("-----EXERCISE 3-----");
myArray.sort(function(a, b){return a-b});
console.log(myArray[0]);

/* EXERCISE 4
Create a code to get only even numerical value from an array
*/
/* WRITE YOUR CODE HERE */
console.log("-----EXERCISE 4-----");
let evenArray=[];
for(index=0;index<myArray.length;index++){
        if((myArray[index]%2)===0){
            evenArray.splice(0,0,myArray[index]);
        }
        else{
        }
}
console.log(evenArray);

/* EXERCISE 5
Write the code to delete the even entries from an array
*/
/* WRITE YOUR CODE HERE */
console.log("-----EXERCISE 1-----");

for(index=0;index<myArray.length;index++){
        if((myArray[index] % 2)===0){
            myArray.splice(index,1);
        }
        else{
            console.log(index);
        }
}
console.log(myArray);

/* EXERCISE 6
Write the code to remove all the vocal from a string
*/
/* WRITE YOUR CODE HERE */
console.log("-----EXERCISE 1-----");
/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1
*/
/* WRITE YOUR CODE HERE */
console.log("-----EXERCISE 1-----");

/* EXERCISE 8 
Replace all the strings into an array by their length
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/
/* WRITE YOUR CODE HERE */
console.log("-----EXERCISE 1-----");
/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/