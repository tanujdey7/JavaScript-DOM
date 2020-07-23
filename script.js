// //EXAMINE THE DOCUMENT OBJECT  //

// // console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Good Bye';

/*
 * textContent pays attention to the styling
 * innerText does not pay attention to the styling
 */

//  headerTitle.innerHTML = '<h3> Hello </h3>';
// header.style.borderBottom = 'solid 3px black';

// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].textContent = 'banana';
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'pink';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTBYTAGNAME //

// var li = document.getElementsByTagName("li");
// console.log(items);
// li[2].textContent = 'banana';
// li[2].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'pink';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #000";

// var input = document.querySelector("input");
// input.value = "hello";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "pink";

// QUERYSELECTORALL //

// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = 'pink';
// }

// -> Traversing the DOM //

// var itemList = document.querySelector('#items');

// parentNode //

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#ccc';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement //

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#ccc';
// console.log(itemList.parentElement.parentElement);

// childNodes //

// console.log(itemList.childNodes);

// children //
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
// console.log(itemList.firstChild);

//FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello1';

//LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello4';

//nextSibling & previousSibling are useless

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);

// create element

// create div
// var newDiv = document.createElement('div');
// // Add class
// newDiv.className = 'hello';
// // Add id
// newDiv.id = 'hello1';
// // Add attribute
// newDiv.setAttribute('title','hello');
// //Create text node
// var newDivText = document.createTextNode('Hello World');
// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);



// -> EVENTS //
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = 'pink';
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';
    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);

// }

var button = document.getElementById('button');
var box = document.getElementById('box');
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);   // for inner elements
// box.addEventListener('mouseout',runEvent);    //for inner elements

// box.addEventListener('mousemove',runEvent);
function runEvent(e) {
    console.log('Event Type '+e.type);
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    // output.innerHTML = '<h3> MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3><br>';
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}