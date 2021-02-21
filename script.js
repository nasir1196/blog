// What is javascript?
// Javascript is a light-weight inter-prater single thrade programming language.

// What is Node?
// Node is javascript run-time environment.

// What is primitive  data type?
//There are 7 type of primitive data type:
// 1.String
// 2.Number
// 3.Boolean
// 4.Bigint
// 5.Undefined
// 6.symbol
// 7.Null
// All are immutable primitive data type. It's cannot be changeable or altered;
// But it's reassign able data assign able data type: like as=> 
// let name1 = 'string';
// name1 = 'oldString';
// console.log(name1);// It's working because primitive data type are assignable and reassign able data type;

// let newName = 'string';
// newName.push('newString')// It's not work because primitive data are immutable;
// console.log(newName);

// What is reference  data type?
//Reference data type are mutable and assignable and reassign able data type;
// Like as:
// let arr = [];
// arr.push(1, 2, 3, 4, 5);
// arr.pop();
// arr[3] = 10;
// arr = []; // here is assign new value
// arr = [6, 7, 8, 9,];
// console.log(arr);

// What is prototype?
//All javaScript object are inherit and method gets from in prototype;
// like as:
// const normalPerson1 = {
//     firstName: "Rahim",
//     lastName: "Uddin",
//     salary: 15000,
//     getFullName: function () {
//         console.log(`${this.firstName}  ${this.lastName}`);
//     },
//     chargeBill: function (amount, tips, tax) {
//         console.log(this);
//         this.salary -= amount + tips + tax;
//         return this.salary;
//     }
// }

// const heroPerson1 = {
//     firstName: "Hero",
//     lastName: "Balam",
//     salary: 25000
// }

// const friendlyPerson1 = {
//     firstName: "Hero",
//     lastName: "Friend",
//     salary: 20000
// }

// normalPerson1.chargeBill.call(heroPerson1, 3000, 300, 300); // this line uses call method it's get form prototype;
// console.log(heroPerson1.salary);

// normalPerson1.chargeBill.call(friendlyPerson1, 4000, 400, 40);
// console.log(friendlyPerson1.salary);

// What is truthy value?
// {
        // Every values are truthy without falsy value =>[all falsy value(false,"",0,null,undefined,Nan,-0,0n)]
        // Most important truthy values:
        // 1. true
        // 2. {}
        // 3. []
        // 4. 42
        // 5. "0"
        // 6. "false"
        // 7. new Date()
        // 8. -42
        // 9. 12n
        // 10. 3.14
        // 11. -3.14
        // 12. Infinity
        // 13. -Infinity
// }

// What is falsy value?
// {
    //Write down all are falsy value:
    // 1.false
    // 2.""
    // 3.0
    // 4.null
    // 5.undefined
    // 6. NaN
    // 7.-0
    // 8.0n
// }


// What is variable?
// Variable is container. Any value are containing in a variable;
// like as:
// let list = [3, 5, 6, 6, 7, 4, 3, 7];
// const names = ['name', 'age', 'city', 'etc.'];
// var string = " I am Bangladesh";


// What is string?
// String is data type in programming language. Such as boolean , number, floating ;


// What is integer number?
// Integer number is numeric decimal number like: 0123456789;


// What is flooring number?
// Floating is a decimal pointer numeric number like: 453.33 , 355.3355 ;

// What is boolean?
// {      
    // Boolean are provide a logic like (0)=false and (1)=true;
// }

// What is array ?
//{
    // Array is a data structure and contain a group of element. 
    // Typically these elements are all of the same data type such as an integer, string, boolean;
    // const array = ['name', 'age', 344, 544];
//}


// What is object?
//{

    // Javascript is a simple object-base programming language. 
    // Object contain properties and association between name (or key) and (value) are containing;
//}


// What is condition?
// {
        // Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

        // There are multiple different types of conditionals in JavaScript including:

        // “If” statements: where if a condition is true it is used to specify execution for a block of code.
        // “Else” statements: where if the same condition is false it specifies the execution for a block of code.
        // “Else if” statements: this specifies a new test if the first condition is false.
        // Now that you have the basic JavaScript conditional statement definitions, let’s show you examples of each.
// }


//  How kind of loop?
//{
        // There are three Kinds of loop:
        // For Loop:{
        //for of loop{
        //     for (variable of object){

        //         statement
        //     }
        // }
        // for in loop{
        //     for (variable in object){

        //         statement
        //     }
        // }

        // foreach loop{
        //     var fruits = ["apple", "orange", "cherry"];
        // fruits.forEach(myFunction);

        // function myFunction(item, index) {
        //   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
        // }
        // }
        //}

        // Do While loop{
        // do {
        //     code block to be executed
        // }
        // while (condition);
        //     }

        // while loop{
        // while (i < 10) {
        //     text += "The number is " + i;
        //     i++;
        //   }
        //}
//}



// What is function?
//{
    // Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

    // Function declarations
        // A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

    // The name of the function.
    // A list of parameters to the function, enclosed in parentheses and separated by commas.
    // The JavaScript statements that define the function, enclosed in curly brackets, {...}.
        // function square(number) {
        //     return number * number;
        //   }
//}

// What is set?
//{
        // Set objects are collections of values. You can iterate through the elements of a set in insertion order. 
        //A value in the Set may only occur once; it is unique in the Set's collection.
//}

// {
//     Constructor
        // Set()
        // Creates a new Set object.
        // Static properties
        // get Set[@@species]
        // The constructor function that is used to create derived objects.
        // Instance properties
        // Set.prototype.size
        // Returns the number of values in the Set object.
        // Instance methods
        // Set.prototype.add(value)
        // Appends value to the Set object. Returns the Set object with added value.
        // Set.prototype.clear()
        // Removes all elements from the Set object.
        // Set.prototype.delete(value)
        // Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.
        // Set.prototype.has(value)
        // Returns a boolean asserting whether an element is present with the given value in the Set object or not.
// }


// What is API?
// {
        //     What is Web API?
        // API stands for Application Programming Interface.

        // A Web API is an application programming interface for the Web.

        // A Browser API can extend the functionality of a web browser.

        // A Server API can extend the functionality of a web server.
// }

// {
        //     Browser APIs
        // All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.
// }

// {
//     Third Party APIs
        // Third party APIs are not built into your browser.

        // To use these APIs, you will have to download the code from the Web.

        // Examples:

        // YouTube API - Allows you to display videos on a web site.
        // Twitter API - Allows you to display Tweets on a web site.
        // Facebook API - Allows you to display Facebook info on a web site.
// }

// What is spread operator ( three dots ...) ?
//{
    // The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability


    // function sum(x, y, z) {
    //     return x + y + z;
    //   }
      
    //   const numbers = [1, 2, 3];
      
    //   console.log(sum(...numbers));
          // expected output: 6
      
    //   console.log(sum.apply(null, numbers));
            // expected output: 6
//}

// What is rest operator?
//{
    // The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.


    //     Description
    // A function definition's last parameter can be prefixed with "..." (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within a "standard" JavaScript array.. Only the last parameter in a function definition can be a rest parameter.  

    // syntax:
    // function myFun(a,  b, ...manyMoreArgs) {
    //     console.log("a", a)
    //     console.log("b", b)
    //     console.log("manyMoreArgs", manyMoreArgs)
    //   }
      
    //   myFun("one", "two", "three", "four", "five", "six")
      
      // Console Output:
      // a, one
      // b, two
      // manyMoreArgs, ["three", "four", "five", "six"]
//}

// What is class? 
//{
    // Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

    //     Class declarations
    // One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

    // class Rectangle {
    //     constructor(height, width) {
    //       this.height = height;
    //       this.width = width;
    //     }
    //   }
//}

// What destructuring ? 
//{
    // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

    //     let a, b, rest;
    // [a, b] = [10, 20];

    // console.log(a);
    // // expected output: 10

    // console.log(b);
    // // expected output: 20

    // [a, b, ...rest] = [10, 20, 30, 40, 50];

    // console.log(rest);
    // // expected output: Array [30,40,50]
//}

// What is JSON?
//{
        // JSON stands for JavaScript Object Notation
        // JSON is a lightweight data interchange format
        // JSON is language independent *
        // JSON is "self-describing" and easy to understand
        // * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.
//}

// What is localStorage? 
//{

//}

// What is sessionStorage?
//{

//}

// What is filter method?
//{

//}

// What is find method?
//{

//}

// What is map method?
//{

//}

// What is filterIndex method?
//{

//}

// What is reduce method?


// What is call method? 
// const normalPerson2 = {
//     firstName: "Rahim",
//     lastName: "Uddin",
//     salary: 15000,
//     getFullName: function () {
//         console.log(`${this.firstName}  ${this.lastName}`);
//     },
//     chargeBill: function (amount, tips, tax) {
//         console.log(this);
//         this.salary -= amount + tips + tax;
//         return this.salary;
//     }
// }

// const heroPerson2 = {
//     firstName: "Hero",
//     lastName: "Balam",
//     salary: 25000
// }


// const friendlyPerson2 = {
//     firstName: "Hero",
//     lastName: "Friend",
//     salary: 20000
// }

// normalPerson2.chargeBill.call(heroPerson2, 3000, 300, 300);
// console.log(heroPerson2.salary);

// normalPerson2.chargeBill.call(friendlyPerson2, 4000, 400, 40);
// console.log(friendlyPerson2.salary);



// // What is apply method?
// const normalPerson3 = {
//     firstName: "Rahim",
//     lastName: "Uddin",
//     salary: 15000,
//     getFullName: function () {
//         console.log(`${this.firstName}  ${this.lastName}`);
//     },
//     chargeBill: function (amount, tips, tax) {
//         console.log(this);
//         this.salary -= amount + tips + tax;
//         return this.salary;
//     }
// }

// const heroPerson3 = {
//     firstName: "Hero",
//     lastName: "Balam",
//     salary: 25000
// }


// const friendlyPerson3 = {
//     firstName: "Hero",
//     lastName: "Friend",
//     salary: 20000
// }

// normalPerson3.chargeBill.apply(heroPerson3, [3000, 300, 300]);
// console.log(heroPerson3.salary);

// normalPerson3.chargeBill.apply(friendlyPerson3, [4000, 400, 40]);
// console.log(friendlyPerson3.salary);


// What is bind method?
// const normalPerson4 = {
//     firstName: "Rahim",
//     lastName: "Uddin",
//     salary: 15000,
//     getFullName: function () {
//         console.log(`${this.firstName}  ${this.lastName}`);
//     },
//     chargeBill: function (amount) {
//         console.log(this);
//         this.salary -= amount;
//         return this.salary;
//     }
// }

// const heroPerson4 = {
//     firstName: "Hero",
//     lastName: "Balam",
//     salary: 25000
// }


// const friendlyPerson4 = {
//     firstName: "Hero",
//     lastName: "Friend",
//     salary: 20000
// }

// const chargeBillHeroPerson4 = normalPerson4.chargeBill.bind(heroPerson4);
// chargeBillHeroPerson4(2000);
// chargeBillHeroPerson4(2000);
// chargeBillHeroPerson4(3000);

// const chargeBillFriendlyPerson4 = normalPerson4.chargeBill.bind(friendlyPerson4);
// chargeBillFriendlyPerson4(2000);
// chargeBillFriendlyPerson4(2000);
// chargeBillFriendlyPerson4(1000);
// chargeBillFriendlyPerson4(1000)


// What is slice ?
//{

//}

// What is splice method?
//{

//}

// What is split method?
//{

//}

// What is arguments  and when it's use?
//{

//}

// What is literal string?
//{

//}

// What is subString?
//{

//}

// What is call-back function?
//{

//}

// What is recursion?
//{

//}

// What is fibonacci series ?
//{

//}

//  What is ternary operator?
//{

//}


// What is closure? 
//{

//}

// What is IndexOf?
//{

//}

// What is deferment with let , const and var?
//{

//}


// What is global variable? 
//{

//}


// What is scope variable? 
//{

//}


// What is scope block?
//{

//}

// What is fetch?
//{

//}

// What is async await function?
//{

//}

// What is asynchronous?
//{

//}

// What is synchronous?
//{

//}

// What is addEventListener?
//{

//}

// What is Invoked function?
//{

//}


// What is switch?
//{

//}

// What is  union set?
//{

//}

// What is intersection set?  
//{

//}

// What is  universal set? 
//{

//}

// What is weak sets?
//{

//}