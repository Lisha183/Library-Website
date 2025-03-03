

     document.addEventListener("DOMContentLoaded", function () {
          searchInput = document.getElementById("searchInput");
         suggestionsList = document.getElementById("suggestionsList");
    
         let books = [
             { id: 1, title: "LORE", author: "Alexandra Bracken" },
             { id: 2, title: "Red Queen", author: "Victoria Aveyard" },
             { id: 3, title: "Cruel Prince", author: "Holly Black" },
             { id: 4, title: "Queen of Air and Darkness", author: "Cassandra Clare" },
             { id: 5, title: "Shadow Me", author: "Tahereh Mafi" },
            { id: 6, title: "Amid Cloud and Bones", author: "Ella Fields" }
        ];
    
         // Search function
         searchInput.addEventListener("input", function () {
            let query = searchInput.value.toLowerCase();
             suggestionsList.innerHTML = ""; // Clear old suggestions
    
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
    
                         // Click to redirect to specific book card in details.html
                         li.addEventListener("click", function () {
                             window.location.href = `details.html?id=${book.id}#book-${book.id}`;
                          });
    
                          suggestionsList.appendChild(li);
                     });
                }
             }
         });
      });
    document.getElementById("searchButton").addEventListener("click", function () {
        console.log('Button clicked!');
   
         let searchQuery = document.getElementById("searchInput").value.toLowerCase();
        let books = document.querySelectorAll(".book-item");
        
         for (let book of books) {
            let title = book.getAttribute("data-title").toLowerCase();
             let url = book.getAttribute("data-url");
            
            if (title.includes(searchQuery)) {
                 window.location.href = url; // Redirect to the book details page
                return;
             }
         }
        
         alert("Book not found!");
     });
    
    // // Optional: Press 'Enter' to search
     document.getElementById("searchInput").addEventListener("keypress", function (event) {
         if (event.key === "Enter") {
             document.getElementById("searchButton").click();
        }
     });




    
   
    
    
