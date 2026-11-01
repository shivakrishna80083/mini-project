
let api = document.querySelector(".api");

let productsContainer = document.querySelector(".products");


api.innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")

    .then((response) => {

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();

    })

    .then((products) => {

        api.innerHTML = "Products loaded successfully!";

        products.forEach((product) => {

            
            let card = document.createElement("div");

            card.className = "card";

          
            let id = document.createElement("p");

            id.className = "product-id";

            id.innerHTML = "Product ID: " + product.id;

            
            let title = document.createElement("h2");

            title.innerHTML = product.title.slice(0, 50);

           
            let price = document.createElement("h3");

            price.innerHTML = "Price: $" + product.price;

            
            let description = document.createElement("p");

            description.innerHTML = product.description.slice(0, 100);

            
            let image = document.createElement("img");

            image.src = product.image;

           
            card.appendChild(id);

            card.appendChild(image);

            card.appendChild(title);

            card.appendChild(price);

            card.appendChild(description);

            
            productsContainer.appendChild(card);

        });

    })

    .catch((error) => {

        api.innerHTML = "Error: " + error.message;

        api.className = "api error";

        console.warn("API Error:", error.message);

    })

    .finally(() => {

        api.innerHTML += "<br>API request completed";

        console.log("API request completed");

    });
