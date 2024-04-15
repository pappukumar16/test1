
// let myarr = [1,2,3,4,5,6];

// console.log(myarr.push(7)) // add element last position
// console.log(myarr.pop()) // remove element last positon
// console.log(myarr.unshift(0)); // add first position element
// console.log(myarr.shift())//remove element first element
// console.log(myarr.includes(8))
// console.log(myarr.indexOf(5));

// let nearr =  myarr.join(); // it givs typeof is string but they join susscessful


// console.log(typeof nearr);
// console.log(nearr);

// console.log(myarr.slice(0,4)); // do'not change the orizionl array
// console.log(myarr)
// console.log(myarr.splice(0,4)) // change the orizionl array
// console.log(myarr)

// 2nd day

// let arr1 = ["pappu","ramu","sankar"];
// let arr2 = ["tpsultan","monu","harsit"];

// console.log(arr1.push(arr2)); // push but but array inside array
// console.log(arr1[3][0])

// let newarr = arr1.concat(arr2); // it givs new array
// console.log(newarr) 

// let newarrs = [...arr1,...arr2]; //line no 30 and 33 both behave same 
// console.log(newarr)

// let khusurat = [4,5,56,56,[67,66,87,6,[76,9,0,7,5,4],787],4];
// let beautyOfArray = khusurat.flat(Infinity);
// console.log(beautyOfArray)

// console.log(Array.isArray("Pappu"));
// console.log(Array.from("pappu"))
// console.log(Array.from({name:"Sanam"}));

// let a1 = 12;
// let a2 = 23;
// let a3 = 34;
// let a4 = 44;

// console.log(Array.of(a1,a2,a3,a4));


// Object 
 // littrel,cunstructor,singlten
 
 //littrel

 let mySym = Symbol("key1");

 let myobj = {
 	name:"pappu",
 	[mySym] : "key12",
 	age:20,
 	work:"enginer",
 	package:4500000,
 	email:"appu@gmail.com",
 	"fullname":"pappu Kumar",
 	
 }

 // console.log(myobj.name);
 // console.log(myobj["work"]);
 // console.log(myobj["fullname"]);
 // console.log(myobj[mySym])

 // myobj.email = "chat@gmail.com";
 // console.log(myobj.email);
 // // Object.freeze(myobj)
 // myobj.name = "vandana"
 // console.log(myobj);

 // myobj.greeting = function (){
 // 	console.log("Ok clear hai");
 // }

 //  myobj.greeting2 = function (){
 // 	console.log(`sb thik hai ${this.name}`);
 // }

 //  myobj.greeting()
 // console.log(myobj.greeting());

 // console.log(myobj.greeting2());

 // const tenderuser = new Object(); //singlten
 const tenderuser = {} //non singlten
 tenderuser.id = "1234#234";
 tenderuser.name = "pappu";
 tenderuser.isLonggedin  =  false;
 // console.log(tenderuser);

 // const regularUser = {
 // 	name:"kumar",
 // 	fullAdd:{
 // 		add:"patna",
 // 		vill:{
 // 			v:"patkhauliya",
 // 		}
 // 	}
 // }

 // console.log(regularUser)
 // console.log(regularUser.fullAdd)
 // console.log(regularUser.fullAdd.vill)
 // console.log(regularUser.fullAdd.vill.v);

const obj1 = {1:"api",2:"nexapi"};
const obj2 = {3:"newapi",4:"fullfun"};

// const obj3 = {obj1,obj2};
const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign( {},obj1,obj2); // best practic to combine mulitiple object in a single object
const objval = {...obj1,...obj2}; 
console.log(obj3);
console.log(objval);

console.log((obj3) == (objval))
console.log(typeof obj3)
console.log(typeof objval);

console.log(Object.keys(tenderuser))
console.log(Object.values(tenderuser))
console.log(Object.entries(tenderuser));
console.log(myobj.hasOwnProperty("fullname"))




