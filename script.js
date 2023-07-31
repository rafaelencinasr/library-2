console.log("hello");

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.sayTitle = function(){
    return "This book is called: " + this.title;
}

const Book1 = new Book("Test title", "Test Author LastName", 56, true);
const Book2 = new Book("LOTR 1", "J. R. R. Tolkien", 654, true);


let myLibrary = [];

function addBookToLibrary(Book){

    myLibrary.push(Book);
}

addBookToLibrary(Book1);
addBookToLibrary(Book2);


const saveBookBtn = document.querySelector("#saveBook");

saveBookBtn.addEventListener("click", saveBookClick, false);

function saveBookClick(event){

    //Get book information from form
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read");
    
    addBookToLibrary(new Book(title, author, pages, read))
    event.preventDefault();
    console.log("Book saved!")
    console.log(myLibrary);
}