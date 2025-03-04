
//     document.addEventListener("DOMContentLoaded", function () {
//          let searchInput = document.getElementById("searchInput");
//          suggestionsList = document.getElementById("suggestionsList");
    
//          let books = [
//              { id: 1, title: "Lore", author: "Alexandra Bracken" },
//              { id: 2, title: "Red Queen", author: "Victoria Aveyard" },
//              { id: 3, title: "Cruel Prince", author: "Holly Black" },
//              { id: 4, title: "Queen of Air and Darkness", author: "Cassandra Clare" },
//              { id: 5, title: "Shadow Me", author: "Tahereh Mafi" },
//             { id: 6, title: "Amid Cloud and Bones", author: "Ella Fields" }
//         ];
    
//          // Search function
//          searchInput.addEventListener("input", function () {
//             let query = searchInput.value.trim().toLowerCase();
//              suggestionsList.innerHTML = ""; // Clear old suggestions
    
//              if (query) {
//                  let filteredBooks = books.filter(book =>
//                      book.title.toLowerCase().includes(query) ||
//                       book.author.toLowerCase().includes(query)
//                 );
    
//                  if (filteredBooks.length === 0) {
//                      suggestionsList.innerHTML = "<li>No books found</li>";
//                  } else {
//                       filteredBooks.forEach(book => {
//                          let li = document.createElement("li");
//                          li.textContent = `${book.title} - ${book.author}`;
//                          li.classList.add("suggestion-item");
//                          li.setAttribute("data-id", book.id);
    
//                          // Click to redirect to specific book card in details.html
//                          li.addEventListener("click", function () {
//                              window.location.href = `details.html?id=${book.id}#book-${book.id}`;
//                           });
    
//                           suggestionsList.appendChild(li);
//                      });
//                 }
//              }
//          });
//       });
//   // Press 'Enter' to redirect to book details
//   searchInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         let query = searchInput.value.trim().toLowerCase();

//         let foundBook = books.find(book => book.title.toLowerCase().includes(query));
//         if (foundBook) {
//             window.location.href = `details.html?id=${foundBook.id}#book-${foundBook.id}`;
//         } else {
//             alert("Book not found!");
//         }
//     }
// });
    
// document.addEventListener("DOMContentLoaded", function () {
//     let searchInput = document.getElementById("searchInput");
//     let suggestionsList = document.getElementById("suggestionsList");

//     let books = [
//         { id: 1, title: "Lore", author: "Alexandra Bracken" },
//         { id: 2, title: "Red Queen", author: "Victoria Aveyard" },
//         { id: 3, title: "Cruel Prince", author: "Holly Black" },
//         { id: 4, title: "Queen of Air and Darkness", author: "Cassandra Clare" },
//         { id: 5, title: "Shadow Me", author: "Tahereh Mafi" },
//         { id: 6, title: "Amid Cloud and Bones", author: "Ella Fields" }
//     ];

//     // Search function
//     searchInput.addEventListener("input", function () {
//         let query = searchInput.value.trim().toLowerCase();
//         suggestionsList.innerHTML = ""; // Clear old suggestions

//         if (query) {
//             let filteredBooks = books.filter(book =>
//                 book.title.toLowerCase().includes(query) ||
//                 book.author.toLowerCase().includes(query)
//             );

//             if (filteredBooks.length === 0) {
//                 suggestionsList.innerHTML = "<li>No books found</li>";
//             } else {
//                 filteredBooks.forEach(book => {
//                     let li = document.createElement("li");
//                     li.textContent = `${book.title} - ${book.author}`;
//                     li.classList.add("suggestion-item");
//                     li.setAttribute("data-id", book.id);

//                     // Click to redirect to specific book card in details.html
//                     li.addEventListener("click", function () {
//                         window.location.href = `details.html?id=${book.id}#book-${book.id}`;
//                     });

//                     suggestionsList.appendChild(li);
//                 });
//             }
//         }
//     });

//     // Press 'Enter' to redirect to book details
//     searchInput.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             let query = searchInput.value.trim().toLowerCase();

//             let foundBook = books.find(book => book.title.toLowerCase().includes(query));
//             if (foundBook) {
//                 window.location.href = `details.html?id=${foundBook.id}#book-${foundBook.id}`;
//             } else {
//                 alert("Book not found!");
//             }
//         }
//     });
// });
// books = [
//     { id: 1, title: "Lore", author: "Alexandra Bracken" },
//     { id: 2, title: "Red Queen", author: "Victoria Aveyard" },
//     { id: 3, title: "Cruel Prince", author: "Holly Black" },
//     { id: 4, title: "Queen of Air and Darkness", author: "Cassandra Clare" },
//     { id: 5, title: "Shadow Me", author: "Tahereh Mafi" },
//     { id: 6, title: "Amid Cloud and Bones", author: "Ella Fields" }
// ];

// document.addEventListener("DOMContentLoaded", function () {
//     let searchInput = document.getElementById("searchInput");
//     let suggestionsList = document.getElementById("suggestionsList");

//     searchInput.addEventListener("input", function () {
//         let query = searchInput.value.trim().toLowerCase();
//         suggestionsList.innerHTML = "";

//         if (query) {
//             let filteredBooks = books.filter(book =>
//                 book.title.toLowerCase().includes(query) ||
//                 book.author.toLowerCase().includes(query)
//             );

//             if (filteredBooks.length === 0) {
//                 suggestionsList.innerHTML = "<li>No books found</li>";
//             } else {
//                 filteredBooks.forEach(book => {
//                     let li = document.createElement("li");
//                     li.textContent = `${book.title} - ${book.author}`;
//                     li.classList.add("suggestion-item");
//                     li.setAttribute("data-id", book.id);

//                     li.addEventListener("click", function () {
//                         window.location.href = `details.html?id=${book.id}#book-${book.id}`;
//                     });

//                     suggestionsList.appendChild(li);
//                 });
//             }
//         }
//     });

//     searchInput.addEventListener("keydown", function (event) {
//         if (event.key === "Enter") {
//             let query = searchInput.value.trim().toLowerCase();
//             let foundBook = books.find(book => book.title.toLowerCase().includes(query));

//             if (foundBook) {
//                 window.location.href = `details.html?id=${foundBook.id}#book-${foundBook.id}`;
//             } else {
//                 alert("Book not found!");
//             }
//         }
//     });
// });
// let books = [
//     { id: 1, title: "Lore", author: "Alexandra Bracken" },
//     { id: 2, title: "Red Queen", author: "Victoria Aveyard" },
//     { id: 3, title: "Cruel Prince", author: "Holly Black" },
//     { id: 4, title: "Queen of Air and Darkness", author: "Cassandra Clare" },
//     { id: 5, title: "Shadow Me", author: "Tahereh Mafi" },
//     { id: 6, title: "Amid Cloud and Bones", author: "Ella Fields" }
// ];

// document.addEventListener("DOMContentLoaded", function () {
//     let searchInput = document.getElementById("searchInput");
//     let suggestionsList = document.getElementById("suggestionsList");
//     let searchForm = document.getElementById("search-form"); 
//     searchForm.addEventListener("keydown", function (event) { // Add the event listener to the form
//         if (event.key === "Enter") {
//             event.preventDefault(); // Prevent default form submission
//             let query = searchInput.value.trim().toLowerCase();

//             // Find the book by ID or title
//             let foundBook = books.find(book => {
//                 return book.id === parseInt(query) || book.title.toLowerCase().includes(query);
//             });

//             if (foundBook) {
//                 window.location.href = `details.html?id=${foundBook.id}#book-${foundBook.id}`;
//             } else {
//                 alert("Book not found!");
//             }
//         }
//     })
//     searchInput.addEventListener("input", function () {
//         // ... (rest of the input event listener code remains the same) ...
//     });

//     searchInput.addEventListener("keydown", function (event) {
//         if (event.key === "Enter") {
//             let query = searchInput.value.trim().toLowerCase();

//             // Find the book by ID or title
//             let foundBook = books.find(book => {
//                 return book.id === parseInt(query) || book.title.toLowerCase().includes(query);
//             });

//             if (foundBook) {
//                 window.location.href = `details.html?id=${foundBook.id}#book-${foundBook.id}`;
//             } else {
//                 alert("Book not found!");
//             }
//         }
//     });
// });
let books = [
    { id: 1, title: "Lore", author: "Alexandra Bracken" },
    { id: 2, title: "Red Queen", author: "Victoria Aveyard" },
    { id: 3, title: "Cruel Prince", author: "Holly Black" },
    { id: 4, title: "Queen of Air and Darkness", author: "Cassandra Clare" },
    { id: 5, title: "Shadow Me", author: "Tahereh Mafi" },
    { id: 6, title: "Amid Cloud and Bones", author: "Ella Fields" }
];

document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("searchInput");
    let suggestionsList = document.getElementById("suggestionsList");
    let searchForm = document.getElementById("search-form");

    searchInput.addEventListener("input", function () {
        let query = searchInput.value.trim().toLowerCase();
        suggestionsList.innerHTML = "";

        if (query) {
            let filteredBooks = books.filter(book =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
            );

            if (filteredBooks.length === 0) {
                suggestionsList.innerHTML = "<li>No books found</li>";
            } else {
                filteredBooks.forEach(book => {
                    let li = document.createElement("li");
                    li.textContent = `${book.title} - ${book.author}`;
                    li.classList.add("suggestion-item");
                    li.setAttribute("data-id", book.id);

                    li.addEventListener("click", function () {
                        window.location.href = `details.html?id=${book.id}#book-${book.id}`;
                    });

                    suggestionsList.appendChild(li);
                });
            }
        }
    });

// Add event listener for Enter key press
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission

        // Trigger the form's submit event
        searchForm.dispatchEvent(new Event('submit'));
    }
});
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let query = searchInput.value.trim().toLowerCase();

        let foundBook = books.find(book => {
            const bookId = parseInt(query);
            return book.id === parseInt(query) || book.title.toLowerCase().includes(query);
        });

        if (foundBook) {
            window.location.href = `details.html?id=${foundBook.id}#book-${foundBook.id}`;
        } else {
            alert("Book not found!");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select the button using its ID
    var requestButton = document.getElementById("requestButton");

    // Add a click event listener to the button
    requestButton.addEventListener("click", function () {
        // Change the button's text to "Requested"
        requestButton.textContent = "Requested";

        // Optionally, disable the button to prevent further clicks
        requestButton.disabled = true;
    });
});
document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('myForm').style.display = 'block';
  });
  document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('myForm').classList.add('show');
  });
  // ... other JavaScript code ...

 // ... other JavaScript code ...

document.addEventListener('click', function(event) {
  // Check if the clicked element is the catalog page button
  if (event.target.id !== 'catalogButton') {
    // ... your existing code to handle other clicks ...
  }
});

// ... other JavaScript code ...




    
   
    
    
