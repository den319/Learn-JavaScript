
/*
    1. closure
    2. async javascript and event loops
    3. syncronous
    4. web API
        1. setTimeout()
        2. fetch()
        3. async() and await()
            1. back-end working of async() and await()

    5. promise
        1. creation of promise
        2. consume promise
        3. promise chaining
        4. micro task-queue vs. macro task-queue
        5. promise API  
            1. promise.all
    6. finally()
    7. error handling
        1. resolve()
        2. reject()
    8. arrow function
    9. arguments
*/


// 1. closure

    /*
        --> closure: a function with its lexical environment
    */

    // e.g. 1:

        // var lastName= "ackerman";

        // // function getFullName() {
        // //     return firstName + lastName;
        // // }
        // function details() {
        //     var firstName= "john";

        //     return function() {
        //         return firstName + lastName;
        //     };
        // }

        // let data= details();
        // console.log("1.",data()); // --> johnackerman


    // e.g. 2:

        // function increaseCount() {
        //     let counter= -1;
        //     console.log("a.",counter);

        //     return () => {
        //         console.log(counter++);
        //         // return 0;
        //     }
        // }

        // let counter1= increaseCount();
        // let counter2= increaseCount();
        // let counter3= increaseCount();

        // console.log("2.", counter1());
        // console.log("2a.", counter1());
        // console.log("2b.", counter1());

        // console.log("3.", counter2());
        // console.log("4.", counter3());

    
    // e.g. 3:
    
        // let add= (a1) => {
        //     return (a2) => {
        //         console.log("5.", a1 + a2);
        //     };
        // };

        // add(20)(10); // --> 30


    // e.g. 3 ********************:
        
        // let sum= () => {};

        // console.log("5.",sum());
        // console.log("6.", sum(20)(30)(40)(50));

        // approach- 1:

            // let sum1= (a) => {
            //     return (b) => {
            //         return (c) => {
            //             return (d) => {
            //                 return a+b+c+d;
            //             }
            //         }
            //     }
            // }

        // let sum1= (a) => {
        //     return (b) => {
        //         return () => {
        //             return a+b;
        //         } 
        //     }
        // }

        // console.log("7.", sum1(20)(30)(40)(50));






// 2. async javascript and event loops

    // e.g. 1:
    // console.log("8. hi");

    // setTimeout( () => {
    //     console.log("9. johnson"); // here, '()' -> is callback function
    // }, 5000);

    // console.log("10. hehe");

        /*
            --> parsing of e.g. 1 will be same as normal
            --> execution:
                --> first it will execute "console.log("8. hi")" and print "hi".
                --> then executer comes to setTimeout() function, and browser will store the callback function which is inside the setTimeout() function, inside WEB-API MEMORY.
                --> web-API memory also contains TIMER
                        --> i.e. :
                                web-API memory:
                                    1.  () => {
                                         console.log("9. johnson")
                                        }

                                    2. timer: 5000 ms

                --> as javascript will not wait for anything, it will continue its execution
                --> it will execute "console.log("10. hehe")" and print "hehe".

                --> when timer comes to 0 ms, the another MECHANISM will activate and executes the callback function inside web-API memory.
                --> the callback function will print "johnson".  
        */

        /*
            --> event loops: Event loop in JavaScript is a mechanism(algorithm) through which the 'calls waiting for execution' in the callback queue/job queue can be put on the call stack. 
                --> For any event from the callback queue/job queue to come to call stack, the call stack will have to be empty.
                --> simply, event loops is mechanism that handles the functions stored inside the web-API memory and manage its execution(i.e. when to execute)

                --> e.g. 2: 
                    console.log("8. hi");

                    setTimeout( () => {
                        console.log("9. johnson");
                    }, 5000);

                    console.log("10. hehe");
                    another 10 million lines of code

                    --> in above e.g., there is setTimeout() function which will execute the callback function after 5000 ms
                    --> there is also 10 million lines of code to execute
                    --> let's say that executer can execute 1 million lines of code in 1000 ms
                    --> so after 5000 ms, only 5 million lines of code will be executed
                    --> and also our callback() function has a timer of 5000 ms
                    --> so what will happen?
                        a) after executing 5 million lines, executer will execute callback() function and then execute rest of 5 million lines
                            i.e. output:
                                "8. hi"
                                "10. hehe"
                                5 million lines of code
                                "johnson"
                                5million lines of code

                        b) it will first execute all the 10 million lines of code and then at the end executes the callback() function.
                            i.e. output:
                                "8. hi"
                                "10. hehe"
                                10 million lines of code
                                "johnson"
                
                --> how functions in web-API memory executed:
                    --> when the timer becomes 0 ms, the function inside the web-API memory goes into queue(data-structure) and this queue calles TASK-QUEUE.
                    --> NOTE: 2 TYPES OF TASK-QUEUE / CALL-BACK QUEUE / JOB QUEUE:
                        1. MICRO TASK-QUEUE
                        2. MACRO TASK-QUEUE : the task queue we are currently discussing is of this type

                    --> so the function inside web-API memory do not directly executed but first go to the task-queue.
                    --> as we know execution context are stored inside the stack and once the execution is completed that perticuler context will be poped out from the stack.
                
                --> event-loop mechanism(algorithm):
                    --> psuedo-code of this mechanism:

                        if(task-queue is not empty) {
                            if(call-stack is empty) {
                                pop-out function from task-queue;
                                add that popped function inside call-stack;

                            } else {
                                wait;
                            }
                        } else {
                            wait;
                        }


                --> so come back to our e.g. 2:
                    console.log("8. hi");

                    setTimeout( () => {
                        console.log("9. johnson");
                    }, 5000);

                    console.log("10. hehe");
                    another 10 million lines of code

                    --> so when timer becomes 0 ms, the callback() function will be added inside task-queue by event-loop mechanism
                    --> meanwhile, the code is executed continuesly
                    --> according to the mechanism, event loop will first check, if task-queue is empty or not.
                        --> if empty than event-loop will wait
                        --> else event loop will check if call-stack is empty or not
                            --> if not empty than it will wait
                            --> else event-loop will pop-out the function from the queue and add that popped-out function inside the call-stack
                    
                    --> about emptiness of call-stack:
                        --> while execution of code is running, there will be a global context present inside call-stack
                        --> when the whole code is executed(i.e. from starting line to the ending line), the global execution context will be popped out from the call-stack only after that
                        --> so when whole code is executed, then after call-stack will be empty otherwise during the whole duration, there is atleast global context will be present inside call-stack so call-stack will never be empty until whole code is executed
                        --> when global context will be removed than only functions from task-queue will be added
        
                --> summary:
                    --> the functions inside task-queue will be executed only after the whole code is executed

                --> Output of e.g. 2:

                    --> the answer of e.g. 2 is:

                                "8. hi"
                                "10. hehe"
                                10 million lines of code
                                "johnson"

                
        */

    // e.g. 3:
    // console.log("11. sam");

    // setTimeout( () => {
    //     console.log("12. tree"); // here, '() => {...}' -> is callback function
    // }, 0);

    // console.log("13. grass");


    


// 3. synchronous: one task at a time





// 4. web API:

    /*
        --> it is originally a BOM object
        --> local storage, console, geo-location, setTimeout()
    */

        // 1. setTimeout():


        // 2. fetch():

            /*
                --> fetch:
                    --> 1. calling the server
                        2. judging the data
                            2.1 if data is good then OK, no error -> success (data)
                            2.2 if data is bad, not OK, error -> ERROR
            */
            // const promiseQuote= fetch('https://api.kanye.rest/')
            //     .then (responseObj => {
            //         console.log("Status is: ", responseObj.status)
            //         return responseObj.json()
            //     })
            //     .then(data => {
            //         const quote= data.quote;
            //         const element= document.createElement('h1');

            //         element.innerText= quote;

            //         const body= document.body;
            //         body.appendChild(element);

            //         console.log("this is the real data");
            //     })
            //     .catch (error => {
            //         console.log("error!!!");
            //         console.log(error);
            //     });
                

            // console.log("20.", promiseQuote);

            // console.log("20a. wonderful");



        // 3. async() and await()

            //e.g. 1:

                // async function fun() {
                //     return 1978;
                // }

                // const funPromise= fun();

                // funPromise.then(data => {
                //     console.log("21.", data);
                // });

                // console.log("22.", funPromise);

            
            // e.g. 2: await also uses the .then() behind the scenes
                
                // async function fetchQuotes() {
                //     const response= await fetch('https://api.kanye.rest/');

                //      // .then(() => {})
                //     console.log("23.", response);

                //     const data= await response.json();

                //      // .then(() => {})
                //     console.log("24.", data);

                //     const{quote}= data; // const quote= data.quote;

                //     console.log("25.", quote);

                //     addToDom(quote);
                // }

                // function addToDom(quote) {
                //     const element= document.createElement('h1');
                //     element.innerText= quote;

                //     const body= document.body;

                //     body.appendChild(element);
                // }

                // fetchQuotes();


            // 1. back-end working of async() and await():
                /*
                    --> the working is same as setTimeout(), the difference is, in setTimeout(), macro task queue is used.
                        but here, micro task queue is used
                    --> apart from this difference, working is same as setTimeout().
                */

                // console.log("26. hello");
                // fetch('https://api.kanye.rest/')
                //     .then(response => {
                //         return response.json();
                //     }) 
                //     .then(data => {
                //         console.log("26.", data);
                //     }) 
                //     .catch(error => {
                //         console.log("27. error!!!");
                //     });
                
                // console.log("28. finished");



// 5. promise:



    /*
        --> promise: it is a placeholder for some value that is going to be arrived in the future.

        --> NOTE: 1. difference b/w promeses and call-back functions
                  2. why promises are used instead of call-back functions?
                    --> pyramid of doom
                    --> order of execution of inner call-backs is confusing(i.e. not linear)

                        e.g. : 

                            function googleCall('onbeading mails', (work) => {
                                console.log(1); // printed first
                                // 1st: work....

                                function googleGetReplies('respose', (playWithReplies) => {
                                    // 2nd: replies
                                    console.log(3); // printed third
                                })

                                console.log(2); // printed second

                                googleReplies();
                            })

                        --> from above e.g., you can see that execution is not linear
                        --> i.e. googleGetReplies() is calles at the end so it will be executed last not exactly after "console.log(1)".
    */

                
    // 1. creation of promise:

        // 1. using constructor method:   
            // e.g. 
            // const myFetch= new Promise((resolve, reject) => {
            //     try {
            //         const data= {status: 500, url: "xyz",
            //         data: {
            //             name: "penny",
            //             state: "panama",
            //             id: "55452",
            //         }
            //         }

            //         if(data.status === 200) {
            //             resolve(data);
            //         } else if(data.status === 500) {
            //             reject({errorCode: 500, message: "server is down"});
            //         }
            //     } catch(error) {
            //         reject("error!!!!!!");
            //     }
            // });

            // myFetch.then(data => {
            //     console.log("29. the data is: ");
            //     console.log("30.", data);
            // });

        // 2. to use async keyword:
            // function abc() {
            //     return 1;
            // }

            // const result= abc();
            // console.log("31. result: ",result);

            // async function getQuote() {
            //     return 1;
            // }

            // const result1= getQuote();
            // console.log("32. promise object: ",result1);


    // 2. consume promise:
        
        // 1st way: using "then" block

            // result1.then(data => {
            //     console.log("33.", data);
            // });

        // 2nd way: using "await"

            // const result2= await getQuote();
            // console.log("34.", result2);
            
    // 3. promise chaining:

        // console.log("29. fhdyusj");
        // fetch('https://api.kanye.rest/')
        //     .then(response => {
        //         return response.json();
        //     }) 
        //     .then(data => {
        //         console.log("30. data-handler-0", data);
        //         return 1000;
        //     }) 
        //     .then(data => {
        //         console.log("31.", "data-handler-1", data);
        //     }) 
        //     .then(data => {
        //         console.log("32.", "data-2");
        //     }) 
        //     .then(data => {
                
        //     }) 
        //     .then(data => {
                
        //     }) 

        //     .catch(error => {
        //         console.log("34. error!!!");
        //     })
        //     .then(data => {
                
        //     }) 
        //     .then(data => {
                
        //     }) 

        // console.log("35. success");


    // 4. micro task-queue vs. macro task-queue:

        /*
            --> event loop algorithm first prioritize the task in micro task queue and when all task from micro task is completed then only it will go to macro task-queue.

        */

        // e.g :
            // let promise1= new Promise((res, rej) => { // micro task-queue
            //     res("result");
            // });

            // console.log("35a. helllo");

            // setTimeout(() => {
            //     console.log("35b. hello world"); // macro task-queue
            // }, 0);
            
            // promise1.then (data => {
            //     console.log("35c. data: ", data);
            // });

            // console.log("35d. finished!!!");

    
    // 5. promise API:
        // 6 static methods

        /*  1. promise.all(): 
                --> it takes array(array of promises)
                --> if any of the promise fails, all of the promises will fail.

            2. promise.race(): 
                --> it will wait till the first promise is settled and then it will be resolved.
                --> it takes the fastest response of promise and ignore others even if the fastest response is an error.

                --> NOTE: to use race(), you need to ensure that any promises should not give an error.
                    --> i.e. all promises should be fulfilled not rejected.

            3. promise.any():
                --> it will take the first promise that is resolved successfully
                --> if two promese are resolved in the same time then the 1st promise in the order will be accepted.

                --> difference between any() and race():
                    --> in race(), even if fastest response gives error, it will not check other promeses.
                    --> so in race(), the first priority is speed and also promises should not be rejected
                    --> in any(), speed matters less than the fulfillness of promise so when promise is fullfilled, the work of any() will be done.

                    --> NOTE: in any(), promise can be rejected and in race(), promises must not be rejected.

            4. promise.resolve():
                --> resolves the promise


            5. promise.reject():
                --> reject the promise


            6. promise.allSettled():
                --> 
        */



// 6. finally(): it does not matter where .finally() is written but it will always run after the all then() and catch() handlers.
            //  --> finally() will not get any data which was returned by the previous blocks / handlers

        // fetch('https://api.kanye.rest/')
        //     .then(response => {
        //         return response.json();
        //     }) 
        //     .then(data => {
        //         console.log("36. data-handler-0", data);
        //         return 1000;
        //     }) 
        //     .then(data => {
        //         console.log("37.", "data-handler-1", data);
        //     }) 
        //     .then(data => {
        //         console.log("38.", "data-2");
        //     }) 

        //     .catch(error => {
        //         console.log("39. error!!!");
        //     })
        //     .finally( () => {
        //         console.log("40. finally back.....");
        //     })

        // console.log("41. success");

    

// 7. error handling:

        /*
            1. .then(): data handler as well as error handler
            2. .catch(): error handler

            NOTE: when you get an error at any level, the error handlling will always be below that level.



            1. resolve(): promise wants to change the status of promise object(old status -> pending) to Fulfilled.
            2. reject(): same thing with reject() also the only difference is, it changes the status to rejected.


            NOTE: IF BY ANY CHANCE, THERE IS AN UNHANDELED ERROR(I.E. WITHOUT CATCH()), YOU CAN USE EVENT-LISTENER TO HANDLE THE ERROR. 

        */

        // fetch('https://api.kanye.rest/')
        //     .then(response => {
        //         throw Error("error is coming")
        //         return response.json();
        //     }) 
        //     .catch(error => {
        //         console.log("41a. error-1 !!!" , error);
        //     })

        //     .then(data => {
        //         console.log("42. data-handler-0", data);
        //         return 1000;
        //     }) 
        //     .then(data => {
        //         console.log("43.", "data-handler-1", data);
        //     }) 
        //     .then(data => {
        //         console.log("44.", "data-2");
        //     }) 

        //     .catch(error => {
        //         console.log("45. error-2 !!!" , error);
        //     })

        // console.log("46. success");



// ------------------------- 8. arrow function -----------------------------
    
    // var a= 95;
    // var b= 71;

    // let d= 21;

    // let obj= {
    //     a: 10,
    //     b: function() {
    //         // context -> this -> obj 
    //         console.log("47. ", this);
    //         console.log("48. ", this.a)
    //     },
    //     c: () => {
    //         console.log("49. ", this.a);
    //         console.log("50. ", this);
    //         console.log("50a. ", this.d); // undefined why?
    //     }
    // }

    // obj.b();
    // obj.c(); // --> 95

    /*
        --> obj.c() = 95 beacause there is no concept of "THIS" or "CONTEXT" inside the arrow function
        --> "this" inside the arrow function is nothing but the PARENT'S context and binding also points to PARENT in case of arrow function

        NOTE: inside object, there is no such things like "execution context" but constructor function and normal function have.
    */
            


// ------------------------- 9. Arguments -----------------------------

    /*
        --> "arguments" keyword: gives object which contains list of arguments
        --> "arguments" inside the arrow function does not have weightage
    */
    // function abc1(a,b,c) {
    //     const arg= arguments; 
    //     console.log("51. ", arg);
    //     console.log("52. ", arg[0], arg[1]);
    // }

    // abc1(100, 253, 674);


    // const abc2= (a,b,c) => {
    //     const arg= arguments; 
    //     console.log("53. ", arg);
    //     console.log("54. ", arg[0], arg[1]);
    // }

    // abc2(365, 588, 921);