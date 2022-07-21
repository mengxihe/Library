
let myLibrary = [];

class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '0',
        read = false
    )
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


const addBookBtn = document.getElementById('add-book-btn');
const submit = document.getElementById('submit');
const booksGrid = document.getElementById('booksGrid');
const form = document.getElementById('form');
const closeFormBtn = document.getElementById('close-form');
const body = document.getElementById('wrapper');
const modal = document.getElementById('modal-overlay')
// form.style.display = 'none';


const getBookInput = () =>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    return new Book(title, author, pages, read);
}

const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookInput();
    myLibrary.push(newBook);
    updateBooksGrid();
    closeFormModal();
}

const updateBooksGrid = () => {
    resetBooksGrid();
    for (let book of myLibrary) {
        createBookCard(book)
    }
}

const resetBooksGrid = () => {
    booksGrid.innerHTML = '';
}

const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const btnGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    title.textContent = `"${book.title}"`;
    author.textContent =book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent ='Remove';
    
    readBtn.onclick = toggleRead;
    removeBtn.onclick = toggleRemove;
    readBtn.classList.add('formBtn')
    removeBtn.classList.add('formBtn')
    removeBtn.classList.add('glow-on-hover')

    if (book.read) {
        readBtn.textContent = 'Read';
        readBtn.classList.add('btn-light-green')
    } else {
        readBtn.textContent = 'Not Read';
        readBtn.classList.add('btn-light-red')
    }
    bookCard.classList.add('card')
    btnGroup.classList.add('cardBtnGroup')
    btnGroup.appendChild(readBtn);
    btnGroup.appendChild(removeBtn);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(btnGroup);
    booksGrid.appendChild(bookCard);

}

const addFormModal = (e) => {
    form.reset();
    modal.style.display = 'block';
    e.stopPropagation();
}

const closeFormModal = () => {
    modal.style.display = 'none';
    console.log('hi')
}

const toggleRead = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    )
    currentBook = getBook(myLibrary, title);
    currentBook.read = !currentBook.read
    updateBooksGrid();
}

const toggleRemove = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    )
    removeBook(myLibrary, title)
    updateBooksGrid();
}

const addBookToLib = (library, title) => {
    library.push(title);
}

const getBook = (library, title) => {
    return library.find((book) => book.title === title);
}

const removeBook = (library, title) =>{
    myLibrary = library.filter((book) => book.title !== title);
}

const ignore = (e) => {
    let isIn = modal.contains(e.target);
    // console.log(e.target)
    if (!isIn) {
        closeFormModal();
    }
}

console.log('test');
closeFormBtn.onclick = closeFormModal;

body.addEventListener('click', ignore);
addBookBtn.onclick = addFormModal;
form.onsubmit = addBook;