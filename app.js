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



/********************************************************************
 *           Array in Javascript
 * ********************************************* */
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

const marvel_hero =["thor" ,"Iron man" , "Hulk"]
const DC_hero =["wonderwomen" ,"Aquaman" , "batman"]

// marvel_hero.push(DC_hero)
const all_hero=[...marvel_hero ,...DC_hero ,...Arr] //... is spread operator 

// Array flatening
// to tackel theis problem we use flat() method of arrray
const UnFlatArray =[1,2,[3,4],5,6,[7,8,[9,10,[11,12,[13,14]]]]]
// console.log(UnFlatArray)
const FlatArr= UnFlatArray.flat(0) //0 based depth
const FlatArr1= UnFlatArray.flat(1) //0 based depth
const FlatArr2= UnFlatArray.flat(2) //0 based depth
const FlatArr3= UnFlatArray.flat(3) //0 based depth
// console.log("F-0:-",FlatArr ,"F-1:-", FlatArr1,"F-2:-",FlatArr2,"F-3:-",FlatArr3)

// to check if a given output or input is Array or not
const isArray = Array.isArray(FlatArr)
// console.log(isArray)

// to conver any I/P O/P in array
const arr = Array.from("hello")
// console.log(arr)
 const ObjArr = Array.from({name:"hello"})
 //output:- Empty Array because we have to tell the method that on which value we have to make a array
//  console.log(ObjArr)

// to mae a array of diifernt value like variable or array or object

let obj={hello:1}
let arr1=[1,2,3,4,5]
let variable = 230
// Array.of() method will make array out of the above variables
Array.of(obj,arr1,variable)


/*********************************************************************\
      Object in javascript

*********************************************************************/

// Two Method Of Declearing Object
// 1- object Literals and Constructure
// jab hum object ko literal ki tarah banate hai tho wah singlton nahi hota



// object literal method

// Symbols are not included in for...in Loop**Note**
/*
**********There are various methods available with Symbol.******
for()	Searches for existing symbols
keyFor()	Returns a shared symbol key from the global symbol registry.
toSource()	Returns a string containing the source of the Symbol object
toString()	Returns a string containing the description of the Symbol
valueOf()	Returns the primitive value of the Symbol object.
*/
const mysim = Symbol("Key1")//symbol declertion method
const Object1 = 
{
    name:"Me",
    age:20,
    [mysim]:"myKey",
    location:"gorakhpur",
    email:"hello@email.com",
    boolean:true
}
// console.log(Object1)

// object accessing methods
// console.log(Object1.email)
// console.log(Object1["email"])
// console.log(typeof Object1[mysim])

// To blcok change propogation in object we use freeze() method it takes object as parameter
// Object.freeze(Object1)


// here this keyword is reffering/pointing to Object1
Object1.greeting=function(){
    console.log("Hello My Name is "+this.name)
}
// console.log(Object1.greeting())

// singleton or method to create object with constructure

const tinder= new Object()
// console.log(tinder)

const RegularUser={
    email:"RegularUseremail.com",
    fullName:{
        firstName:"John",
        lastName:"Doe"
    },
    age:30,
    gender:"Male",
    location:"Gorakhpur",
    hobbies:["Reading","Writing","Coding"],
    getFullName:function(){ return this.fullName.firstName+" "+this.fullName.lastName },
    getAge:function(){return this.age},
    getLocation:function(){return this.location},
    getHobbies:function(){ return this.hobbies}
}

let age = RegularUser.age+RegularUser.age
// console.log(age)

// to merge two object
const user1={
    name:"John",
    age:50,
    location:"Deoria"
    }
    const user2={
        name:"Doe",
        age:30,
        location:"Gorakhpur"
        }
const user3 = {user1,user2}// output wiil be
/* {
    user1: { name: 'John', age: 50, location: 'Deoria' },
    user2: { name: 'Doe', age: 30, location: 'Gorakhpur' }
  }*/

const user4 = Object.assign(user1,user2)
console.log(user4)

