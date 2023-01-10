// checking if local storage is empty than add an empty array
if (localStorage.getItem('Added Books') === null) {
  localStorage.setItem('Added Books', JSON.stringify([]));
}
// store data into local storage
const storeData = JSON.parse(localStorage.getItem('Added Books'));

function updateData() {
  localStorage.setItem('Added Books', JSON.stringify(storeData));
}

function createBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    books += `
            <p>${arr[i].title}</p>
            <p>${arr[i].author}</p>
            <button onclick="removeBook(${i})">Remove</button>
            <hr/>
            `;
  }
  return books;
}
// Diplaying data to the UI from local storage
function displayBooks() {
  const listOfBooks = document.querySelector('.container');
  listOfBooks.innerHTML = `
              <ul class="book-ul"/>
              ${createBooks(storeData)}</ul>
          `;
}
