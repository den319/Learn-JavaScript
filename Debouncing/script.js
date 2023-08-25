
const input= document.getElementById("input");
console.log(input);
let i=0;

const searchCallbackFunction= (event) => {
    const val= event.target.value;

    console.log(i, `value: ${val}`);
    i++;
}

// input.addEventListener("input", searchCallbackFunction);



// ------------------------------------------  Debounce ------------------------------------------

function myDebounce(callback, delay) {

    let timerNum;
    return function() {

        // console.log(`arguments: ${arguments}`);

        let event= arguments[0];
         
        // console.log(`event: ${event}`);

        clearTimeout(timerNum);
        
        // console.log(`timerNum: ${timerNum}`);

        timerNum= setTimeout(() => {
            // callback.apply();

            callback(event);
        }, delay);
    }
}

const debouncedSearchCallbackFunction = myDebounce(searchCallbackFunction, 500);

input.addEventListener("input", debouncedSearchCallbackFunction);


// -------------------------------------------------- NOTE ------------------------------------------

// let timer= setTimeout(() => {}, 451024);
// console.log(`timer: ${timer}`);

/*
    --> in above "timer" variable, it stores setTimeout() function.
    --> and setTimeout() function gives back a "timer number" which ultimetly stored inside the "timer" variable.
*/