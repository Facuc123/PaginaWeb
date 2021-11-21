window.addEventListener("DOMContentLoaded", () =>{

    let boton = document.querySelectorAll("button[data-order]");
    boton.forEach(element => {
        element.addEventListener('click',(event) =>{
            const button = event.currentTarget;
            console.log(button);
            const container = button.parentNode;
            let orden = {
                title: container.querySelector('.title').innerText,
                precio: container.querySelector('.price').innerText,
                id: button.getAttribute("data-order")
            }
            localStorage.setItem("orden", JSON.stringify(orden));
            const url = window.location.href.replace("catalogo.html","order.html");
            window.location.href = url;
        });
    });

});