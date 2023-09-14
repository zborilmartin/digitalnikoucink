// script.js

// Function to load external HTML content and apply styles
function loadExternalContent() {
    // Define the URL of the external HTML file
    var url = '../webparts/blog_vsechny_kategorie.html';

    // Fetch the content from the URL
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            // Insert the content into the container
            document.getElementById('content-vsechny-kategorie').innerHTML = html;
        })
        .catch(function (error) {
            console.error('Error loading content:', error);
        });
}

// Call the function to load external content
loadExternalContent();
