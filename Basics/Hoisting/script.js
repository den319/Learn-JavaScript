

/* topics covered: 
    1. hoisting 
    2. truthy and falsy values
        1. falsy values
        2. truthy values
        3. converting to booleans
    3. execution context 
    4. lexical environment 
    5. declarative and imperative programming
*/

/* 
    1. HOISTING: it is the process whereby the interpreter appears to move the declaration of functions, 
                 variables or classes to the top of their scope, prior to execution of the code.

        [1] = global execution context____________
                 e.g. var a= 30;                 |   
                      let c= 20;                 | --> when parsing 
                      const d= 96;    ___________|
                      console.log(a, c, d); --> during execution

                => it works in two stages:
                    1. memory allocation / variable environment (PARSING):
                            => parsing only focus on the declarations
                                e.g. var a= 30;
                                     let c= 20;
                                     const d= 96;

                                    --> parser will not consider the line: console.log(a, c, d) -> this line will executed during execution
                            => memory allocation occurs during compilation time.
                            => it declare the variable. 
                            => 2 type of declaration:
                                1. by variable like: let a; or var a; or const a;
                                2. by using function
                            => during compile time variable will only be declared and initialize the default value as 'undefined'.
                            => If 'var' is used then it will be allocated in global scope
                               a= undefined;
                               
                            => this process of memory allocation is called "HOISTING".

                               NOTE: 'const' and 'let' type variable will be stored in storage called 'script scope' by react.JS not in global scope.
                                     c= undefined; (in storage called SCRIPT)
                                     d= undefined; (in storage called SCRIPT)

                            => therefore when you write like:
                                var a= 10;
                                let a= 30;
                                => this will not give an error.

                            => but, if you write like:
                                let a= 45;
                                var a= 78;
                                => this will give an error.

                    2. EXECUTION-executor/runner (during runtime/interpreter):
                            => execution occurs during runtime.
                            => JavaScript works on 'Just In Line(JIL)' concept means one line at a time.
                            => during runtime, runner will check if the memory is allocated or not.

                            => e.g. var a= 30; --> in this, during compile time, memory allocation allocates some memory and set it as 'undefined'.
                                                        a= undefined
                                               --> during runtime, when runner comes to 'var a= 30', runner will check if memory is allocated for 'a'. If yes, then 
                                                   then runner will initialize the given value to assigned variable.
                                                   If 
                                               --> if it is first time, then runner will change the default value that is 'undefined' to initialized value.
                                               --> In here, var a= 30;
                                               --> during compilation: a= undefined;
                                               --> during runtime: var a= 30;

                            => it simply assinges the value to the undefined variable.

                                var a= 30;
                                let c= 20;
                                const d= 96;

                            => the below line will be executed,
                                console.log(a, c, d);
                => when the running of program is completed, global memory and script memory clear the all data from the memory i.e. variables.


NOTE: 1. javascript will not give error during compile time but it will give error during runtime.
      2. global scope variables are directly accessible before initialization
*/

console.log();
console.log("hoisting");
console.log();

console.log("1.", a1); // --> undefined
var a1= 262;
console.log("2.", a1); // --> 262

/* explanation: 
    
*************************************************************************




*/

// console.log(a2);
// var a2= 262;
// console.log("1.", a2); --> give an error because of 'temporary dead zone'.


// console.log(a3);
// var a3= 262;
// console.log("1.", a3); --> give an error because of 'temporary dead zone'.

/* temporary dead zone:


**********************************************************************************


*/

console.log("3.", typeof a1); // --> undefined
var a1= 262;

console.log("4.", typeof a2); // --> undefined



// truthy and falsy values 

    console.log();
    console.log("falsy values");
    console.log();

    /*  
        => Boolean has 2 types in JS:
            1. true, false = for this "!" is used
            2. truthy, falsy = for this "!!" is used

            falsy values => (0, "", undefined, null, NaN, object) === 0
            truthy values => all except falsy values === 1 [e.g. - 123, "sad", Infinity]
    */

    let checker1= "";
    if(!checker1) {
        console.log("5.","checked");// --> checked
    }

    let checker2= 0;
    if(!checker2) {
        console.log("6.","checked");// --> checked
    }

    let checker3= null;
    if(!checker3) {
        console.log("7.","checked");// --> checked
    }

    let checker4= undefined;
    if(!checker4) {
        console.log("8.","checked");// --> checked
    }

/* 
    0 => false
    1 => true
*/
    console.log("9.", +true);// --> 1
    console.log("10.", +false);// --> 0

// converting things into boolean

    let s1= "hi";
    let s2= "";
    let s3= -0;
    let arr= [];
    let obj= {};

    console.log("11.",Boolean(s1));// --> true
    console.log("12.",Boolean(s2));// --> false
    console.log("12a.",Boolean(s3));// --> false
    console.log("13.",Boolean(arr));// --> true

    console.log("14.",Boolean(obj));// --> false

    console.log("15.",!s1);// --> false
    console.log("16.",!!s1);// --> true

    console.log("17.",isNaN(""));// --> false 
    console.log("18.",isNaN());// --> true

    console.log("19.",Boolean(Infinity));// --> true 
    console.log("20.",String(Infinity));// --> Infinity as String
    console.log("21.",Number(Infinity));// --> Infinity as Number
    console.log("22.",Object(Infinity));// --> [Number: Infinity]
    console.log("23.",arr[Infinity]);// --> undefined 
    console.log("24.",typeof arr);// --> object then why 'arr' is not a falsy value 


// execution context

/* 
    --> execution always happens in 'call stack'.
    --> so execution context are generally call stack frames. For each execution context a new stack will be created.
    
    --> 2 types:
        1. global execution context:
            --> this will erroded after the code gives us the final answer.

        2. functional execution context:
            --> this will erroded after the perticular function returns the value.

***********************************************************************

*/

// lexical environment

console.log();
console.log("lexical environment");
console.log();

    let a= 10;

    function foo() {
        
        function bar() {
            let c= 30;
            return a+b+c;
        }
        let b= 20;
        return bar;
    }

    let result= foo();
    console.log("25.",result); // --> gives bar() function

    let final = result();
    console.log("26.",final); // --> 60


    /*
        lexical environment: it defines surroundings of perticular execution context
            e.g.:
                --> here, 'bar()' function's lexical environment is foo()
                --> and lexical environment of foo() will be global context
                --> there is no lexical environment of global
    */



// 5. declarative and imperative programming
console.log();
console.log("declarative and imperative programming");
console.log();


    // 1. declarative programming:

        /*
            programmer cannot control the flow
            e.g. forEach() function
        */



    // 2. imperative programming:

        /*
            programmer can control the flow
            i.e. normal for loop
        */