oldArray = [2,2,2,1,1,1,1,1];
myArray = [2,2,2,1,1,1,1,1]
newArray = []
for(let i = 1; i<myArray.length;i++){
    if(myArray[i-1]>myArray[i]){
    }else{
        newArray.push(i);
        oldArray.splice(i+1,1);
        myArray = [];

    }
}
console.log(newArray)
console.log(myArray)
console.log(oldArray)
