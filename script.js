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

console.log(myLibrary);