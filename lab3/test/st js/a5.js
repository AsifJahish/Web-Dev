// Hoisting

console.log(z); // undefined
var z = 2;

console.log(sum(2, 4)); // 6

function sum(a, b){
    return a + b;
}

let i = 0;
function show(){
    console.log(i++);
}
setTimeout(show, 4000);

function f1(callback){
    setTimeout(function(){
        console.log('f1 function');
        callback();
    }, 2000);
}

function f2(){
    console.log('f2 function');
}

f1(f2);

let a = {
    id: '123',
    num: [1, 2, 'hello'],
    b: true
};

let s = JSON.stringify(a);
let b = JSON.parse(s);

console.log(typeof s); // string
console.log(b);

a = undefined;

let p = a && a['id'];
console.log(p); // undefined

function User(name) {
    this.name = name;
    this.isAdmin = false;
}
  
let user = new User("Jack");
  
console.log(user.name); // Jack
console.log(user.isAdmin); // false

let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.pop()); // Pear
console.log(fruits); // Apple, Orange

fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log(fruits); // Apple, Orange, Pear

let arr = [1, 2];
console.log(arr.concat([3, 4])); // 1, 2, 3, 4
console.log(arr.concat([3, 4], [5, 6])); // 1, 2, 3, 4, 5, 6
console.log(arr.concat([3, 4], 5, 6)); // 1, 2, 3, 4, 5, 6

arr = [1, 0, false];
console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1
console.log(arr.includes(1)); // true

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

user = users.find(item => item.id == 1);
console.log(user.name); // John
