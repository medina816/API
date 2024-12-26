let pentagon = document.querySelector(".pentagon")

let API = "https://dummyjson.com/products"

async function getProduct() {
    try {
        const res = await fetch(API)
        const data = await res.json()
        console.log(data);
        getAgain(data.products)
        
    } catch (error) {
        console.log(error);
        
    }
}

getProduct()

function getAgain(products) {
    pentagon.innerHTML = products.map((item) => {
        return `<div>
        <img src="${item.thumbnail}"/>
        <p>${item.category}</p>
        <h1>${item.brand}</h1>
        <p>${item.price}</p>    
        </div>`
    }).join("")
}