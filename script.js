const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
var cat = {
  complain: function () {
    console.log("Meow!");
  },
};

console.log(cat.complain());

// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");

// with the forEach method
paragraphs.forEach((paragraph) => (paragraph.style.color = "red"));

// with a for loop
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function printCats(list) {
  // list.forEach((cat) => console.log(cat.name));

  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

printCats(cats);

// Question 8
function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let name = cats[i].name;
    let age = "Age unknown";

    if (cats[i].age) {
      age = cats[i].age;
    }

    html += `<div>
                <h5>${name}</h5>
                <p>${age}</p>
            </div>`;
  }

  return html;
}

let newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
