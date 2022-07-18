
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
// const modalOverlay = document.getElementById('form');

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

    title.textContent = `'${book.title}'`;
    author.textContent =`'${book.author}'`;
    pages.textContent = `'${book.pages}'`;
    removeBtn.textContent ='Remove';
    
    if (book.read) {
        readBtn.textContent = 'Read';
    } else {
        readBtn.textContent = 'Not Read';
    }

    btnGroup.appendChild(readBtn);
    btnGroup.appendChild(removeBtn);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(btnGroup);
    booksGrid.appendChild(bookCard);

}

const addFormModal = () => {
    form.style.display = 'block';
}


const closeFormModal = () => {
    form.style.display = 'none';
}

addBookBtn.onclick = addFormModal;
submit.onclick = addBook;

