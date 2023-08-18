
// This function gets called when the user interacts with the search box.
const search = () => {
    // Get the value typed into the search box and convert it to uppercase for case-insensitive comparison.
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    
    // Get the element that contains the list of products.
    const storeitems = document.getElementById("product-list");
    
    // Get all the individual product elements from the list.
    const product = document.querySelectorAll(".product");
    
    // Loop through each product element in the list.
    for (let i = 0; i < product.length; i++) {
        // Get the product name (h2 element) from the current product element.
        const pname = product[i].getElementsByTagName("h2")[0];
        
        // Extract the text content from the product name.
        let match = pname.textContent || pname.innerHTML;
        
        // Compare the extracted text (product name) with the search value.
        // If the search value is found in the product name, show the product element; otherwise, hide it.
        if (match.toUpperCase().indexOf(searchbox) > -1) {
            product[i].style.display = ""; // Show the product element.
        } else {
            product[i].style.display = "none"; // Hide the product element.
        }
    }
    
    // Print a message to the console to indicate that the function is working.
    console.log("working");
}