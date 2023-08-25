

// ----------------------------------------------------     BASICS-2    -------------------------------------------------------

/* topics covered: 
    1. function
        1. arrow function(=>)
        2. use of rest parameter
        3. spread operator
        4. variables
        5. default values
        6. return values
        7. function expression
        8. function declaration
        9. types of function
        10. difference between function() and function 
        11. first class function
        12. call back functions
        13. anonymous functions
        14. higher order function
        15. this- keyword
        16. immidiatly invoke function
        17. forEach()
        18. map()
        19. filter()
        20. find()
        21. findIndex()
        22. findLast() and findLastIndex()
        23. fill()
        24. reduce()
        25. chaining
    2. scope ______________________________
        1. global scope
        2. local/functional scope
        3. local scope
        4. script scope
        5. temporal dead zone
    3. recursion __________________________
    4. dataype conversion _________________
        1. parseInt()
            1. parseInt with radix
    5. ternary(conditional) operators _________________
*/

/* structure of a function:
    function functionName() {
            ...........
    }

    NOTE: functions and Strings are the only that are stored in the heap, other than String and functions are stored in the stack.
        --> String is stored inside the heap memory which is specially designed for storing the String only, it is called "String-pool".

        --> e.g.
                let x= function sum1(a,b) {     
                            return a+ b;
                        } 

            --> functions are objects and functions are stored in heap
            --> ****************************************************
*/
// function declaration:

function sum1(a,b) {     
    return a+ b;
}

let a1= sum1("1", 2);
console.log("1.",a1); // --> 12

// 1st case: when only 'hi' written while calling the function

    function hi1(){
        console.log("2.","hello");
    }
    console.log(hi1); // --> [Function: hi]
    // hi1 --> this is 'passing' the function
    // hi1() -- > this is 'calling' the function

// 2nd case: ***********************

    function hi2(){
        console.log("2a.","hello");
    }
    console.log(hi2()); // --> hello undefined  => because first it will print 'hello' and then return the default value which is undefined and print that.
                        // --> if the return is not written inside the function then that function will return the value undefined as default

// 3rd case: empty function

    function hi3(){
    }
    console.log(hi3()); // --> undefined

/*    NOTE: when a function has no return value, JS make default return value as 'undefined'
*/

// ----------------------- 1. Arrow function (=>) ------------------------- 

    /* 
        NOTE: 1. normal functions have its own context.
              2. arrow function does not have its own context. It will take the context
                 of nearest normal parent function.
    */ 

    let fuo = function() {
        const myVar = "value";
        return myVar;
    }
    console.log("2b.", fuo());

    // in arrow function (Systex): 

    let fuo1 = (/* parameters (if have any) */) => {
        const myVar = "value";
        return myVar;
    }

    // When there is no function body, and only a return value then,

    // case 1: 
        let fuo2 = () => "value";

    /* case 2: default parameters:  the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. 
                                    You can add default values for as many parameters as you want. */ 


        const greeting = (name = "Anonymous") => "Hello " + name;

        console.log("2c.",greeting("John")); // --> Hello John
        console.log("2d.",greeting()); // --> Hello Anonymous

    // case 3:

        function fou3() {
            console.log("2d-1",arguments);
            console.log("2d-2",typeof arguments); // --> object
        }
        
        // arguments = keyword only for normal function not for arrow function

        /*  arguments: 'arguments' keyword allows a function to accept an indefinite number of arguments as an array.
                        --> e.g. function fou3(){.....}
        */

        const fou4= ()=>{
            console.log("2d-3",typeof arguments);// --> in terminal: object and in browser: undefined
            // console.log("2d-4",arguments);
        }
        
        fou3("hello", "hi"); // --> [Arguments] { '0': 'hello', '1': 'hi' } and in browser: --> Arguments(2) ['hello', 'hi']
        fou4("hehe"); /* --> in browser: Uncaught ReferenceError: argument is not defined
                         --> in terminal:
                                        [Arguments] {
                                            '0': {},
                                            '1': [Function: require] {
                                            resolve: [Function: resolve] { paths: [Function: paths] },
                                            main: Module {
                                                id: '.',
                                                path: 'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\Basics',
                                                exports: {},
                                                filename: 'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\Basics\\functions.js',
                                                loaded: false,
                                                children: [],
                                                paths: [Array]
                                            },
                                            extensions: [Object: null prototype] {
                                                '.js': [Function (anonymous)],
                                                '.json': [Function (anonymous)],
                                                '.node': [Function (anonymous)]
                                            },
                                            cache: [Object: null prototype] {
                                                'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\Basics\\functions.js': [Module]
                                            }
                                            },
                                            '2': Module {
                                            id: '.',
                                            path: 'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\Basics',
                                            exports: {},
                                            filename: 'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\Basics\\functions.js',
                                            loaded: false,
                                            children: [],
                                            paths: [
                                                'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\Basics\\node_modules',
                                                'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\node_modules',
                                                'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\node_modules',
                                                'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\node_modules',
                                                'C:\\Users\\dell\\Desktop\\CSE\\node_modules',
                                                'C:\\Users\\dell\\Desktop\\node_modules',
                                                'C:\\Users\\dell\\node_modules',
                                                'C:\\Users\\node_modules',
                                                'C:\\node_modules'
                                            ]
                                            },
                                            '3': 'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\Basics\\functions.js',
                                            '4': 'C:\\Users\\dell\\Desktop\\CSE\\Web_Development\\Learning\\JavaScript\\Basics'
                                        }

                    */

    /* Case 4: use of Rest parameter with function parameters:  With the rest parameter, you can create functions that take a variable number of arguments. 
                These arguments are stored in an array that can be accessed later from inside the function.

            --> The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
            --> (...) = symbol of rest parameter
            --> we can also use 'arguments' instead of '...'
    */

    console.log();
    console.log("rest parameter");
    console.log();

    // without Rest parameter:
        const asum = (x, y, z) => {
            const args = [x, y, z];
            let total = 0;
            for (let i = 0; i < args.length; i++) {
            total += args[i];
            }
            return total;
        }

        console.log("2e.", asum(0, 1, 2));// --> 3
        console.log("2f.", asum(1, 2, 3, 4));// --> 6
        console.log("2g.", asum(5)); // --> NaN
        console.log("2h.", asum());// --> NaN

    // using Rest parameter:

        const bsum = (...args) => {
            let total = 0;
            for (let i = 0; i < args.length; i++) {
            total += args[i];
            }
            return total;
        }
        console.log("2i.", bsum(0, 1, 2)); // --> 3
        console.log("2j.", bsum(1, 2, 3, 4)); // --> 10
        console.log("2k.", bsum(5)); // --> 5
        console.log("2l.", bsum()); // --> 0

        /*
            (...) parameter will remove the boundaries of host array and place all values inside newly created array

        */

    /* Case 5: use spread operator to evaluate arrays in-place: it allows us to expand arrays and other expressions 
               in places where multiple parameters or elements are expected.
    */
    console.log();
    console.log("spread(...) parameter");
    console.log();

        // e.g. 1: to find max value in an array
            var arr2a= [6, 89, 3, 45];
            var maximus = Math.max.apply(null, arr2a);

            console.log("2m.", maximus); // --> 89
            
            /* We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. 
               The spread operator makes this syntax much better to read and maintain.
            */

        // e.g. 2: 
            const arr1a = [6, 89, 3, 45];
            const maximus1 = Math.max(...arr1a);

            console.log("2n.", maximus1); // --> 89

            /* ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, 
               like in an argument to a function or in an array literal. The following code will not work:

                                const spreaded = ...arr;

            */

        // e.g 3:
            const arr1b = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
            let arr2b;
            
            arr2b = [...arr1b];
            
            console.log("2o.",arr2b); // --> [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]


// ------------------------------ variables -------------

let c= 12;

function sum2(a, b) {
    return a+b+c;
}

let a2= sum2(1,2);
console.log("3.",a2); // --> 15

// -------------- default values

function sum3(a,b = 1) {
    return a+b;
}

let a3= sum3(99);
console.log('3a.', a3); // --> 100

let a4= sum3(99, 2);
console.log('4.',a4); // --> 101

// -------------- what a function returns

function sum4(a,b) {
    return a*b;
}

let a5= sum4(1,2);
console.log('5.',a5); // --> 2

function myFun() {
    console.log("5.","Hello");// --> Hello
    return "World";             // myFun() will first print "Hello" and return the string "World"
    console.log("byebye"); // this line will never execute because the function exits at the 'return' statement. 
  }
  myFun();

// ------------ function expression

let sum5 = function(a,b) { // --> function expression
    return a-b;
}

let a6= sum5(1,3);
console.log('6.',a6); // --> -2

// ----------- function decalaration

function sum6(a,b) { // --> function declaration
    return a-b;
}

a6= sum6(1,3); // -------------> function call
console.log('7.',a6); // --> 3

// type of a function 

console.log('8.', 'type of function:', typeof sum6()); // --> number

const a7= function hi(){}

function hello() {}
console.log('9.', 'type of function:', typeof a7); // --> function
console.log('10.', 'type of function:', typeof hello()); // --> undefined

// -----------------------------------difference between function() and function

// -----------------------------------first class function

console.log();
console.log("first class function");
console.log();

/*
    first class function: A programming language is said to have First-class functions when functions in that language are treated like any other variable. 
                        --> For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
                        --> treat functions like variables i.e.:
                            1. Assigning a function to a variable
                            2. Passing a function as an argument
                            3. Returning a function

                        --> things we can do with variable:
                            1. we can declare variables
                            2. we can pass variables in function as an argument
                            3. we can return the variable from the function

        e.g.: 
            let x= 10;                                                    
            function sum(c) {                                            
                c++;                                                    
                return c;                                                  
            }                                                          
            let x1= sum(x);//                                               
            console.log("11.", x1); // --> 11                            
                                                    
            // local scope                                                  
            function sum() {                                            
                let a= 53;                                               
                a++;                                                      
                console.log("12.",a);// -->                                 
            }                                                            
            console.log("12a",sum());// -->            
            console.log(a); --> error: a is not defined
*/

// e.g. 1:
    
    // space ships method 
    function spaceShip(func, num1, num2) {
        // check for auth 
        // log 

        console.log("10a.",num1, num2);

        if(num1 === "utkarsh") {
            func();
        } else {
            console.log("10b.",'hacking spaceship dectected')
        }
    }
    
    spaceShip(lifeSupport, 'utkarshasdasdasdasdas', 24);

    function weapons() {
        console.log("10c.",'weapons acrtivaged');
    }

    function lifeSupport() {
        console.log("10c.",'lifeSupport');
    }

    function food() {
        console.log("10c.",'food');
    }

    food();

    food;

// 12. call back functions:
console.log();
console.log("call back functions");
console.log();
    
    // e.g. 1: 

        function logging(callBackFunction) {
            console.log("11.",'logging'); // --> logging
            callBackFunction();
        }

        function sum9(a,b) {
            console.log("11a.",a+b); // --> NaN (why?)
            return a+b;
        }
        logging(sum9);
        // sum9(1,2);

    // e.g.2: 
        function calculator1(operation) {
                //************************************************************************* */
        }


// ------------------------------------------anonumous functions:
console.log();
console.log("anonymous functions");
console.log();
        
        /*
            anonymous function: function that does not have any name
            
        */

        // e.g. 1:
            const value1= (func1) => {
                console.log("11a1.", "hello");
                func1();
            }
            let func1= () => {
                console.log("11a2.", "summer");
            }
           value1(() => {
                console.log("11a3.", "hehe")
           }) 
           value1(func1);/* output: 
                                    11a1. hello
                                    11a3. hehe
                                    11a1. hello
                                    11a2. summer
                        */   

        // e.g. 2: (using arrow function)

            const sum10= (a,b) => {
                return a+b;
            }
            let ans= sum10(1,3);
            console.log("11b.", ans); // --> 4

        // e.g. 3:
            



// ------------------------------------------higher order functions:
console.log();
console.log("higher order functions");
console.log();

/* 
    --> the function which can return a function is a higher order function
    --> the function which can accept a function as an argument is a higher order function.

*/
    //e.g. 1:

        






// this- keyword:

            let arrowFunction= ()=> {
                console.log("11f.",this);
            }

            function normalFunction() {
                console.log("11g.",this);
            }
    /* 
    NOTE: 1. normal functions have its own context.
          2. arrow function does not have its own context. It will take the context
             of nearest normal parent function.
    */
             arrowFunction({surname: "jack"});// -->in browser: window{....} and in terminal: {} 
             normalFunction({surname: "hello"}); // --> in browser: {surname: 'hello'}
    
    // in this case, the outout of both functions is same in the 'BROWSER'.
            arrowFunction();// -->in browser: window{....} and in terminal: {} 
            normalFunction();/* --> in browser: window{....} 
                                    and in terminal:
                                                <ref *1> Object [global] {
                                                global: [Circular *1],
                                                queueMicrotask: [Function: queueMicrotask],
                                                clearImmediate: [Function: clearImmediate],
                                                setImmediate: [Function: setImmediate] {
                                                    [Symbol(nodejs.util.promisify.custom)]: [Getter]
                                                },
                                                structuredClone: [Function: structuredClone],
                                                clearInterval: [Function: clearInterval],
                                                clearTimeout: [Function: clearTimeout],
                                                setInterval: [Function: setInterval],
                                                setTimeout: [Function: setTimeout] {
                                                    [Symbol(nodejs.util.promisify.custom)]: [Getter]
                                                },
                                                atob: [Function: atob],
                                                btoa: [Function: btoa],
                                                performance: Performance {
                                                    nodeTiming: PerformanceNodeTiming {
                                                    name: 'node',
                                                    entryType: 'node',
                                                    startTime: 0,
                                                    duration: 81.18199998140335,
                                                    nodeStart: 4.35369998216629,
                                                    v8Start: 9.044099986553192,
                                                    bootstrapComplete: 42.002499997615814,
                                                    environment: 21.64910000562668,
                                                    loopStart: -1,
                                                    loopExit: -1,
                                                    idleTime: 0
                                                    },
                                                    timeOrigin: 1681994221787.717
                                                },
                                                fetch: [AsyncFunction: fetch]
                                                }

            */



// 16. immidiatly invoke function

console.log();
console.log("16. immidiatly invoke function");
console.log();

    /*
        immidiatly invoke function: used when you want to call a function only one time at the time of declaration 
    */

    // e.g 1:
        (
            ()=> {
                console.log("11h.", "I.I.F. with anonymous arrow function function");
            }
        )(); // --> I.I.F.

    // e.g.2:
        (
            ()=> {
                console.log("11i.", "I.I.F. with using 'argumnets' keyward");
            }
        )(arguments); // --> in terminal: I.I.F.
                      // --> in browser: Uncaught ReferenceError: arguments is not defined
 
    // .e.g. 3:
        (
            function print() {
                console.log("11j.", "I.I.F. with function name");
            }
        ) (); // --> I.I.F. with function name

    // .e.g. 3:
        (
            function () {
                console.log("11k.", "I.I.F. with normal anonymous function");
            }
        ) (); // --> I.I.F. with normal anonymous function


    // 17. for each() function: whatever we write inside the forEach function, it will be executed for each array element
    console.log();
    console.log('forEach() function');
    console.log();

        arr= [12,26,31,48,55,69];
        /*
            1. parent: forEach() 
            2. callback: () => {
                    print out element
               } user's function ARROW function

            NOTE: any type of functions will work for forEach() function
                --> forEach is an 'HIGHER ORDER FUNCTION'
                --> syntex: 
                            object.forEach(sum) {     here, sum= function passing and forEach()= function executing
                                ..........
                            }

                            function sum(a,b) {
                                console.log("hi");
                                return a+b;
                            }

                --> in syntex, forEach() calls the sum() function and written without parameters, it is called passing the function.
                    and forEach() function takes sum function as an argument.
                
                NOTE: forEach() ignores or does not consider any values that are returned from the function.
                    --> here in the function sum(a,b), forEach() will print "hi" and ignores or does not consider return value(i.e. 'a+b')

            --> works in two parts:
                1. iterate / go through every element
                2. call the call-back function
        */

        arr.forEach(
            (value, index, array) => {
                console.log("11l.",value, index, array); // i --> value, j --> index, k --> array
            }
        )
        /*
            OUTPUT: 12 0 [ 12, 26, 31, 48, 55, 69 ]
                    26 1 [ 12, 26, 31, 48, 55, 69 ]
                    31 2 [ 12, 26, 31, 48, 55, 69 ]
                    48 3 [ 12, 26, 31, 48, 55, 69 ]
                    55 4 [ 12, 26, 31, 48, 55, 69 ]
                    69 5 [ 12, 26, 31, 48, 55, 69 ]
        */

        // let print= (value, index, array) => {
        //     console.log("11l_1.", "data: ", value*2);
        // }

        // arr.forEach(print);

        // let arr2c= [1,2,3,4,5,6];
        // myforEach(print, arr);

        // function myforEach(callbackfunc, arr) {
        //     for(let i=0; i< arr.length; i++) {
        //         callbackfunc(arr[i], i, arr)
        //     }
        // }

    // ------------------- 18. map():
    console.log();
    console.log('map() function');
    console.log();

        /*
            NOTE: unlike forEach(), map() consider the values that are returned from the function that is called and executed by map().

                --> map() will create a copy of an array(i.e. arr), and store the values that is returned or the values on which operation was performed by the function.
                --> the array created by the map() have same length but,
                            e.g. arr !== result
                            i.e. arr and result are at different location inside the heap memory.

                --> map can take any type of return value
                --> return value go to map() and map() store that value inside newly created array and assign that array to variable(i.e. result)
                
        */
    // e.g.1:
        arr= [12,26,31,48,55,69];
        
        
        let result= arr.map((value, index, array) => {
            console.log("11m.",value + " map at the index of: ", index);
            let rank= '';
            if(value < 22) {
                rank= "undergrad";
            } else if(value >= 22 && value < 30) {
                rank= "passed out";
            } else if(value >= 30) {
                rank= "experienced";
            }

            let obj= {
                age: value,
                ramk: rank,
            }

            return obj;
        })
        /* OUTPUT:
            12 map at the index of:  0
            26 map at the index of:  1
            31 map at the index of:  2
            48 map at the index of:  3
            55 map at the index of:  4
            69 map at the index of:  5
        */

        console.log("11n.",arr); // --> [ 12, 26, 31, 48, 55, 69 ]
        console.log("11o.", result);/*  OUTPUT:
                                            [
                                                { age: 12, ramk: 'undergrad' },
                                                { age: 26, ramk: 'passed out' },
                                                { age: 31, ramk: 'experienced' },
                                                { age: 48, ramk: 'experienced' },
                                                { age: 55, ramk: 'experienced' },
                                                { age: 69, ramk: 'experienced' }
                                            ]
                                    */
        
        
    // e.g. 2:
        arr.map((value, index, array) => {
            console.log("11p.",value + " map at the index of: ", index);
        })
        /*
            OUTPUT:
                12 map at the index of:  0
                26 map at the index of:  1
                31 map at the index of:  2
                48 map at the index of:  3
                55 map at the index of:  4
                69 map at the index of:  5
        */
       

        // ---------------- create map customly / manually:
            let arr3a= [1,2,3,4,5,6];

            const hocMap= (callBackFunction, array) => {
                const result= [];
                for(let i= 0; i< array.length; i++) {
                    result.push(callBackFunction(array[i], i, array));
                }

                return result;
            } 

            const hocCallback= (value, index, array) => {
                return value * 2;
            }

            const mayMapData= hocMap(hocCallback, arr3a);
            console.log("11q.", mayMapData); // --> [ 2, 4, 6, 8, 10, 12 ]

        // e.g. 3:
            arr3a= [1,2,3,4,5,6];

            let ans9= arr3a.map((num) => {
                return num * 2;
            });

            console.log("11q1.", ans9); // --> [ 2, 4, 6, 8, 10, 12 ]



    // 19. filter()

    console.log();
    console.log(`using 'filter'`);
    console.log();

        /*
            --> filter can only accept boolean return values and truthy and falsy values
        */

        let arr1e= [1,5,7,3,2,9,8,45,21,11,19,103,391,231];

        let result1= arr1e.filter((value) => {
                                                    //__________________
            if(value % 2 == 0) {                    //                  |
                return true;                        //                  |
            } else {                                //                  |-----> call-back function and it will return the value to filter().
                return false;                       //                  |
            }                                       //__________________|

        });

        console.log("11r.",result1);// --> [ 2, 8 ]

        /*
            --> filter will create its own array and only stores the value that is true inside it.
            --> and at the end filter() assign that array to variable(i.e. result1)
        */


    // 20. find():
    console.log();
    console.log(`using 'find()'`);
    console.log();

        arr1e= [1,5,7,3,2,9,8,45,21,11,99,19,103,99,231];

        let ans4= arr1e.find( (value) => {
            if(value == 99) {
                return true;
            }
        })

        console.log("11s.", ans4); // --> 99

        let ans5= arr1e.find( (value) => {
            if(value == 99999) {
                return true;
            }
        })

        console.log("11t.", ans5); // --> undefined


    // 21. findIndex():
    console.log();
    console.log(`using 'findIndex()'`);
    console.log();

        arr1e= [1,5,7,3,2,9,8,45,21,11,99,19,103,99,231];

        let ans6= arr1e.findIndex( (value) => {
            if(value == 99) {
                return true;
            }
        })

        console.log("11u.", ans6); // --> 10

        ans6= arr1e.findIndex( (value) => {
            if(value == 999999) {
                return true;
            }
        })

        console.log("11v.", ans6); // --> -1


    // 22. findLast() and findLastIndex(): start searching from last index
    console.log();
    console.log(`findLast() and findLastIndex()`);
    console.log();

        arr1e= [1,5,7,3,2,9,8,45,21,11,99,19,103,99,231];

        let ans7= arr1e.findLast( (value) => {
            if(value == 99) {
                return true;
            }
        })

        console.log("11w.", ans7); // --> 99

        ans7= arr1e.findLastIndex( (value) => {
            if(value == 99) {
                return true;
            }
        })

        console.log("11x.", ans7); // --> 13

        ans7= arr1e.findLastIndex( (value) => {
            if(value == 99999) {
                return true;
            }
        })

        console.log("11y.", ans7); // --> -1


    // 23. fill():
    console.log();
    console.log(`arrays.fill()`);
    console.log();

        arr1e= [1,5,7,3,2,9,8,45,21,11];
        arr1e.fill(0); 
        console.log("11z.", arr1e); // --> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        arr1e= [1,5,7,3,2,9,8,45,21,11];
        arr1e.fill(0, 3); 
        console.log("11aa.", arr1e); // --> [1, 5, 7, 0, 0, 0, 0, 0, 0, 0]

        arr1e= [1,5,7,3,2,9,8,45,21,11];
        arr1e.fill(0, 3, 5); 
        console.log("11bb.", arr1e); // --> [1, 5, 7, 0, 0, 9, 8, 45, 21, 11]

        arr1e= [1,5,7,3,2,9,8,45,21,11];
        arr1e.fill(0, 12); 
        console.log("11cc.", arr1e); // --> 

    // 24. reduce():
    console.log();
    console.log(`reduce()`);
    console.log();

        arr1e= [1,5,7,3,2,9,8,45,21,11];

        /* accumulator: the latest value at that point of time
            e.g. :
                if we are at the 4th index, then accumulator's value is: 
                    accumulator= 1 + 5 + 7 + 3 and value= 2
        */
       
        // e.g. 1:

            let ans8= arr1e.reduce( (accumulator, value) => {
                return accumulator + value;
            }, 0); // '0' --> initial value assigned to accumulator at starting point

            console.log("12.", ans8); // --> 112

        // e.g. 2:
        
            ans8= arr1e.reduce( (accumulator, value) => {
                return accumulator + value;
            }); 

            console.log("12a.", ans8); // -->112

            /* NOTE: if we not initialize the value to 'accomulator' (i.e. '0' in e.g. 1), then 'accomulator' will take value at 0th index by default 
                     and start from 1st index as shown in e.g. 2.
            */
        
        // e.g. 3
            
            arr1e= [1,2,3,4,5,6];

            ans8= arr1e.reduce( (accumulator, value) => {

                if(value % 2 !== 0) {
                    return accumulator + value;
                }
                return accumulator
            }, 0); 

            console.log("12a.", ans8); // --> 9

        // e.g. 4:
            
            arr1e= [1,2,3,4,5,6];

            ans8= arr1e.reduce((accum, arr) => {
                accum.push(arr * 2);
                return accum;
            },[]);

            console.log("12b.", ans8); // --> [ 2, 4, 6, 8, 10, 12 ]
            /*
                Note: we cannot write like this:
                             return accum.push(arr * 2);
                    --> .push() is a function and it also returns the value 
                    --> reduce() method is used to apply same operation again and again on the result with different no.of elements 
                    --> e.g. 
                                arr1e= [74,2,3,4,5,6];

                                ans8= arr1e.reduce((accum, arr) => {
                                   return accum.push(arr * 2);
                                },[]);

                                console.log("12b.", ans8); // --> Error: accum.push is not a function

                        --> during runtime: 
                            --> reduce() will start with 0th index as we have initialized the array [] to 'accume'
                            --> at 0th index,  value= 74 so it will go to call-back function,
                            --> in call-back function, first, 'accum.psh()' function will execute
                            --> 'accum.push(arr*2)' will push that value inside accume (i.e. [74])
                            --> BUT WHEN IT COMES TO RETURN THE VALUE FROM 'accum.push()', IT WILL RETURN THE LENGTH OF ARRAY(i.e. length of [1])
                            --> the array length is NUMBER and when this returned array length go to reduce(), it will store that array length in place of [1]
                                    i.e. '1' in memory of reduce() function
                            --> now reduce() will go to second index and when call-back function tries to push that value, the array would not be present inside reduce() function,
                                therefore 'accum.push()' will not work and give error as push() can only work on arrays not NUMBERS.
                                    i.e. console.log("12b.", ans8); // --> Error: accum.push is not a function
            */

        // e.g. 5: making reduce() function customly
                                
            arr1e= [1,1,2,3,4,11,22,55,77,88,3,6,9,44,1];

            arr1e.sort((a, b) => a-b);
            console.log("12c.", arr1e); // --> [1,  1,  1,  2,  3,  3, 4,  6,  9, 11, 22, 44, 55, 77, 88]

            let obj1= {};
            let count= 1;

            for(let i=0; i<arr1e.length-1; i++) {
                if(arr1e[i] == arr1e[i+1]) {
                    count++;
                } else {
                    obj1[arr1e[i]]= count;
                    count= 1;
                }
            }

            obj1[arr1e[arr1e.length - 1]]= count;

            console.log("12d.", obj1); /* --> {
                                                '1': 3,
                                                '2': 1,
                                                '3': 2,
                                                '4': 1,
                                                '6': 1,
                                                '9': 1,
                                                '11': 1,
                                                '22': 1,
                                                '44': 1,
                                                '55': 1,
                                                '77': 1,
                                                '88': 1
                                            }

                                        */
            
            // e.g. 6:

                arr1e= [1,5,2,3,4,];  
                
                function reduced(array, callback, dv) {
                    let ans= dv;
                    for(let i= (dv ? 0 : 1); i<arr1e.length; i++) {
                        ans= callback(ans, arr1e[i]);
                    }
                    return ans;
                }

                function callback(ans, i) {
                    return ans * i;
                }
                console.log("12e.", reduced(arr1e, callback, 1)); // 120
                console.log("12f.", reduced(arr1e, callback, 0)); // 0
                console.log("12f1.", arr1e.reduce(callback, 0)); // 0


             // e.g. 7:

                let callback_2= (ans, i) => {
                    if(ans.hasOwnProperty(i)) {
                        console.log("12g. on ", ans[i]);
                        ans[i]= ++ans[i];
                        console.log("12h. off ",ans[i]);
                    } else {
                        ans[i]= 1;
                    }
                    return ans;
                }

                arr1e= [1,1,2,3,4,11,22,55,"rom", "james","rom","stephen"]; 

                console.log("12i.", reduced(arr1e, callback_2, {})); /*
                                                                        12f. on  1
                                                                        12g. off  2
                                                                        12f. on  1
                                                                        12g. off  2
                                                                        
                                                                        12h. {
                                                                        '1': 2,
                                                                        '2': 1,
                                                                        '3': 1,
                                                                        '4': 1,
                                                                        '11': 1,
                                                                        '22': 1,
                                                                        '55': 1,
                                                                        rom: 2,
                                                                        james: 1,
                                                                        stephen: 1
                                                                        }

                                                                     */
        
                console.log("12j.", reduced(arr1e, callback_2, "hi")); // --> hi






    // 25. chaining: ****************************************
    console.log();
    console.log(`chaining`);
    console.log();

        // e.g. 1:

            let data = [].map(() => {
                return true;
            }).reduce((acc, curr) => {
                return acc + curr;
            }, 0);

            console.log("12p.", data); // --> 0




                


                                    


// ----------------------------- 2.scope:
console.log();
console.log("global scope and local scope");
console.log();

    /* 
        1. scope: in JS, it refers to the visibility of variables.
        --> these scopes are connected with each other and it is called 'linking'.

            1. Global scope:
                --> Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
                --> Variables which are declared without the let or const keywords are automatically created in the global scope.   
            
            2. Local scope / functional scope:
                --> Variables which are declared within a function, as well as the function parameters, have local scope. 
                --> That means they are only visible within that function.
                --> local scope only created when function is declared.

                NOTE: when you declare a variable with 'let' or 'const' inside local scope, that will take another part of memory inside the local scope as script scope.
                    i.e. script scope inside local scope(means you cannot access a variable which is declared with 'let' or 'const' before initializing it.)
                    e.g.:
                            const x= function(a) {
                                console.log(b); -----------------> this will give an error: 'b is not defined'

                                let b= 30;
                                return a+b;
                            }
            3. Script scope:
                -->
            NOTE: It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.


    */

    // 1. global scope:                                 ______________
        let x= 10;                          //                        |
        function sum(c) {                   //                        |
            c++;                            //                        |
            return c;                       //                        |   
        }                                   //                        |
        let x1= sum(x);                     //                        |
        console.log("13.", x1); // --> 11   //                        |
                                            //                        |---------------------check the solution and think why it is printing like that
    // 2. local scope                                                 |
        function sum() {                    //                        |
            let a= 53;                      //                        |
            a++;                            //                        |
            console.log("13a.",a);// -->                              |
        }                                   //                        |
            console.log("13b",sum());// -->            _______________|
        // console.log(a); --> error: a is not defined

    // if local and global variable are same:

        const a8= 1;
        console.log("14.", a8); // --> 1
        function sum3() {
            const a8= 5;
            return a8;
        }

        console.log("14a.",sum3());// --> 5

        const a9= "abc";
        console.log("15.", a9); // --> abc
        function sum4() {
            let a9= 234;
            return a9;
        }
        console.log("16.",sum4()); // --> 234

    /*  --> A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, 
            when you call it, the function processes the inner code but the returned value is 'undefined'.
    */

        let a10= "den";
        console.log("16.", a10); // --> den
        function sum7(x1) {
            a10 += x1;
        }
        sum7(69);
        console.log("17.", a10); // --> den69

        let sum8 = 0;
        console.log("18.", sum8); // --> 0
        function addSum(num) {
        sum8 = sum8+ num;
        }

        console.log("19.",addSum(3)); // --> undefined

        // functional scope:
            /*  --> it is generally a scope made by a function
                --> after returning the value this functional scope erroded from the call stack.
            */
    // 4. script scope






    // 5. temporal dead zone




// recursion
console.log();
console.log("recursion");
console.log();
    
    // e.g- 1:
        arr= [1, 2, 3, 4];

        function multiply(arr, n) {
            if (n === 0) {
            return 1;
            } else {
            return multiply(arr, n - 1) * arr[n - 1];
            }
        }

        a= multiply(arr, arr.length);
        console.log("20.", a); // --> 24

    // e.g.- 2:

        function rangeOfNumbers1(start, end) {
            if(end < start) {
              return [];
            } else {
              let x= rangeOfNumbers1(start+1, end);
              x.unshift(start);
              return x;
            }
        };

        a= rangeOfNumbers1(1, 5);
        console.log("21a.", a); // --> [ 1, 2, 3, 4, 5 ]

    // e.g.- 3:

        function rangeOfNumbers2(start, end) {
            if(end < start) {
            return [];
            } else {
            let x= rangeOfNumbers2(start+1, end);
            x.push(start);
            return x;
            }
        };

        a= rangeOfNumbers2(1, 5);
        console.log("22a.", a); // --> [ 5, 4, 3, 2, 1 ]


// datatype conversion
console.log();
console.log("datatype conversion");
console.log();

    b1= "40092"
    console.log("23.", typeof b1); // --> string
    b2= parseInt(b1);
    console.log("24.", typeof b2); // --> number


    /* parseInt() with radix: 
        e.g. let a= parseInt(string, radix);

        --> 'radix' specifies the base of the number in the string btween 2 to 36.
    */

        b1= "11";
        console.log("25.", typeof b1); // --> string

        b2= parseInt(b1, 2);  // --> radix variable says that 45 is in the binary number

        console.log("26.", b2); // --> 3
        console.log("27.", typeof b2); // --> number

    // e.g 2:
        b1= "45";

        b2= parseInt(b1, 2);
        console.log("28.", b2); // --> NaN


// ternary(conditional) operators:
console.log();
console.log("ternary operators");
console.log();

    /*
        function findGreater(a, b) {
            if(a > b) {
                return "a is greater";
            }
            else {
                return "b is greater or equal";
            }
        }
    */

        /* 
            a ? b : c => 'a' is the condition, 
                         'b' is the code to run when condition returns true 
                         'c' is the code to run when condition returns false
        */ 

    function big(a, b) {                                                          
        return a <b ? "a is big" : "b is big or equal"
    }

    /*
        function findGreater(a, b) {
            if(a === b) {
                return "a and b are equal";
            }
            else {
                if(a > b) {
                    return "a is greater";
                } else {
                    return "b is greater";
                }   
            }
        }
    */

    function findGreaterOrEqual(a, b) {
        return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
    }