const imagen1 = document.querySelectorAll("rodrigo");

const cargarImagen = () => {

    console.log("Esta funkando")
    
    /*entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible");
        }
    })*/

}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
});

observador.observe(imagen1);