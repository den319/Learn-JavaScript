
/*
    1. inheritance
    2. Getters and Setters
    3. Instance and Static methods
    4. method over-riding
    5. behind the scenes in inheritance 
    6. class inheritance vs consturctor function inheritance
    7. composition and mixins

*/


// class Car {
//     model= "GT-8";
//     speed;

//     constructor(speed, model) {
//         this.model= model;
//         this.speed= speed;
//     }

//     canDrive() {
//         console.log("1. yes can driven at speed of ", this.speed);
//     }
// }

// const audi = new Car("123", "X-125");
// const mercideze= new Car("7800", "benz");
// console.log("2.",audi);
// console.log("2a.",mercideze);

// console.log("2b.",audi.model);
// console.log("3.",audi.canDrive());



// function CarConstructor(sp, md) {
//     this.speed  = sp;
//     this.model = md; 
//     this.canDrive = function() {
//         console.log("4. Yes i can drive hundai with speed at", this.speed);
//     }
// }

// const hundai = new CarConstructor(2000, "hundai");
// const bmw = new CarConstructor(5000, "bmw");
// console.log("5.",hundai);
// console.log("6.",bmw);




// --------------------------1. INHERITANCE---------------------------


// class Car1 {
//     wheels;
//     tank;
//     model;

//     constructor() {
//         this.wheels= 4;
//         this.tank= "petrol";
//         this.model= "BMW";
//     }

//     canDrive() {
//         console.log("7. Yes i can drive ");
//     }
// }

// class BMW extends Car1 {
//     sportsMode;
//     airBags;
//     nitros;

//     constructor(sportsMode, airBags, nitros) {
//         super();
//         this.sportsMode= sportsMode;
//         this.airBags= airBags;
//         this.nitros= nitros
//     }

//     canDriveBMW() {
//         console.log("8. No I cannot")
//     }
// }

// const bmwClass= new BMW("level-3", 2, 4);
// console.log("9. bmwClass is: ", bmwClass);

// bmwClass.canDrive();
// bmwClass.canDriveBMW();



// ----------------------- 2. Getters and Setters ----------------------

    /*
        read about MAP vs. WEAKMAP 
    */
// const radius1= new WeakMap();

// class Circle {

//     colorful;

//     constructor(radius2) {
//         radius1.set(this, radius2);
//         this.colorful= true;
//     }
//     get radius() {
//         return radius1.get(this);
//     }

//     set radius(value) {
//         return radius1.set(this, value);
//     }

//     get color() {
//         return this.colorful;
//     }

//     set color(color) {
//         this.colorful= color;
//     }
// }

// let circle= new Circle(10);
// console.log("10. ", circle);

// console.log("11. radius: ", circle.radius);

// circle.radius= 85;
// console.log("11. new radius: ", circle.radius);




// -------------------------3. Instance and Static methods -------------------------


    /*
        1. instance method:


        2. static method: 
    */


// class Circle2 {
//     radius1;

//     constructor(radius1) {
//         this.radius1= radius1;
//     }

//     // this belongs to the instance
//     draw() {
//         console.log("12. DRAWING");
//     }

//     // this belongs to the class
//     // functionality of "static" is different in javascript from java
//     static parse() {
//         console.log("13. hello world")
//     }
// }

// // this "circle_2" is the instance of class "Circle2"

// const circle_2= new Circle2(21);
// console.log("14. ", circle_2);

// circle_2.draw();

// // circle_2.parse(); // --> Error: circle_2.parse is not a function
// Circle2.parse();




// ------------------------ 4. method over-riding --------------------------


// class Students {

//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     markAttendance() {
//         console.log("15. Common students marking the attendance for ", this.name);
//     }
// }

// class TeamCaptain extends Students{

//     badges;

//     constructor(name, badges) {
//         super(name);
//         this.badges= badges;
//     }

//     playFootball() {
//         console.log("16. ", this.name, " is playing football");
//     }

//     markAttendance() {
//         console.log("17. Captains marking the attendance for ", this.name);
//     }
// }

// const john= new Students("jhon");
// john.markAttendance();

// const alice= new TeamCaptain("alice", 10);
// console.log("18. ",alice);
// alice.markAttendance();
// alice.playFootball();



// --------------------- 5. behind the scenes in inheritance ---------------------

// class Shape {

//     constructor(color2) {
//         this.color2= color2;
//     }
//     move() {
//         console.log("19. Moving")
//     }
// }

// class Circle3 extends Shape {

//     constructor(radius3, color2) {
//         super(color2);
//         this.radius3= radius3;
//     }

//     draw() {
//         console.log("19a. Drawing")
//     }
// }

// const circle_3= new Circle3(10, "red");
// console.log("20.",circle_3);

// constructor function of Shape class behind the scenes

    // function ShapeConstructor(color3) { 
    //     this.color3= color3;
    //     // this.move= function() {
    //     //     console.log("21. move");
    //     // }
    // }

    // const shapeObj= new Shape("red");
    
    // const shapeConstructor= new ShapeConstructor("black");

    // ShapeConstructor.prototype.move= function() {
    //     console.log("22. moving quickly");
    // }
    
    // console.log("23.", shapeObj, shapeConstructor);
    // console.log("24.", shapeObj.move(), shapeConstructor.move());


// ----------------------- "extends" behind the scene -------------------


// function ShapeConstructor(color2) {
//     this.color2= color2;
// }
    
// ShapeConstructor.prototype.move= function() {
//     console.log("22. moving quickly");
// }

// function Circle_3_Constructor(radius3, color2) {

//     ShapeConstructor.call(this, color2); // mocks the calling of the "Super" keyword(i.e. internal implimentation of "super")
//     this.radius= radius3;

// }

// // 1. by doing this, i am setting the inheritance(i.e. extends)

// // NOTE: this is to reset prototypeo of "Circle_3_Constructor" and to set the PARENT'S PROTOTYPE
//     Circle_3_Constructor.prototype= Object.create(ShapeConstructor.prototype); // this line make huge difference in the prototype object. See in the browser


// /*
//     --> the above line will set the "ShapeConstructor" as parent class of "Circle_3_Constructor"
//     --> NOTE: "Object.create()" will create a new object
//         --> e.g.: 
//                  Object.create(ShapeConstructor.prototype);

//         --> here, Object.create() creates copy of prototype of "ShapeConstructor" class, not "ShapeConstructor" class itself.
//             That is why in ShapeConstructor.prototype, you will not be able to find the "Circle_3_Constructor" constructor.
//             but inside ShapeConstructor.prototype, there is Object prototype, and inside it, the constructor of ShapeConstructor would be present.

// */ 

// // to add the constructor of "Circle_3_Constructor" inside the prototype of "ShapeConstructor"
//     Circle_3_Constructor.prototype.constructor= Circle_3_Constructor;

// // Object.create() -> creates a new object

// // 2. now we add the method of "Circle3" class
//     Circle_3_Constructor.prototype.draw= function() {
//         console.log("23. drawing the picture");
//     }

//     const circle_3_Constructor_obj= new Circle_3_Constructor(100, "blue");
//     console.log("24. ", circle_3_Constructor_obj);

/*
    --> "extends" inform of function:
        i.e.,
            function extend(child, parent) {
                child.prototype= Object.create(parent.prototype);
                child.prototype.constructor= child;
            }
        --> the above function "extend()" will act same as "extends" keyword, try it by your self

*/


// ----------------------- class inheritance Vs. customly created consturctor function inheritance --------------------------



// ---------------------------- 6. Composition -------------------------

    /*
        --> why multiple inheritance is not supported in most languages?
            --> ans: all the properties and method will go inside that sub-class which makes the object of that sub-class heavy.

        --> to support multiple inheritace in JS, we use mixins and composition    

        --> e.g.: 

            class Eat {
                ...
            }
            class Walk {
                ...
            }
            class Swim {
                ...
            }

            class Person extends Eat, Walk, Swim {
                ...
            }
    */

    // const canEat= {
    //     eat: function() {
    //         console.log("25. can eat");
    //     }
    // }

    // const canWalk= {
    //     walk: function() {
    //         console.log("25. can walk");
    //     },
    //     catWalk: false, 
    // }

    // const canSwim= {
    //     swim: function() {
    //         console.log("25. can eat");
    //     }
    // }


    /*
        --> Object.assign(): this static method copies all "enumerable" own properties from one or more source objects to a target object.
                             It returns the modified target object.
    */
  
    // constructor function:
    // function Person() {
    //      this.name= "patric";
    // }
    // const name1= new Person();
    // console.log("26. ", name1);

    // // here target= Person prototype
    // // the below line of code explains how multiple inheritance works behind the scenes in JS
    // Object.assign(Person.prototype, canWalk, canEat);

    // name1.walk();
    // name1.swim(); // Uncaught TypeError: name1.swim is not a function



    /*
        --> NOTE: you can also do the same thing with the "class" also as "class" are implemented using function behind the scene
            
            --> run below code in "babel" to see how class is implemented behind the scenes

        --> "let" and "const" keyword not work inside the class.
        --> but we can do the following:

            --> e.g.: 

                class Shape {
                    
                    a= 12; 
                    constructor(color2= "yellow") {
                        this.color2= color2;
                        this.a= a;
                    }
                    move() {
                        console.log("19. Moving")
                    }
                }

                --> at the when executer go inside the constructer, the value of "a" and "color2" will change.

    */

    // class Person { 
    //     name= "patric"
    // }
    
    // Object.assign(Person.prototype, canWalk, canEat, canSwim);

    // const name2= new Person();
    // console.log("27. ", name2);

    // name2.walk();
    // name2.swim();

    /*
        so ultimately what we are doing is, we are adding the methods from multiple parents to protype of the child.
    */

        