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
        td1.setAttribute("id", "resImage");

        var td2 = document.createElement("td");
        var td2title = document.createElement("p")
        td2title.innerText = res2.title;
        td2.setAttribute("id", "title");

        var remove = document.createElement("button");
        remove.setAttribute("id", "remove");
        remove.innerHTML = "X Remove";
        remove.addEventListener("click", function() {
            removeItem(res2.id);
        })
        td2.append(td2title, remove)
        var td3 = document.createElement("td");
        td3.innerText = res2.price;


        var td4 = document.createElement("td");
        td4.innerHTML = count;

        var td5 = document.createElement("td");
        
        td5.innerText = "$"+"" +res2.originalPrice* count;
        totalPrice = totalPrice + res2.originalPrice* count;

        row.append(td1, td2, td3, td4, td5);
        tbody.append(row);

        let total = document.getElementById("total");
        total.innerHTML = "$"+"" + totalPrice;


        document.getElementById("checkOut").addEventListener("click", function() {
            location.href = "payment.html";

        })

}

    

