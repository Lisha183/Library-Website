document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get("id")); // Convert to number

    let books = [
        { id: 1, title: "LORE", author: "Alexandra Bracken", details: "A gripping fantasy novel about Greek mythology and survival." },
        { id: 2, title: "Red Queen", author: "Victoria Aveyard", details: "A dystopian fantasy about a world divided by blood." },
        { id: 3, title: "Cruel Prince", author: "Holly Black", details: "A tale of intrigue and betrayal in the faerie world." }
    ];

    let book = books.find(b => b.id === bookId); // Find book

    if (book) {
        document.getElementById("bookTitle").innerText = book.title;
        document.getElementById("bookAuthor").innerText = `By ${book.author}`;
       

        // Scroll to the specific book section
        let bookSection = document.getElementById(`book-${bookId}`);
        if (bookSection) {
            setTimeout(() => {
                bookSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 500);
        }
    } else {
        document.getElementById("bookTitle").innerText = "Book not found";
        document.getElementById("bookAuthor").innerText = "";
      
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("id");

    let books = {
        1: { title: "LORE", author: "Alexandra Bracken" },
        2: { title: "Red Queen", author: "Victoria Aveyard" },
        3: { title: "Cruel Prince", author: "Holly Black" },
        4: { title: "Queen of Air and Darkness", author: "Cassandra Clare" },
        5: { title: "Shadow Me", author: "Tahereh Mafi" },
        6: { title: "Amid Cloud and Bones", author: "Ella Fields" }
    };

    let book = books[bookId];

    if (book) {
        document.getElementById("bookTitle").textContent = book.title;
        document.getElementById("bookAuthor").textContent = book.author;
    } else {
        document.getElementById("bookTitle").textContent = "Book not found";
        document.getElementById("bookAuthor").textContent = "";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("id");
    
    if (bookId) {
        let targetCard = document.getElementById(`book-${bookId}`);
        if (targetCard) {
            setTimeout(() => {
                targetCard.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 500);
        }
    }
});
 
 function requestBook(button) {
    button.textContent = "Book Requested";
    button.classList.remove("btn-request-book");
    button.classList.add("btn-book-requested");
    button.disabled = true;
  }
  // ... (Your existing JavaScript code) ...

searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    let query = searchInput.value.trim().toLowerCase();

    // Find the book by ID or title
    let foundBook = books.find(book => {
        const bookId = parseInt(query);
        return (bookId && book.id === bookId) || book.title.toLowerCase().includes(query);
    });

    if (foundBook) {
        // Redirect to details.html with the book ID
        window.location.href = `details.html?id=${foundBook.id}#book-${foundBook.id}`;
    } else {
        alert("Book not found!");
    }
});

// ... (Rest of your JavaScript code) ...


