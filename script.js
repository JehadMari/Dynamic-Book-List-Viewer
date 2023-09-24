// Sample array of book data
const books = [
    {
        img: "https://i.ibb.co/0K8MvZK/xxxxx-removebg-preview.png",
        pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
        bookName: "Book 1"
    },
    {
        img: "https://i.ibb.co/0K8MvZK/xxxxx-removebg-preview.png",
        pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
        bookName: "Book 2"
    },
  {
        img: "https://i.ibb.co/0K8MvZK/xxxxx-removebg-preview.png",
        pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
        bookName: "Book 3"
    },
  {
        img: "https://i.ibb.co/0K8MvZK/xxxxx-removebg-preview.png",
        pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
        bookName: "Book 4"
    }
    // Add more book objects as needed
];

// Function to generate dynamic cards
function generateCards() {
    const bookListContainer = document.getElementById("bookList");
    
    books.forEach(book => {
        const cardDiv = document.createElement("div");
            cardDiv.classList.add("col-md-6", "col-lg-6", "col-6"); // Separate classes

        
        const cardLink = document.createElement("a");
       cardLink.setAttribute("data-pdf", book.pdfUrl);
 cardLink.classList.add("book-link");
cardLink.href = "#";
   cardLink.onclick = function(e) {
            e.preventDefault();
            const pdfUrl = this.getAttribute("data-pdf");
            showPdfViewer(pdfUrl);
        };

        const cardImage = document.createElement("img");
        cardImage.src = book.img;
        cardImage.classList.add("card-img-top");
        cardImage.alt = book.bookName;
        
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = book.bookName;
        
        cardBody.appendChild(cardTitle);
        cardLink.appendChild(cardImage);
        cardLink.appendChild(cardBody);
        cardDiv.appendChild(cardLink);
        bookListContainer.appendChild(cardDiv);
    });
}


        // Function to show the PDF viewer and hide the book list
        function showPdfViewer(pdfUrl) {
            const bookList = document.getElementById("bookList");
            const pdfViewer = document.getElementById("pdf-viewer");
            const pdfFrame = document.getElementById("pdf-frame");
            const backButton = document.getElementById("back-button");

            bookList.style.display = "none";
            pdfViewer.style.display = "block";
            pdfFrame.src = pdfUrl;

 // Add event listener to the back button
            backButton.addEventListener("click", function () {
                bookList.style.display = "";
                pdfViewer.style.display = "none";
                pdfFrame.src = ""; // Clear the iframe source
 
            });
           
        }

// Call the function to generate dynamic cards when the page loads
window.addEventListener("load", generateCards);