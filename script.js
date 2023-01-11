/* eslint-disable*/
const data = document.querySelector('#data');

// Book class: Represent a book
class Book {
  constructor(title, authore) {
    this.title = title;
    this.authore = authore;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#data');

    const div = document.createElement('div');
    div.className = 'data-container';

    div.innerHTML = `
        <p>"${book.title}"</p>
        <p>by</p>
        <p>${book.authore}</p>
        <div><button id="remove-btn" class='delete'>Remove</button></div>
     `;

    list.appendChild(div);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// store data in local storage
class store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(authore) {
    const books = store.getBooks();
    books.forEach((book, index) => {
      if (book.authore === authore) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}
