

// ----------------------------------------------------     BASICS   -------------------------------------------------------

/* topics covered: 
    -> jargon words
    1. datatypes _____________________________________________________
        1. 'typeof' variables
        2. 'typeof' datatypes
    2. mathematical operators and operations _________________________
    3. array _________________________________________________________
        1. use of push, pop, shift and unshift and exceptions
        2. slice
        3. splice
        4. sorting
    4. loops _________________________________________________________
        1. for loop ____________________________________________
            1. for of loop
            2. for in loop
        2. while loop __________________________________________
        3. do while loop
    5. switch case ___________________________________________________
    6. var, let and const ____________________________________________
    7. string ________________________________________________________
    8. try and catch
    
*/

var roll_no= 54;
var name= "Dharmik";
var ans1= 1/0;
var ans2= 0/1;
var active= false;
good= null;
var number= 0*0;


debugger
/* jargon words in javascript:

    1. 'typeof' : gives the type of value that is assigned to the perticular variable.
*/

// 1. datatypes **********
    console.log('datatypes');// --> 
    console.log("1.",typeof ans1);// --> numner
    console.log("2.",typeof 1*0);// --> NaN
    console.log("3.",typeof Infinity);// --> number
    console.log("4.",typeof ans2);// --> number
    console.log("5.",typeof 0/1);// --> NaN
    console.log("6.",typeof 0/0);// --> NaN
    console.log("7.",typeof number);// --> number
    console.log("7a.",typeof active);// --> boolean

    // 'typeof' for variables:

        console.log("types of datatype");
        console.log("8.",typeof String);// --> function
        console.log("9.",typeof Number);// --> function
        console.log("10.",typeof Boolean);// --> function
        console.log("11.",typeof undefined);// --> undefined
        console.log("12.",typeof null);// --> object
        console.log("13.",typeof BigInt);// --> function
        console.log("14.",typeof good);// --> object
        console.log("15.",typeof NaN);// --> number

        let dr= [1,32];
        console.log("15a.",typeof dr);// --> object
        // console.log('15b.',arr.isArray(dr));// --> true   ****************************************

        console.log();
        console.log("using type of 2 times");// --> 
        console.log();
        console.log("16.",typeof typeof ans1); // --> typeof(Infinity) --> string


    // 2. 'typeof' for datatypes  *********
        console.log();
        console.log('about datatype');
        console.log();
        var s= "dcweawhcewca";
        var num= Number(s);
        console.log("17.",typeof s);// --> string
        console.log("18.",typeof num); // --> number
        console.log("19.",isNaN(num));// --> true
        console.log("20.",typeof 'xqlxnqli'); //--> string
        console.log("21.",typeof +'xqlxnqli'); //--> number

        s= '1234';
        console.log("22.",isNaN(s));// --> false because s is number

        s= 'ghfjslk';
        console.log("23.",isNaN(s));// --> true because s is not a number

// 2. mathematical operators and operations
console.log();
console.log('mathematical operators and operations');
console.log();

    let x= 'a' + 2;
    console.log('24.',x); // --> a2

    let a= 2 + 'a';
    console.log('25.',a);// --> 2a

    let b= 1;
    let c= 4;
    let d= 0.2;

    console.log('26a.',c * d); // --> 0.8

    console.log('26.',b == c); // --> false
    console.log('27.',b === c); // --> false
    console.log('28.',b !== c); // --> true
    console.log('29.',b != c); // --> true

    /* '===' is doing 2 things
        1. checking the value
        2. checking the type

        '==' --> only compares value
    */

    b='1';
    c= 4;
    console.log('30.',b === c); // --> false
    console.log('31.',b == c); // --> false

    c= 1;
    console.log('32.',b === c); // --> false
    console.log('33.',b == c); // --> true

    console.log('34.','a' < 'b'); // --> true
    console.log('35.','ram' > 'rgm'); // --> false
    console.log('36.','a' > 'A'); // --> true




// ------------------------------------- 3. array
console.log();
console.log('array');
console.log();

arr= [1,2,3,4,5];

console.log("37.", arr[10]); // --> undefined
console.log("37a.",arr["2"] !== arr["02"]); // --> true

console.log("37b.", Object.keys(arr)); // --> [ '0', '1', '2', '3', '4' ] --> indeces of 'arr'

// ------------------------------------------------- use of .push(): add at the end in array
arr.push("hi");
console.log('38a.',arr); // --> [ 0, 1, 2, 3, 'hi' ]
console.log('38a.',typeof arr[900]);// --> undefined
arr.push([1, "hello"]);
console.log('38b.',arr); // --> [ 0, 1, 2, 3, 'hi', [ 1, 'hello' ] ]

// ------------------------------------------------ use of .pop(): remove from the end in array and return it
let ax= arr.pop();
console.log('38b.',ax); // --> [ 1, 'hello' ]
console.log('38c.',arr); // --> [ 0, 1, 2, 3, 'hi' ]

// ------------------------------------------------ use of .shift(): remove from start in array

ax= arr.shift();
console.log('38d.',ax); // --> 0
console.log('38e.',arr); // --> [ 1, 2, 3, 'hi' ]

// ------------------------------------------------ use of .unshift(): add at start in array

arr.unshift([6, "den"], true);
console.log('38f.',arr); // --> [ [ 6, 'den' ], true, 2, 3, 'hi' ]

arr[92]= 1;
console.log('38g.',arr.length); // --> 93

// NOTE 1: push
    const arr3= [1,2,3,4];
    arr3.push(5);
    console.log("38h.", arr3); // --> [ 1, 2, 3, 4, 5 ]
    
    /*
        --> const is 'read only' then why we are able to make changes in an array?
            --> because array is an object, it will be stored inside heap and the address where it is stored will be given to 'arr3' which is stored inside the call stack.
                i.e. arr3= jjfk222 and 'jjfk222' is address of location of [1,2,3,4] which inside the heap
                arr3 --------------------> jjfk222 ( [1-->2-->3-->4] )
            
            --> so when you push a value to the 'arr3', that value(i.e. '5') will be stored inside the heap at different location let's say at 'kkdi8wwe@eod'
                i.e. in heap: at address jjfk222( [1-->2-->3-->4] ) and at kkdi8wwe@eod ( [5] )

            --> now the address of value '5' will be stored inside '4' just like "LINKED LIST".
            --> in heap all memory cells have their own address i.e. :
                1 = jjfk222
                2 = ejdhhfv@434rf
                3 = eejdiaa@eo55
                4 = vwovo7@fq84
                5 = kkdi8wwe@eod

            --> this is how the array will be look like:
                arr3(in the call stack) ------------> jjfk222 (in heap)

                1.next -------------> ejdhhfv@434rf (2)    i.e. 1 is pointing to the address of '2' in the heap
                2.next -------------> eejdiaa@eo55 (3)
                3.next -------------> vwovo7@fq84 (4)
                4.next -------------> kkdi8wwe@eod (5)
                5.next -------------> null

            --> from above, '1' is head of linked list or an array and after pushing '5' in array 'arr3', the address of head is not changing

            *******************************please check shift() and unshift()


    */  
   
// NOTE 2: push
    let arr1c= [1,2,3];
    const arr1d= [1,2,3,4];

    let ans3= arr1c.push(7); 
    console.log("38i.", arr1c); // --> [ 1, 2, 3, 7 ]
    console.log("38j.", ans3); // --> 4 --> this gives the length of an array same as 'arr1c.length'


// use of slice:
console.log();
console.log('slice');
console.log();

    arr1c= [1,2,3,4,5,6,7,8,9];

    ans3= arr1c.slice(2,5);
    console.log("38aa.",ans3); // --> [ 3, 4, 5 ]

    console.log("38bb.", arr1c === ans3); // --> false
    /*
        slice() method returns a SHaLLOW COPY of a portion of an array into a new array object selected from 'start' to 'end' ,
        ************************* MDN


    */

// use of splice: 
console.log();
console.log('splice');
console.log();

    arr1c= [1,2,3,4,5,6,7,8,9];

    ans3= arr1c.splice(2,5);
    console.log("38cc.",ans3); // --> [ 3, 4, 5, 6, 7 ]

    console.log("38dd.", arr1c);// --> [ 1, 2, 8, 9 ]


    /*
        **********************************MDN
    */


// use of sorting: 
console.log();
console.log('sorting');
console.log();

    arr1c= [4,8,3,1,2,6,8];

    let sort1= arr1c.sort();

    console.log("38ee.", sort1); // --> [ 1, 2, 3, 4, 6, 8, 8]
    console.log("38ff.", arr1c === sort1); // --> true


    let arr1e= [1,5,7,3,2,9,8,45,21,11,19,103,391,231]; // --> this will sort lexicographically
    console.log("38gg.", arr1e.sort()); // --> [1, 103, 11, 19, 2, 21, 231, 3, 391, 45, 5,  7, 8, 9]
    
    // sort in accending order:
    console.log("38hh.", arr1e.sort((a, b) => a - b)); // --> [1, 2, 3,  5,  7, 8, 9,  11, 19, 21, 45, 103, 231, 391]

    // sort in descending order
    console.log("38ii.", arr1e.sort((a, b) => b- a)); // --> [391, 231, 103, 45, 21, 19, 11,   9,   8,  7,  5,  3, 2,   1]


// NOTE 3: shift and unshift

    /*
        
    */


// loops
console.log();
console.log('for loop and array');
console.log();

/* for loop:
    1. for in --> loop over objects and its properties
              --> used to get the 'index / key'
    2. for of --> arrays and iterable objects (array is a default iterable object)
              --> used to get the 'value' of array
*/

var arr= [14, 45, 1,2];

// for of loop
    for(let i=0; i<arr.length; i++) {
        arr[i]= i;
    }
    console.log('39.',arr); // --> [ 0, 1, 2, 3 ]



    for(let i of arr) {
        if(typeof i == 'number') {
            console.log('39a.',i); // --> give values at perticular index
            console.log("39a1.", typeof i); // --> number
        }
    }

// e.g.-1 printing the sum of only int values

    arr= [1, 2, 3, "4", "5"];

    function add1(arr){
        let sum = 0;   
        for(let key of arr){  
            if(typeof key == 'number'){   
                sum += key;    
            }    
        }   
        console.log("39b.",sum);   
    }  
    add1(arr); // --> 6

// e.g.-2 printing the sum of both int values and string values
    function add2(arr){
        let sum = 0;
        let x=0;    
        for(let key of arr){  
            
            if(typeof key== 'string') {
                x += (+key);          // ----> '+' will convert string number to int
            } 
            if(typeof key == 'number'){   
                sum += key;    
            } 
        } 
        sum += x;   
        console.log("39c",sum);   
    }
    add2(arr); // --> 15

    //------------ OR ------------------
    // second method

    function add3(arr){
        let sum = 0;
        let x=0;    
        for(let key of arr){  
            sum += Number(key);        
        }   
        console.log("39d",sum);
    }
    add3(arr); // --> 15



// e.g.-3 if the array also have string values

arr= [1, 2, 3, "cewnoi", "hggf" ,"4", "5"];

function add4(arr){
    let sum = 0;
    let x=0;    
    for(let key of arr){  
        if(isNaN(key)) {
          continue;
        }   
        sum += (+key);        
    }   
    console.log("39e",sum);   
}
add4(arr); // --> 15

// e.g.-4 if the array have multiplr datatypes

    arr= [1, 2, 3, "cewnoi", "hggf" ,"4", "5", true, false];

    function add5(arr){
        let sum = 0;
        let x=0;    
        for(let key of arr){  
            if(isNaN(key)) {                            // falsy values => (0, "", undefined, null, NaN, object) === 0
              continue;
            }   
            sum += (+key);        
        }   
        console.log("39f",sum);   
    }
    add5(arr); // --> 16

    //-----------------OR--------------------
    function add6(arr){
        let sum = 0;
        let x=0;    
        for(let key of arr){  
            if(isNaN(key) || typeof key == 'boolean') {
              continue;
            }   
            sum += (+key);       
        }   
        console.log("39g",sum);   
    }
    add6(arr); // --> 15



// e.g.-5:

    arr= [1, 2, 3, "cewnoi", "hggf" ,"4", "5", true, false, 0, "", undefined, null, NaN, {}];

    function add7(arr){
        let sum = 0;
        let x=0;    
        for(let key of arr){  
            if(isNaN(key)) {                // falsy values => (0, "", undefined, null, NaN, object) === 0
              continue;
            }   
            sum += (+key);       
        }   
        console.log("39h",sum);   
    }
    add7(arr); // --> 16


// for-each loop : array higher order function
    arr= [1, 2, 3, "cewnoi", "hggf" ,"4", "5", true, false, 0, "", undefined, null, NaN, {}];
    arr.forEach((i) => {
        console.log('40.',i); 
    })

// for in loop
    let obj= {
        name: 'den',
        age: 452,
        canDrive: true
    }

    for(const key in obj) {
        console.log('40a.',key, obj[key]); // name den , age 452 , canDrive true
    }

    console.log('41.',obj.name); // --> den

    for(let index in arr) {
        console.log('42.',index); // --> gives index of array
    }

    // e.g. 1:
        let data= [1,2,3,4,5];
        for(let i in data) {
            console.log("42a.",typeof i); // --> string
        }

        /* NOTE: data-type of index is string in for-in loop
          --> because array is an object and it follows "key-value concept".
          --> so here, index is "key" and key is stored as string while "value" is the value we have assigned to that key
        */

/* 'break', 'continue', 'return' will work same as java */

    

// while loop
    console.log();
    console.log('while loop');
    console.log();

        arr = [];
        let i = 0;

        while (i < 5) {
            arr.push(i);
            i++;
        }
        console.log("43.",arr);

// switch

/*  
    e.g. 1:
    switch(condition) {
        case 1:
            console.log('1')
            break;
        case 2:
            console.log('2')
            break;
        default:
            console.log("hi")
            break;
    }
*/

/*
    e.g. 2: without using 'break'
        var grade='B';  
        var result;  
        switch(grade){  
            case 'A':  
            result+=" A Grade";

            case 'B':  
            result+=" B Grade"; 

            case 'C':  
            result+=" C Grade";

            default:  
            result+=" No Grade";  
        } 
        
        console.log(result); --> undefined B Grade C Grade No Grade

        The switch statement is fall-through i.e. all the cases will be evaluated if you don't use break statement.
*/

// grouping of switch case

/*  switch(condition) {
        case 1:
        case 2:
        case 3:
            console.log("1,2,3 are same")
            break;
        case 4:
            console.log("4")
            break;
        default:
            console.log("hi")
            break;
    }
*/



// var, let and const:

console.log();
console.log("var, let and const");
console.log();

/* 1. var: 
    => var allows you to redeclare the variable as many times as you want
    => we can declare it as wll as initialize it 
        e.g. 1. var num1; --> this will work
             2. var num1= 97; --> this also will work
             => here num = declaration and we are initializing the value 10 to the num
    => we cannot declare the same variable with let or var or const
        e.g. 1. var num1;
                let num1= 10; --> will give an error 

                REASON: this happens because during compilation variable num1 of type 'var' will be declared first and stored some memory
                        and when compiler comes to variable num1 of type 'let', compiler tries alott it  

    => var is global functional scope 
    => we can also say that var is   $"global context scope"$   because each program file have only one global context in the call stack and functions create 
       functional context in the call stack each time when program call the function.

    => var does not care about local scope(block scope) because JS is itself global.
        --> scope: between brackets "while(n > 0){ .... }" are called scope.
        --> var just ignore block scope({....}) and assume that there is only one global scope exists that JavaScript.
    
    NOTE:
        => 'var' acted as global scope except 'var' declared in the function 
        => when 'var' declared in function, that 'var' is of functional scope. 
    
*/
    var num1;
    // let num1= 37;
    // console.log('42.', num1); --> this will give an error

    num4= "1245";
    var num4= "56";
    console.log('43a.', num4); // --> 56

    var num1= "1245";
    console.log('43b.', num1); // --> 1245

    var num1= 45;
    console.log('43c.',num1); // --> 45

    var num1= "4511";
    console.log('44.',num1); // --> 4511
    
    var num1= true;
    console.log('45.',num1); // -->true                                     "Working of an function inside memory"
//                                                                                 Call Stack in the memory           * when running after compiling, the runner can only see on the "top of the stack"
// case 1: IMPORTANT*********_____________________________________________________________________________________
    var x2= 24;//                                                           |                                    |
    console.log("45a",x2); // --> 24                                        |                                    |
//                                                                          |                                    |
    function hi4() {//                                                      |                                    |
        var x2= 100;//                                                      |                                    |
        console.log("45b",x2); // --> 100                                   |                                    |  
    }//                                                                     |____________________________________|  
//                                                                          |                                    |----->step-2: functional execution context(this will be removed from stack once the function is completed.)
    console.log("45c",x2); // --> 24                                        |            function hi4()          |              the function hi4() took some space in call stack only when that function id being called
    hi4();//                                                                |____________________________________|      
//                                                                          |                                    |      
    console.log("45d",x2); // --> 24                                        |              Basic.js              |----->(step-1): global execution context(Basic.js)      
// _________________________________________________________________________|____________________________________|                                        
// case 2:***************************************                                                               
    var x2= 24;                                          /* the above figure is the reason: 
                                                                1. that why var ignores the block scope 
                                                                2. that why we cannot access the variables outside of the function that are declared inside the function even if it declared with 'var'
                                                                3. we cannot access the variable that is declare inside the function with 'var' outside of that function
                                                        */
    console.log("45e",x2); // --> 24                                      
                                                        
    function hi5() {                                                      
        x2= 100;          
        console.log("45f",x2); // --> 100
        // console.log("45g",y);
    }
    //console.log("45d",x2);
    console.log("45h",x2); // --> 24
    hi5();

// case 3: 

    console.log("45i",x2); // --> 100                                       
                                                            
    function hi6() {                                                      
        x2= 531;          
        console.log("45j",x2); // --> 531
        return x2;
        // console.log("45g",y);
    }
    //console.log("45d",x2);
    console.log("45k",x2); // --> 100
    hi6();

// case 4:
    console.log("45l",x2); // --> 531                                       
                                                            
    function hi7() {                                                      
        let x1= 312;
        let x2= 23;
    }
   let res= hi7();
   console.log("45m", res); // --> undefined

// case 5:
    var a2= 12;
    console.log("45n", a2); // --> 12

    if(true) {
        var a2= 13;
        console.log("45o", a2); // --> 13
    }
    console.log("45p", a2); // --> 13

    function hi8() {
        var a2= 15;
        console.log("45q", a2); // --> 15
    }

    hi8();

    console.log("45r", a2); // --> 13

// case 6:
    var a2= 41;
    console.log("45s", a2); // --> 41

    if(true) {
        var a2= 21;
        console.log("45t", a2); // --> 21
    }
    console.log("45u", a2); // --> 21

    function hi9() {
        var a2= 15;
        console.log("45v", a2); // --> 15
        return a2;
    }

    res= hi9();

    console.log("45w", a2); // --> 21


/*  NOTE: return value of the function has to be stored in the variable to store that value from functional execution context to the global execution context e.g. case-5:
            e.g. let res= hi9()
                --> res will store the return value from function because when functional execution context executed and removed from the stack, the 'res' will
                    store the return value which is outside the functional context i.e. in global context
                --> So, If you does not store the function i.e.,
                        hi10()
                    then there would not be present anything to store the return value from the function and this return value will not be able to go into global context
*/
// case 7:
    var a2= 78;
    console.log("45x", a2); // --> 78

    if(true) {
        var a2= 95;
        console.log("45y", a2); // --> 95
    }
    console.log("45z", a2); // --> 95

    function hi10() {
        var a2= 15;
        console.log("45aa", a2); // --> 15
        return a2;
    }

    hi10();

    console.log("45bb", a2); // --> 95

// case 8: 
    console.log("45cc",nim); // --> undefined
    var nim= 32;

    abc();

    function abc() {
        console.log("45dd","hello"); // --> hello
        console.log("45ee",nim); // --> undefined

        var nim= 85;
        console.log("45ff",nim); // --> 85;
    }

    console.log("45gg",nim); // --> 32

// case 9: chaining

    console.log("45hh",abc1); // --> [Function: abc1]  --> check this using live server
    console.log("45ii",nim1); // --> undefined
    var nim1= 32;

    console.log("45jj.",abc1());

    function abc1() {
        console.log("45kk","hello"); // --> hello
        console.log("45ll",nim1); // --> 32
    }

    console.log("45mm",nim1); // --> 32

// case 10:

    var printNumTwo;
    for (var j = 0; j < 3; j++) {
    if (j === 2) {
        printNumTwo = function() {
        return j;
        };
    }
    }
    console.log("45nn", printNumTwo());// --> 3 NOT 2 

// case 11:

    /*
        The below code will give an error : "Cannot access 'hi11' before initialization"
        compare this code with case 9.

        console.log(hi11);
        console.log(hi11());

        const hi11= function() {            
            console.log("45oo","hello");
        }

        console.log(hi11());
    */

    /*
        NOTE: when you want to store a function in variable which is declared with 'let' or 'const',
                e.g. const h11= function(){....};

                --> h11 will be declared inside script scope and you will not able to access any variable that is inside script scope before initialization.
                --> so, 
                        console.log(hi11);
                        console.log(hi11());
                        --> the above two lines will give an error because we called the function(which is stored inside const hi11) before initializing it.

                --> but when you remove above 2 lines, i.e. 
                        const hi11= function() {            
                            console.log("45oo","hello");
                        }
                        console.log(hi11());
                        --> this will print:
                            hello
                            undefined
                        --> because we called the function after initialization phase.                     
    */

    /*
        NOTE-2: variables with 'let' and 'const' when declared globally then only it will be declared inside 'script scope'.
            --> if we declared the variable with 'let' or 'const' inside function then it will be declared inside local scope / functional scope. 
                And in local scope variables are accessible before initialization
                   e.g. :
                        function sum(a) {
                            let b= 10;----------------> b variable will declared inside script scope which was created inside thes local scope / functional scope
                            return a+b;
                        }
    */

   


/* 2. let:
    => let do not allows to redeclare the same variable.
    => we can declare it as wll as initialize it 
        e.g. 1. let num1; --> this will work
             2. let num1= 97; --> this also will work

    => let is block scope.
        -->e.g.  if(x= 10) {
                     let a= 0;
                 }
                 let ans= a;
                 console.log(a); --> this give an error: 'a is not defined'
        --> in above e.g., 'ans' wants to access the value of variable 'a' out of the block scope so 'ans' will not be able to access the value of 'a'. 
            block scope: if() {...}
        --> same goes for const

    => When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
*/

    let a1;

    a1= 9645;
    console.log("46", a1); // --> 9645

    // num5= "1245";
    // let num5= "56";
    // console.log('42a.', num5); --> error: Cannot access 'num4' before initialization at 241

/* 3. const:
    => const variable are 'Read-only'.
    => this are constant values, which means that once a variable is assigned with 'const', it cannot be reassigned.
    => it cannot be changed throught the program.
    => while declaring const, it should have to be initialized

        e.g. 1. const num; --> this will give an error
             2. const num= 10; --> this will run
             => here num = declaration and we are initializing the value 10 to the num

    => const is block scope
*/

    const NUMBER= "hi";
    // num2= "12";   --> this will give an error
    console.log('46a.',NUMBER); // --> hi

    // num5= "1245";
    // const num5= "56";
    // console.log('42a.', num5); --> error: Cannot access 'num4' before initialization at 264

// case 1: ******************************
    
    const arr1= [1, 3, 5, 7];
    
    // arr1= [2, 4, 6, 8] --> this will give an error because const is read-only

    arr1[0]= 2;
    arr1[1]= 4;
    arr1[2]= 6;
    arr1[3]= 8;
    
    console.log("46b.", arr1); // --> [ 2, 4, 6, 8 ]

    // this way we can change an const variable even if it is 'read only'
    // to overcome this, we use "Object.freeze()" function. it will not allow you make any changes to that variable.

// printing string with variable

    console.log();
    console.log("printing string with variable");
    console.log();

    let str= 71;
    console.log('47.',"71 \is a prime number\ "); // --> 71 is a prime number

    str= "den said";
    console.log("48.", str ,"\how are you?\ "); // -->  den said how are you?

    str= "den said, \"I am fine\".";
    console.log('49.',str); // --> den said, "I am fine".


/*
        1.    Code	    Output
        2.    \'  -->	single quote
        3.    \"  -->	double quote
        4.    \\  -->	backslash        NOTE: that the backslash itself must be escaped in order to display as a backslash.
        5.    \n  -->	newline
        6.    \t  -->	tab
        7.    \r  -->	carriage return
        8.    \b  -->	word boundary
        9.    \f  -->	form feed
*/

// string and use of index
    console.log();
    console.log("string and use of index");
    console.log();

        let string= "jjfkmn23nns";
        console.log('50.',string[2]); // --> f

        string[0]= "a";
        console.log('51.',string); // --> jjfkmn23nns

// as you seen we cannot make changes in the existed string because Strings are immutable

    string= string[3];
    console.log('52.',string); // --> k

    string= "jjfkmn23nns";
    str= string[string.length - 2];
    console.log('53.',str); // --> n



// try and catch:
console.log();
console.log("try and catch");
console.log();

    // e.g. 1:

        function dhf(a, b) {

            try {

                throw Error('Reference error due to non alignment'); // --> from the servers
                let c= a+b; 
                return c;
            } catch (anythingCanBeWrittenHere/*error/exception*/){
                console.log("hi, there is an issue. Please visit again");
                // alert("Somthing went wrong");
            }
        }

        let ans= dhf(1,2);
        console.log("54.", ans); // --> undefined in browser


    // e.g. 2
        function calc(a, b, action) {
            try {
                let res;

                if(action === "add") {
                    throw Error("server not responsing")
                    res= a+b;
                }else if(action === "sub") {
                    res= a-b;
                }else if(action === "multiply") {
                    res= a*b;
                }
                return res;
            } catch(error) {
                console.log("somthing went wrong");
                console.log(error.messsage);
                console.log(error);
            }
        }

        console.log("55.",calc(2,3,"add"));
        console.log("56.",calc(2,3,"sub"));
        console.log("57.",calc(2,3,"multiply"));

    // e.g. 3: try and catch working in memory******************************
        let f= 20;
        try {
            throw(f);
        } catch(f) {
            console.log("58.", f); // --> 20
            f= 76;
            console.log("58a.",f); // --> 76
            
        }
        console.log("59.",f) // --> 20

        /*
            --> in above e.g., f is stored in script scope at global level
            --> in try, it throws f means sends 'f' to catch block scope and catch takes that 'f' as arhument / parameter
            --> the 'f' threw by try, that 'f' will be catched by 'catch' block scope
            --> print the value of 'f': f= 20
            --> 'f' created in catch block scope and assigned value(76) to the 'f' inside catch block scope
            --> print value of 'f': f= 76
            --> when executor comes outside of the catch block scope, the value of 'f' will be of parent (i.e. 20).
            --> print that value of 'f' (i.e. 20)

            ****** for more clarity go through the browser console

        */


        // e.g. 4: try and catch working in memory
        let f1= 20;
        try {
            f1= 35;
            throw(2);
        } catch(f1) {
            console.log("60.",f1); // --> 2
            f1= 76;
        }
        console.log("61.",f1) // --> 35

        // e.g. 5: try and catch working in memory
        let f2= 20;
        try {
            f2= 35;
            throw(2);
        } catch(h) {
            console.log("62.",f2); // --> 35
            f2= 76;
        }
        console.log("63.",f2) // --> 76

        // e.g. 6: try and catch working in memory
        let f3= 20;
        try {
            f3= 35;
            throw(2);
        } catch(h) {
            console.log("64.",h); // --> 2
            f3= 76;
        }
        console.log("65.",f3) // --> 76