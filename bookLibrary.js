const myLibrary = [{title:"Harry Potter", author:"J. K. Rowling", pages: 500, read: "on"}, {title:"The Hobbit", author: "J. R.R. Tolkien", pages: 310, read: "on"}];

const newBook = document.querySelector(".newBook");
const showBooks = document.querySelector(".showBooks");
const myDialog = document.getElementById("dialog");
const myForm = document.querySelector(".myForm");
const titleInput = document.querySelector("#titleIn");
const authorInput = document.querySelector("#authorIn");
const pagesInput = document.querySelector("#pagesIn");
const read = document.querySelector("#readChk");
const addButton = document.querySelector("dialog button");
const booksDisplay = document.querySelector(".displayCards");

newBook.addEventListener("click", showForm);

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let formdata = new FormData(myForm);
    let nextBook = {title:"", author:"", pages: 0, read: true};
    nextBook.title = formdata.get("title");
    nextBook.author = formdata.get("author");
    nextBook.pages = formdata.get("pages");
    nextBook.read = formdata.get("read");
    myLibrary.push(nextBook);
    myDialog.style.display = "none";
})

showBooks.addEventListener("click", function() {
    displayBooks(myLibrary);
});

function showForm() {
    if (myDialog.style.display === "none") {
        myDialog.style.display = "block";
    } else {
        myDialog.style.display = "none";
    }
}

function displayBooks(arr) {
    booksDisplay.replaceChildren();
    for (let x = 0; x < arr.length; x++) {
        console.log(arr[x]["title"]);
        let newDiv = document.createElement("div");
        newDiv.classList.add("bookCard");
        let newTitleHeading = document.createElement("h2"); 
        newTitleHeading.innerHTML = arr[x]["title"];
        let newAuthorPar = document.createElement("p");
        newAuthorPar.innerHTML = arr[x]["author"];
        let newPagesPar = document.createElement("p");
        newPagesPar.innerHTML = arr[x]["pages"];
        let newReadPar = document.createElement("p");
        if (arr[x]["read"] === "on") {
            newReadPar.innerHTML= "Yes";
        } else {
            newReadPar.innerHTML = "No";
        }
        newDiv.appendChild(newTitleHeading);
        newDiv.appendChild(newAuthorPar);
        newDiv.appendChild(newPagesPar);
        newDiv.appendChild(newReadPar);
        booksDisplay.appendChild(newDiv);
        }
        
}

