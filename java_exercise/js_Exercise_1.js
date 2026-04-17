// # JavaScript Exercise-1

// ## Topics covered:

// - Variables, data types, and operators
// - Conditional statements and loops


//1.Write a function that takes two numbers as arguments and returns their sum.
function sumNumbers(a,b){
    const sum = a+b;
    return sum;
}

console.log(sumNumbers(2,3));

//Write a function that takes a string as an argument and returns its length.
function getStringLength(str){
    const length = str.length;
    return length;
}

console.log(getStringLength("hello ji"));

// Manual version: count each character one by one.
function countCharactersManually(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count++;
    }

    return count;
}

console.log(countCharactersManually("hello ji"));



//Write a program that takes two numbers and displays their sum, difference, product, and quotient.
function calculations(num1, num2){
    const sum = num1+num2;
    const diff = num1-num2;
    const pro = num1*num2;
    const quo = num1/num2;

    return{sum, diff, pro, quo};
}

result = calculations(11,12);

console.log(result);



//Write a function that takes two numbers as arguments and returns the larger number.
function largerNumber(num1, num2){
    if(num1>num2){
        console.log(`${num1} is greater`);
    }else if(num2> num1){
        console.log(`${num2} is greater`);
    }else{
        console.log("both number are equal");
    }
}

const res = largerNumber(12,12);
console.log(res);



//Write a program that displays a string in reverse order.
function reverseOrder(str){
    const reverseOrder = str.split("").reverse().join("");
    return reverseOrder;
}
console.log(reverseOrder("sharat"));



//Write a program that takes a number and checks whether it is positive, negative, or zero.
function checkNumber(num){
    if(num>0){
        return ("positive");
    }else if(num<0){
        return ("negative");
    }else{
        return ("equal");
    }
}

console.log(checkNumber(9));



//Write a program that takes a number and prints the multiplication table for that number.
function table(num){
    for(let i=0; i<=10; i++){
        console.log(`${num}*${i}=${num*i}`);
    }
}
console.log(table(2));



//Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function summer(num){
    let count = 0;
    for(let i = 1; i<=num; i++){
        count = count+i;
    }
    return count;
}

console.log(summer(5));





//Write a program that takes a string and prints out the number of vowels in the string.
function countVowel(str){
    let vowels = ['a','e','i','o','u'];
    let count = 0;

    for(let i = 0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(countVowel("sharat"));



//Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
//For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
//Hint: You may need to use nested loops and conditional statements to solve this problem.

function arrayCommoner(arr1, arr2){
    let commonArr =[];

    for (let i = 0 ; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            if(!commonArr.includes(arr1[i])){
                commonArr.push(arr1[i]);
            }
        }
    }

    commonArr.sort((a,b) => a-b );
    return commonArr;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonArr = arrayCommoner(arr1, arr2);
console.log(commonArr); 


