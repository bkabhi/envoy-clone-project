var data = JSON.parse(localStorage.getItem("itemArr")) || [];
let totalPrice = 0;
const goToCheckOut = async(id, count) => {
    try {
        const res = await fetch(`http://localhost:3000/data/${id}`);
        const res2 = await res.json();
        displayItem(res2, count);
        
    } catch(err) {
        console.log(err);
    }
}   
    
    data.map(function(elem) {
        goToCheckOut(elem.id, elem.count);
    })

function removeItem(id) {
    let data2 = data.filter(function(res){
        return res.id != id;
    })
 
    localStorage.setItem("itemArr", JSON.stringify(data2));
    location.reload();
    
}
function displayItem(res2, count) {
    let tbody = document.getElementById("tbody");
        
        var row  = document.createElement("tr");

        var td1  = document.createElement("img");
        td1.setAttribute("src", res2.image_url);

        var td2 = document.createElement("td");
        td2.innerText = res2.title;

        var remove = document.createElement("button");
        remove.innerHTML = "X REMOVE";
        remove.addEventListener("click", function() {
            removeItem(res2.id);
        })
        var td3 = document.createElement("td");
        td3.innerText = res2.price;


        var td4 = document.createElement("td");
        td4.innerHTML = count;

        var td5 = document.createElement("td");
        
        td5.innerText = "$"+"" +res2.originalPrice* count;
        totalPrice = totalPrice + res2.originalPrice* count;

        row.append(td1, td2, remove, td3, td4, td5);
        tbody.append(row);

        let total = document.getElementById("totalPrice");
        total.innerHTML = "$"+"" + totalPrice;




}

    

