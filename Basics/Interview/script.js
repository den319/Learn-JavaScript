
// question-1:

    // let a = 50;
    // var b = 40;
    // {
    //     console.log("1.",b); // --> 40
    //     // console.log("2.",a); --> cannot access 'a' before initialization

    //     var b = 90;
    //     let a = 200;

    //     function call() {

    //         // console.log("3.",b); --> cannot access 'b' before initialization
    //         console.log("4.",a); //--> undefined

    //         let b = 55;
    //         var a = 65;

    //         console.log("5.",a); // --> 65
    //         console.log("6.",b); // --> 55
    //     }

    //     call();

    //     console.log("7.",a); // --> 200
    //     console.log("8.",b); //--> 90
    // }

    // console.log("9.",a); // --> 50
    // console.log("10.",b); // --> 90







// question-2:

    // let arr = [4,5,6,9,7];
    // function reduced(array, callBack, dv) {

    //     let ans = dv || array[0];
        
    //     for (let i = (dv ? 0 : 1); i < array.length; i++) {
    //         ans = callBack(ans, i)
    //     }
    //     return ans;
    // }
        
    // function callBack(ans, i) {
    //     return ans * i;
    // }
    // console.log(reduced(arr, callBack));


// question-3:

    // var a= 10;
    // let a= 52;

    // console.log(a); // --> error: Identifier 'a' has already been declared


// question-4:

    // function abc() {
    //     return
    //     {
    //         name1: "hello"
    //     }
    // }

    // function abc1() {
    //     return {
    //         name1:"hi"
    //     }
    // }

    // console.log(abc()); // --> undefined
    //                     // because 'return' statement will only return value which is in the same line
    // console.log(abc1()); // --> {name1: 'hi'}


// question-5:

    // let object= {
    //     store: {
    //         state: {
    //             city: {
    //                 district: {
    //                     name: "London"
    //                 }
    //             }
    //         }
    //     }
    // }

    // let getByString= (object, keys) => {
    //     const key= keys.split(".");
    //     let result;

    //     for(let value of key) {
    //         result= object[value];
    //         // console.log(result);

    //         if(result && typeof result === "object") {
    //             object= result;
    //         } else {
    //             return result;
    //         } 
    //     }
    //     return result;
    // }

    // const value= getByString(object, "store.state.city.district.name");
    // console.log(value); // --> London

    // // change the district name: use 'rest' operator
    //     object= {
    //         ...object,
    //         ...object.store,
    //         ...object.store.state,
    //         ...object.store.state.city,
    //         ...object.store.state.city.district,
    //         name: "wales"
    //     }

    //     console.log(object); // --> {store: {…}, state: {…}, city: {…}, district: {…}, name: 'wales'}




// question-6:

    // cat= "meow";
    // console.log(cat); // --> meow
    // var cat;


// question-7:

    // (
    //     function() {
    //         var a=b=3;
    //     }
    // )
    // ();

    // console.log(typeof a); // --> undefined
    // console.log(typeof b); // --> number
    // console.log(a); // --> a is not defined
    /*
        1. parsing phase:
            --> it stores function as variable and stores whole function in global scope and not variables inside it(i.e. 'a' and 'b')
        
        2. execution phase: 
            --> when it calls this anonumous function, it will create local / functional scope.
                1. parsing phase: (for functional scope)
                    --> parsor will store variable 'a' inside local scope as we have used var.
                    --> but we have not used any of 'let', 'const' or 'var' for variablr 'b'.
                    --> NOTE:
                        --> when you declare variable without using anyof let', 'const' or 'var', the parsor will treat it as global variable.
                        --> so parsor will store that variable inside global scope rather than local scope
                    
                    --> so 'b' will be stored inside global scope
                
                2. execution phase:
                    --> here, 3 will be assigned to variable 'b' 
                    --> as 'a' is pointing to the 'b', so '3' also assigned to the 'a'
            
            --> when exection phase of functional scope ends, that functional scope will be deleted from stack and variable stored inside local scope will also removed from the memory

            --> when executioner comes to the line: "console.log(typeof a)", it will search in global scope to find if there is 'a' is stored or not
            --> as the local scope deleted from the memory, the 'a' will be not present in the memory

            --> so if the variable which is not defined inside the global scope, then data-type of that variable will be 'undefined'.

            --> when executioner comes to line: "console.log(typeof b);"
            --> as early we have discussed that why 'b' was stored as global attribute, executioner find 'b' and print its data-type

            --> when it comes to line: "console.log(a)"
            --> it will try to find the variable 'a', but it will fail as local scope was deleted.
            --> so, it will give an ERROR: a is not defined
    */


// question-8: a function can return a function

    // function foo() {

    //     function bar() {
    //         console.log("hi!!!!!");
    //     }
    //     return bar;
    // }

    // let result= foo();
    // console.log(result); // --> gives bar function

    // result() // --> hi!!!!!



// question-9: functional scope can access global scope but global scope cannot be able to access functional scope

    // let a= 10;

    // function foo() {
    //     let b= 20;
    //     function bar() {
    //  
    //         return a+b+c;
    //         let c= 30;
    //     }
    //     return bar;
    // }

    // let result= foo();
    // console.log(result); // --> gives bar function

    // let final = result();
    // console.log(final); // --> 60



// question-10:

    // let a= 10;

    // function foo() {
    //     let b= 20;
    //     function bar() {
    //         let c= 30;
    //         return a+b+c;
    //     }
    //     return bar();
    // }

    // let result= foo();
    // console.log(result); // --> 60

    // let final = result();
    // console.log(final); // --> Error: result is not a function


// question-11: (closure)  DEBUG IN BROWSER
    // let a= 10;

    // function foo() {
        
    //     function bar() {
    //         let c= 30;
    //         return a+b+c;
    //     }
    //     let b= 20;
    //     return bar;
    // }

    // let result= foo();
    // console.log(result); // --> gives bar() function

    // let final = result();
    // console.log(final); // --> 60
    

// question-12:

    // let a= 10;

    // function foo() {
    //     let b= 20;
    //     function bar() {
    //         return a+b+c;
    //         let c= 30;
    //     }
    //     return bar();
    // }

    // let result= foo();
    // console.log(result); // --> Error: Cannot access 'c' before initialization




// question-12:

    // function sum() {
    //     var c= 10;
    //     var a= 20;
    //     console.log(a);
    // }

    // var a= 6;

    // sum(); // --> 20
    // console.log(a);// --> 6


// question-13:

    // function sum() {
    //     var c= 10;
    //     a= 20;
    //     console.log(a);
    // }

    // var a= 6;

    // sum(); // --> 20
    // console.log(a);// --> 20




// question-14: explicitly type cohersion

    // console.log("1.",+false);// --> 0
    // console.log("2.",-true); // --> -1
    // console.log("3.",+true); // --> 1
    // console.log("4.",new Boolean(-Infinity)); // --> Boolean {true} object
    // console.log("5.",new Boolean(-0));// --> Boolean {false} object



// question-15:

    // for(var i=0; i<5; i++) {
    //     setTimeout(() => {
    //         console.log("1.",i); 
    //     }, 1000)
    // } // -->   1. 5
    //         // 1. 5
    //         // 1. 5
    //         // 1. 5
    //         // 1. 5

    // for(let i=0; i<5; i++) {
    //     setTimeout(() => {
    //         console.log("2.",i);
    //     }, 1000)
    // }// -->    2. 0
    //         // 2. 1
    //         // 2. 2
    //         // 2. 3
    //         // 2. 4


// question-16: use of memoization
    
    // let callCount = 0;
    // const add = (a, b) => {
    // callCount += 1;
    // return a + b;
    // }

    // add(2, 2); // 4
    // console.log(callCount); // --> 1
    // add(2, 2); // 4
    // console.log(callCount); // --> 2
    // add(2, 2); // 4
    // console.log(callCount); // --> 3


    // using memoization:

    // let callCount = 0;
    // const add = (a, b) => {
    // callCount += 1;
    // return a + b;
    // };
    // const memoizedAdd = add;

    // memoizedAdd(2, 2); // 4
    // console.log(callCount); // --> 1
    // memoizedAdd(2, 2); // 4
    // console.log(callCount); // --> 1
    // memoizedAdd(2, 2); // 4
    // console.log(callCount); // --> 1


// question-17:

    // What will be logged in the console ?

        // const obj1 = { name: 'Jane', age: 22 };
        // const obj2 =obj1;
        // obj2.name='Radhe'
        // console.log(obj1); // --> { name: 'Radhe', age: 22 }
        // console.log(obj2);// --> { name: 'Radhe', age: 22 }
            

// question-18:

    // Which of the following code snippets demonstrates a JavaScript Function Declaration?
        // a. --> function declaration
        // function myFunction() {
        //     // function body
        // }

        // //b. --> function expression
        // let myFunction = function() {
        // // function body
        // };

// question-19:

    // What are a and b in the above function?" --> parameters


        // function add(a, b) {
        //     return a + b;
        // }

        /*
            here in add(a, b), 'a' and 'b' are parameters
            but when we call that function like:
                add(1, 2) 
                --> here, '1' and '2' are arguments 
        */
        // search difference b/w parameters and arguments
   
   

// question-20:

    // What is a call stack in JavaScript?
        // --> A data structure that stores information about active function calls.
    

// question-21:

    // function multiply(a, b) {
    //     console.log("1.", a*b);
    // }

    // console.log("2.", multiply.length); // --> 2

    // NOTE: 'function().length' gives how many parameters the function have.

    // multiply.length= 0;
    // multiply(2,3); // --> 6

    // console.log("3.", multiply(2,3).length);



// question-22:
    
    // (function num1(a) {
    //         return (function num2(b) {
    //             console.log("1.", a);
    //         })(1);
    //     }
    // )(0);

    // the ans = 0 check in browser


// question-23:

    // let count=0;

    // ( function num() {
    //     if(count === 0) {
    //         let count= 1;
    //         console.log("1.", count);
    //     }

    //     console.log("2.", count);
    // }) ();

    // ans: 1 and then 0


    /*
        NOTE: IMMEDIATE INVOKE FUNCTION(I.I.F.): === '()' in que-23, '(1)' and '(0)' in que.-22
    */



// question-24 **************************:

    // function createIncrement() {
    //     let count= 0;
    //     function increment() {
    //         count++;
    //     }

    //     let message= `count is ${count}`;

    //     function log() {
    //         console.log(message);
    //     }

    //     return [increment, log];
    // }

    // const [increment, log]= createIncrement();
    // increment();
    // increment();
    // increment();
    // log();

     // --> count is 0



// question-25:

    // function multiply(a, b) {
    //     console.log(a * b);
    // }

    // multiply(5,4);
    // multiply(2,3);

    // const double= multiply(2);

    // double(5);
    // double(4);
    // double(11);


// question-26:

    // function multiply(a,b) {
    //     return a*b;
    // }

    // console.log("1.", multiply(5,4));
    // console.log("2.", multiply(2,3));

    // const double= multiply(2);

    // console.log("3.", multiply(5));
    // console.log("4.", multiply(4));
    // console.log("5.", multiply(11));


// question-27:

    /*
        1. type casting: customely (by yourself)

        2. type coersion: done by JS (autometically)

        3. explicite type coersion / conversion: customely (by yourself)

        4. implicite type coersion / conversion: done by JS (autometically)
    */


// question-28:

    // function employee(name) {
    //     return;
    // }
    // console.log("1", employee()); // --> undefined


// question-29:

    // function employee(name) {
    //     return this;
    // }

    // const emp= new employee();

    // console.log("1", employee()); // --> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    // console.log("2.", emp); // --> employee {}


// question-30:

    // function employee(name) {
    //     this.name= name;
    // }

    // const emp= new employee("emily");

    // console.log("1.", emp); // --> employee {name: 'emily'}

    // console.log("2.", employee());// --> undefined


// queston-31:

    // function employee(name) {
    //     this.name= name;

    //     this.printname= function () {
    //         console.log(this.name);
    //     }
    // }

    // const emp= new employee("emily");

    // console.log("1.", emp.printname); // --> 

    // console.log("2.", emp.printname()); // --> 

    // console.log("3.", employee());// --> undefined



// question-32:

    // console.log("1.", true == "sam"); // --> false
    // console.log("2.", true == "true"); // --> false
    // console.log("3.", true == 1); // --> true 
    // console.log("4.", true == 1); // --> true         
    // console.log("5.", false == 0); // --> true
    // console.log("6.", false == ""); // --> true
    // console.log("7.", false == "1"); // --> false
    // console.log("8.", " " == ""); // --> false
    // console.log("9.", "" == 0); // --> true
    // console.log("10.", false === 0); // --> false

    // console.log("11.",[] == ""); // --> true
    // console.log("12.",{} == ""); // --> false
    // console.log("13.",[] == false); // --> true
    // console.log("14.",{} == false); // --> false



// question-32: written inside if() try to convert it into boolean

    // let checker1= 0;
    // if(checker1) {
    //     console.log("checker1");
    // }

    // let checker2= [];
    // if(checker2) {
    //     console.log("checker2"); // --> checker2
    // }

    // let checker3= {};
    // if(checker3) {
    //     console.log("checker3"); // --> checker3
    // }

    // let checker4= NaN;
    // if(checker4) {
    //     console.log("checker4");
    // }

    // if(typeof checker5) {
    //     console.log("checker5"); // --> checker5
    // }


// question-33:

    // console.log("1.", "0" == false); // --> true
    // console.log("2.", "0" == true); // --> false

    // if("0") {
    //     console.log("3.", "zero"); // --> zero
    // }

    // console.log("4.", null == 0); // --> false
    // console.log("5.", undefined == 0); // --> false


// question-34:

    // let text = "Newton School";
    // let result = text.substring(1, 4);
    // console.log(result); // --> ewt


// question- 35:

    // What is the purpose of the new keyword when using a constructor?

        // --> To create a new object with the constructor's properties and methods



// question- 36:

    /*
        Which of the following code snippets correctly adds a new property "color" with the value "red" to an object "car"?
            A. car.color = "red";
            B. car["color"] = "red";
            C. Object.assign(car, {color: "red"});
            D. All of the above

            ans: D
    */


// question- 36:
    // What is the value of 'this' in a function that is called with the bind() method?

    // ans: The object passed as argument to the bind() method.


// question- 36:
    // What happens when you try to access a non-existent property of an object in JavaScript?

    // ans: Undefined is returned

// question- 36:

    // What is the value of 'this' in a function that is called with the new keyword?
    
    // ans: The object being constructed


// question- 37:

//     const person = {
//         name: 'John',
//         age: 30,
//         address: {
//             city: 'New York',
//             state: 'NY',
//             zip: '10001'
//             }
//     };

// const { name, age, address: { city } } = person;

// console.log(name, age, city); // --> John 30 New York




// question- 38:
    
    // let obj= {
    //     name: "adem"
    // }
     
    // function f1() {
    //     console.log("1.",this);

    //     function f2() {
    //         console.log("2.", this);
    //     }
    //     f2(); // call site
    // }

    // f1.call(obj); // call site

    /*
        --> answer is based on 4 rules: 
            1. default binding: happens when we have a stand alone function call(i.e. no extra info. before it and no explicite command that we have given after it)
                --> e.g.: add(); 
                --> this gives window as the context 
                --> NOTE: 
                    --> while using "use-strict" mode, the above(i.e add()) will give undefined

            2. implicite binding:
                --> e.g.: obj.add(); -> here "obj" is extra info.

            3. explicite binding:
                --> e.g.: add.apply(); -> here "apply" ia a command

            4. new keyword

        --> NOTE:
            --> context always depends on "call site"
            --> the concept of context is only applied to FUNCTION not the OBJECT
                --> beacause function needs context to run(i.e. functional scope) but object does not need a context to run
                --> NOTE: 
                    --> function is also an object(i.e. special kind of object)
    */



// question- 39:

    // function foo2() {
    //     console.log("1. ", this);
    // }

    // let obj= {
    //     foo: function() {
    //         console.log("2. ", this);
    //         foo2();
    //     }
    // }

    // obj.foo();
    // obj.foo.call();
    // obj.foo.apply();



// question- 40: *****************

    // function print(param) {
    //     console.log("1.", this);
    // }

    // let obj= {
    //     a: 10, 
    //     b: 20,
    //     c: print,
    //     d: function(param) { 
                // context -> this -> obj (due to "obj.d()")
    //         console.log("2.", this);

    //         print(); // 2.

    //         let x= this.c;
    //         x(); // 3. 

    //         this.c(); // 4. 

    //         console.log("3.", this.c == print); // 5. 
    //         console.log("4.", this.c === print); // 6.
    //     }
    // }

    // obj.d(); // 1.


    // 1. obj
    // 2. window
    // 3. window
    // 4. obj
    // 5. true
    // 6. true  


// question- 41:

    // const mixin = {
    //     log(message) {
    //       console.log(message);
    //     }
    //    };
       
    //    const obj = {
    //     name: 'John'
    //    };
    //    Object.assign(obj, mixin);
    //    obj.log('Hello, world!'); // Hello, world!


// question- 42:

    // Which of the following code snippets demonstrates how to reset the constructor of an object's prototype using Object.defineProperty()?
    // ans: Object.defineProperty(obj.prototype, 'constructor', { value: Object });



// question- 43:

    // "hello".__proto__
    // "hello".__proto__.__proto__
    // "hello".__proto__.__proto__.__proto__


// question- 44:

    // const calc= {
    //     num1: 11,
    //     num2: 3,

    //     product() {
    //         return num1 * num2;
    //     },

    //     sum() {
    //         return num1 + num2;
    //     }
    // }

    // console.log("1.", calc.product());


// question- 45:

    // const calc= {
    //     num1: 11,
    //     num2: 3,

    //     product() {
    //         return this.num1 * this.num2;
    //     },

    //     sum() {
    //         return this.num1 + this.num2;
    //     }
    // }

    // console.log("1.", calc.product());


// question- 46:

    // function Employee() {
    //     console.log("1.",this);

    //     let salary;
    //     this.name= "harry";
    //     this.city= "london";

    //     this.setSalary= function() {};
    //     this.getSalary= function() {};

    //     console.log("2.",this);
    // }

    // const data= new Employee();
    // console.log("3.", data);


// question- 47:

    // function Employee() {}
    // const data= new Employee();
    // console.log("1.", data);



// question- 48:

    // function Person(name) {
    //     this.name = name;
    // }
       
    // Person.prototype.getName = function() {
    //     return this.name;
    // }
       
    // const person1 = new Person('John');
    // const person2 = new Person('Jane');
    
    // What is the difference between name and getName in the above code?"

        // ans: name is an instance member, while getName is a prototype member



// question- 49:

    // case: 1

        // class Person {
        //     constructor() {
        //         this.name= "jeson";
        //         this.age= "33";
        //         this.sayAge= () =>  {
        //             console.log("1.", this.age);
        //         };
        //     }
        // }

        // const p= new Person();
        // // console.log(p);
        // // const fun= p.sayAge;
        // // fun();

        // p.sayAge();


    
    // case: 2  ************* use babel

        // function Person() {
        //     this.name = 'hamster';
        //     this.age = 27;
        //     this.sayAge = () => {
        //         console.log("2.",this.age);
        //     }; 
        // }
            
        // const p = new Person();    
        // const fun = p.sayAge;    
        // fun();




// question- 50: ********* use babel

        // class Person {
        //     constructor() {
        //         this.name= "jeson";
        //         this.age= "33";
        //         this.sayAge= () =>  {
        //             console.log("1.", this.age);
        //         };
        //     }
        // }

        // const p= new Person;

        // console.log(p);



// question- 51:

    // class Person {
    //     constructor() {
    //         this.name = 'emily';
    //         this.age = 30;
    //         this.sayAge = () => {
    //             console.log(this);
    //         };
    //     }

    //     sayAge1(){
    //         console.log(this);
    //     }
    //     sayAge2 = ()=>{
    //         console.log(this);
    //     }
    // }
    // const p = new Person();
    // const fun = p.sayAge;
    // const fun1 = p.sayAge1;
    // const fun2 = p.sayAge2;
        
    // fun();
    // fun1();
    // fun2();


// question- 52:

    // class API {
    //     url;
    //     method= "GET";
    //     #secure;

    //     constuctor(url){
    //       this.url= url;
    //        if(this.url.substring(0,5) === "https"){
    //           this.#secure= true;
    //         } else {
    //           this.#secure= false;
    //         }
    //     }

    //     isSecure= function() {
    //         return this.#secure;
    //     }
    
    //     updateUrl= function(url){
    //       this.url= url;
    //       if(this.url.substring(0,5) === "https"){
    //           this.#secure= true;
    //        } else {
    //           this.#secure= false;
    //        }
    //     }

    //   }



    // class API {
    //     url;
    //     method= "GET";
    //     #secure;
    //     constructor(url){
    //         this.url= url;
    //         this.#secure= this.url.startsWith("https");
    //     }
        
    //     isSecure() {
    //         return this.#secure;
    //     }
    
    //     updateUrl(url){
    //     this.url= url;
    //     this.#secure= this.url.startsWith("https");
    //     }
    // }
  
    // const s = new API('http://api.com/api/hello')
    // console. log(s.isSecure()) // false
    
    // s.updateUrl('https://api. com/api/hello')
    // console. log(s.isSecure()) // true
    
    // console.log(s.url) // https://api. com/api/hello
    
    // console.log(s.method) // GET
    
    // console.log(s.secure) // undefined (because private field)



// question- 53:

    // const car= {
    //     headlight: true,
    // };

    // function Sedan(name) {
    //     this.name= name;
    // }

    // Sedan.prototype= car;
    // Sedan.prototype.ty= "hello";

    // let sedanObj= new Sedan("Some name");

    // sedanObj.__proto__.djfve= "anything";

    // console.log("1. ", sedanObj);

    // console.log("2. ", sedanObj.headlight);
    // console.log("3. ", sedanObj.name);
    // console.log("4. prototype of sedanObj: ", sedanObj.__proto__, "prototype of Sedan: ", Sedan.prototype);

    // const arr1= [];
    // console.log("6. ", arr1.skjjd);

    // const arr2= [1, 2, 3];
    // console.log("7. ", arr2.type2);

    // const ss= 54;
    // console.log("8. ", ss.type);



// question- 54:

    // function call() {
    //     let a;
    //     const b= getA();
    //     console.log(b);
    // }

    // function getA() {
    //     return a;
    // }

    // call()();

    // function call2() {
    //     let a;
    //     return function() {
    //         return a;
    //     };
    // }

    // function getA() {
    //     return a;
    // }

    // let result2= call2()();
    // console.log(result2);



// question- 55:

    // what is the difference b/w function statement and function expression in terms of hoisting?



// question- 56:

    // explain event delegation and its advantages.


// question- 57:

    // make the function for:
        // add().crore(8).lac(9).thousand(7).hundred(1).ten(2).one(2) : incomplete


        // way-1:
            // function Add() {
            //     this.num= 0;

            //     this.crore= function(num) {
            //         this.num += num * 10000000;
            //         return this;
            //     };
            //     this.lac= function(num) {
            //         this.num += num * 100000;
            //         return this;
            //     };
            //     this.thousand= function(num) {
            //         this.num += num * 1000;
            //         return this;
            //     };
            //     this.hundred= function(num) {
            //         this.num += num * 100;
            //         return this;
            //     };
            //     this.ten= function(num) {
            //         this.num += num * 10;
            //         return this;
            //     };
            //     this.one= function(num) {
            //         this.num += num * 1;
            //         return this.num;
            //     };

            // }



        // way-2:
        
            // function Add() {
            //     crore: (a) => {
            //         lac: (b) => {
            //             thousand: (c) => {
            //                 hundred: (d) => {
            //                     ten: (e) => {
            //                         one: (f) => {

            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }


    // const add= new Add();

    // let number1= add.crore(8).lac(9).thousand(7).hundred(1).ten(2).one(2);
    // let number2= add.crore(8).lac(9);

    // console.log("1.",number1);
    // console.log("2.",number2);



// question- 58:

    // console.log("1. ",[] == ![]); // true

    //     // [] => true => +true => 1
    //     // --> [] => true => ![](true) => false => +false => 0 

    // console.log("2. ",[] == true); // false

    // console.log("3. ", "a" + "b" + + "c" + "d"); // abNaNd

    // const a= 0.0000001;
    // const b= 0.000001;

    // console.log("4. ",parseInt(a)); // 1

    // console.log("5. ",parseInt(b)); // 0

    // console.log("6. ",a.toString()); // 1e-7

    // console.log("7. ",b.toString()); // 0.000001

    // const c= "1e-7";

    // console.log("8. ",parseInt(c)); // 1



// question- 59:

    // function greet(name = 'Friend', greeting = 'Hello') {
    //     console.log(`${this.greeting}, ${name}!`);
    // }
    
    // greet('John'); // Hello, John!

    // for(let i=0; i<3; i++) {
    //     var j=5;
    //     console.log(j);
    // }

    // console.log(j);


// question- 60:


    // function sum() {
    //     var a= 1;
    //     var b= 2;

    //     return a+b;
    // }

    // console.log(sum(), a, b);


    // for(let i=0; i<3; i++) {
    //     var j= i;
    //     ((j) => {
    //         console.log(j);
    //     })(j);
        
    // }

    // console.log(j);



// question- 61:

    // function outer() {
    //     var x = 10;
    //     function inner() {
    //     console.log(x);
    //     }
    //     return inner;
    // }
    
    // var innerFunc = outer();
    // innerFunc(); // 10



// question- 62:

    // array destructuring Vs. object destructuring



// question- 63:

    // const employee= [1,2,3];

    // const myMap= employee.map(() => {
    //     // console.log(this);
    // });

    // console.log(myMap); // [undefined, undefined, undefined]



// question- 64:

    // declarative approach Vs. imperative approach:

        // declarative approach: map, filter, reduce, for...of, for...in, forEach
            // --> traverse the whole array(i.e. cannot 'break' it)
            // --> built in functions 

        // imperative approach: for loop, while loop
            // --> may or may not traverse the whole array(i.e. can 'break' the loop)



// question- 65:

    // difference b/w call, apply, and bind

    // difference b/w pollyfills of call, apply, and bind



// question- 66: use currying

    // create a function for:

        // sum(1)(2,3)(4,5,6,7)(8)();

        // ans should be 36.
    


// question- 67: 

    // (function(){

    //     var a = b = 3;
    // })();
    
    // console. log("a defined? :" + (typeof a !== 'undefined'));
    
    // console. log("b defined? :" + (typeof b !== 'undefined'));


// question- 68: 

    // (function(){

    //     var a= b;
    //     b= 3;
    // })();

    // console.loh(`a: ${a} and b: ${b}`);



// question- 68: 

    // (function(){

    //     var a= 1;
    //     b= 3;
    // })();

    // console.log("b:", b);
    // console.loh("a.", a);



// question- 69:

    // difference between "debouncing" and "throttling".




// question- 70:
    // var b = 1;
    // function outer(){
    // var b = 2
    // function inner(){
    //     b++;
    //     var b = 3;
    //     console.log(b)
    // }
    // inner();
    // }
    // let x= outer();
    // let y= x();  // ans= 3



// question- 71:

    // const object = {
    //     a: {     
    //         b: {    
    //             c: {    
    //                 d: {    
    //                     e: {    
    //                         f: null,    
    //                     },    
    //                 },    
    //             },    
    //         },    
    //     },    
    //     f: {    
    //         f1: {   
    //             f2: {    
    //                 f3: [],   
    //             },    
    //         },    
    //     },    
    //     z: {    
    //         z1: {    
    //             z2: {    
    //                 z3: 12345,    
    //             },    
    //         },    
    //     },    
    // };
        
    //     const flatObject = (obj) => {
    //         let result = {};
            
            
    //     };
        
    //     flatObject(object); // {f:null, f3: [], z3:12345}


// question- 72:
 
// https://api.themoviedb.org/3/discover/movie ? language=en-US&page=1&sort_by=popularity.desc&api_key=36f8886db1d01cae84c5897954035e71

// in above url the content after '?' is called 'query params'.

/*
    'https' = protocol
    'api.themoviedb.org' = server
    '3/discover/movie' = path inside the server
    'language=en-US&page=1&sort_by=popularity.desc&api_key=36f8886db1d01cae84c5897954035e71' = query params in form of key- value pair

*/



// question- 73:

    // priority of task queue in event loops in promises

        // stack(global context)  >  micro-task queue(like promises)  >  macro-task queue(like setTimeout())




// question- 74:

    // difference b/w 'curl' and 'url'



// question- 75:

    // console.log( [] + 1 ); // "1"
    // console.log( [1] + 1 ); // "11"
    // console.log( [1,2] + 1 ); // "1,21"

    /*
        --> they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".
        --> hen the binary plus "+" operator adds something to a string, it converts it to a string as well,
    */


    // console.log( 0 == [] ); => 0 == '' => // true
    // console.log('0' == [] ); => '0' == '' => // false


    /*
        --> Here, in both cases, we compare a primitive with an array object. 
            So the array [] gets converted to primitive for the purpose of comparison and becomes an empty string ''.
    */


// question- 76:

    // let john = { name: "John" };
    // let array = [ john ];
            
    // john = null; // overwrite the reference
    // console.log(array[0]);
            
        // the object previously referenced by john is stored inside the array
        // therefore it won't be garbage-collected
        // we can get it as array[0]
    



// question- 77:

    // let start1;
    // let end1;

    // function pow1(x, n) {
    //     start1= Date.now();
    //     let result = 1;

    //     // multiply result by x n times in the loop
    //     for (let i = 0; i < n; i++) {
    //         result *= x;
    //     }
    //     end1= Date.now();
    //     return result;
    // }

    // console.log(`iterative way: ${pow1(2, 3)} and time: ${end1 - start1}`); // 8

    // let start2;
    // let end2;

    // function pow2(x, n) {
    //     start2= Date.now();
    //     if (n == 1) {
    //         end2= Date.now();
    //         return x;
            
    //     } else {
    //         return x * pow2(x, n - 1);
    //     }
        
    // }
    // console.log(`iterative way: ${pow2(2, 3)} and time: ${end2 - start2}`);





// question- 78:


    // const arr7 = [1,2,5];

    // let resfind7 = arr7.reduce((accumulator ,value)=>{

    // return accumulator + value;

    // }, true); //It takes true as 1

    // console.log(resfind7); // 9



// question- 78: promises are EAGER in nature
    // --> means as soon as executor sees promise it tries to execute promise immediately

    // const promise= new Promise((res, rej) => {
    //     setTimeout(() => {
    //         console.log(9);
    //         res(100);
    //     }, 0);
    //     console.log(4);
    // });

    // console.log(1);
    // promise.then(data => console.log(`promise`, data));

    // console.log(2);



// question- 79:

    // const student= {
    //     name: 'john',
    //     lastname: 'adamson',
    //     college: 'boston',

    //     print_college: () => {
    //         console.log('1. ', this.college);
    //     },
    //     print_name: function() {
    //         console.log('2. ', this.name, this.lastname);

    //         function func1() {
    //             console.log('3. ', this.name); // this -> window.name= ""

    //             function func2() {
    //                 console.log('4. ', this.name); // this -> window.name= ""

    //                 function func3() {
    //                     console.log('5. ', this.name); // this -> window.name= ""
    //                 };
    //                 func3(); // => function invocation 'this' will point out to the window
    //             }
    //             func2(); // => function invocation 'this' will point out to the window
    //         }
    //         func1(); // => function invocation  'this' will point out to the window
    //     },
    // };

    // student.print_name();
    // student.print_college();



// question- 80:

    const x= "df"
    const obj= {};

    console.log(x && obj); // => {}
    console.log(obj && x); // => df
    console.log(x && obj && x); // => df
    console.log(x && obj || x); // => {}   ----------- try other thing as well and find why this is happening
