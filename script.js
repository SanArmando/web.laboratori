document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const posts = document.querySelectorAll(".post");

    searchBar.addEventListener("input", function (e) {
        const searchText = e.target.value.toLowerCase();
        
        posts.forEach(post => {
            const productText = post.textContent.toLowerCase();
            if (productText.includes(searchText)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Producto añadido al carrito");
        });
    });
});
