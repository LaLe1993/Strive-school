// /*
// ASSIGNMENT RULES
// - All the answers must be in JavaScript
// - The solution must be pushed to the repository and be available for the tutors by the end of the day
// - You can ask for tutor's help
// - You can google / use StackOverflow BUT we suggest you to use just the material provided
// - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
// */
// ​
// /* EXERCISE 1
// Create and array with the first 5 positive numbers
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 1-----");
let positiveNumbers= [1,2,3,4,5];
console.log(positiveNumbers);

// /* EXERCISE 2
// Create an object containing your name, surname, email address and age.
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 2-----");
const aboutMe = {
    name: "Strahinja",
    surname: "Lalovic",
    email: "strahinjalalovic93@gmail.com",
    age: 26,
}
console.log(aboutMe);

// /* EXERCISE 3
// Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
// */
// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 3-----");
if (aboutMe.drivingLicence) {
    console.log(aboutMe.drivingLicence);
}else{
    aboutMe.drivingLicence = true;
}
console.log(aboutMe);

// /* EXERCISE 4
// Remove from the previously created object the age
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 4-----");
delete aboutMe.age;
console.log(aboutMe);

// /* EXERCISE 5
// Create a second object with name, surname, email address and verify that this object has a different email address
// */
// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 5-----");
const aboutHim = {
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com",
    age: 60,
}
if (aboutMe.email !== aboutHim.email) {
    console.log("Emails are different!");
} else {
    console.log("Strahinja and John have same email!");
}
// /* EXERCISE 6
// You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
// In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
// Write an algorithm that calculate totalCost based on this assumption.
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 6-----");
let totalShoppingCart = 50;
if (totalShoppingCart>50) {
    console.log(totalShoppingCart,"€ FREE SHIPPING!");
} else {
    totalShoppingCart = totalShoppingCart + 10;
    console.log(totalShoppingCart,"€ WITH SHIPPING");
}
// /* EXERCISE 7
// You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
// Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 7-----");
totalShoppingCart = totalShoppingCart * 0.8;
console.log(totalShoppingCart, "Price with 20% discount");
// /* EXERCISE 8
// Create an object rapresenting a car with properties like brand, model, licensePlate.
// After you create the first car, clone it and change the licensePlate without affecting the original car.
// Do it for five cars.
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 8-----");
let licencePlateCar1 = 411;
const car1 = {
    brand: "Audi",
    model: "R8",
    licensePlate: `NS${licencePlateCar1}-BA`,
}

const car2 = {};
const car3 = {};
const car4 = {};
const car5 = {};

// Object.assign(car2,car1);
// Object.assign(car3,car1);
// Object.assign(car4,car1);
// Object.assign(car5,car1);

let cars = [car1,car2,car3,car4,car5]

for (index=1; index<5; index++){
    Object.assign(cars[index],cars[0]);
    cars[index].licensePlate = `NS${licencePlateCar1+index}-BA`;
}

// car2.licensePlate = "NS412-BA";
// car3.licensePlate = "NS413-BA";
// car4.licensePlate = "NS414-BA";
// car5.licensePlate = "NS415-BA";

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

// /* EXERCISE 9
// Create a new array called carsForRent containing all the cars from the previous exercise
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 9-----");
let carsForRent = [car1,car2,car3,car4,car5];
console.log(carsForRent);
// /* EXERCISE 10
// Remove the first and the last car from the carsForRent array.
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 10-----");
carsForRent.pop();
carsForRent.shift();
console.log(carsForRent);
// /* EXERCISE 11
// Print in the console, the types of a single car, of the car licensePlate and of the brand
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 11-----");;
console.log("Type of a single car is:" ,typeof car2)
console.log("Type of license plate is:", typeof car2.licensePlate)
console.log("Type of brend is:", typeof car2.brand);
// /* EXERCISE 12
// Create a new array called carsForSale and insert 3 cars in it.
// Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 12-----");
let carsForSale = [car2,car4,car5];

// let carsForSale = cars.copyWithin(1,3);
console.log(carsForSale);
let totalCars = carsForSale.length + carsForRent.length;

console.log(totalCars);
// /* EXERCISE 13
// Print in the console the data from each car in the carsForSale array
// */

// /* WRITE YOUR CODE HERE */

console.log("-----EXERCISE 13-----");
carsForSale.forEach(Element => console.log(Element));
// /* WHEN YOU ARE FINISHED
// Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
// */