var id = localStorage.getItem("id") || [];

const goToCart = async() => {
    try {
        const res = await fetch(`http://localhost:3000/data/${id}`);
        const res2 = await res.json();
        console.log(res2);

            var productBox = document.createElement("div");
            productBox.setAttribute("id", "productBox");
            
            var heading = document.createElement("p");
            heading.innerText = "Home >"+ res2.title;

            var image = document.createElement("img");
            image.setAttribute("src", res2.image_url);
            image.setAttribute("id", "img");

            productBox.append(heading, image);

            var infoBox = document.createElement("div");
            infoBox.setAttribute("id", "infoBox");

            var title = document.createElement("h1");
            title.innerText = res2.title;

            var price = document.createElement("h3");
            price.innerText = res2.price;

            var quantity = document.createElement("input");
            quantity.setAttribute("type", "number");
            quantity.setAttribute("id", "qunatity");
            quantity.setAttribute("placeholder", "quantity");
            
            var add = document.createElement("button");
            add.setAttribute("id", "addBtn");
            add.innerHTML = "ADD TO CART";


           infoBox.append(title, price, quantity, add);
           document.getElementById("contentBox").append(productBox, infoBox)
    
    } catch(err) {
        console.log(err);
    }
}
goToCart();