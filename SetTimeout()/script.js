
/*
    1. setInterval()
    2. setTimeout()
*/


// -------------------------------------------------- 1. setInterval() ---------------------------------------------------------------

    // const id= setInterval(() => {
    //     console.log("1. repeat....");
    // }, 1000);

    // setTimeout(() => {
    //     console.log("2. this is setTimeout() function -1");
    // }, 2000);

    // const timeOut_id= setTimeout(() => {
    //     console.log("3. this is setTimeout() function -2");
    // }, 5000);

    // console.log("4. id: ", id);

    // console.log("5. timeOut_id: ", timeOut_id);

    // // clearInterval(id); // --> to stop the function of 'setIntrval()'

    // // clearTimeout(timeOut_id);


    /*
        --> setInterval(() => {}, 1000): "setInterval()" function will execute the arrow function inside it in every '1000 milli-second'.
    */




// ----------------------------------------------------------- 2. setTimeout() -------------------------------------------------------


    // question - 1:

        for(var i=0; i<4; i++) {
            setTimeout(() => {
                console.log("7. ", i);
            }, 2000);
        }

        /*
            --> the value of all "i" will be same beacuse the arrow function will be stored inside the web-API storage and macro task-queue
        */