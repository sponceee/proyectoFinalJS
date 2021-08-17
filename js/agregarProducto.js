// Variables //
const listaBebidas = document.querySelector('#lista-bebidas');

cargarEventos();
function cargarEventos() {
    listaBebidas.addEventListener('click', agregarBebida);

}

// Funciones //
function agregarBebida(e) {

    if (e.target.classList.contains('agregar-carrito')) {
        const bebidaSelecionada = e.target.parentElement;
        leerDatosBebida(bebidaSelecionada);
    }
    
}