const bookCard = document.querySelector(".books-container");
const dialog = document.querySelector(".dialog");
const showButton = document.querySelector(".add-book");
const closeButton = document.querySelector(".close-form")

const myLibrary = [{ title: "lil nao and his journey", author: "JAJU", pages: 100, have_read: true }, { title: "anna and her broccoli", author: "bella", pages: 200, have_read: false }, { title: "the epic downfall of white chocolate", author: "shiver and frye", pages: 333, have_read: true }];

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
  for (book of myLibrary) {
    let card = document.createElement("div")
    card.classList.add("book")
    bookCard.appendChild(card)
    for (key in book) {
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

displayBook();