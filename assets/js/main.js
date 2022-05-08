// let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
// let hexParts = [];
// /* console.log(arr[Math.floor(Math.random()* arr.length)]); */

// for (let i = 0; i < 6; i++) {
//     hexParts.push(arr[Math.floor(Math.random()* arr.length)]);
    
// }

// let hexcolor = `#${hexParts.join("")}`;

// console.log(hexcolor);
// /* document.body.style.backgroundColor=hexcolor; */

let changer = document.getElementById("changer");
changer.onclick = function(){
    let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let hexParts = [];
/* console.log(arr[Math.floor(Math.random()* arr.length)]); */

for (let i = 0; i < 6; i++) {
    hexParts.push(arr[Math.floor(Math.random()* arr.length)]);
    
}

let hexcolor = `#${hexParts.join("")}`;


document.body.style.backgroundColor=hexcolor;



}




