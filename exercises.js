//Short-circuit || evaluator practice

//1. Default Values

const defaultSum = (a, b) => {
    let b1 = b || 2;
    return a + b1;
}



//2. Null or Undefined Checks


const myObj = {
    someProp: null,
    anotherProp: undefined,
    answerProp: false,
    lastProp: 0
}


const retrieveNestedProp = (obj) => {
    const propValue = obj.someProp || obj.anotherProp || obj.answerProp || obj.lastProp;
    return propValue || null;
} 

// console.log(retrieveNestedProp(myObj));





//3. Fallback Options


const preferredValue = "";
const _fallback = "fallback";


const fallBack = (preferred, fallback) => {
    return preferred || fallback;
}

// console.log(fallBack(preferredValue, _fallback))





//Conditional Assignments


const evenOrOdd = (num) => {
    return (num % 2 === 0 && "Even") || "Odd";
}

// console.log(evenOrOdd(3));



//5. Chaining Function Calls


const chainCalls = (val) => {
    return val * 2 || undefined;
}

// console.log(chainCalls('d'))




//6. Error Handling



const errorHandler = (val) => {
    return chainCalls(val) || console.error(`Illegal Operation. ${val} is a ${typeof val}!`);
}

// console.log(errorHandler(3));
// console.log(errorHandler('dsf'));
// console.log(errorHandler(false));





//try-catch block with throw new Error connected



// const divideNumbers = (a, b) => {
//     if(b === 0) throw new Error("Division by zero is not allowed.");
//     return a/b;
// }


// try{
//     const result = divideNumbers(10, 0);
//     console.log(result);
// } catch(error){
//     console.error("An error occured:", error.message);
// }




// console.log(divideNumbers(5,0));














//Functional Programming



const doubleArr = (arr) => arr.map(elem => elem * 2);

console.log(doubleArr([1,2,3]));


const getEvens = (arr) => arr.filter(elem => elem % 2 === 0);

console.log(getEvens([8,4,3,7,2]));


const sumArr = (arr) => arr.reduce((a,b) => a + b);

console.log(sumArr([2,6,8,2,5]));





//

//3. Function Composition


const squareDouble = (num) => (num * num) * 2;


const upperCaseArr = (strArr) => strArr.map(str => str.toUpperCase());
const sortAlphaUpper = (strArr) => upperCaseArr(strArr).sort();

console.log(sortAlphaUpper(['g','d','x','s']));




