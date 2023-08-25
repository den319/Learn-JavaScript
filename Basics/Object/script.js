
/* topics
    1. objects ____________________________
        1. how to access objects
            1. (.)
            2. ( [] )
        2. use of objects
        3. update, add and delete property
        4. use of ".hasOwnProperty()"
        5. complex objects
        6. accessing nested objects
        7. destructuring assignment
        8. static and dynamic nature of key
        9. get value / key from object
        10. add inside object
        11. delete from the object
        12. copy of the object
            1. shallow copy

        13. object destructuring
        14. destructuring ALIAS
        15. array destructuring
        16. string literal

        17. object methods:
            1. Object.asign()
            2. Object.create()
            3. Object.getOwnPropertyNames()
            4. Object.keys()
            5. Object.values()
            6. Object.entries()
*/






// objects :
console.log();
console.log("objects");
console.log();

    /*
        definition: obeject is collection of 'key' and 'value'.
    */

    /* how to access properties of object:
        --> two ways to access:
            1. using dot(.) operator: 
                --> it is used when you know the name of the property you're trying to access ahead of time.

            2. using bracket( [] ) notation:
                --> If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
                --> However, you can still use bracket notation on object properties without spaces.
                --> the property should be between "". e.g.: anotherObject["company"]

                --> Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
                --> This can be very useful for iterating through an object's properties or when accessing a lookup table.

                NOTE: Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the 'variable', not the 'name'.

        --> use of objects: 
                1. Objects can be thought of as a 'key/value' storage, like a dictionary. 
                    => If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. 
                    => This is most useful when you know that your input data is limited to a certain range.
    */

    const anotherObject = {         // if your object has any non-string properties, JavaScript will automatically typecast them as strings.
        make: "Ford",               // 'anotherObject' => object 
        5: "five",                  // 'make', '5', 'model' => properties
        "model": "focus",           // "Ford", "five", "focus" => values
        company: "hi hello hehe"
    };

    console.log("1.", anotherObject.make); // --> Ford

    //console.log("20.",anotherObject.5); --> give an error

    console.log("2.", anotherObject[5]); // --> five
    console.log("3.", anotherObject["5"]); // --> five

    // console.log("21.", anotherObject[model]); // --> give error: model is not defined

    console.log("4.", anotherObject["model"]); // --> focus

    // console.log("24.", anotherObject[make]); // --> give an error: make is not defined
    console.log("5.", anotherObject["make"]); // --> Ford

    console.log("6.", anotherObject["company"]); // --> hi hello hehe

    // get value by storing the property in the variable

        const dogs = {
            Fido: "Mutt",
            Hunter: "Doberman",
            Snoopie: "Beagle"
        };
        
        const myDog = "Hunter";
        const myBreed = dogs[myDog];
        console.log("7.",myBreed); // --> Doberman

    // update the value of the property in object:
        console.log("8.",myBreed); // --> Doberman

        dogs.Hunter= "German Sheferd";

        console.log("9.",dogs.Hunter); // --> German Sheferd

    // add a new property:

        dogs.intelligent= "husky";

        console.log("10.",dogs.intelligent); // --> husky               NOTE: for the added non-string property, javascript will automatically typecast it to the string

    // delete a property: 

        console.log("11.",dogs); // -->  { Fido: 'Mutt', Hunter: 'German Sheferd', Snoopie: 'Beagle', intelligent: 'husky' }
        delete dogs.Fido;
        console.log("12.",dogs); // --> { Hunter: 'German Sheferd', Snoopie: 'Beagle', intelligent: 'husky' }

    /* use of ".hasOwnProperty()": 
        --> it is useful to check if the property of given object is exists or not.
    */

        let obj= {
            day: "rise",
            night: "fall"
        };

        console.log("13.",obj.hasOwnProperty("day")); // --> true
        console.log("14.",obj.hasOwnProperty("noon")); // --> false

    // complex objects:

        const ourMusic = [
            {
                "artist": "Daft Punk",
                "title": "Homework",
                "release_year": 1997,
                "formats": ["CD", "Cassette", "LP"],
                "gold": true
            },

            {
                "artist": "knight",
                "title": "bip",
                "release_year": 856,
                "formats": ["CD"],
                "gold": false
            }
        ];

    // accessing nested objects:
        const storage = {
            "desk": {
            "drawer": "stapler"
            },
            "cabinet": {
            "top drawer": { 
                "folder1": "a file",
                "folder2": "secrets"
            },
            "bottom drawer": "soda"
            }
        };
        
        let b1= storage.cabinet["top drawer"].folder2;
        console.log("15.", b1); // --> secrets

        let b2= storage.desk.drawer;
        console.log("16.",b2); // --> stapler

        
        const pets = [
            {
            animalType: "cat",
            names: [
                "Meowzer",
                "Fluffy",
                "Kit-Cat"
            ]
            },
            {
            animalType: "dog",
            names: [
                "Spot",
                "Bowser",
                "Frankie"
            ]
            }
        ];
        
        b1= pets[0].names[1];
        console.log("17.", b1); // --> Fluffy

        b2= pets[1].names[0];
        console.log("18.", b2); // --> Spot

        

    // Using Destructuring Assignment to Extract Values from Objects
            const HIGH_TEMPERATURES1 = {
                yesterday: 75,
                today: 77,
                tomorrow: 80
            };

        // without destructuring assignment
            const today1 = HIGH_TEMPERATURES1.today;
            const tomorrow1 = HIGH_TEMPERATURES1.tomorrow;

            console.log("19.", today1, tomorrow1); // --> 77 80

        // with destructuring assignment

            const {today2, tomorrow2}= HIGH_TEMPERATURES1;
            console.log("20.", HIGH_TEMPERATURES1);  // --> { yesterday: 75, today: 77, tomorrow: 80 }
            console.log("21.", {today2, tomorrow2}); // --> { today2: undefined, tomorrow2: undefined }


    // Using Destructuring Assignment to Assign Variables from Objects
        const HIGH_TEMPERATURES2 = {
            yesterday: 75,
            today: 77,
            tomorrow: 80
        };

        // without destructuring assignment
            const highToday1 = HIGH_TEMPERATURES2.today;
            const highTomorrow1 = HIGH_TEMPERATURES2.tomorrow;
            
            console.log("22.", highToday1, highTomorrow1); // --> 77 80

        // with destructuring assignment
            const {today: highToday2, tomorrow: highTomorrow2}= HIGH_TEMPERATURES2;
            console.log("23.", ); // --> 
            console.log("24.", ); // --> 



    // Using Destructuring Assignment to Assign Variables from Nested Objects


    // 8. static and dynamic nature of key
        /*
            --> in objects, in key-value pair, values are dynamic but key may be static or dynamic
        */

            
        // e.g. 1: static key:

            let name= "john";
            let key= "14452";

            let object= {
                name: name,
                rollNumber: 1,
                class: "9th",
                key: "parent"
            }

            console.log("25.",object["name"]); // --> john
            console.log("26.",object["key"]); // --> parent


        // e.g. 2: dynamic key:

            let name1= "adam";
            let key1= "parentName";

            let object1={
                name: name1,
                rollNumber: 2,
                class: "10th",
                [key1]: "parent" // --> here [key1] will be replaced by parentName
            }

            console.log("27.",object1["name"]); // --> john
            console.log("28.",object1); /*
                                            class: "10th"
                                            name: "adam"
                                            parentName: "parent"
                                            rollNumber: 2
                                        */

        
    // 9. get value / key from object:

        let object2= {
            name: "tom",
            class: "9th",
            rollNumber: 1,
        }
        console.log(object2);
        console.log("29.",object2.name); // --> tom
        console.log("30.",object2["class"]); // --> 9th

    // 10. add inside object:

        object2["language"]= "japanese";
        console.log("31.", object2["language"]); // --> japanese

    // 11. delete from the object:
        
        delete object2.rollNumber;
        console.log("32.", object2); // --> {name: "tom", class: "9th", language: "japanese"}

        /*
            --> the 'delete' operation will not create new object
            --> here, it will go in the ADDRESS inside heap where "object2" is stored
            --> inside "object2" it will go to the key named "rollNumber" and delete it
            --> so it is not changing the address inside heap

            --> NOTE:
                --> the internal implementation of classes and objects is hashmap in java
        */
    
    // 12. copy of the object

        let user= {
            name: "alice",
            age: 25
        }

        // 1. shallow copy

            let userCopy= {...user};

            console.log(user === userCopy); // --> false 

            // because "userCopy= {...user}" creates a new object at other address inside the heap

        // 2. deep copy

        
          
    // 13. object destructuring:

        const objDes= {
            name: "sam",
            class: 10,
            rollNumber: 41,
            airways: "Go Airways"
        }

        console.log("35.",objDes.airways);

        const {rollNumber, airways}= objDes; /* --> 
                                                    const rollNumber= objDes.rollNumber
                                                    const airways= objDes.airways
                                            */
        console.log("35a.",rollNumber, airways)
    
    // 14. destructuring ALIAS

        const {rollNumber: rollCall, airways2}= objDes
        const alienName= objDes.name;

        console.log("36.", rollCall, airways)


    // 15. array destructuring

        const arr1= [10, 25, 3, 4]

        const[first, second, , fourthVal]= arr1;

        console.log("37.", first, second, fourthVal); // --> 10 25 4

        /*
            --> first = arr1[0];

        */


    // 16. string literal
        
        const str1= "hi";
        const str2= 'hello';

        const variable= 1;

        const str3= `your age is: ${variable}`;  // --> allows us to inject variables which makes it dynamic 
        console.log("38.",str3);

        const str4= 'your age is: ${variable}'; // --> not allow us to inject variables which makes it static
        console.log("38a.",str4);

        const str5= "your age is: ${variable}"; 
        console.log("38b.",str5);
        

    // 17. object methods:
        
        // 1. Object.asign()

            const object3= {name: "john", class: 9};
            const object4= {name: "dawn", class: 10};
            const object5= {};

            Object.assign(object5, object3);

            console.log("40.",object5); // --> {name: 'john', class: 9}

            Object.assign(object5, object3, object4);

            console.log("41.",object5); // --> {name: 'dawn', class: 10}



            const object6= {
                name: "jane",
                class: 11,
                rollNumber: 84,

                name: "hancock"
            }

            console.log("42.", object6); // --> {name: 'hancock', class: 11, rollNumber: 84}

        
        // 2. Object.create(): to create object
            // --> static method

                // ways to create object
                    // 1. {}
                        // name and rollNumber -> OWN PROPERTIES 

                        const person= {
                            name: "jony",
                            rollNumber: 1
                        }

                    // 2. Object.create()
                        // name and rollNumber -> this PROPERTIES will be created in prototype
                        // i.e these properties are not OWN PROPERTIES
                        // NOTE: different object has its own prototype

                    const newPerson= Object.create(person);

                    console.log("43.", person); // --> {name: 'jony', rollNumber: 1}
                    console.log("44.", newPerson); // --> {}

                    console.log("45", person.name);// --> jony
                    console.log("46.", newPerson.name); // --> jony

                    newPerson.name= "astra";
                    console.log("47.",newPerson); // --> {name: 'astra'}



        

        // 3. Object.getOwnPropertyNames(): mdn

        
            // e.g. 1:
                
                const personProperty1= Object.getOwnPropertyNames(person);
                console.log("48.", personProperty1);

                const personProperty2= Object.getOwnPropertyNames(newPerson);
                console.log("49.", personProperty2);



        // 4. Object.keys(): mdn

            const keyPerson1= Object.keys(person);
            console.log("50.", keyPerson1);

            const keyPerson2= Object.keys(newPerson);
            console.log("51.", keyPerson2);


        // 5. Object.values(): mdn

            const valPerson1= Object.values(person);
            console.log("52.", valPerson1);
            const valPerson2= Object.values(newPerson);
            console.log("53.", valPerson2);


        // 6. Object.entries(): mdn

            const entriesPerson1= Object.entries(person);
            console.log("54.", entriesPerson1);
            const entriesPerson2= Object.entries(newPerson);
            console.log("55.", entriesPerson2);


            for(const[key, value] of entriesPerson1) {
                console.log(`$key : $value`); // --> '$' = part of string literel
            }