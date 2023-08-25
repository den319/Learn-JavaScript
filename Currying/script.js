
/*
    1. currying
*/


// ------------------------------------------------------ 1. Currying ----------------------------------------------------------

    /*
        --> currying is nothing but advanced level of closure.
        --> "closure" is nothing but a function with its "LEXICAL ENVIRONMENT".
    */

    // e.g.- 1:

        // function sum(a,b) {
        //     return a+b;
        // }

        // sum(1, 2); // --> 3

        // sum(1)(2) // --> this should also be 3



    // e.g. - 2: using closure

        function sum(num1) {
            
             function innerSum(num2) {
                return num1 + num2;
            }

            return innerSum;
        }

        let ans1= sum(1)(2); //_______________________________(1)
        
        // OR

        let sumWithOne= sum(1); // sumWithOne would be innerSum + closure-object-> {num1: 1}

        let ans2= sumWithOne(2);// _______________________________(2)

        // (1) and (2) - both give same result due to closure

        console.log(`1. sum(1)(2): ${ans1} & ans2: ${ans2}`); // --> 3