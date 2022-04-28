console.group("Section Outline");
var br =", "
var li =" - "
var sps = "   "

// JAVASCRIPT TYPES
console.group("JAVASCRIPT TYPES");
// -----------------
// 1. Number
console.log("Numbers: " + 10/5 + br + (3+4)*2 + br + 14%9);
// 2. String
console.log("Strings: Hello There," + ' I\'m home!');
// 3. Boolean
console.log("Booleans: 3>=2" + li + true + br + "3 !== 3" + li + false);
// 4. Undefined
console.log("Undefineds: var a; - Undefiend");
// 5. Null
console.log("Null: var nullObject; = null; - null");
// <!-- 6. Symbol (new in ECMAScript 6) -->
// 7. Object
var user = {
    name: "John",
    age: 34,
    hobby: "Football",
    isMarried: false,
    spells: ["fire", "water", "lazer"],
    shout: function() {
        consonle.log("AHHHH!");
    }
}
console.log("Objects: " + user.name + br + user.age + br + user.hobby);
console.groupEnd();

// JAVASCRIPT COMPARISONS
console.group("JAVASCRIPT COMPARISONS");
// -----------------
// !==
console.log("!==: Not equal.");
// ===
console.log("===: Equal.");
// >
console.log(">: Greater than.");
// <
console.log("<: Smaler than.");
// >=
console.log(">=: Greater than or equals.");
// <=
console.log("<=: Smaler than or equals.");
console.groupEnd();

// JAVASCRIPT VARIABLES
console.group("JAVASCRIPT VARIABLES");
// -----------------
// var
console.log("Variables: var morningGreating = \"Have a good morning!\"");
// <!-- let (new in ECMAScript 6)-->  
// <!-- const (new in ECMAScript 6)-->
console.groupEnd();

// JAVASCRIPT CONDITIONALS
console.group("JAVASCRIPT CONDITIONALS");
// -----------------
var nameRequest = "What's your name? - ";
var userName = "Billy";
// if
if (userName === "Billy") {
    var reply = "Hi Billy!";
}
console.log("Ifs: " + nameRequest + reply);
// else
var userName = "Zsigmond";
if (userName ==="Billy") {
    var reply = ("Hi Billy!");
} else {
    var reply = ("I don't know you.");
}
console.log("Elses: " + nameRequest + reply);
// else if
var userName = "Zsigmond";
if (userName ==="Billy") {
    var reply = ("Hi Billy!");
} else if (userName === "Zsigmond") {
    var reply = ("Hello Zsigmond!");
} else {
    var reply = ("I don't know you.");
}
console.log("Else ifs: " + nameRequest + reply);
// <!-- ternary operator -->
// <!-- switch -->
console.groupEnd();

// JAVASCRIPT LOGICAL OPERATORS
console.group("JAVASCRIPT LOGICAL OPERATORS");
// -----------------
// &&
console.log("&&: And.");
// ||
console.log("||: Or.")
// !
console.log("!: Is not.")
console.groupEnd();

// JAVASCRIPT FUNCTIONS
console.group("JAVASCRIPT FUNCTIONS");
// -----------------
// function name() {}
console.log("Function decleration:\nfunction sayHello(){\nconsole.log('Hello');\n}");
// var a = function name() {}
console.log("Function expessions:\nvar sayBye = function() {\nconsole.log('Bye');\n}");
// return
console.log("Return the result:\nfunction multiply(a, b){\nreturn a*b\n}")
// <!-- () => (new in ECMAScript 6) -->
console.groupEnd();

// JAVASCRIPT DATA STRUCTURES
console.group("JAVASCRIPT DATA STRUCTURES");
// -----------------
// Array
var list = ["tiger", "cat", "bear", "gird"];
console.log("Arrays: " + list);
// Object
var user = {
    name: "John",
    age: 34,
    hobby: "Football",
    isMarried: false,
    spells: ["fire", "water", "lazer"],
    shout: function() {
        console.log("AHHHH!");
    }
}
console.log("Objects: " + user.name + br + user.age + br + user.hobby);
console.groupEnd();

// JAVASCRIPT LOOPING
console.group("JAVASCRIPT LOOPING");
// -----------------
// for
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study Javascript"
];

for (var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}
console.log("For Loops: " + todos);
// while
var counterOne = 3;
var counterOneStorage = [];
while (counterOne > 0) {
    counterOneStorage.push(counterOne);
    counterOne--
}
console.log("While Loop: " + counterOneStorage);
// do 
var counterTwo= 10
var counterTwoStorage = [];
do {
    counterTwoStorage.push(counterTwo);
    counterTwo--;
} while (counterTwo > 10);
console.log("Do While Loop: " + counterTwoStorage);
// forEach (new in ECMAScript 5) 
var todosStorage = [];
todos.pop();
todos.forEach(function(todo, i) {
    todosStorage.push(todo, i + 1);
})
console.log("For Each Loop: " + todosStorage);

console.groupEnd();

// JAVASCRIPT KEYWORDS
// -----------------
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// for
// function
// if
// import
// in
// instanceof
// new
// prompt
// return
// super
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
// yield
console.groupEnd();


