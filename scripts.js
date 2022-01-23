let myLibrary = [];
let lineBreak = '\n';

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

//for testing purposes
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const Book1 = new Book("Never have I ever", "Seom Them", 1789, "not read yet");
const Book2 = new Book("3 days around the world", "Thomas Franklin", 365, "read");

//Generating books for testing purposes
myLibrary.push(theHobbit);
myLibrary.push(Book1);
myLibrary.push(Book2);
console.log(myLibrary);

const container = document.querySelector('#cards');
const div = document.createElement('div');
container.appendChild(div);

/* function createCard(book) {
  let mainDiv = document.createElement('div');
  for (let i=0; i<book.length; i++) {
      let div = document.createElement('div');
      Object.values(book[i]).forEach(val => div.textContent += val);
      div.classList.toggle("inner-cards");
      // mainDiv.setAttribute("id", "Ide találjak ki majd vmi spéci algoritmust");
      mainDiv.appendChild(div);
  }
  container.appendChild(mainDiv);
} */

function createCard(book) {
  for (let i=0; i<book.length; i++) {
      let div = document.createElement('div');
      Object.values(book[i]).forEach(function(val) {
        div.innerHTML += val + '<br />';
      });
      div.classList.toggle("inner-cards");
      // mainDiv.setAttribute("id", "Ide találjak ki majd vmi spéci algoritmust");
      container.appendChild(div);
  }
}

/* function toggleCardStyle() {
  let element = document.querySelector(".inner-cards");
  element.classList.toggle("inner-cards");
} */

//Trying out some stuff before deciding on the proper formula.
/* function createCard2(book) {
  let bacy = [];
  for (let i=0; i<book.length; i++) {
    Object.values(book).forEach(val => bacy.push(val));
  }
  console.log(bacy);
} */

document.getElementById("newBook").addEventListener("click", () => {
  createCard(myLibrary);
});