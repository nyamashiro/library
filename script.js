const bookCard = document.querySelector(".books-container");

const myLibrary = [{title: "harry potter", author: "JKR", pages: 100, have_read: true}, {title: "anna and her broccoli", author: "bella", pages: 200, have_read: false}];

function Book(title, author, pages, have_read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.have_read = have_read;
}

function addBookToLibrary(title, author, pages, have_read) {

  const book = new Book(title, author, pages, have_read)

  myLibrary.push(book)
  console.log(myLibrary)
}

function displayBook() {
  for (book of myLibrary) {
    for (key in book) {
      console.log("WILL IT WORK?", book[key])
    }
  }
}

for (book of myLibrary) {
  let card = document.createElement("div")
  card.classList.add("book")
  bookCard.appendChild(card)
  for (key in book) {
    let newBook = document.createElement("div")
    newBook.classList.add(`${key}`)
    newBook.textContent = `${book[key]}`
    card.appendChild(newBook)
  }
}