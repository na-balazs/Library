let myLibrary = [];
let parseBook = [];
let exa = "";

function book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

//for testing purposes
const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const Book1 = new book("Never have I ever", "Seom Them", 1789, "not read yet");
const Book2 = new book("3 days around the world", "Thomas Franklin", 365, "read");

//Generating books for testing purposes
/* myLibrary.push(theHobbit);
myLibrary.push(Book1);
myLibrary.push(Book2);
console.log(myLibrary); */

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
  //for (let i=0; i<book.length; i++) {
      let div = document.createElement('div');
      div.innerHTML += '<span class="close" onclick="removeCard(this.id)">&times;</span>'
      Object.values(book/*[i]*/).forEach(function(val) {
        div.innerHTML += val + '<br />';
      });
      div.classList.toggle("inner-cards");
      div.setAttribute("id", myLibrary.length);
      div.childNodes[0].setAttribute("id", myLibrary.length);
      container.appendChild(div);
  }
//}


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

/* document.getElementById("newBook").addEventListener("click", () => {
  createCard(myLibrary);
}); */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("newBook");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function addBook() {
  let xAuthor = document.getElementById("author").value;
  let xTitle = document.getElementById("title").value;
  let xPages = document.getElementById("pages").value;
  let xCheckbox = document.querySelector("#read").checked;
  console.log(xCheckbox);
  
  if (xCheckbox) {
    console.log(xCheckbox);
    xCheckbox = "Read";
  } else {
    console.log(xCheckbox);
    xCheckbox = "Not read yet";
  }

  parseBook = new book(xAuthor, xTitle, xPages, xCheckbox);
  console.log(parseBook);
  myLibrary.push(parseBook);
}

document.getElementById("save").addEventListener("click", () => {
  addBook();
  createCard(parseBook);
  modal.style.display = "none";
})

document.getElementById("read").addEventListener("click", () =>{
exa = document.querySelector("#read").checked;
//console.log(exa);
})

function removeCard(val) {
  let cardToBeRemoved = document.getElementById(val)
  cardToBeRemoved.remove();
}