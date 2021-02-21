// What is javascript?
// Javascript is a light-weight inter-prater single thrade programming language.

// What is Node?
// Node is javascript run-time environment.

// What is primitive  data type?
// There are 7 type of primitive data type:
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
// Reference data type are mutable and assignable and reassign able data type;
// Like as:
// let arr = [];
// arr.push(1, 2, 3, 4, 5);
// arr.pop();
// arr[3] = 10;
// arr = []; // here is assign new value
// arr = [6, 7, 8, 9,];
// console.log(arr);

// What is prototype?
// All javaScript object are inherit and method gets from in prototype;
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
//         Every values are truthy without falsy value =>[all falsy value(false,"",0,null,undefined,Nan,-0,0n)]
//         Most important truthy values:
//         1. true
//         2. {}
//         3. []
//         4. 42
//         5. "0"
//         6. "false"
//         7. new Date()
//         8. -42
//         9. 12n
//         10. 3.14
//         11. -3.14
//         12. Infinity
//         13. -Infinity
// }

// What is falsy value?
// {
//     Write down all are falsy value:
//     1.false
//     2.""
//     3.0
//     4.null
//     5.undefined
//     6. NaN
//     7.-0
//     8.0n
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
//     Boolean are provide a logic like (0)=false and (1)=true;
// }

// What is array ?
// {
//     Array is a data structure and contain a group of element. 
//     Typically these elements are all of the same data type such as an integer, string, boolean;
//     const array = ['name', 'age', 344, 544];
// }


// What is object?
// {

//     Javascript is a simple object-base programming language. 
//     Object contain properties and association between name (or key) and (value) are containing;
// }


// What is condition?
// {
//         Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

//         There are multiple different types of conditionals in JavaScript including:

//         “If” statements: where if a condition is true it is used to specify execution for a block of code.
//         “Else” statements: where if the same condition is false it specifies the execution for a block of code.
//         “Else if” statements: this specifies a new test if the first condition is false.
//         Now that you have the basic JavaScript conditional statement definitions, let’s show you examples of each.
// }


//  How kind of loop?
// {
//         There are three Kinds of loop:
//         For Loop:{
//         for of loop{
//             for (variable of object){

//                 statement
//             }
//         }
//         for in loop{
//             for (variable in object){

//                 statement
//             }
//         }

//         foreach loop{
//             var fruits = ["apple", "orange", "cherry"];
//         fruits.forEach(myFunction);

//         function myFunction(item, index) {
//           document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
//         }
//         }
//         }

//         Do While loop{
//         do {
//             code block to be executed
//         }
//         while (condition);
//             }

//         while loop{
//         while (i < 10) {
//             text += "The number is " + i;
//             i++;
//           }
//         }
// }



// What is function?
// {
//     Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

//     Function declarations
//         A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

//     The name of the function.
//     A list of parameters to the function, enclosed in parentheses and separated by commas.
//     The JavaScript statements that define the function, enclosed in curly brackets, {...}.
//         function square(number) {
//             return number * number;
//           }
// }

// What is set?
// {
//         Set objects are collections of values. You can iterate through the elements of a set in insertion order. 
//         A value in the Set may only occur once; it is unique in the Set's collection.
// }

// {
//     Constructor
//         Set()
//         Creates a new Set object.
//         Static properties
//         get Set[@@species]
//         The constructor function that is used to create derived objects.
//         Instance properties
//         Set.prototype.size
//         Returns the number of values in the Set object.
//         Instance methods
//         Set.prototype.add(value)
//         Appends value to the Set object. Returns the Set object with added value.
//         Set.prototype.clear()
//         Removes all elements from the Set object.
//         Set.prototype.delete(value)
//         Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.
//         Set.prototype.has(value)
//         Returns a boolean asserting whether an element is present with the given value in the Set object or not.
// }


// What is API?
// {
//             What is Web API?
//         API stands for Application Programming Interface.

//         A Web API is an application programming interface for the Web.

//         A Browser API can extend the functionality of a web browser.

//         A Server API can extend the functionality of a web server.
// }

// {
//             Browser APIs
//         All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.
// }

// {
//     Third Party APIs
//         Third party APIs are not built into your browser.

//         To use these APIs, you will have to download the code from the Web.

//         Examples:

//         YouTube API - Allows you to display videos on a web site.
//         Twitter API - Allows you to display Tweets on a web site.
//         Facebook API - Allows you to display Facebook info on a web site.
// }

// What is spread operator ( three dots ...) ?
// {
//     The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability


//     function sum(x, y, z) {
//         return x + y + z;
//       }
      
//       const numbers = [1, 2, 3];
      
//       console.log(sum(...numbers));
//           expected output: 6
      
//       console.log(sum.apply(null, numbers));
//             expected output: 6
// }

// What is rest operator?
// {
//     The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.


//         Description
//     A function definition's last parameter can be prefixed with "..." (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within a "standard" JavaScript array.. Only the last parameter in a function definition can be a rest parameter.  

//     syntax:
//     function myFun(a,  b, ...manyMoreArgs) {
//         console.log("a", a)
//         console.log("b", b)
//         console.log("manyMoreArgs", manyMoreArgs)
//       }
      
//       myFun("one", "two", "three", "four", "five", "six")
      
//       Console Output:
//       a, one
//       b, two
//       manyMoreArgs, ["three", "four", "five", "six"]
// }

// What is class? 
// {
//     Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

//         Class declarations
//     One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

//     class Rectangle {
//         constructor(height, width) {
//           this.height = height;
//           this.width = width;
//         }
//       }
// }

// What destructuring ? 
// {
//     The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

//         let a, b, rest;
//     [a, b] = [10, 20];

//     console.log(a);
//     // expected output: 10

//     console.log(b);
//     // expected output: 20

//     [a, b, ...rest] = [10, 20, 30, 40, 50];

//     console.log(rest);
//     // expected output: Array [30,40,50]
// }

// What is JSON?
// {
//         JSON stands for JavaScript Object Notation
//         JSON is a lightweight data interchange format
//         JSON is language independent *
//         JSON is "self-describing" and easy to understand
//         * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.
// }

// What is localStorage? 
// {
//         Definition and Usage
//     The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

//     The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

//     The localStorage property is read-only.
    
    
// }

// What is sessionStorage?
// {
//     The read-only sessionStorage property accesses a session Storage object for the current origin. sessionStorage is similar to localStorage; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.

//     syntax 

//         myStorage = window.sessionStorage;
//             // Save data to sessionStorage
//         sessionStorage.setItem('key', 'value');

//         // Get saved data from sessionStorage
//         let data = sessionStorage.getItem('key');

//         // Remove saved data from sessionStorage
//         sessionStorage.removeItem('key');

//         // Remove all saved data from sessionStorage
//         sessionStorage.clear();
// }

// What is prototype filter method?
// {
//     The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//     syntax 
//         const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//         const result = words.filter(word => word.length > 6);

//         console.log(result);
//         // expected output: Array ["exuberant", "destruction", "present"]
// }

// What is prototype find method?
// {
//         The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

//         syntax 
//         const array1 = [5, 12, 8, 130, 44];

//         const found = array1.find(element => element > 10);

//         console.log(found);
//             // expected output: 12
// }

// What is prototype map method?
// {
//     The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//     syntax 

//          const array1 = [1, 4, 9, 16];

//         // pass a function to map
//         const map1 = array1.map(x => x * 2);

//         console.log(map1);
//         // expected output: Array [2, 8, 18, 32]
// }

// What is prototype filterIndex method?
// {

// }

// What is prototype reduce method?
// {
//     The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. add previous value plus current value;

//     syntax 
//         const array1 = [1, 2, 3, 4];
//         const reducer = (accumulator, currentValue) => accumulator + currentValue;

//         // 1 + 2 + 3 + 4
//         console.log(array1.reduce(reducer));
//         // expected output: 10

//         // 5 + 1 + 2 + 3 + 4
//         console.log(array1.reduce(reducer, 5));
//         // expected output: 15

//         var total = [0, 1, 2, 3].reduce(function(a, b) {
//             return a + b;
//           });
//           // total == 6
          
//           var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//             return a.concat(b);
//           }, []);
//           // flattened is [0, 1, 2, 3, 4, 5]
// }

// What is prototype call method? 
//         The call() method calls a function with a given this value and arguments provided individually.
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



// // What is prototype apply method?
// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
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


// What is prototype bind method?

//     The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

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


// What is prototype slice ?
// {
//     Definition and Usage
//     The slice() method returns the selected elements in an array, as a new array object.

//     The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

//     syntax 
//     var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//     var citrus = fruits.slice(1, 3);
// }

// What is prototype splice method?
// {
//     The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements

//     syntax 
//         const months = ['Jan', 'March', 'April', 'June'];
//         months.splice(1, 0, 'Feb');
//         // inserts at index 1
//         console.log(months);
//         // expected output: Array ["Jan", "Feb", "March", "April", "June"]

//         months.splice(4, 1, 'May'); // // use second 1 for length
//         // replaces 1 element at index 4
//         console.log(months);
//         // expected output: Array ["Jan", "Feb", "March", "April", "May"]
// }

// What is prototype split method?
// {
//     The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  

//     syntax 

//     const str = 'The quick brown fox jumps over the lazy dog.';

//         const words = str.split(' ');
//         console.log(words[3]);
//         // expected output: "fox"

//         const chars = str.split('');
//         console.log(chars[8]);
//         // expected output: "k"

//         const strCopy = str.split();
//         console.log(strCopy);
//         // expected output: Array ["The quick brown fox jumps over the lazy dog."]
// }

// What is arguments  and when it's use?
// {


//     arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

//     syntax 

//     function func1(a, b, c) {
//         console.log(arguments[0]);
//         // expected output: 1
      
//         console.log(arguments[1]);
//         // expected output: 2
      
//         console.log(arguments[2]);
//         // expected output: 3
//       }
      
//       func1(1, 2, 3);
// }

// What is literal string?
// {
//     Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

//     They were called "template strings" in prior editions of the ES2015 specification.
//  Back-trick is called template string caret string ;
//     syntax 
//         `string text`

//         `string text line 1
//          string text line 2`

//         `string text ${expression} string text`

//         tag`string text ${expression} string text`
// }

// What is subString?
// {
//     Definition and Usage
//     The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
    
//     This method extracts the characters in a string between "start" and "end", not including "end" itself.
    
//     If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).
    
//     If either "start" or "end" is less than 0, it is treated as if it were 0.

//     syntax 
//         If "start" is greater than "end", it will swap the two arguments:
//         var str = "Hello world!";
//         var res = str.substring(1, 4);


//         Extract only the last character:
//         var str = "Hello world!";
//         var res = str.substring(str.length - 1, str.length);


//         If "start" is less than 0, it will start extraction from index position 0:
//         var str = "Hello world!";
//         var res = str.substring(-3);
// }

// What is call-back function?
// {

//     A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

//     The above example is a synchronous callback, as it is executed immediately.

//     Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as fetch().
// }

// What is recursion?
// {


//     Recursion and stack
//     Let’s return to functions and study them more in-depth.
    
//     Our first topic will be recursion.
    
//     If you are not new to programming, then it is probably familiar and you could skip this chapter.
    
//     Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.
    
//     When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.

//     use for loop in recursion{
//         function pow(x, n) {
//             let result = 1;
          
//             // multiply result by x n times in the loop
//             for (let i = 0; i < n; i++) {
//               result *= x;
//             }
          
//             return result;
//           }
          
//           alert( pow(2, 3) ); // 8
//     }


//     using function in recursion{
//         function pow(x, n) {
//             if (n == 1) {
//               return x;
//             } else {
//               return x * pow(x, n - 1);
//             }
//           }
          
//           alert( pow(2, 3) ); // 8
//     }
// }

// What is fibonacci series ?
// {

// }

//  What is ternary operator?
// {

// }


// What is closure? 
// {

// }

// What is IndexOf?
// {

// }

// What is deferment with let , const and var?
// {

// }


// What is global variable? 
// {

// }


// What is scope variable? 
// {

// }


// What is scope block?
// {

// }

// What is fetch?
// {

// }

// What is async await function?
// {

// }

// What is asynchronous?
// {

// }

// What is synchronous?
// {

// }

// What is addEventListener?
// {

// }

// What is Invoked function?
// {

// }


// What is switch?
// {

// }

// What is  union set?
// {

// }

// What is intersection set?  
// {

// }

// What is  universal set? 
// {

// }

// What is weak sets?
// {

// }