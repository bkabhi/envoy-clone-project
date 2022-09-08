const fetchData = async() => {
    try {
    let res = await fetch("http://localhost:3000/data");
    let res2 = await res.json();
    console.log(res2);

    displayData(res2);  
    
    } 
    catch(err) {
        console.log(err);
    }
}


function displayData(res2) {
    // console.log(res2, "res2Check")
    document.getElementById("products").innerHTML = null;

    res2.map(function(elem) {

    // console.log(elem);        
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
fetchData();

// document.querySelector("#iPads").addEventListener("click", displayFilter);

function displayFilter(event) {
    event.preventDefault();
    
    console.log(event.target.id, "Event");
    var targetEvent = event.target.id;
    const fetchData2 = async() => {
        try {
        let res = await fetch("http://localhost:3000/data");
        let res2 = await res.json();
        // console.log(res2);
       
        const filteredArr =  res2.filter(function(elem){
            // console.log(elem, elem.device, "String");
            return elem.device === targetEvent;
    
        })
        // console.log(filteredArr , "Arr");
        displayData(filteredArr);
    
        } 
        catch(err) {
            console.log(err);
        }


    }
    fetchData2();
   
}

