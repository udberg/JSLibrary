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

button.addEventListener('click', function() {
    container.classList.contains('invisible') ? container.classList.remove('invisible') 
    : container.classList.add('invisible');
    });

form.addEventListener('submit', function() {


  // Get form values
  const author = document.querySelector('.author').value,
    title = document.querySelector('.title').value,
    pages = document.querySelector('.pages').value,
    read = document.querySelector('#read');
  let data;

  //Checkbox validation
  read.checked ? data = read.value = 'YES' : data = read.value = 'NO';

  //Object Instantiation
  const book = new Book(author, title, pages, data);

  library.push(book);
 
  addBookToLibrary(library);

});


  function addBookToLibrary(input) {
  // Create tr element
    const row = document.createElement('tr');
 
  
Object.values(input).forEach((book) => {

  row.innerHTML= `
    <td> ${book.author} </td>
    <td> ${book.title} </td>
    <td> ${book.pages} </td>
    <td> ${book.read} </td>
    <td><a href="#" class="delete">X<a></td>'`;

    list.appendChild(row);

  });
}
