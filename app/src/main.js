import "./style.css";

//Use a fetch call to get the api, not copy and paste the api into your code
//btw this is the api, https://riskofrain2api.herokuapp.com/api/everyItem

const api = await fetch(
  "https://riskofrain2api.herokuapp.com/api/everyItem"
).then((response) => {
  console.log(response);
});

// console.log(api);

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
