// //alert('hello')

// // Destruturing arrays 


// // const arr = [1,2,3,4,5]

// // let a = arr[0]
// // let a = arr[0]
// // let a = arr[0]
// // let a = arr[0]
// // let a = arr[0]

// // console.log(arr[0])
// // console.log(arr[1])
// // console.log(arr[2])
// // console.log(arr[4])

// // const [a,b,c] =arr
// // const [a,b,c] = [1,2,3,4,5,6,6,7,8,9]

// // console.log(a)
// // console.log(b)
// // console.log(c)


// const hotel = {

//     namey:'shivsagar',
//     location:'MG road',
//     categories:['South Indian','Chinese','Italian'],
//     startMenu:['Ban maska','Garlic bread','Casearsalad','panner 65','paneer chilly'],
//     mainMenu:['Chicken Biryani','Mutton Biryani','Fish curry'],

//     order:function(startIndex , mainCourseIndex){
//         return [this.startMenu[startIndex],this.mainMenu[mainCourseIndex]]

//     }
            
// }

// // const [starter,maincourse] = hotel.order(1,2)
// // console.log(starter)
// // console.log(maincourse)


// // swapping the variable 

// // let a = "ram"
// // let  b = "sham"


// // console.log(a)
// // console.log(b)

// // [a,b] =[b,a];

// // console.log(a)
// // console.log(b)




// // let a = 1;
// // let b = 2;

// // console.log(a)
// // console.log(b)


// // [a, b] = [b, a];

// // a; // => 2
// // b; // => 1

// // console.log(a)
// //console.log(b)



// // let [a,b] = [1,2]

// // console.log(a)
// // console.log(b)

// // [a,b] = [b,a]

// // console.log(a)
// // console.log(b)


// // let r = 1;
// // let v = 3;

// // console.log(r)
// // console.log(v)

// // [r, v] = [v, r];

// // console.log(r); // 3
// // console.log(v); // 1



// // const [a,b] = [3,[2,4]]

// // console.log(a)
// // consoele.log(b)

// //const [a,[b,c]] = [3,[2,4]]
// // console.log(a)
// // console.log(b)
// // console.log(c)



// const [a,b,c,d ='no value',e = 'no value'] = hotel.startMenu
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


// //  


// let person = {


//     name:'chinmay',
//     age:30,
//     language:'marathi',
//     color:'black'



// }


// let {name:firstName,age:yearofAge}= person
// console.log(firstName)
// console.log(yearofAge)


// function show(obj){

//    for(let key in obj){
//         if(key === age){
//             console.log(obj[keyh])
//         }
//    }

// }
// show(person)


// function show({age,name}){
//     console.log(age)
//     console.log(name) 
//  }
//  show(person)

// 7-4-2021

// let person = {

//     namey:"chinmay",
//     age:28

// }

// let {namey,age} = person

// console.log(namey)
// console.log(age)


// let {namey:fullName,age:totalAge} = person
// console.log(fullName)
// console.log(totalAge)


// let student = [

//     {
//         fullName:'chinmay',
//         lastName:'deshpande',
//         age:29

//     },

//     {
//         fullName:'amol',
//         age:29

//     },
//     {
//         fullName:'mayuri',
//         lastName:'rao',

//     }


// ]


// for(let i = 0 ; i < student.length; i++){
//     const { fullName = 'notgiven', lastName:surname = "nolastname",age:totalAge= 0} = student[i]
//     console.log(fullName)
//     console.log(surname)

// }



// Array 

// nested array 

// let a = [1,2,3,[6,7,8,9]]
// let [e,b,c,[d,r,f,g]] = a 
// console.log(e,b,c,d,r,f,g)

// // nested object 

// let obj = {

//     fullName:'chinmay deshpande',
//     parent:{
//             mother:'kanchan',
//             father:'shirish'
//     }

// }

// let {fullName:name,parent:{mother=" noname",father}} = obj
// console.log(fullName)
// console.log(mother)
// console.log(father)


// let a = 20
// let b = 11

// let x = { a:23,b:19};
// ({a,b} = x);

// console.log(a)
// console.log(b)


// spread ---- complex and rest operator 



// const arr = [7,8,9,10]
// const arr2 = [1,2,3,4,57,6]
// console.log(arr[0],...arr)


// let a = [...arr,...arr2]
// console.log(a)
// console.log(arr)
// console.log(arr2)

// let b = [...arr,30000]
// console.log(b)


// let  person = [1,2,3,44,55,6,77,88,99,00,66,77,8,99] 

// function display(a,b,c,d,e){

//     console.log(a,b,c,d,e)


// }
// display(person[0],person[1],person[2],person[3],person[4])




// let  person = [1,2,3,44,55,6,77,88,99,00,66,77,8,99] 
// function display(a,b,c,d,e){
//     console.log(a,b,c,d,e)
// }
// display(...person)


// //spread   string map set 
// let fullName = "sweta"
// console.log(...fullName)

var size=5;  
var x=5;  
var size=4;  
for(var j=size;j>=0;j--)  
{  
    console.log(x);  
    x=x-2;  
}