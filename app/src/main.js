import "./style.css";

//Use a fetch call to get the api, not copy and paste the api into your code
//btw this is the api, https://riskofrain2api.herokuapp.com/api/everyItem

const api = await fetch("https://riskofrain2api.herokuapp.com/api/everyItem");
//Below this line to the star is code that can console.log the api
// .then((response) => {
//   const apiurl = response.url;
// });
//*

//Turn api url into variable: (Priority Zero, Get this to work)
const apiurl = api.url;

//test:
console.log(apiurl);

//Run try catch function here: (Priority One, Use this as a guard to yourself)

//Attempting to print all the data:
const apidata = await api.json();
//Test:
console.log(apidata);

// console.log(api);

//Inject function and other schtuff
// function inject(item) {
//   const test = document.querySelector(".test");
//   test.insertAdjacentHTML(
//     "afterbegin",
//     `<div class="card" id="${item.itemName}">
//     <img class="itemimg" id="${item.itemName}img" src=${item.itemImage} alt="">
//     <h1 class="itemname">${item.itemName}</h1>
//     <h2 class="itemdescription">${item.description}</h2>
//     <h2 class="itemscaling">${item.stackType}</h2>
//     </div>`
//   );
// }

// apidata.forEach((item) => inject(item));

//The try and catch function
async function check() {
  try {
    const api = await fetch(
      "https://riskofrain2api.herokuapp.com/api/everyItem"
    );
    if (api.status != 200) {
      throw new Error(api);
    }
  } catch (error) {
    console.log(error.message);
  }
}

check();

//Attempt on what you want to do:
function inject(item) {
  const test = document.querySelector(".test");
  test.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${item.itemName} data-category=${item.color}>
    <button class="Buttontoitem">
    <img class="itemimg" id="${item.itemName}img" src=${item.itemImage}>
    </button>
    </div>`
  );
}

apidata.forEach((item) => inject(item));

//The image for Aurrlionite's Blessing is wrong, find a way to fix it(Or at least horribly fail trying to)
// function correctaurelionitesblessing() {
//   const wrongimglol = document.querySelector("#Aurelionite's Blessingimg");
//   if (wrongimglol) {
//     const rightimg =
//       "https://riskofrain2.wiki.gg/images/Aurelionite%27s_Blessing.png?501841";
//     const thediv = document.querySelector("#Aurelionite's Blessing");
//     wrongimglol.remove();
//     thediv.appendChild(rightimg);
//   } else {
//   }
// }

// correctaurelionitesblessing();

//Filtering THIS WASN'T REQUIRED BROOOOO
// function filter(btncategory) {
//   const cards = document.querySelectorAll(".card");
//   cards.forEach((card) => {
//     const cardCategory = card.getAttribute("data.category").toLowerCase();
//     if (cardCategory === btncategory || btncategory === "all") {
//       card.style.display = "";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }

// function filterButtons() {
//   const filterbuttons = document.querySelectorAll(".filter");
//   filterbuttons.forEach((button) => {
//     button.addEventListener("click", function (event) {
//       const buttoncategory = event.target.textContent.toLowerCase();
//       filter(buttoncategory);
//     });
//   });
// }

// filterButtons();

//Button Listener to try and pull up data:
function Getitemdata() {
  const Buttontoitem = document.querySelectorAll(".Buttontoitem");
  const ButtontoitemArray = Array.from(Buttontoitem);
  ButtontoitemArray.forEach((button) => {
    button.addEventListener("click", function (event) {
      const targetcard = button.closest(".itemimg");
      ButtontoitemArray.forEach((button) => {
        button.style.display = "none";
      });
      const test = document.querySelector(".test");
      test.insertAdjacentHTML(
        "afterbegin",
        `<img class="itemimg" src="${targetcard}">`
      );
    });
  });
}

Getitemdata();
