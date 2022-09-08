const displayData = async() => {
    try {
    let res = await fetch("http://localhost:3000/data");
    let res2 = await res.json();
    console.log(res2);

        res2.map(function(elem) {
            
            var div = document.createElement("div");
            div.setAttribute("id", "div");

            var image = document.createElement("img");
            image.setAttribute("src", elem.image_url);
            image.setAttribute("id", "img");
            image.onclick = function(){
                localStorage.setItem("id", elem.id);
                location.href = "cart.html"
                goToCart();
            }

            var title = document.createElement("h3");
            title.innerText = elem.title;
            title.setAttribute("id", "title");

            var price = document.createElement("p");
            price.innerText = elem.price;
            price.setAttribute("id","price");

            div.append(image, title, price);
            document.getElementById("products").append(div);
        })
    } 
    catch(err) {
        console.log(err);
    }
}
displayData();