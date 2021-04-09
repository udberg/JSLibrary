let library = [];
let list = document.getElementById('library-list');
let libForm = document.querySelector('.lib-form');
let addBtn = document.querySelector('.add-btn');
let subBtn = document.querySelector('.subBtn')

function Book(author,title,pages,read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}

list.addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        pages = document.getElementById('pages').value,
        read = document.getElementById('read').value

  // Instantiate book
  const book = new Book(title, author, pages, read);
});
