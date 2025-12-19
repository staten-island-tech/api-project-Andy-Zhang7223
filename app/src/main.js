import "./style.css";

//Use a fetch call to get the api, not copy and paste the api into your code
//btw this is the api, https://riskofrain2api.herokuapp.com/api/everyItem

const api = await fetch(
  "https://riskofrain2api.herokuapp.com/api/everyItem"
)
//Below this line to the star is code that can console.log the api
// .then((response) => {
//   const apiurl = response.url;
// });
//*

//Turn api url into variable: (Priority Zero, Get this to work)
const apiurl = api.url

//test:
console.log(apiurl);

//Run try catch function here: (Priority One, Use this as a guard to yourself)

// console.log(api);

//Inject function and other schtuff
// function inject(item) {
//   const test = document.querySelector(".test");
//   test.insertAdjacentHTML(
//     "afterbegin",
//     `<div class="card">
//     <img src=${item.itemImage} alt="">
//     </div>`
//   );
// }

// api.forEach((item) => inject(item));
