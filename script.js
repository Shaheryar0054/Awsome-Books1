const formData = document.querySelector('.form');
const data = document.querySelector('.data');

function addNewBookData() {
  const bookTitle = formData.title.value;
  const bookAuthor = formData.author.value;

  const book = {
    title: bookTitle,
    author: bookAuthor,
  };

  return book;
}
// store Books data in Local storage
function storeBooks(book) {
  let books = [];

  if (localStorage.getItem('Books')) {
    books = JSON.parse(localStorage.getItem('Books'));
  }

  books.push(book);
  localStorage.setItem('Books', JSON.stringify(books));
}
// Adding Books data or retrieving data from local storage
function addBook(element) {
  element.preventDefault();
  storeBooks(addNewBookData());
  formData.submit();
}
// Displaying Books Data on the users Screen
function displayBooks() {
  if (localStorage.getItem('Books')) {
    const books = JSON.parse(localStorage.getItem('Books'));
    books.forEach((book) => {
      const booksHtml = `
        <div class="book-info">
          <p class="title">${book.author}</p>
          <p class="author">${book.title}</p>
         <button class="remove-btn">Remove</button>
         <hr>
          
        </div>
      `;
      data.innerHTML += booksHtml;
    });
  }
}
displayBooks();
