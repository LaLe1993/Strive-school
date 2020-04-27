// 21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe"
console.log("--------------EXERCISE 21--------------")
    let x = "John";
    let y = "Doe";
    console.log(x + " <> " +y);

// 22) Create an object with properties such Name, Surname, Email
console.log("--------------EXERCISE 22--------------")
    const myObject = {
        Name: "Strahinja",
        Surname: "Lalovic",
        Email: "strahinjalalovic93@gmail.com"
    }
    console.log("My object is: ",myObject);

//  23) Delete Email from the previously created object
console.log("--------------EXERCISE 23--------------")
    delete myObject.Email;
    console.log("My new object is: ",myObject);

//  24) Create an array with 10 strings in it
console.log("--------------EXERCISE 24--------------")
    let myArray = ["Strahinja","Luis","Solomon","Nathalie","Oksana","Quadri","Klevin","Gloria","Erkin","Marigona"];
    console.log("My array is: ",myArray);

//  25) Print in the console every string in the previous array
console.log("--------------EXERCISE 25--------------")
    for(let i=0;i<myArray.length;i++){
        let stringFromArray = myArray[i];
        console.log(stringFromArray)
    }

//  26) Create an array with 100 random numbers in it
console.log("--------------EXERCISE 26--------------")
    let random100 = [];
    for(let i=0;i<100;i++){
    let r = Math.floor(Math.random() * 100) + 1;
    random100.push(r);
    }
    console.log(random100);
    
//  27) Wrote a function to get the MAX and the MIN from the previously created array
console.log("--------------EXERCISE 27--------------")
    const maxMin = function(){
        let maxValue = Math.max(...random100);
        console.log("Max value is: ", + maxValue);
        let minValue = Math.min(...random100)
        console.log("Min value is: ", + minValue);
    }
    maxMin();

//  28) Create an array of arrays, in which every array has 10 random numbers
console.log("--------------EXERCISE 28--------------")
    let arrayOfArrays = [];
    for(let i=0;i<10;i++){
        let arrayForArray = [];
    while(arrayForArray.length < 10){
        let r = Math.floor(Math.random() * 100) + 1;
        if(arrayForArray.indexOf(r) === -1)
        {arrayForArray.push(r)};
    }
    arrayOfArrays.push(arrayForArray);
    }
    console.log(arrayOfArrays);

//  29) Create a function that gets 2 arrays and returns the longest one
console.log("--------------EXERCISE 29--------------")
    const longerArray = function(x,y){
        if(x.length>y.length){
            console.log(x);
            return x;
        }else if(x.length === y.length){
            console.log("Arrays are the same length!");
        }else{
            console.log(y);
            return y;
        }
    }

    longerArray([1,2,3,4,5],[1,2,3,4,5,6]);


//  30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
console.log("--------------EXERCISE 30--------------")
    const sumOfArrayValues = function(a,b){
            let sumA = a.reduce(myFunc);
            let sumB = b.reduce(myFunc);

        function myFunc(total, num) {
            return total + num;
        }
        if(sumA > sumB){
            console.log(a);
            return a;
        }else if(sumA === sumB){
            console.log("Array a and array b have same sum values!");
        }else{
            console.log(b);
            return b;
        }
    }
    sumOfArrayValues([1,2,3,4],[1,2,3,4,5]);