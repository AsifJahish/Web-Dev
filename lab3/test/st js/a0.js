
let a = document.querySelector('.box');
//console.log(a);
a.innerHTML = "hello message"; 
a.style.color = 'red';
a.style.fontSize = '25px';
a.style.fontWeight = 'bold';

let btn = document.querySelector('#btn');
btn.style.backround = "yellow";
btn.style.fontSize = "20px";
btn.style.border = "solid 3px green";
btn.style.borderRadius = "15px";
btn.style.padding = "10px 40px";
console.log(btn.getAttribute('data-id'));
btn.setAttribute('data-id', 111);
console.clear(btn.offsetLeft);
console.clear(btn.offsetTop);


let text = document.createElement('h3');
text.innerHTML = "new created h3 from JS"; 

let container = document.querySelector('.container');
container.appendChild(text);



let i = 0;
function show(){
    console.log(i++);
}
// btn.onclick = show;
// btn.addEventListener('click', show);
btn.addEventListener('click', function(){
    alert('asd');
});