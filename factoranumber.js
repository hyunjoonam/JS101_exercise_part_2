/* Write a function factors which is given a number and returns an array containing all its factors. What are factors? */


function factors(number) {
    var array = []; /*2 */




    // 3
    // we need to loop through all numbers from 0 to "number"
    // and check if they are a factor

    for (var i = 0; i <= number; i++) { /* 4 */
        if (number % i === 0 /* 7 */ /*5 i is a factor of number */) {
            array.push(i); /*6 'i' is the one that changes all the time, not 'number' so we push 'i' */
        }
    }

    return array; /* 1 */
}

/* 8 only 'factor(24);' will not work */

/* 9 
var fac = factors(24);
console.log(fac)

or
*/

console.log(factors(24));

/*
    for (var i = 0; i <= number; i++) {}
        if (number % i === 0) {
            array.push(i);
            console.log(i); 
        }
    }

    return array;
}
console.log(factor(24));
*/



/* 1 == "1"  true
1 === "1" false
*/