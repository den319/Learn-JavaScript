

/*
    1. DOM (Document Object Model)
    2. BOM (Browser Object Model)
    3. window
    4. differ keyword
    5. async keyword
    6. DOM manipulation
        1. selection of element in DOM
        2. updation of element in DOM
            1. innerHTML
            2. innerText
            3. textContent
        3. addition of element in DOM
        4. deletion of element in DOM
        
        5. advance of insertion
            1. append()
            2. prepend()
            3. before()
            4. after()
            
            5. after End
            6. before Begin
            7. after Begin
            8. before End

    7. DOM event
        1. add event listener
        2. remove event listener

    8. keyboard event
        1. keyUp
        2. keyDown   
        
    9. service worker
    10. DOM content load:
    11. different types of events
        1. browser event
        2. loadEvent
        3. beforeUnload

    12. event cycle / event propogation:
        1. capturing phase
        2. target phase
        3. bubbling phase

    13. event.stopPrpogation()
    14. event.preventDefault()
    15. removal of listener
    16. event delegation
            
*/


/*
    --> browser have 3 components
        1. Javascript
        2. DOM(Documment / HTML): provides only structure not beautification
        3. BOM(Browser Object Model / window, setimeout, setInterval, geoLocation)
*/

// --------------- 1. DOM (Document Object Model) / web API

console.log();
console.log("1. DOM (Document Object Model)");
console.log();


/*
    --> used for UI purpose
    --> tree of HTML components
*/






// --------------- 2. BOM (Browser Object Model)

console.log();
console.log("2. BOM (Browser Object Model)");
console.log();

/*
    --> gives / facilitate an environment to webpages(i.e. file upload, local storage, location storage, debugging tools(inspect element) etc.)
    --> this features differs from browser to browser

    NOTE: locations are asked by webpages through browsers
*/ 







// 3. window
console.log();
console.log("3. window object");
console.log();


    /*
        --> window object has 4 components
            1. JS
            2. DOM (tree of HTML components)
                --> DOM gets first priority over CSSOM while making rendered tree in browser
            3. BOM
            4. CSSOM (Cascading Style Sheet Object Model): UI styling
                --> tree of CSS components


        NOTE: 
            --> rendered tree: 
                --> it is combination of DOM tree and CSSOM
                --> rendered tree is responsible for display / painting on the screen.
                --> browser make this tree (i.e. rendered tree)
    */





// 4. difer keyword
console.log();
console.log("4. difer keyword");
console.log();

    /*
        --> generally, there are 2 phases: parsing and execution
        --> DOM creation is done in parsing phase
        --> during parsing, parsor will go from top to bottom
        
            --> when we use difer, the DOM creation and download of script will run side-by-side
            --> when downloading of script is completed, first parsor will prioritize the curruntly running of creation of DOM.
            --> when DOM creation is done, then HTML will be executed and only after that, script execution will started.

            --> usage:
                --> 
    */

    





// 5. async keyword
console.log();
console.log("5. async keyword");
console.log();

    /*
        --> in this also, DOM creation and script downloading will go on side by side
        --> the difference is when script will be downloaded, the parsor will give first priority to script.
        --> so the DOM creation will be paused and parsing and execution of script will be started
        --> when execution of script will be completed then only parsor will resume DOM creation / parsing and execution of HTML.

        --> usage:
            --> in Ads
            --> logging
    */








// 6. DOM manipulation
console.log();
console.log("6. DOM manipulation");
console.log();

    // 1. selection of element in DOM

    console.log("  1. selection of element in DOM");

        let x= document.getElementById("card1"); // --> selection

        console.dir(card1); // --> to see the different properties of an element




    // 2. updation of element in DOM

    console.log("  2. updation of element in DOM");

    let card= document.getElementById("card1"); // --> selection

    console.dir(card);// --> used to see that 'element' inside console in the browser


        // 1. use of innerHTML
            card1.innerHTML= "hello dEn"; // --> see in browser
            card1.innerHTML= "<h1> great day </h1>"; // --> see in browser

            /* .innerHTML = stores elements(child elements of perticular element) in form of string
                innerHTML sometimes prone to hacking because we can also able to add script tag
                and inside script tag we can add logic
                use carefully
            */

            card1.innerHTML= `<h2>hello dEn</h2>
            <script> alert("I'm hacker)`; // --> this won't show any result because browser prevents th emplementation of this malicious script
            // but it will able to still cookies which is dangerous



        // 2. use of inner text: shows content inside the perticular element

           // card.innerText= "<h3> great day </h3>"; // --> see in browser

            /*
                innerText replaces the element and content
                innerText not prone to hacking and security concerns               
            */

            // card.innerText= `vsvvvs
            // rvrebegr
            // ebbee dv d v
            // ewve
            // vwe                        vevev`; // --> more than one space will be lost but new line (\n) won't be lost

            /*
                NOTE: 
                    '\n' => for new line
                    &nbsp / \u00A0 => for space (this one id HTML element i.e. we can only use it in HTML)
            */


        // 3. use of textContent : all spaces and new line will be lost (i.e. whole content in one line) 

            // card.textContent= `$$$$ *****vsvvvs
            // rvrebegr
            // ebbee dv d v
            // ewve
            // vwe                        vevev`;

            /*
                NOTE: check if .innerHTML, .innerText, .textContent is replacing the element or overlap the previous element in browser
            */
        
        // e.g. 1; to search name inside the 'unordered list' in HTML

            let search_name= document.getElementById("names");
            console.dir(search_name);

            /*  look for 'children' property in browser
                it gives all children of that element in form of array LIKE structure
            */

            let childs= search_name.children;

            let childsArray= Array.from(childs); // --> converts Array LIKE structure into Array structure

            console.log("11.",childs);
            console.log("12.",childsArray);

            function search(name) {
                return childsArray.find(li_element => {
                return li_element.textContent === name;
            });
            }

            let find= search("Wang");
            console.log("13.",find);  

            find= search("Lily");
            console.log("14.",find);

            


    
    // 3. addition of element in DOM

    console.log("  3. addition of element in DOM");

        // way - 1: using .append()

            // 1. create an element

                li_element= document.createElement("li");
                console.log("15. new element: ", li_element);

            // 2. edit the element

                li_element.innerText= "Lily";

                // the above change will be stored inside the heap memory

            //3. attach the new element to the unordered list in HTML

                let ul= document.getElementById("names");

            // 4. adding things in the last

                ul.append(li_element);

        
        // way - 2: using .innerHTML

            // 1. create an element

                // li_element= document.createElement("li");
                // console.log("16. new element: ", li_element);

            // 2. edit the element

                // ul.innerHTML= ul.innerHTML + "<li>Abraham</li>\n";

    
                
    // 4. delete an element
            
        let deleteElement= document.getElementById("names");

        // deleteElement.remove(); // --> removes whole list

        let deleteLast= document.querySelector("#names > li:nth-child(7)");
       // deleteLast.remove(); // --> "Lily" will be removed





// Advance of the selectors (Insertion ways):
        
    // 1. append(): it takes the element and add it to the last
        
//         let body= document.body;
//         console.dir(body);

//         // 1. creation of H1 tag using apend

//             let heading1= document.createElement("h1");
//             heading1.textContent= "advance selectors";

//             body.append(heading1);

//             let heading2= document.createElement("h2");
//             heading2.textContent= "heading 2";
//             body.append(heading2);

//         // 2. creation of h3 tag using prepend: 

//             let heading3= document.createElement("h3");
//             heading3.textContent= "heading 3";
//             heading3.style.color= "red";
//             body.prepend(heading3);


//             let unorderedList= document.getElementById("names");

//             let newMember= document.createElement("li");
//             newMember.textContent= "Ganesh";
//             unorderedList.prepend(newMember);
//             unorderedList.append();


//         // // 3. use of before: it inserts the element before the selected element

//             unorderedList= document.getElementById("names");

//             let heading4= document.createElement("h1");
//             heading4.textContent= "good morning";

//             unorderedList.before(heading4);


//         // // 4. after: it inserts the element after the selected element
//         //     // --> used for footer notes / ending lines

//             unorderedList= document.getElementById("names");

//             let heading5= document.createElement("p");
//             heading5.textContent= "hello how r u ?";

//             unorderedList.after(heading5);

//             /*
//                 NOTE: 
//                     --> apend and prepend done inside the defined element
//                     --> before and after works outside of the defined element
//             */

        
// // document.write("hey your system is under") --> first search about this and not use it


//         // ---------- 4 new insertion methods ----------------

//             // 5. after End

//                 unorderedList= document.getElementById("names");
//                 unorderedList.insertAdjacentHTML('afterend', "<li>Liue<li>");

//             // // 6. before Begin

//                 unorderedList.insertAdjacentHTML('beforebegin', "<li>Salim<li>");

//             // // 7. after Begin // acts as prepend

//                 unorderedList.insertAdjacentHTML('afterbegin', "<li>Dexter<li>");

//             // // 8. before End // acts as append

//                 unorderedList.insertAdjacentHTML('beforeend', "<li>Jhonness<li>");


    
 
// 7. DOM event
console.log();
console.log("DOM event");
console.log();

    /*
        DOM events: simply whatever you do on webpage like clicking, hovering, dragging- this kind of actions by user gives back an event and this events are called DOM events.
            --> e.g. 
                    --> let's say you are submitting a form.
                    --> when you click on the submit button, the 'event' will be fired(broadcasted) by DOM / browser.
                    --> "BROADCAST" => it means DOM fires 'event' without "aim" means DOM does not care if anyone receives/capture that 'event' or not.
                        --> just "broadcast" in real life, when government broadcasts any information, some people might listen it and some might not
                        --> here government's role is only to broadcast the info. and the rest is depends on the people(i.e. to listen or not)
                        --> so in simple terms, broadcast means anyone can consume(have access) to that information (i.e. event in terms of DOM)
                    
            
            --> why it is needed?
                --> to perform various calculations, HTTP call / server call
                --> this kind of calculations cannot be performed using DOM or HTML
                --> for this we use javascript so for e.g. 
                    --> from previous e.g. when we submit the form, the DOM will BROADCAST the event
                    --> javascript will listen that broadcasted evented by using "event listner".
                    --> "EVENT LISTNER" means that javascript will capture the event and do the calculation(i.e. HTTP call / server call)
    */

    let container= document.getElementById("container");

    container.style.color= "red";
    container.style.border= "1px solid black";  
    container.style.width= "200px";
    container.style.height= "60px";

    // 1st way to add event listener

        // // listen for click

            // container.addEventListener("click", (event) => {
            //     console.log("you have clicked the button!");
            // })

        // // listen for hovering
            
        //     container.addEventListener("mouseover", () => {
        //         console.log("you are hovering!");
        //     })


        // e.g. 1:
            // container.addEventListener("click", (event) => {
            //     console.log("you have clicked the button!");

            //     const buttonContainer= event.target;
            //     console.dir(buttonContainer);

            //     buttonContainer.style.color= "yellow";
            // })

    // 2nd way to add event listener: wee are adding "onclick" attribute in inline HTML
        
            // function containerClick() {
            //     console.log("container clicked");
            // }

            /* NOTE: using this method, we cannot be able to remove event listeners that is why 1st method is widely used to add event listener.
                    --> to remove event listener in 2nd method, we can use 'removeAttribute'.
                    --> but 'removeAttribute' is a costly operation because 'attribute' is a NON-PERFORMER. 
            */

                    

    // to remove event listener

       // container.removeEventListener()



// 8. keyboard event:
    
    /*
        --> whenever you are writing (i.e. typing on keyboard), there are 2 steps:
            1. keyDown: travel of the key goes from top to bottom
            2. keyUp: travel of the key goes from bottom to top
    */

    

// 9. service worker
    
    /*
        --> JS is single threaded / syncronous language means one task at a time
        --> to do more task at a time(paralally) service worker is useful.
        --> it creates new threads and executes in that thread.
        --> learn more

    */


// 10. DOM content loaded:
    /*
        --> when DOM tree is completely created and in JS there is the code that is changing our DOM
        --> this is called DOM content load
        -->
        -->

        
    */ 

    document.addEventListener('DOMContentLoaded', () => {
        console.log("----------- inside -------------")
        let containerDiv= document.getElementById("container");
        console.dir(containerDiv);
    });

    console.log("----------- outside---------------")
    let containerDiv= document.getElementById("container");
    console.dir(containerDiv);




// 11. different types of events

    // 1. browser event: 




    // 2. loadEvent: when external resources are fully loaded(like images, CSS etc.)

        document.addEventListener("load", () => {

        });
           
        
    // 3. before unload: this event is basically called when a user is moving away from the webpage
        // --> for cleaning purpose

        document.addEventListener("beforeunload", () => {
            // cancel all event listeners (cleaning)
            // saving the form if webpage reloads accidentally
        });


// 12. event life cycle / event propogation:

    // 1. event capturing phase:

        /*
            capturing: when an event goes towards the element which was responsible for event firing(i.e. submit button) in the DOM tree (i.e. from root to the leaves)
                --> when you click on the submit button, the DOM / browser will fire an event.
                --> travelling from  root(i.e. <html>) to leaf (i.e. the target element).
                --> when it comes to the submit element, target phase will start.
                
            NOTE: How event object will know that this is the target?
                --> before event starts travelling, browser will travel the DOM tree and "marked" the element which was responsible for event firing
                --> after that event object will start to find that "marked" object
                --> so there would be tree traversal 2 times:
                    1. by browser
                    2. by event object 

                --> what does this "marked" means?
                    --> 

                --> so both time the traversal path would be the same?
                    --> NO
                    --> the traversal path of event object would be optimized one
        */

    // 2. event target phase / lock-in phase:
        /*
            target: when an event targets the element (i.e. submit button), it will "lock-in" the target.
                --> after lock-in, the event object has the address of the element who was resposible for event firing 
                --> after this, bubbling phase will start.
        */

    // 3. event bubbling phase:

        /*
            bubbling: when an event goes towards the root(i.e. html / window) of DOM tree from the targeted element (i.e. from leaves to the root)
                --> the perant of that element also has information who clicked the button.

                --> in short, bubbling means to approach to the root(i.e. window) after finding the element which was responsible for event firing.

                --> advantage over capture phase:
                    --> in bubbling phase, event have the information(i.e. address) of target OR in bubbling phase, parent have information(i.e. address) of the target(i.e the element resposible for event firing)

                --> when bubbling phase will end, the event will be deleted / removed from the memory as event is also an object.
                --> so automatic deletion happens at the end of bubbling phase

                NOTE:
                    --> 'focus' event does not bubble
        */
    


        // e.g. 1:
            
            const grandParent= document.getElementById("grandparent");
            const parent= document.getElementById("parent");
            const child= document.getElementById("child");

            console.dir(grandParent);
            console.dir(parent);
            console.dir(child);

            // to listen event during bubbling phase

                grandParent.addEventListener('click', (event) => {
                    console.log('grandparent clicked', event);
                });

            /* NOTE: notice that when you click on parent and child, it also triggers the event

                    reason: it is simple but for that we have make a simple tree only for grandparent container

                    DOM tree:
(bubbling phase)                                                               (capturing phase)
            |<-------------------------- child <-------------------|
            |                              ^                       |
            |                              |                       |
            |                              |                       |
            |----------|<--------------- parent <----------|-------|
            |          |                   ^               |       |
            |          |                   |               |       |
            |          |                   |               |       |
            |----------|------|<---- grandparent <-|-------|-------|
            |          |      |            ^       |       |       |
            |          |      |            |       |       |       |
            |          |      |            |       |       |       |
            |----------|------|---------> body <---|-------|-------|
            |          |      |            ^       |       |       |
            |          |      |            |       |       |       |
            |          |      |            |       |       |       |
            |----------|------|-------> document <-|-------|-------|
            |          |      |            ^       |       |       |
            |          |      |            |       |       |       |
            |          |      |            |       |       |       |
            |--------->|----->|--------> window--->|------>|------>|
                                                   |       |       |________ when child clicked
                                                   |       |________________ when parent clicked
                                                   |________________________ when granparent clicked

                    --> here, by default bubbling phase is chosen for "grandparent".
                    --> ***************************





                    
            */

        // to listen event during capturing phase

            // grandParent.addEventListener('click', () => {
            //     console.log('grandparent clicked');
            // }, true);

        /*
            NOTE: here, grandparent eventListener have two options:
                1. if it want to listen event in capturing phase
                2. or it wants to listen event in bubbling phase

                --> for capturing phase:

                    grandParent.addEventListener('click', () => {
                        console.log('grandparent clicked');
                    }, true);

                --> bubble phase is default and its value is "false".

        */

            parent.addEventListener('click', (event) => {
                console.log('parent clicked', event);
            });

            // child.addEventListener('click', (event) => {
            //     console.log('child clicked', event);  // --> check this "event" object and its properties in browser
            // });


    

// 13. event.stopPropogation():

        // child.addEventListener('click', (event) => {
        //     console.log('child clicked', event);  // --> check this "event" object and its properties in browser
        //     event.stopPropagation();
        // });

        // this will only print "child clicked" as event will be stopped at child and stopped to go further

    /*
        --> invoking this method prevents event from reaching any objects other than the current object.
        --> to stop event to going further
        --> it will stop the event object there only (on that element)
        --> event delegation will be freezed
        --> after 5- 10 seconds garbage collector will collect that garbage(i.e. element)
        --> so here event wont destroyed autometically as event event object does not completed the bubble phase
        --> so in this case event will be destroyed by garbage collector
            
            
        

        NOTE: 
            --> addEventListener is basically adding an objext in the memory
            --> more you add this listeners, more memory it is going to take
    */


// 14. event.preventDefault():
    /*
        --> it stops the event to do the default nature
    */


// 15. removal of listener:

    /*

    */

    const button= document.getElementById("clickme");

    // button.addEventListener("click", () => {        // --> anonymous function / handler
    //     console.log("you have clicked the button");
    // });

    button.addEventListener("click", buttonClickHandler);

    function buttonClickHandler(event) {
        console.log("you have clicked the button");
    };


    // button.removeEventListener("click", buttonClickHandler);

    setTimeout(() => {
        button.removeEventListener("click", buttonClickHandler);
    }, 5000); // 5000 milisecond / 5 seconds



// 16. event delegation

    // approach-1: 

        // const redBox= document.getElementById("red");

        // redBox.addEventListener("click", (event) => {
        //     redBox.style.backgroundColor= "red";
        // });

        // const greenBox= document.getElementById("green");

        // greenBox.addEventListener("click", (event) => {
        //     greenBox.style.backgroundColor= "green";
        // });

        // const blueBox= document.getElementById("blue");

        // blueBox.addEventListener("click", (event) => {
        //     blueBox.style.backgroundColor= "blue";
        // });

    // approach-2: using event delegation
        // --> optimized as we have used only one event listner

        /*
            --> in approach-1, we used 3 event listeners
            --> so in memory, there will be 3 listener object will be stored

            --> in approach-2, we used only 1 event listener
            --> so inside memory, only 1 listener object will be stored
        */

        const box= document.getElementById("container-2");

        box.addEventListener("click", (obj) => {
                if(obj.target.id === "red") {
                    obj.target.style.backgroundColor= "red";
                    console.log("red is clicked");
                    console.dir(obj);
                } else if (obj.target.id === "green") {
                    obj.target.style.backgroundColor= "green";
                    console.log("green is clicked");
                    console.dir(obj);
                } else if(obj.target.id === "blue") {
                    obj.target.style.backgroundColor= "blue";
                    console.log("blue is clicked");
                    console.dir(obj);
                } 
        });

        




