 
 /*
      1. throttling
      2. memoization

 */


// -------------------------------------------------------------- 1. throttling ---------------------------------------------------

    const fireBullets= (event) => {
      console.log(`1. dhishkyow dhishkyow....`);
    }

    function throttle(callback, delay) {
      let flag= true;

      return function() {
         // console.log("2.", arguments[0]);

         const event= arguments[0];

         if(flag) {

            callback(event);
            flag= false;

            setTimeout(() => {
               flag= true;
            }, delay);
         }
      }  
    }

   //  window.addEventListener("resize", fireBullets);

    const throttleFireBullets= throttle(fireBullets, 1000); 

    window.addEventListener("resize", throttleFireBullets);





// -------------------------------------------------------------- 2. memoization ---------------------------------------------------


function fibonaci(n) {
   if(n <= 1) {
      return 0;
   }

   if(n === 2 || n === 3) {
      return 1;
   }

   return fibonaci(n-1) + fibonaci(n-2);
}

function memoization(callback) {
   let cacheMemory= {};

   return function() {
      const n= arguments[0];

      if(cacheMemory[n]) {
         return cacheMemory[n];
      } else {
         const result= callback(n);
         cacheMemory[n]= result;
         return result;
      }
   }
}

const improvedFibo= memoization(fibonaci);

const abc1= improvedFibo(5);
const abc2= improvedFibo(5);
const abc3= improvedFibo(5);
const abc4= improvedFibo(5);

console.time(abc1); // slower
// console.time(abc2); // faster
// console.time(abc3); // faster
// console.time(abc4); // faster
