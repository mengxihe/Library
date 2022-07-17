const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const form = document.querySelector('#form');
form.addEventListener('submit', addBookToLibrary);

const addBookBtn = document.querySelector('.add-book-btn');
const modelOverlay = document.querySelector('.model-overlay')
addBookBtn.addEventListener('click', function(){
    modelOverlay.classList.add('overlay-active');
});

let myLibrary = [];

function Book(title, author, pages, read) {
    //the constructor..
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary () {
    // do stuff here
    const newBook = new Book(title.value, author.value, pages.value, isRead.value);
    myLibrary.push(newBook)
}

