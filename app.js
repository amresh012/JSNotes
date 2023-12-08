// Date and Time in js

let date = new Date();

// console.log(date.toISOString());//output:- 2023-12-08T05:08:47.107Z
// console.log(date.toLocaleDateString());//output:- 2023-12-08T05:08:47.107Z
// console.log(date.toLocaleTimeString());//output:- 10:38:47 am
// console.log(date.toLocaleString());//output:- 8/12/2023, 10:38:47 am
// console.log(typeof Date()) // string
// console.log(typeof Date) // function
// console.log(typeof date) // object

// console.log(date.getDate())//output-:8
// console.log(date.getMonth()+1)//output-:current month Dec 12
// console.log(date.getFullYear())//output-: current year 2023
// console.log(date.getMinutes())//output-: current minute in your device
// console.log(date.getTime())//output-: current time in time zone local in milisecond 1702013021961 
// console.log(date.getMinutes())// output-: current minute

// toLocalstring customiztion 
const local=date.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    
})
// console.log(local)

// Array in javascript
// Array creates shallow copie when copied it mean when something is 
// changed in copied array also reflect in original array also


// creating array method-1
const Arr = [0,1,2,3,4,5,6,7,8,9]

// creating array method -2
const myArr = new Array() //no need to add [] bracket

const newArr = [1,20,30,40,"helow" , {1:2} , true]
// myArr.push(...newArr)
// console.log(myArr)
 
// console.log(myArr) //length-10

Arr.unshift("hello")
const mynewArr=Arr.join()

//it doesn't include last index as well but manipulate the original array.
newArr.splice(0,3) //output :- [40,"hellw",{1:2},true]
// it dosent maniupulate the original array it creates new array and put the sliced value in it
const aray=newArr.slice(0,3) //output [1,20,30]

// console.log(aray)
// console.log(newArr)
// console.log(mynewArr)