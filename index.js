//basic operators

/*var year, yearJohn, yearMark;
year = 2020;
ageJohn = 20;
ageMark = 44;

//math operators
yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log(yearJohn);
console.log(yearMark);

console.log(year + 9);
console.log(year * 2);
console.log(year / 2);

//logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

//operator precedence
/*var now = 2020;
var yearJohn = 1989;
var fullAge = 20;

//multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

//1st coding challenge

//if else statements
/*var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var massMark, massJohn, heightMark, heightJohn, bsiMark, bsiJohn;
massMark = 50;
massJohn = 45;
heightMark = 30;
heightJohn = 25;

//bsi = mass / height*2;

bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var mark = bmiMark;
var john = bmiJohn;

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/    


//var equal = bmiMark > bsiJohn;
// console.log(equal);

// console.log(' Is Mark bmi ' + bmiMark + ' higher than John\'s bmi ' + bmiJohn + ' . ' , equal);

//boolean logic
/*var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy. ');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 39) {
    console.log(firstName + ' is a young man');
}   else {
    console.log(firstName + ' is a man ');
}
*/

//tenary operator 
/*var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer. ') : console.log(firstName + ' drinks juice. ');


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);
*/

//switch statement
/*var job = 'programmer';
switch (job) {
    case 'programmer':
        console.log(firstName + ' develops websites and writes programs.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designes beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
*/


/*age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

//truthy and falsy values and equality operators

/*var height;

height = 23;

if (height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}

//equality operators
if (height === '23') {
    console.log('The == operator does type coercion');
}
*/

//functions
// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }

// var ageJohn = calculateAge(2000);
// var ageMike = calculateAge(2002);
// var ageMary = calculateAge(2004);

// console.log(ageJohn, ageMike, ageMary);


// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years.');
// }

// yearsUntilRetirement(2000, 'John');
// yearsUntilRetirement(2002, 'Mike');
// yearsUntilRetirement(2004, 'Mary');

//function statement and expressions
//function declaration
//function whatDoYouDo(job, firstName) {

//}




//function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon'
//         case 'designer':
//             return firstName + ' creates beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('designer', 'Mutiat'));
// console.log(whatDoYouDo('tailor', 'Halimah'));

//arrays
// var names = ['John', 'Mark', 'Mary'];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// //mutating arrays
// names[1] = 'Mutiat';
// names[names.length] = 'Mike';
// console.log(names);

// //different data types
// var john=['John', 'Smith', 1990, 'teacher', 'designer', false];

// john.push('blue');
// john.unshift('Mr');
// john.pop();
// john.shift();

// //console.log(john);

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);

//coding challenge 5
// var john = {
//     tip:[],
//     total: [],
//     bill: [124, 46, 268, 180, 42],
//     tipCalc() {
//         for (var i = 0; i < this.bill.length; i++) {
//             if (this.bill[i] < 50) {
//                 var percentage = 0.2 * this.bill[i];
//                 this.tip.push(percentage.toFixed(1));
//                 var totalPaid = Number(percentage.toFixed(1)) + this.bill[i];
//                 this.total.push(totalPaid);
//             } else if(this.bill[i] >= 50 && this.bill[i] <= 200) {
//                 var percentage = 0.15 * this.bill[i];
//                 this.tip.push(percentage.toFixed(1));
//                 var totalPaid = Number(percentage.toFixed(1)) + this.bill[i];
//                 this.total.push(totalPaid);
//             } else {
//                 var percentage = 0.1 * this.bill[i];
//                 this.tip.push(percentage.toFixed(1));
//                 var totalPaid = Number(percentage.toFixed(1)) + this.bill[i];
//                 this.total.push(totalPaid);
//             }
//         }
//     },
//     // totalCalc () {
//     //     for (var i = 0; i < this.tip.length; i++) {
//     //         for(var j = 0; j < this.bill.length; j++) {
//     //             if (i === j) {
//     //                 var totalPaid = Number(this.tip[i]) + this.bill[j];
//     //                 this.total.push(totalPaid);
//     //             }
//     //         }
//     //     }
//     // }
    
// }
// john.tipCalc();
// // john.totalCalc();
// console.log(john);


//hoisting
//function declaration
// calculateAge(1969);


// function calculateAge(year) {
//     console.log(2016 - year);
// }


// //function expression
// //retirement(1965);
// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }


// //variables
// console.log(age);
// var age = 23;


// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);

//first scoping example
// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third(); 
//     }

//     function third() {
//         var d = 'John';
//         console.log(c);
//     }
// }

//this variable
//console.log(this);
// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

// var john = {
//     name:'John',
//     yearOfBirth: 1990,
//     calculateAge: function() {
//         console.log(this);
//         console.log(2016 - this.yearOfBirth);

//     //     function innerFunction() {
//     //         console.log(this);
//     //     }
//     //     innerFunction();
//     }
// }

// john.calculateAge();

// var mike = {
//     name: 'Mike',
//     yearOfBirth: 1984
// };

// mike.calculateAge = john.calculateAge;
// mike.calculateAge();