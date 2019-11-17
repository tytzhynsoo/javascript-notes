/************************************
 * Truthly and Falsy values and quality operators
 */
// falsy values : undefined, null, 0, '', NaN
// trithy values : Not falsy values;

//let height;

//height = '';

//if (height || height == 0) {
  //  console.log('Variable is defined');
//}else{
  //  console.log('Variable has not been defined');
//}

// Equality operators
//if (height == '23') {
  //  console.log ('The == operator does type coercion');
//}

//* let jTeamScore = [89, 120, 103];
//let sumJ = jTeamScore.reduce((previous, current) => current += previous);
//let avgJ = sumJ / jTeamScore.length;

//let mTeamScore = [116, 94, 123];
//let sumM = mTeamScore.reduce((previous, current) => current += previous);
//let avgM = sumM / mTeamScore.length;

//let marryTeamScore = [96, 104, 95];
//let sumMarry = marryTeamScore.reduce((previous, current) => current += previous);
//let avgMarry = sumMarry / marryTeamScore.length;


//if (avgJ >= avgM && avgMarry) {
  //  console.log('John team are the winners');
//} else {
  //  if (avgM >= avgMarry) {
    //    console.log('Mikes team are the winners');
    //} else {
      //  console.log ('Marrys team are the winners');
    //}

 //}


/*******************************************
 * Functions
 */

//function calculateAge(birthYear) {
  //  return 2018 - birthYear;
// }

//let ageJohn = calculateAge (1990);
//let ageMike = calculateAge(1948);
//let ageJane = calculateAge(1969);
//console.log(ageJohn, ageMike, ageJane);


//function yearsUntillRetirement(birthYear, firstName) {
    //  let age = calculateAge(year);
//let retirement = 65 - age;
//  console.log(firstname + ' retires in ' + retirement + ' years');
//}

//yearsUntillRetirement(1998, 'John');

/****************************************
 * Function Statements and Expressions
 */

//Function declaration
   // function whatDoYouDo(job,firstName) {
//}

//Function expression

//let whatDoYouDo = function (job, firstName) {
//switch(job){
  //  case'teacher':
//return firstName + ' teachers kids how to code';
  //  case 'driver':
       // return firstName + ' drives a cab in Lisbon';
       // case 'designer':
         //   return firstName + ' designs beutiful websites';
    //default :
      //  return firstName + ' does something else';

//}
//}

//console.log (whatDoYouDo('teacher', 'John'))
//console.log (whatDoYouDo('designer', 'Jane'))
//console.log (whatDoYouDo('driver', 'Mark'))

/**************************************************
 /* Arrays***************************
 */

//let names = ['John', 'Mark', 'Jane'];
//let years = new Array( 1990, 1969, 1948);
//console.log(names[0]);

//names[1] = 'Ben';
//names[3] = 'Marry';
//console.log(names);

///////Different data types

//let john = ['John', 'Smith', 1990, 'teacher', false ];
//john.push('blue');
//john.unshift('Mr.')
//console.log(john)
//john.pop();
//john.pop();
//john.shift();
//console.log(john);
//console.log(john.indexOf(1990));


//let bills = [124, 48, 268];
 //let percentOfTips = [0.28, 0.15, 0.1];
//let tips = ['', '', '',];
  //  function howMuchTips (Tips) {
    // If ( bills [] < 58) {
      //   return percentOfTips [0] * (bills[]<58);
    //} else if {
    //(bills >= 60 && bills =< 200);
    //} return percentOfTips [1] * (bills [] >50 && bills[] < 200);
//} else {
  //  (bills > 200) {
    //    return percentOfTips [2] * (bills [] > 200);
    //}
//}
//console.log(tips )

/*****Correct
function tipCalculator(bill) {
    let percentage;
        if (bills < 50) {
        percentage = .2;
    }else if (bills > 60 && bills <200) {
        percentage = .15;
    } else {
        percentage = 0.1;
           }
        return percentage * bills;
}

let bills = [124, 48, 268];
    let tips = [tipCalculator(bills[0]),
        tipCalculator(bills[1]),
        tipCalculator(bills[2])];

    let finalValues = [bill[0] + tips [0],
        bill[1] + tips [1],
        bill[2] + tips [2],
    ]

console.log(tips, finalValues)
*///


/***********************************************
 *Objects and properties
 */
// Object literal
/*let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'techer',
    isMaried: 'false'
};
console.log(john.firstName);
console.log(john['lastName'])

//new object syntax
let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane.lastName = 'Smith';
console.log (jane)
*/

/********************************************
 *Objects and methods
 */

/*let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'techer',
    isMaried: 'false',
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john)
 */


/********************
 * Practice!!!
 */


/*let mark = {
    fullName: 'Mark',
    mass: 110,
    height: 1.72,
    calcBmi: function(){
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
    }
};

let john = {
    fullName: 'John',
    mass: 70,
    height: 1.80,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * 2);
          return this.bmi;
    }
};

john.calcBmi();
mark.calcBmi();

if (john.bmi > mark.bmi) {
    console.log (john.fullName + ' has a higher BMI of ' + john.bmi);
    } else if (mark.bmi > john.bmi) {
    console.log (mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log ('They have the same BMI');
}

*/

/**************************************************
 * Loops and iteraction
 */

/*for (let i = 1; i < 20; i += 2) {
    console.log(i)
}
let john = ['John', 'Smith', 1990, 'teacher', false ];

for (let i = 0; i < john.length; i++) {
    console.log(john[i]);
}

 */

/****************
* While loop
*/
/*let john = ['John', 'Smith', 1990, 'teacher', false ];
let i = 0;
while (i < john.lenght) {
    console.log(john[i]);
    i++;
}
*/



// continue and brake ststements
/*let john = ['John', 'Smith', 1990, 'teacher', false ];

for (let i = 0; i < john.length; i++) {
    if (typeof john [i] !== 'string')
        continue;
    console.log(john[i]);
}
for (let i = 0; i < john.length; i++) {
    if (typeof john [i] !== 'string') break;
    console.log(john[i]);
}

//looping backwords

for (let i = john.length - 1; i >= 0; i--) {
    console.log(john[i])
}
*/

/**************************************
 * BIG TEST************************
 * MY SOLUTION - It works
 */
/*function tipCalculator(johnBills) {
    var percentage;
    if (johnBills < 50) {
        percentage = .2;
    }else if (johnBills > 60 && johnBills <200) {
        percentage = .15;
    } else {
        percentage = 0.1;
    }
    return percentage * johnBills;
}

var johnBills = [124, 48, 268, 180, 42];
var tips = [
    tipCalculator(johnBills[0]),
    tipCalculator(johnBills[1]),
    tipCalculator(johnBills[2]),
    tipCalculator(johnBills[3]),
    tipCalculator(johnBills[4]),
];

var finalValues = [
    johnBills[0] + tips [0],
    johnBills[1] + tips [1],
    johnBills[2] + tips [2],
    johnBills[3] + tips [3],
    johnBills[4] + tips [4],
];
console.log(tips, finalValues)

var johnCount = tips.length;
tips = tips.reduce((previous, current) => current += previous);
tips /= johnCount;

function tipCalculator(bills) {
    var percentage;
    if (bills < 100) {
        percentage = .2;
    }else if (bills > 100 && bills <300) {
        percentage = .1;
    } else {
        percentage = 0.25;
    }
    return percentage * bills;
}

var bills = [77, 375, 110, 45];
var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2]),
    tipCalculator(bills[3]),
 ];
var finalValues = [
    bills[0] + tips [0],
    bills[1] + tips [1],
    bills[2] + tips [2],
    bills[3] + tips [3],
    ];
console.log(tips, finalValues)

var markCount = tips.length;
tips = tips.reduce((previous, current) => current += previous);
tips /= markCount;

if (johnCount > markCount) {
    console.log('The average of Mark\'s tips are higher');
} else if( markCount > johnCount){
    console.log('The average of John\'s tips are higher');
}else{
    console.log('The averages are the same');
}
*/


/* SOLUTION OF THE TRAINER

 */
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calctips: function(){
        this.tips = [];
        this.finalValues = [];
        for(var i = 0; i < this.bills.lenght; i++)
        {
            //Determine percentage based on typing
            // rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
    percentage = .15;
            } else {
    percentage = 0.1;
}
            // Add results to the corresponding arrays
        this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill + percentage;
        }
    }
}

john.calcTips();
console.log(john);


























