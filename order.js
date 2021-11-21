window.addEventListener("DOMContentLoaded", () => {

    const order = localStorage.getItem("order");
   
    if(order){
        console.log("hola");
        const catalogOrder = JSON.parse(order);
        const orderSelected = document.orderSelector(".order-selected");
        orderSelected.querySelector(".title").innerText = catalogOrder.title;
        orderSelected.querySelector(".price").innerText = catalogOrder.price;
        const img = orderSelected.querySelector(".img");
        img.setAttribute("src", `imagenes/${catalogOrder.id}.webp`);
    }

}); 