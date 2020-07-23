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

