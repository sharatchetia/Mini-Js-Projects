//Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.
function greet(name){
    console.log(`hello ${name} `)
}

greet("Sharat");


//Write a function called 'getSquare' that takes a number parameter and returns its square.
function getSquare(num){
    let square = num**2;
    return square;
}

console.log(getSquare(2));


//Write a function called 'countLetters' that takes a string parameter and returns an object that contains 
// a count of each letter in the string.
function countLetters(str){
    const counts ={};
    for(let i=0; i<str.length; i++){
        const char = str[i];
        if(counts[char]){
            counts[char]++;
        }else{
            counts[char]=1;
        }
    }

    return counts;
}

const letterCounts = countLetters("sharat");
console.log(letterCounts);



//Write a function called 'createCounter' that returns a function. The returned function should increment 
// a counter variable each time it is called and return the current count.
function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let counter = createCounter();
console.log(counter());



//Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter 
// and returns the sum of all even numbers in the array.
function sumEvenNumbers(num){
    sum=0;
    for( let i = 0; i<=num.length; i++){
        if(num[i]%2===0){
            sum = sum+num[i];
        }
    }
    return sum;
}

const num = [1,2,3,4,5,6];
console.log(sumEvenNumbers(num));



//Write a function that takes an array of numbers as an argument and returns the sum of all 
// the numbers in the array.
function addArray(num1){
    let sum = 0;
    for(let i = 0; i<num1.length; i++){
        sum=sum+num1[i];
    }
    return sum;
}

const num1 = [1,2,3,4,5,6];
console.log(addArray(num1));



//Write a function that takes an array of strings as an argument and returns a new array with 
// only the strings that have a length greater than 5.
function arrSort(arr){
    let arr2 = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i].length>5){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}


console.log(arrSort(["apple", "banana", "kiwi", "watermelon", "orange"]));




//Write a function that takes an object and returns an array of all the keys in the object.
function getKeys(obj){
    let keys = Object.keys(obj);
    return keys;
}
const person = {
  name: "John",
  age: 30,
  gender: "male",
  city: "New York",
};

console.log(getKeys(person)); 
console.log(getKeys({})); 



//Write a function that takes an array of objects and returns an array of all the 
// values of a specified property name.

function properties(arr, propName){
    const values = arr.map((obj)=>obj[propName]);

    return values;
}
const people = [
  { name: "Pranay", age: 20, gender: "male" },
  { name: "Nidhi", age: 21, gender: "female" },
  { name: "Soumya", age: 21, gender: "male" },
];

console.log(properties(people, "name"));


//Write a function that takes an array of objects and returns the object with the 
// highest value for a specified property name.

function findMaxProperty(arr, prop){
    let objMax = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i][prop]>objMax[prop]){
            objMax = arr[i];
        }
    }
    return objMax;
}

const arr1 = [
  { name: "apple", price: 1 },
  { name: "banana", price: 2 }, 
  { name: "orange", price: 3 },
];
const maxObj1 = findMaxProperty(arr1, "price");
console.log(maxObj1);
