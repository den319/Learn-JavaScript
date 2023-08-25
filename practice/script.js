// for(var i=0; i<4; i++) {
//     (() => {
//         var j= i;
//         setTimeout(() => {
//             console.log("6. ", j);
//         }, 5000);
//     })(); // --> Imediate Invoke Function
// }

// for(var i=0; i<4; ++i) {
//     let s= function(i) {
//         var j= i;
//         setTimeout(() => {
//             console.log("6. ", j);
//         }, 5000);
//     };

//     s(i);
// }


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

// add().crore(8).lac(9).thousand(7).hundred(1).ten(2).one(2);


// let a = {};
// var c= b;
// var b = a; // copy the reference


// // alert( a == b ); // true, both variables reference the same object
// // alert( a === b ); // true
// alert(c === b);


// ------------------------------------------------------------------- polyfill of reduce (edge cases) --------------------------------------------------------------

// const arr3= []
// Array.prototype.myReduce= function(callback, initialVal) {
//     let arr= this;
//     // console.log("***. ", arr);

//     let accumulator= initialVal ? initialVal : console.error(`reduce of empty array with no initial value`);
//     for(let i=0; i<arr.length; i++) {
//         accumulator = callbackReduce(accumulator, arr[i]);
//     }
//     return accumulator;
// }

// const callbackReduce= (accum, curr) => {
//     return accum + curr;
// }

// // const result3_2= arr3.myReduce((accum, item) => {
// //     return accum + item;
// // }, 10);

// // OR

// const result3_1= arr3.reduce(callbackReduce, 1);
// const result3_2= arr3.myReduce(callbackReduce);

// console.log("3b. myReduce: ", result3_2);
// console.log("3a. Reduce: ", result3_1);







// const list= document.querySelector(".todo-list");
// const input= document.querySelector(".todo-input");
// const button= document.querySelector(".todo-button");

// function add(e) {
//     e.preventDefault();

//     const todoSection= document.createElement("div");

//     const listEle= document.createElement("li");
//     listEle.className= "todo-item";
//     listEle.innerText= input.value;
//     input.value= "";


//     const deleteBtn= document.createElement("button");
//     deleteBtn.className= "trash-btn";
//     deleteBtn.innerText= "Delete button";
//     deleteBtn.addEventListener("click", deletefn);


//     const completeBtn= document.createElement("button");
//     completeBtn.className= "complete-btn";
//     completeBtn.innerText= "Complete button";
//     completeBtn.addEventListener("click", completefn);


//     todoSection.insertAdjacentElement("beforeend",listEle);
//     todoSection.insertAdjacentElement("beforeend",completeBtn);
//     todoSection.insertAdjacentElement("beforeend",deleteBtn);
//     list.insertAdjacentElement("beforeend",todoSection);

// }


// function completefn(event) {
//     event.target.parentElement.firstChild.classList.toggle("check");
//     const element= event.target.parentElement.firstChild;
//     console.log(element.style);
//         element.style.textDecoration= "line-through solid rgb(0,0,0)";
    
//     // console.log(event.target.parentElement.firstChild.style.border= "line through solid rgb(0,0,0)");
// }

// function deletefn(event) {
//     event.target.parentElement.remove();
// }   

// button.addEventListener("click", add);




// const inputElem = document.querySelector(".todo-input");
// const btnElem = document.querySelector(".todo-button");
// const unorderedList = document.querySelector(".todo-list");

// function addToDo(e){
//     e.preventDefault();

//     const todoDiv = document.createElement("div");
//     const listElem = document.createElement("li");
//     listElem.className = "todo-item";
//     listElem.innerText = inputElem.value;

//     inputElem.value = "";
//     const deletebtn = document.createElement("button");
//     deletebtn.className = "trash-btn";
//     deletebtn.innerText = "Delete button";
//     deletebtn.addEventListener("click", deletefn);
//     const completebtn = document.createElement("button");
//     completebtn.className = "complete-btn";
//     completebtn.innerText = "Complete button";
//     completebtn.addEventListener("click", strikeThroughFn);

//     todoDiv.insertAdjacentElement("beforeend", listElem);
//     todoDiv.insertAdjacentElement("beforeend", completebtn);
//     todoDiv.insertAdjacentElement("beforeend", deletebtn);

//     unorderedList.insertAdjacentElement("beforeend", todoDiv);

// }

// function deletefn(e){
//     e.target.parentElement.remove();
// }

// function strikeThroughFn(e){
//     e.target.parentElement.firstChild.classList.toggle("check");
// }

// btnElem.addEventListener('click', addToDo);



const clicked= false;

function setClicked(i) {
    clicked= i;
}

    const form= document.getElementsByClassName('form-1');

    

    