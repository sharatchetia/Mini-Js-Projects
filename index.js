// console.log("hello pajit ");
// let a=10;
// let b=true;
// console.log(a,b);

// var c=11;
// var c=1;
// console.log(c);


// let lastName = 'sharat';
// console.log(lastName);

// lastName=3;
// console.log(lastName)


// // ternary operator

// let age= 15;

// let status = (age>=18)? "can vote": "cannot vote";

// console.log(status);



//objects

// const rectangle ={
//     length: 10,
//     breadth: 20,

//     draw : function(){
//         console.log("draw");
//     }
// };



// let person = {
//     lastName : 'Sharat',
//     age : 20
// };



// // factory function

// function shapeRequired(len, bre) {

//     const rectangle = {
//         length:len,
//         breadth:bre,

//         draw: function(){
//             console.log("paguu");
//         }
//     };
//     return rectangle;
// }


// let helloJi = shapeRequired(10, 20);






// //constructor function

// function Rectangle(len, bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// let getRectangle = new Rectangle();




// let a = 10;

// function inc(a){
//     a++;
// }

// inc(a);
// console.log(a);  // the answer should be 10 because we are passing primitive values




// let a = {value:10};

// function inc(a){
    
//     a.value++;
// }
// inc(a);
// console.log(a.value);  // now it will give 11 because we are passing objects 




// // for-in loop

// let recrangle = {
//     length : 10,
//     breadth : 20 
// };

// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// }




// for-of loop

let recrangle = {
    length : 10,
    breadth : 20 
};

for(let key of Object.entries(rectangle)){
    console.log(key);
}







