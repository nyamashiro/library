const container = document.querySelector(".container")
const bookCard = document.querySelector(".books-container");
const dialog = document.querySelector(".dialog");
const showButton = document.querySelector(".add-book");
const closeButton = document.querySelector(".close-form");
const submitButton = document.querySelector(".submit");
const form = document.querySelector("form")

const myLibrary = [];

function Book(title, author, pages, have_read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.have_read = have_read;
}

function addBookToLibrary(title, author, pages, have_read) {
  const book = new Book(title, author, pages, have_read)
  myLibrary.push(book)
}

function displayBook() {
  bookCard.innerHTML = "";
  for (let book of myLibrary) {
    let card = document.createElement("div")
    card.classList.add("book")
    bookCard.appendChild(card)
    for (let key in book) {
      let newBook = document.createElement("div")
      newBook.classList.add(`${key}`)
      newBook.textContent = `${key}: ${book[key]}`
      card.appendChild(newBook)
    }
  }
}

showButton.addEventListener("click", () => {
  dialog.showModal();
})

closeButton.addEventListener("click", () => {
  dialog.close();
})

submitButton.addEventListener("click", () => {
  let newBookArray = [];
  const newBookItem = document.querySelectorAll("input")
  newBookItem.forEach(item => {
    if (item.type === "checkbox") {
      let haveRead = item.checked;
      newBookArray.push(haveRead)
    } else {
      let bookValue = item.value;
      newBookArray.push(bookValue)
    }
  })
  form.reset();
  addBookToLibrary(...newBookArray);
  displayBook();
})