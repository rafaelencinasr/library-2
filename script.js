
//Book object constructor
function Book(title, bookCoverUrl, author, pages, read){
    this.title = title
    this.bookCoverUrl = bookCoverUrl
    this.author = author
    this.pages = pages
    this.read = read
}

//Test method
Book.prototype.sayTitle = function(){
    return "This book is called: " + this.title;
}

//Test books
const Book1 = new Book("Test title","","Test Author LastName", 56, true);
const Book2 = new Book("LOTR 1","https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif", "J. R. R. Tolkien", 654, true);
const Book3 = new Book("LOTR 2","https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif", "J. R. R. Tolkien", 555, false);
const Book4 = new Book("LOTR 3","https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif","J. R. R. Tolkien", 444, true);

//Library array
let myLibrary = [];

//Add books to the library array
function addBookToLibrary(Book){

    myLibrary.unshift(Book);
}

//Add test books to library
addBookToLibrary(Book1);
addBookToLibrary(Book2);
addBookToLibrary(Book3);
addBookToLibrary(Book4);


const saveBookBtn = document.querySelector("#saveBook");
const bookFormLocation = document.querySelector("#bookForm");


saveBookBtn.addEventListener("click", saveBookClick, false);

function saveBookClick(event){

    //Get book information from form values
    let title = document.querySelector("#title").value;
    let bookCoverUrl = document.querySelector("#bookCover").value
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    // If the title, author, or number of pages are not empty, then
    // create a book and add it to the library
    if(title!=""&&(author!=""&&pages>0)){
        //Clear library element to prevent duplication
        library.innerHTML = '';

        //Creates a book and instantly adds it to the library array "myLibrary"
        addBookToLibrary(new Book(title, bookCoverUrl, author, pages, read));
        console.log("Book saved!");

        //Clears form data inputs for next entry
        bookFormLocation.reset();

        //Prevents form calls
        event.preventDefault();

        //Calls a function to create the HTML elements and display the saved Books to the user 
        renderLibrary();

    } else{
        //If any information is missing, display an error.
        alert("Some information is missing, please make sure the Book Title, Author, and Number of pages inputs are filled out")
    }
    event.preventDefault();
}

const library = document.querySelector("#library");
function renderLibrary(){
    //The index for each elemento of the array is saved
    //in the "data-index" attribute
    myLibrary.forEach((element, index) =>
        
    library.innerHTML += `
        <div class="book">
            <p class="deleteBook" data-index="${index}" title="Delete Book">X</p>
            <h3 class="title">"${element.title}"</h3>
            <div class="coverArt">
                ${element.bookCoverUrl=="" ? "No cover art" : `<img src="${element.bookCoverUrl}" alt="" srcset="">   `}   
            </div>
            <p class="author">By: ${element.author}</p>
            <p class="pages">${element.pages} pages</p>
            <p class="readStatus">${element.read ? "Read":"Not read yet"}</p>
        </div>`
    )
    //Adds the delete functionality to the X button (at the top of each book)
    //This function needs to be called each time the library is rendered because
    //new "books" would be missing from the originally created node list
    addDeleteFunction();
}

//Initial rendering of the previously saved books
renderLibrary();

function addDeleteFunction(){
    //Creates a node list with all the elements which have the "deleteBook" class
    const deleteBook = document.querySelectorAll(".deleteBook");

    //Adds an event listener to each button with the forEach() function 
    deleteBook.forEach(deleteBtn =>{
        deleteBtn.addEventListener("click", ()=>{
            
            //Gets the element index from the data-index attribute
            let elementIndex = deleteBtn.dataset.index;

            //Deletes the element from the array
            myLibrary.splice(elementIndex,1)

            //Clear library element to prevent duplication
            library.innerHTML = '';

            //Re-render the library element
            renderLibrary();
        }) 
    })
}