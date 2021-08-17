// Variables
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let productosCarrito = [];


cargarEventos();
function cargarEventos() {
    // Eliminar productos //
    carrito.addEventListener('click', eliminarProducto);

    // Muestra productos de localStorage //
    document.addEventListener('DOMContentLoaded', () => {
        productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    // Vaciar carrito //
    btnVaciarCarrito.addEventListener('click', () => {
    
        productosCarrito = []; 

        carritoHTML(); 
    })
}


// Eliminar producto del carrito //
function eliminarProducto(e) {
    
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

       
        productosCarrito = productosCarrito.filter(producto => producto.id !== productoId);
        
        
        carritoHTML();
    }
}

// Datos del producto bebida //
function leerDatosBebida(bebidaSelecionada) {
  
    const infoBebiba = {
        imagen: bebidaSelecionada.querySelector('img').src,
        titulo: bebidaSelecionada.querySelector('h3').textContent,
        precio: bebidaSelecionada.querySelector('.precio span').textContent,
        id: bebidaSelecionada.querySelector('button').getAttribute('data-id'),
        cantidad: 1,
        total: 0
    }

    infoBebiba.total = infoBebiba.precio * infoBebiba.cantidad;
    console.log(infoBebiba);

    // Ver si existe producto en el carrito //
    const existe = productosCarrito.some(producto => producto.id === infoBebiba.id);
    if (existe) {
        // Actualiza cantidad d productos si es existente //
        const productos = productosCarrito.map(producto => {
            if (producto.id === infoBebiba.id) {
                producto.cantidad++;
                producto.total = producto.cantidad * producto.precio;
                return producto;
            } else {
                return producto; 
            }
        });
        productosCarrito = [...productos];
    } else {
        productosCarrito = [...productosCarrito, infoBebiba];
    }

    carritoHTML();
}

// Mostrar productosCarrito en el html //
function carritoHTML() {

    // Limpiar html //
    limpiarHTML();

    // Recorrer carrito y mostrar elementos en el html //
    productosCarrito.forEach(producto => {
        const {imagen, titulo, precio, cantidad, total, id} = producto;
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img src="${imagen}" width="120">
            </td>
            <td>${titulo}</td>
            <td>$${precio}</td>
            <td>${cantidad}</td>
            <td>$${total}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}"> X </a>
            </td>
        `;
        listaCarrito.appendChild(fila);
    });

    // Agregar productosCarrito a localStorage //
    sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
}

// Eliminar productos del tbody //
function limpiarHTML() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}