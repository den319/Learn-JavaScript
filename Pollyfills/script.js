 
 /*
    1. Array:

        1. map()
        2. filter()
        3. reduce()
        4. let

        5. call()
        6. apply()
        7. bind() 

        8. push()
        9. pop()
        10. shift()
        11. unshift() 
        12. at()
        13. concat()
        14. copyWithin() ----- incomplete
        15. entries() -----incomplete
        16. every()
        17. fill()
        18. find() ------ incomplete - for more than 1 arguments
        19. findIndex() ------ incomplete - for more than 1 arguments
        20. findLast()
        21. findLastIndex()
        22. flat() ----- incomplete
        23. flatMap() ----- incomplete
        24. forEach() ----- incomplete
        25. from() ----- incomplete
        26. fromAsync()  ----- incomplete
        27. includes()
        28. indexOf()
        29. isArray()
        30. join()
        31. keys()
        32. lastIndexOf()
        33. of()  ----- incomplete
        34. reduceRight()
        35. reverse()
        36. slice()
        37. some()
        38. sort()  ----- incomplete
        39. splice()  ----- incomplete
        40. toLocaleString()  ----- incomplete
        41. toReversed()
        42. toSorted()  ----- incomplete
        43. toSpliced()  ----- incomplete
        44. toString()  ----- incomplete
        45. values()  ----- incomplete
        46. with()  ----- incomplete



    2. Promises:



 */


    // NOTE:

        /*
            --> here when we are creating our own functions, we used function expression with normal function not with arrow function.
            --> because we can access parameters of function using "arguments" keyword in normal function which is not possible inside arrow function, if used it will give an error:

                --> error: Uncaught ReferenceError: arguments is not defined
        */

// -------------------------------------------------------------- POLLYFILLS IN ARRAY ---------------------------------------------------



    



    // --------------------------------------------------------------------- 1. map() -----------------------------------------------------

        const arr1= [10, 20, 30, 40, 50];

        // ---------- ------ map():

            const result1_1= arr1.map((item, index) => {
                                return {
                                    index,
                                    value: item,
                                }
                            });       
            console.log("1. map: ", result1_1);

        // ------------------ myMap():

            Array.prototype.myMap= function(callback) {

                // context -> this
                let arr= this;
                const result1= [];

                for(let i= 0; i < arr.length; i++) {
                    const val= callback(arr[i], i);
                    result1.push(val);
                }
                return result1;
            }

            const callback= (item, index) => {
                return {
                    index,
                    value: item,
                }
            }

            const result1_2= arr1.myMap((item, index) => { // call-site and implicite binding
                return {
                    index,
                    value: item,
                }
            });
            console.log("1a. myMap: ", result1_2);

        
    // -------------------------------------------------------------------- 2. filter() ----------------------------------------------------------------

        const arr2= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const callbackFilter= (item, index, array) => {
            return item > 5;
        };

        // filter():
            const result2_1= arr2.filter(callbackFilter);
            console.log("2. filter: ", result2_1);

        // myFilter():
            
            Array.prototype.myFilter= function(callback) {
                let arr= this;
                const result2= [];

                for(let i=0; i<arr.length; i++) {
                    const val= callback(arr[i]);

                    if(val) {
                        result2.push(arr[i]);
                    }
                }
                return result2;
            }

            const result2_2= arr2.myFilter((item, index) => {
                return item > 5;
            });
            console.log("2a. myFilter: ", result2_2);


    // ------------------------------------------------------------------------ 3. reduce() -----------------------------------------------------------------

        const arr3= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // reduce():

            const result3_1= arr3.reduce((accumulator, currVal) => {
                return accumulator + currVal;
            }, 10);

            console.log("3. reduce: ", result3_1);


        // myReduce():

            Array.prototype.myReduce= function(callback, initialVal) {
                let arr= this;
                // console.log("***. ", arr);

                let accumulator= initialVal ? initialVal : arr[0];
                for(let i=initialVal != null ? 0 : 1; i<arr.length; i++) {
                    accumulator = callbackReduce(accumulator, arr[i]);
                }
                return accumulator;
            }

            const callbackReduce= (accum, curr) => {
                return accum + curr;
            }

            // const result3_2= arr3.myReduce((accum, item) => {
            //     return accum + item;
            // }, 10);

            // OR

            const result3_2= arr3.myReduce(callbackReduce, 10);

            console.log("3a. myReduce: ", result3_2);



    // ---------------------------------------------------------- 4. let ---------------------------------------------------------------

        // using "var":

            // for(var i=0; i<4; i++) {
            //     setTimeout(() => {
            //         console.log("4. ", i);
            //     }, 2000);
            // }

        // using "let": 

            // for(let i=0; i<4; i++) {
            //     setTimeout(() => {
            //         console.log("5. ", i);
            //     }, 2000);
            // }

        // using "var" but work as "let"
            
            // way: 1

                // for(var i=0; i<4; i++) {
                //     ((j) => {
                //         // var j= i;;
                //         setTimeout(() => {
                //             console.log("6. ", j);
                //         }, 2000);
                //     })(i); // --> Imediate Invoke Function
                // }

            // way: 2 (by function expression):

                // for(var i=0; i<4; i++) {
                //     let s= function(i) {
                //         var j= i;
                //         setTimeout(() => {
                //             console.log("7. ", j);
                //         }, 5000);
                //     };
                
                //     s(i);
                // }








    

    // ------------------------------------------------------------- 5. call() -----------------------------------------------------------

        const obj1= {
            name: "amy",
        }

        const obj1_1= {
            name: "jason",
            foo: function(a,b,c,d) {
                console.log("9. ", this.name, a,b,c,d);
            }
        }

        // call(), apply(), bind():
            console.log("call:"); 
            obj1_1.foo.call(obj1, 10, 8, 2, 5); // the 'foo' function will be executed that point of time

            // obj1_1.foo.apply(obj1, [4, 32, 1, 9]);

            // const fooCopy= obj1_1.foo.bind(obj1, 6, 91, 65, 3); // !call site  // 'foo' can be be executed later on 
            // fooCopy();


        // myCall():

            // 1. with arguments:

                Function.prototype.myCall1= function(context, ...args) {
                    const func1= this; // here 'this' === foo

                    const contextCopy1= {...context}; // {name: "amy"}
                    contextCopy1.funcName1= func1; // {name: "amy", funcName: func / foo}
                    contextCopy1.funcName1(...args);
                }
                console.log("myCall1:");
                obj1_1.foo.myCall1(obj1, 10, 8, 2, 5,);

            
            // 2. without arguments:

                Function.prototype.myCall2= function() {
                    const func2= this;

                    let context2= arguments[0]; // obj1
                    let args2= [...arguments]; 
                    // console.log(args);
                    args2.shift(); // 10, 8, 2, 5

                    

                    const contextCopy2= {...context2}; // obj1
                    contextCopy2.funcName2= func2; // this

                    contextCopy2.funcName2(...args2);
                }

                console.log("myCall2:");
                obj1_1.foo.myCall2(obj1, 10, 8, 2, 5,);


    // ------------------------------------------------------------- 6. apply() -----------------------------------------------------------

        // apply():
            console.log("apply:");
            obj1_1.foo.apply(obj1, [4, 32, 1, 9]);

        
        // myApply():

            // 1. with arguments:

                Function.prototype.myApply1= function(context, args) {
                    const func3= this; // here 'this' === foo

                    const contextCopy3= {...context};
                    contextCopy3.funcName3= func3;
                    contextCopy3.funcName3(...args);
                }
                console.log("myApply1:");
                obj1_1.foo.myApply1(obj1, [4, 32, 1, 9]);

            
            // 2. without arguments:

                Function.prototype.myApply2= function() {
                    const func= this;

                    let context= arguments[0];
                    let args= arguments[1];

                    

                    const contextCopy= {...context};
                    contextCopy.funcName= func;

                    contextCopy.funcName(...args);
                }

                console.log("myApply2:");
                obj1_1.foo.myApply2(obj1, [4, 32, 1, 9]);





    // ------------------------------------------------------------- 7. bind() -----------------------------------------------------------

        // bind():
            console.log("bind:");
            const fooBind1= obj1_1.foo.bind(obj1, 6, 91, 65, 3); // 'foo' can be be executed later on 
            fooBind1();


        // myBind():
            
            // 1. with arguments:

                Function.prototype.myBind1= function(context, ...args) {
                    let func4= this;

                    return function() {
                        func4.myCall2(context, ...args);
                    }
                }
                console.log("myBind1:");
                const fooBind2= obj1_1.foo.myBind1(obj1, 6, 91, 65, 3); // 'foo' can be be executed later on 
                fooBind2();


            // 2. without arguments:

                Function.prototype.myBind2= function() {
                    let func4= this;

                    let context= arguments[0];
                    let args= [...arguments];
                    args.shift();

                    return function() {
                        func4.myCall2(context, ...args);
                    }
                }
                console.log("myBind2:");
                const fooBind3= obj1_1.foo.myBind2(obj1, 6, 91, 65, 3); // 'foo' can be be executed later on 
                fooBind3();




    // ------------------------------------------------------ 8. push() -------------------------------------------------------------

        // push(): Appends new elements to the end of an array, and returns the new length of the array.
            
            const arr8_1= [1, 2, 3, 4];

            arr8_1.push(10);
            console.log("10. push: ", arr8_1);

        
        // myPush():
            
            const arr8_2= [1, 2, 3, 4];

            Array.prototype.myPush= function() {
                let arr8= this;

                let n= arr8.length;
                let j= 0;

                // console.log(n);

                if(n == 0) {
                    for(let i= 0; i<arguments.length; i++) {
                        arr8[i] = arguments[i];
                    }
                }
                if(n > 0) {
                    // console.log(n , arguments.length);

                    for (let i= n; i< n+arguments.length; i++,j++){
                        arr8[i]= arguments[j];
                        // console.log(n , j);
                    }
                }
                

                return arr8.length;
            }

            arr8_2.myPush(10,12,13);
            console.log("11. muPsh: ", arr8_2);



    // ------------------------------------------------------ 9. pop() ---------------------------------------------------------------

        // pop(): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

            const arr9_1= [1, 2, 3, 4];

            const val9_1= arr9_1.pop();
            console.log(`12. Pop: ${arr9_1} popped val: ${val9_1}`);
            
        
        // myPop():

        const arr9_2= [1, 2, 3, 4];

        Array.prototype.myPop= function() {
            let arr9= this;
            let n= arr9.length;
            let val;
            
            if(n === 0) {
                val= undefined;
            }
            if(n > 0) {
                val= arr9[n-1];
                let copyArr= [...arr9]; // shallow copy of arr9 and the address of copyArr will be different inside the heap

                arr9.length= 0; // making arr9 a blank array so ultimately the values inside the array will be erased but the address remains same inside the heap

                for(let i=0; i<n-1; i++) {
                    arr9[i]=copyArr[i];
                }
            }
            return val;            
        }
        const val9_2= arr9_2.pop();
        console.log(`12. myPop: ${arr9_2} popped val: ${val9_2}`);




    // ------------------------------------------------------ 10. shift() -------------------------------------------------------------

        

        // shift(): Removes the first element from an array and returns it. 
                 // If the array is empty, undefined is returned and the array is not modified.
            const arr10_1= [1,2,3,4,5];

            const val10_1= arr10_1.shift()

            console.log(`8. shift: ${arr10_1} and shifted val: ${val10_1}`);


        // myShift():
            
            const arr10_2= [1,2,3,4,5];    

            Array.prototype.myShift= function() {
                // console.log(this);
                const arr10= this;
                let n= arr10.length;

                let val;
                if(n== 0) {
                    val= undefined;
                } 
                if(n > 0) {
                    val= arr10[0];

                    let copyArr= [...arr10];  // shallow copy of arr10 and the address of copyArr will be different inside the heap
                    arr10.length= 0; // making arr10 a blank array so ultimately the values inside the array will be erased but the address remains same inside the heap

                    for(let i=1; i<n; i++) {
                        arr10[i-1]= copyArr[i];
                    }
                }

                return val;
            }

            const val10_2= arr10_2.myShift();

            console.log(`8. myShift: ${arr10_2} and shifted val: ${val10_2}`);



    // ------------------------------------------------------ 11. unshift() -------------------------------------------------------------

        // unshift(): Inserts new ELEMENTS at the start of an array, and returns the new length of the array.

            const arr11_1= [1,2,3,4,5];

            const val11_1= arr11_1.unshift(10,78,82);

            console.log(`8. unshift: ${arr11_1} and length: ${val11_1}`);


        // myUnshift():

            const arr11_2= [1,2,3,4,5];

            Array.prototype.myUnshift= function() {
                const arr11= this;
                let n= arr11.length;

                const copyArr= [...arr11];  // shallow copy of arr11 and the address of copyArr will be different inside the heap
                arr11.length= 0;// making arr11 a blank array so ultimately the values inside the array will be erased but the address remains same inside the heap

                let args= [...arguments];
                arr11.myPush(...args);
                arr11.myPush(...copyArr);

                return arr11.length;
            }

            const val11_2= arr11_2.myUnshift(10,78,82);

            console.log(`8. unshift: ${arr11_2} and length: ${val11_2}`);



    // ------------------------------------------------------ 12. at() -------------------------------------------------------------

        const arr12_1= [1,2,5,7,8];

        // at():
            
            console.log(`9. at index= 2: ${arr12_1.at(2)} and at index= -2: ${arr12_1.at(-2)}`);
            console.log(`10. at index= 5: ${arr12_1.at(5)} and at index= -6: ${arr12_1.at(-6)}`);

        
        // myAt():

            Array.prototype.myAt= function() {
                const arr12= this;
                const n= arr12.length;

                const index= arguments[0];

                if(index > n-1 || index < (-1 * n)) {
                    return undefined;
                }

                let result12= 0;

                if(index < 0) {
                    result12= arr12[n + index];
                } else {
                    result12= arr12[index];
                }

                return result12;
            }
        
            console.log(`11. at index= 2: ${arr12_1.myAt(2)} and at index= -2: ${arr12_1.myAt(-2)}`);
            console.log(`12. at index= 5: ${arr12_1.myAt(5)} and at index= -6: ${arr12_1.myAt(-6)}`);


    // ------------------------------------------------------ 13. concat() -------------------------------------------------------------

        const arr13_1= [1,2,3];
        const arr13_2= [4,5,6];
        const arr13_3= [7,8,9];

        // concate(): Combines   TWO OR MORE    arrays. This method returns a new array without modifying any existing arrays.

            const arr13_4= arr13_1.concat(arr13_2, arr13_3);

            console.log(`13. concatenated array: ${arr13_4}`);


        // myConcate():

            Array.prototype.myConcate= function() {
                const arr13= this;

                let result13= [...arr13];
                let args= [...arguments];
                // console.log(args);

                for(let i=0; i<args.length; i++) {
                    for(let j= 0; j< args[i].length; j++) {

                        result13[result13.length]= args[i][j];
                    }
                }
                // console.log(result13);
                return result13;
            }

            const arr13_5= arr13_1.myConcate(arr13_2, arr13_3);
            console.log(`14. concatenated array: ${arr13_5}`);





    // ------------------------------------------------------ 14. copyWithin() -------------------------------------------------------------

        








    
    // ------------------------------------------------------ 15. entries() -------------------------------------------------------------

        







    
        
    // ------------------------------------------------------ 16. every() -------------------------------------------------------------

        
        const arr16_1= [4, 10, 55, 7, 1, 98];

        const isBelow= (val) => val < 60;

        // every(): tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

            console.log('16. using every: ', arr16_1.every(isBelow));


        // myEvery():

            Array.prototype.myEvery= function() {
                let func= arguments[0];
                // console.log(arguments[2]);

                const arr16= this;

                for(let i=0; i<arr16.length; i++) {
                    if(!func(arr16[i])) {
                        return false;
                    }
                }
                return true;
            }


            console.log('17. using myEvery: ', arr16_1.myEvery(isBelow));




    // ------------------------------------------------------ 17. fill() -------------------------------------------------------------

        // fill():
        
            const arr17_1= [1,2,3,4,5,6];

            arr17_1.fill(-1);
            console.log(`18. using fill: ${arr17_1}`);


        // myFill():

            const arr17_2= [1,2,3,4,5,6];  
            
            Array.prototype.myFill= function() {
                const value= arguments[0];
                const start= arguments[1];
                const end= arguments[2];

                const arr17= this;


                if(start != undefined) {
                    if(end != undefined) {
                        for(let i=start; i<end; i++) {
                            arr17[i]= value;
                        }
                    } else {
                        for(let i=start; i<arr17.length; i++) {
                            arr17[i]= value;
                        }
                    }
                } else {
                    for(let i=0; i<arr17.length; i++) {
                        arr17[i]= value;
                    }
                }
                
                return arr17;
            }

            arr17_2.myFill(-1);
            console.log(`18. using myFill: ${arr17_2}`);




    // ------------------------------------------------------ 18. find() -------------------------------------------------------------

        const arr18_1= [1,8,6,7,10,20,50,5];

        const callback18= (element) => element >10

        // find();

            const ans18_1= arr18_1.find(callback18);

            console.log(`19. using find: ${ans18_1}`);

            
        // myFind():

            Array.prototype.myFind= function() {

                let arr18= this;
                const callback_func= arguments[0];
                const this_arg= arguments[1];

                for(let i=0; i<arr18.length; i++) {
                    if(callback_func(arr18[i])) {
                        return arr18[i]; 
                    }
                }
                return undefined;
            }

            const ans18_2= arr18_1.myFind(callback18);

            console.log(`20. using myFind: ${ans18_2}`);



    // ------------------------------------------------------ 19. findIndex() -------------------------------------------------------------

        const arr19_1= [1,8,6,7,10,20,50,5];

        const callback19= (element) => element >1000

        // findIndex():

            const ans19_1= arr19_1.findIndex(callback19);
            console.log(`21. using findIndex: ${ans19_1}`);


        // myFindIndex():

            Array.prototype.myFindIndex= function() {
                let arr19= this;
                const callback_func= arguments[0];
                const this_arg= arguments[1];

                for(let i=0; i<arr19.length; i++) {
                    if(callback19(arr19[i])) {
                        return i;
                    }
                }
                return -1;
            }

            const ans19_2= arr19_1.myFindIndex(callback19);
            console.log(`22. using myFindIndex: ${ans19_2}`);


    // ------------------------------------------------------ 20. findLast() -------------------------------------------------------------

        const arr20_1= [1,8,6,7,10,20,50,5];

        const callback20= (element) => element >10;

        // findLast();

            const ans20_1= arr20_1.findLast(callback20);

            console.log(`23. using findLast: ${ans20_1}`);

            
        // myFindLast():

            Array.prototype.myFindLast= function() {

                let arr20= this;
                const callback_func= arguments[0];
                const this_arg= arguments[1];

                for(let i=arr20.length-1; i>=0; i--) {
                    if(callback_func(arr20[i])) {
                        return arr20[i]; 
                    }
                }
                return undefined;
            }

        const ans20_2= arr20_1.myFindLast(callback20);

        console.log(`24. using myFindLast: ${ans20_2}`);



    // ------------------------------------------------------ 21. findLastIndex() -------------------------------------------------------------

        const arr21_1= [1,8,6,7,10,20,50,5];

        const callback21= (element) => element >10;

        // findLastIndex():
            
            const ans21_1= arr21_1.findLastIndex(callback21);

            console.log(`25. using findLastIndex: ${ans21_1}`);

        
        // myFindLastIndex():

            Array.prototype.myFindLastIndex= function(){

                let array21= this;
                const callback_func= arguments[0];
                const this_arg= arguments[1] || null;

                for(let i=arr21_1.length-1; i>=0; i--) {
                    if(callback_func(arr21_1[i])) {
                        return i;
                    }
                }

                return -1;
            }

            const ans21_2= arr21_1.myFindLastIndex(callback21);

            console.log(`26. using myFindLastIndex: ${ans21_2}`);
            


        // ------------------------------------------------------ 22. flat() -------------------------------------------------------------

            const arr22_1= [1,2,3, [[[4,5,6,7] ,8,9] ,10,11,12] ,13];
            const arr22_2= [1,2,3, [4,5,6 [7,8,9 [10,11,12]]]];

            // flat():

                const ans22_1= arr22_1.flat(4);
                console.log(`27. using flat: ${ans22_1}`);


            // myFlat():

                Array.prototype.myFlat= function() {
                    const arr22= this;
                    const depth= arguments[0];

                    let result= [];

                }



        // ------------------------------------------------------ 23. flatMap() -------------------------------------------------------------

            const arr23_1= [1,2,3, [[[4,5,6,7] ,8,9] ,10,11,12] ,13];
            const arr23_2= [1,2,3, [4,5,6 [7,8,9 [10,11,12]]]];
            const arr23_3 = [1, 2, 1];

            const callback23_1= (num) => (num === 2 ? [2,2] : 1)

            function callback23_2(num){
                num === 2 ? [2,2] : 1;
            }

            // flatMap():

                const ans23_1= arr23_3.flatMap(callback23_1);
                console.log(`28. using flatMap: ${arr23_3}`);




                const arr23 = [1, 2, 1];
                const result = arr23.flatMap((num) => (num === 2 ? [2, 2] : 1));
                // console.log(result); // [1, 2, 2, 1]


            // myFlat():

                Array.prototype.myFlatMap= function() {
                    const arr23= this;
                    const depth= arguments[0];

                    let result= [];

                }


        // ------------------------------------------------------ 24. forEach() -------------------------------------------------------------

            const arr24_1= [0,0,0,0,0];

            const callback24= (num) => {
                console.log(num);
            }

            // forEach():
                arr24_1.forEach(num => callback24(num));


            // myForEach:
                Array.prototype.myForEach= function() {
                    const callback_func= arguments[0];
                    const arr24= arguments[1] || this;
                    const this_args= arguments[2] || null;

                    for(let i of arr24) { // try 'in' instead of 'of' and see console
                        callback_func(i);
                    }
                }

                arr24_1.myForEach(num => callback24(num));


        

        // ------------------------------------------------------ 25. from() -------------------------------------------------------------

            const arr25_1= [1,2,3];

            // from():
                console.log(` using from(): ${Array.from(arr25_1, x => x+2)}`);
                console.log(` using from(): ${Array.from(arr25_1)}`);

                // console.dir(Array);
                // console.dir(Array.prototype);


            // myFrom:

                Array.myFrom= function() {
                    const arr25= arguments[0];
                    const callback_func= arguments[1] || null;
                    const this_args= arguments[2] || null;

                    const result= [];

                    for(let i= 0; i<arr25.length; i++) {
                        if(callback_func) {
                            result[i]= callback_func(arr25[i]);
                        } else {
                            result[i] = arr25[i];
                        }
                        
                    }

                    return result;
                }

                console.log(` using myFrom: ${Array.myFrom(arr25_1, x => x+2)}`);
                console.log(` using myFrom: ${Array.myFrom(arr25_1)}`);


                    

         // ------------------------------------------------------ 26. fromAsync() -------------------------------------------------------------







          // ------------------------------------------------------ 27. includes() -------------------------------------------------------------

                const arr27_1= [1,2,3,4];

                // includes():

                    console.log(`using includes(): ${arr27_1.includes(5)}`);



                // myIncludes():

                    Array.prototype.myIncludes= function() {
                        const arr27= this;
                        const num= arguments[0];

                        for(let i of arr27) {
                            if (i === num){
                                return true;
                            }
                        }

                        return false;
                    }


                    console.log(`using myIncludes: ${arr27_1.myIncludes(5)}`);
                    

        // ------------------------------------------------------ 28. indexOf() -------------------------------------------------------------

                const arr28_1= ['ant', 'bison', 'camel', 'duck', 'bison'];

                // indexOf():

                    const ans28_1= arr28_1.indexOf('bison');
                    const ans28_2= arr28_1.indexOf('bison', 2);

                    console.log(`using indexOf(): ${ans28_1}, ${ans28_2}`);



                // myIndexOf():

                    Array.prototype.myIndexOf= function() {
                        const arr28= this;
                        const value= arguments[0];
                        const index= arguments[1] || null;

                        let i= index != null ? index : 0;

                        for(i; i<arr28.length; i++) {
                            if (value === arr28[i]) {
                                return i;
                            }
                        }

                        return -1;
                    }

                    const ans28_3= arr28_1.myIndexOf('bison');
                    const ans28_4= arr28_1.myIndexOf('bison', 2);

                    console.log(`using myIndexOf(): ${ans28_3}, ${ans28_4}`);




        // ------------------------------------------------------ 29. isArray() -------------------------------------------------------------

            const arr29_1= [1,2,3,4];

            // isArray():

                console.log(`using isArray(): `,Array.isArray(arr29_1));
                // console.dir(Array);
                // console.dir(Array.prototype);


            // myIsArray():

            Array.myIsArray= function() {
                const arr28= arguments[0];

                // return arr28.constructor === Array; // --> works

                // return arr28 instanceof Array; --> works

                return ({}).toString.call(arr28) === '[object Array]';
            }

            console.log('using myIsArray: ',Array.myIsArray(arr29_1));



        // ------------------------------------------------------ 30. join() -------------------------------------------------------------

            const arr30_1= [1,2,3];

            // join():
                console.log(`using join(): ${arr30_1.join('-')}`);


            // myJoin:

                Array.prototype.myJoin= function() {
                    const arr30= this;
                    const separator= arguments[0] || ',';

                    let result= arr30[0];

                    for(let i=1; i< arr30.length; i++) {
                        result += separator + arr30[i];
                    }
                    
                    return result;
                }

                console.log(`using myJoin: ${arr30_1.myJoin()}`);



        // ------------------------------------------------------ 31. keys() -------------------------------------------------------------

            const arr31_1= [1, , 3];

                // keys():

                    let keys= arr31_1.keys();

                    for(let key of keys) {
                        console.log(`using keys(): ${key}`);
                    }


                // myKey():

                    Array.prototype.myKeys= function() {
                        const arr31= this;

                        const result= [];
                        for(let i=0; i<arr31.length; i++) {
                            result[i]= i;
                        }

                        return result;
                    }

                    // case-1:

                    keys= arr31_1.myKeys();

                    for(let key of keys) {
                        console.log(`using myKeys: ${key}`);
                    }

                    // case-2:

                    const arrayLike = {
                        length: 3,
                      };
                      for (const entry of Array.prototype.myKeys.call(arrayLike)) {
                        console.log('using myKeys: ', entry);
                      }


        // ------------------------------------------------------ 32. lastIndexOf() -------------------------------------------------------------

            const arr32_1= ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

            // lastIndexOf():
                
                console.log(`using lastIndexOf(): ${arr32_1.lastIndexOf('Dodo')}`);


            // myLastIndexOf():

                Array.prototype.myLastIndexOf= function() {
                    const arr32= this;
                    const target= arguments[0];

                    for(let i=arr32.length-1; i>=0; i--) {
                        if(target===arr32[i]) {
                            return i;
                        }
                    }
                    return -1;
                }

                console.log(`using myLastIndexOf(): ${arr32_1.myLastIndexOf('Dodo')}`);






        // ------------------------------------------------------ 33. of() -------------------------------------------------------------

            // of():

                console.log(`using of(): ${Array.of(1,2,3,4)}`);

            // myOf():

                Array.myOf= function() {
                    const args= [...arguments];

                    console.log('args', args);

                    const result= [];

                    for(let i of args) {
                        result.myPush(i);
                    }

                    return result;
                }
                
                // case-1
                console.log(`using myOf: ${Array.myOf(1,2,3,4)}`);


                // case-2

                function NotArray(len) {
                    console.log("1. NotArray called with length", len);
                  }
                  
                  console.log('2. using myOf: ', Array.of.call(NotArray, 1, 2, 3));
                                                                                    // use 'of' instead of 'myOf'                              
                  console.log('3. using myOf: ', Array.of.call(Object));

                  // case-3

                  console.log(Array.myOf.call({}, 1));






        // ------------------------------------------------------ 34. reduceRight() -------------------------------------------------------------

            const arr34_1= [[0, 1], [2, 3], [4, 5]];

            const callback34= function(accumulator, curr) {
                return accumulator.myConcate(curr);
            }

            // reduceRight():

                const ans34_1= arr34_1.reduceRight(callback34);

                console.log(`using reduceRight(): `, ans34_1);

            // myReduceRight():

                Array.prototype.myReduceRight= function() {
                    const arr34= this;
                    const callback_func= arguments[0];
                    const initial_val= arguments[1] || null;

                    const n= arr34.length;

                    const error= 'Error: Reduce of empty array with no initial value';

                    if(arr34.length === 0 && initial_val === null) {
                        return error;
                    }

                    let accumulator= initial_val ? initial_val : arr34[n-1];

                    for(let i= initial_val != null ? n-1 : n-2 ; i>= 0; i--) {
                        accumulator= callback_func(accumulator, arr34[i]);
                    }

                    return accumulator;
                }


                const ans34_2= arr34_1.myReduceRight(callback34);

                console.log(`using myReduceRight: `, ans34_2);



        // ------------------------------------------------------ 35. reverse() -------------------------------------------------------------

            const arr35_1= [1,2,3];

            // reverse():
                console.log(`1. using reverse(): `, arr35_1.reverse());
                console.log(`2. arr35_1: `, arr35_1);

            
            // myReverse():

                Array.prototype.myReverse= function() {
                    const arr35= this;

                    const shallow_copy= [...arr35];
                    const n= shallow_copy.length;

                    arr35.length= 0;

                    for(let i= n-1; i>=0; i--) {
                        arr35[n - i - 1]= shallow_copy[i];
                    }

                    return arr35;
                }

                console.log(`3. using myReverse(): `, arr35_1.myReverse());
                console.log(`4. arr35_1: `, arr35_1);
            


        // ------------------------------------------------------ 36. slice() -------------------------------------------------------------

            const arr36_1= [1,2,3,4,5,6];

            // slice():

                console.log('--------------------------');

                console.log(`1. using slice(): `, arr36_1.slice(2, -1) === arr36_1);
                const ans36_1= arr36_1.slice(2, -1);

                console.log(`2. using slice(): `, ans36_1);
                console.log('3. arr36_1: ', arr36_1);

            
            // mySlice():

                Array.prototype.mySlice= function() {
                    const arr36= this;
                    let start= arguments[0] || 0;
                    let end= arguments[1] || arr36.length;

                    const n= arr36.length;
                    const result= [];

                    // console.log(end);

                    if(start < 0) {
                        start= n + start;
                    }

                    if(end < 0) {
                        end= n + end;
                    }

                    if(start >= end) {
                        return [];
                    }

                    let j= 0;
                    for(let i= start; i<end; i++, j++) {
                        // console.log(i, j);
                        result[j]= arr36[i];
                    }

                    return result;
                }

                console.log(`4. using mySlice: `, arr36_1.mySlice(2, -1) === arr36_1);

                const ans36_2= arr36_1.mySlice();

                console.log(`5. using mySlice: `, ans36_2);
                console.log('6. arr36_1: ', arr36_1);



        // ------------------------------------------------------ 37. some() -------------------------------------------------------------

                const arr37_1= [1,2,3,4,5];

                const callback37= (element) => element % 2 === 0;

                // some():

                    console.log(`using some(): `, arr37_1.some(callback37));


                // mySome():

                    Array.prototype.mySome= function() {
                        const arr37= this;

                        const callback_func= arguments[0] || null;

                        if(callback_func === null) {
                            return `Error: undefined is not a function`;
                        }
                        for(let i of arr37) {
                            if(callback_func(i)) {
                                return true;
                            }
                        }

                        return false;
                    }


                    console.log(`using mySome: `, arr37_1.mySome(callback37));



        // ------------------------------------------------------ 38. sort() -------------------------------------------------------------


            










        // ------------------------------------------------------ 39. splice() -------------------------------------------------------------


            const arr39_1= ['Jan', 'March', 'April', 'June'];

            // splice():

                    arr39_1.splice(1, 0, 'Feb');
                    console.log(`1. using splice(): `, arr39_1);

                    arr39_1.splice(4, 1, 'May');
                    console.log(`2. using splice(): `, arr39_1);


            // mySplice():

                Array.prototype.mySplice= function() {
                    const arr39= this;

                    const args= [...arguments];
                    const shallow_copy= [...arr39];

                    let start= arguments[0];
                    let deleteCount= arguments[1] || 0;
                    const items= args.mySlice(2);

                    console.log(`items: `, args);
                    
                    arr39.length= 0;

                    let i;
                    // adding element upto start point
                    for(i= 0; i<start; i++) {
                        arr39[i]= shallow_copy[i];
                        // console.log(arr39[i], i);
                    }

                    // adding element from items
                    let j=0;
                    let original= i;
                    for(i ; j<items.length; i++,j++) {
                        arr39[i] = items[j];
                        // console.log(arr39[i], i);
                    }

                    if(deleteCount > 0) {
                        original += deleteCount;
                    }

                    // adding rest of elements
                    for(i= original; i<shallow_copy.length; i++) {
                        arr39.myPush(shallow_copy[i]);
                    }

                    // console.log(arr39);

                    return arr39;
                }

                const arr39_2= ['Jan', 'March', 'April', 'June'];

                arr39_2.mySplice(1, 0, 'Feb');
                console.log(`3. using mySplice: `, arr39_2);

                arr39_2.mySplice(4, 1, 'May');
                console.log(`4. using mySplice: `, arr39_2);


                // case -2: not working: TypeError: arr39 is not iterable

                // const arr39_3 = {
                //     length: 3,
                //     unrelated: "foo",
                //     0: 5,
                //     2: 4,
                //   };


                // console.log(`5. using mySplice: `, Array.prototype.mySplice.call(arr39_3, 0, 1, 2, 3));
                // console.log(`6. using mySplice: `, arr39_3); 







        // ------------------------------------------------------ 40. toLocaleString() -------------------------------------------------------------











        // ------------------------------------------------------ 41. toReversed() -------------------------------------------------------------

            const arr41_1= [1,2,3,4,5];

            // toReversed():

                  const ans41_1= arr41_1.toReversed();
                  console.log(`1. using toReversed(): modified: `, ans41_1);
                  console.log(`2. using toReversed(): original: `, arr41_1);


            // myToReversed():

                Array.prototype.myToReversed= function() {

                    const shallow_copy= [...this];

                    const result= shallow_copy.myReverse();

                    return result;
                }

                const ans41_2= arr41_1.myToReversed();

                console.log(`3. using myToReversed: modified: `, ans41_2);
                console.log(`4. using myToReversed: original: `, arr41_1);


                // case-2:

                    const arr41_2 = {
                        length: 3,
                        unrelated: "foo",
                        2: 4,
                    };
                    console.log(`5. using myToReversed: modified: `, Array.prototype.toReversed.call(arr41_2));






        // ------------------------------------------------------ 42. toSorted() -------------------------------------------------------------











        // ------------------------------------------------------ 43. toSpliced() -------------------------------------------------------------

            const arr43_1= ['Jan', 'March', 'April', 'June'];

            // toSpliced():

                const ans43_1= arr43_1.toSpliced(1, 0, 'Feb');
                console.log(`1. using toSpliced(): `,ans43_1, `original`, arr43_1);

                const ans43_2= arr43_1.toSpliced(4, 1, 'May');
                console.log(`2. using toSpliced(): `, ans43_2, `original`, arr43_1);

                
            // myToSpliced():

                Array.prototype.myToSpliced= function() {
                    const arr43= this;

                    const args= [...arguments];
                    
                    const shallow_copy= [...arr43];

                    let start= arguments[0];
                    let deleteCount= arguments[1] || 0;
                    const items= args.mySlice(2);

                    // console.log(args);
                    
                    const result= shallow_copy.mySplice(start, deleteCount, ...items);

                    return result;
                }


                const ans43_3= arr43_1.myToSpliced(1, 0, 'Feb');
                console.log(`3. using myToSpliced: `,ans43_3, `original`, arr43_1);

                const ans43_4= arr43_1.myToSpliced(4, 1, 'May');
                console.log(`4. using myToSpliced: `, ans43_4, `original`, arr43_1);

                // case-2: not working: Uncaught TypeError: arr43 is not iterable

                // const arr43_2 = {
                //     length: 3,
                //     unrelated: "foo",
                //     0: 5,
                //     2: 4,
                //   };
                //   console.log(Array.prototype.myToSpliced.call(arr43_2, 0, 1, 2, 3));





        // ------------------------------------------------------ 44. toString() -------------------------------------------------------------

            const arr44_1= [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ];

            // toString():

                console.log(`using toString(): `,arr44_1.toString());
                // console.log(arr44_1);


            // myToString():

                Array.prototype.myToString= function() {
                    const arr44= this;

                    arr44.myJoin();

                    const result= `${arr44[0]}`;

                    for(let i=1; i<arr44.length; i++) {
                        result += `,${arr44[i]}`;
                    }

                    return result;
                }

                console.log(`using myToString(): `,arr44_1.toString());


                // case-2: not working in case of infinite recursion

                    // const arr44_2 = [];
                    // arr44_2.push(1, [3, arr44_2, 4], 2);
                    // console.log(arr44_2);
                    // console.log(`using myToString(): `, arr44_2.myToString())





        // ------------------------------------------------------ 45. values() -------------------------------------------------------------

            const arr45_1 = ["a", "b", "c", "d", "e"];

            // values():

                const ans45_1 = arr45_1.values();

                for(let i of ans45_1) {
                    console.log(`using values(): `, i);
                }

                console.log(`using values(): `, ans45_1); // **********************
                


            // myValues():

                Array.prototype.myValues= function() {
                    const result= [...this];

                    return result;
                }


                const ans45_2 = arr45_1.myValues();

                for(let i of ans45_2) {
                    console.log(`using myValues: `, i);
                }

                console.log(`using myValues(): `, ans45_2); // **********************










        // ------------------------------------------------------ 46. with() -------------------------------------------------------------

            const arr46_1= [1,2,3,4,5];

            // with():

                console.log(`modified using with(): `,arr46_1.with(2, 6)); 
                console.log(`original using with(): `,arr46_1);


            // myWith():

                Array.prototype.myWith= function() {
                    
                    const index= arguments[0];
                    const value= arguments[1];

                    const result= [...this];

                    result[index]= value;

                    return result;
                }


                console.log(`modified using myWith(): `,arr46_1.myWith(2, 6)); // [1, 2, 6, 4, 5]
                console.log(`original using myWith(): `,arr46_1);


                // case-2: not working --> TypeError: this is not iterable

                    // const arr46_2 = {
                    //     length: 3,
                    //     unrelated: "foo",
                    //     0: 5,
                    //     2: 4,
                    //     3: 3, 
                    // };
                    // console.log(Array.prototype.myWith.call(arr46_2, 0, 1));









// -------------------------------------------------------------- 2. POLLYFILLS IN PROMISES ---------------------------------------------------
