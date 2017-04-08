console.log('Start ES6');
console.log('--Constants');
const pi = 3.14;

if (pi == 3.14) {
	const pi = 5;
	console.log(pi);
}
console.log(pi);

console.log('--Let');
var a = "ariel";
if (a == "ariel") {
	let a = "triana";
	console.log(a);
}
console.log(a);

console.log('--DefaulParameter');
function Add (prod = "Laptop",cost=450) {
	console.log('The produc is a '+ prod + 
		' and your price is '+cost);
}
Add();
Add("Tv",600);

console.log('--Spread Operator');
var prod = ["Blender",85];
function Add (prod,cost) {
	console.log('The produc is a '+ prod + 
		' and your price is '+cost);
}
Add(...prod);

console.log('--Template Strings');
function Temp (job,salary) {
	console.log(`My job is ${job} and my 
		salary is ${salary}`);
}
Temp("teacher",50000);

console.log('--Object Literal');
var name = "Larisa";
var edad = 25;
var obj = {
	//name:name,
	name,
	//edad:edad,
	edad,
	//region:function () {return "cuban"}
	region(){return "cuban"}
	};
console.log(`Your name is ${obj.name} and
 I am ${obj.edad}, I am from ${obj.region()}`);

console.log('--New String Methods');
var str = "Goool ";
console.log(str.repeat(3));
var str = "Tomorrow I am going swing at the beach";
console.log(str.includes("beach"));