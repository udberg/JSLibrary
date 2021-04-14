const library = [];
const list = document.querySelector('.library-list');
const form = document.querySelector('.form');
const button = document.querySelector('.button');
const container = document.querySelector('.form-container');

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

button.addEventListener('click', () => {
  if (container.classList.contains('invisible')) {
    container.classList.remove('invisible');
  } else {
    container.classList.add('invisible');
  }
});

function addBookToLibrary(input) {
  // Create tr element
  const row = document.createElement('tr');


  Object.values(input).forEach((book) => {
    row.innerHTML = `
    <td> ${book.author} </td>
    <td> ${book.title} </td>
    <td> ${book.pages} </td>
    <td> ${book.read} </td>
    <td><a href="#" class="delete">X<a></td>'`;

    list.appendChild(row);

    document.querySelector('.delete').addEventListener('click', (e) => {
      if (e.target.className === 'delete') {
        e.target.parentElement.parentElement.remove();
      }
    });
  });
}


form.addEventListener('submit', () => {
  // Get form values
  const author = document.querySelector('.author').value;
  const title = document.querySelector('.title').value;
  const pages = document.querySelector('.pages').value;
  const read = document.querySelector('#read');
  let data;

  // Checkbox validation
  if (read.checked) {
    data = 'YES';
  } else {
    data = 'NO';
  }

  // Object Instantiation
  const book = new Book(author, title, pages, data);

  library.push(book);

  addBookToLibrary(library);
});
