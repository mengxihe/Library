
let myLibrary = [];

class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '0',
        read = false
    )
    {
        this.title = title
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


const getBookInput = () =>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    return new Book(title, author, pages, read)
}

const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookInput()
    myLibrary.push(newBook)
}

const submit = document.getElementById('submit');
submit.onclick = addBook;

console.log(myLibrary)