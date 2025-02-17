const container = document.querySelector(".container")
const bookCard = document.querySelector(".books-container");
const dialog = document.querySelector(".dialog");
const showButton = document.querySelector(".add-book");
const closeButton = document.querySelector(".close-form");
const submitButton = document.querySelector(".submit");
const form = document.querySelector("form")

const myLibrary = [];

class Book {
  constructor (title, author, pages, have_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_read = have_read;
  }

  toggleReadStatus() {
    if (this.have_read === true) {
      this.have_read = false
    } else {
      this.have_read = true;
    }
    displayBook();
  }
}

// function Book(title, author, pages, have_read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.have_read = have_read;
// }

// Book.prototype.toggleReadStatus = function () {
//   if (this.have_read === true) {
//     this.have_read = false
//   } else {
//     this.have_read = true;
//   }

//   displayBook();
// }

//bookCard is the currentTarget since it is the element that the event listener is actually attached to
//event.target is the element the user actually clicks on
bookCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-button")) {
    //look for the closest parent element with the class of ".book"
    const selectedBook = e.target.closest(".book")

    const bookKey = selectedBook.dataset.id
    myLibrary.splice(bookKey, 1)
    displayBook();
  }
})

bookCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("read-button")) {
    const selectedBook = e.target.closest(".book")

    const bookKey = selectedBook.dataset.id
    myLibrary[bookKey].toggleReadStatus();
  }
})

function addBookToLibrary(title, author, pages, have_read) {
  const book = new Book(title, author, pages, have_read)
  myLibrary.push(book)
}

function displayBook() {
  bookCard.innerHTML = "";
  for (let [index, book] of myLibrary.entries()) {
    let card = document.createElement("div");
    card.classList.add("book");
    card.dataset.id = index;
    bookCard.appendChild(card)
    for (let key in book) {
      if (book.hasOwnProperty(key)) {
        if (key === "have_read" && book[key] === true) {
          let newBook = document.createElement("div");
          newBook.classList.add(`${key}`);
          newBook.textContent = `Read`;
          card.appendChild(newBook);
        } else if (key === "have_read" && book[key] === false) {
          let newBook = document.createElement("div");
          newBook.classList.add(`${key}`);
          newBook.textContent = `Not read`;
          card.appendChild(newBook);
        } else {
          let newBook = document.createElement("div");
          let newBookVal = document.createElement("span")
          newBook.classList.add(`${key}`);
          newBook.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: `;
          newBookVal.textContent = `${book[key]}`
          card.appendChild(newBook);
          newBook.appendChild(newBookVal)
        }
      }
    }
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    card.appendChild(buttonContainer);

    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    buttonContainer.appendChild(removeButton);

    let readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = "Change Read Status";
    buttonContainer.appendChild(readButton);
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

displayBook()