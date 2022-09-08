var id = localStorage.getItem("id") || [];

const goToCart = async() => {
    try {
        const res = await fetch(`http://localhost:3000/data/${id}`);
        const res2 = await res.json();
        // console.log(res2);

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
            quantity.setAttribute("id", "quantity");
            quantity.setAttribute("min", 1)
            quantity.setAttribute("placeholder", "1");
            
            var add = document.createElement("button");
            add.setAttribute("id", "addBtn");
            add.innerHTML = "ADD TO CART";
            add.onclick = function(){
                // localStorage.setItem("id", res2.id);
                document.getElementById("addBtn").innerHTML = "Veiw Cart!"
                // alert("Added to Cart!");
                let data = JSON.parse(localStorage.getItem("itemArr")) || [];
                
                let quant = parseInt(document.getElementById("quantity").value);
                // localStorage.setItem("quantity", quant);
                let item = parseInt(localStorage.getItem("id"));
                
                let data2 = data.filter((res2) =>(res2.id==item))
                let obj ={
                    id : item,
                    count : quant
                }
                
                if(data2.length == 0){
                    data.push(obj);
                }else{
                    data.map((res)=>{
                        if(res.id == item){
                            res.count = +res.count + quant ;
                        }
                     })
                }
                localStorage.setItem("itemArr",JSON.stringify(data));
                console.log(data);
                let allItem = document.getElementById("allItem");
    
                let sum = data.reduce(function(acc, res){
                    return acc + res.count;
                },0);
                allItem.innerHTML = "";

                allItem.innerHTML = sum;




             
            
                
            }   
           
            document.getElementById("cart").onclick = function() {
                localStorage.setItem("id", res2.id);
                location.href = "checkOut.html";
                goToCheckOut();
            }


           infoBox.append(title, price, quantity, add);
           document.getElementById("contentBox").append(productBox, infoBox);
    
    } catch(err) {
        console.log(err);
    }
}
goToCart();
let allItem = document.getElementById("allItem");
let data = JSON.parse(localStorage.getItem("itemArr")) || [];
let sum = data.reduce(function(acc, res){
    return acc + res.count;
},0);

allItem.innerHTML = sum;


