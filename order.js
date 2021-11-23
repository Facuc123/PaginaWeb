window.addEventListener("DOMContentLoaded", () => {

    let orden = localStorage.getItem("orden");
    console.log("hola1");
    if(orden){
        const catalogOrder = JSON.parse(orden); 
        const orderSelected = document.querySelector(".order-selected");
        orderSelected.querySelector(".title").innerText = catalogOrder.title;
        orderSelected.querySelector(".price").innerText = catalogOrder.price;
        const img = orderSelected.querySelector("img");
        img.setAttribute("src", `imagenes/${catalogOrder.id}.webp`);
    }
}); 