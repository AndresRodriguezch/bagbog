window.addEventListener("load", (event) => {
  localStorage.clear();
  obtenerProductos();
  inicializarTooltip();
});

function inicializarTooltip() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
}

function obtenerProductos() {
  // Realiza una solicitud para obtener el archivo JSON
  fetch("../../db/productos.json")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("listadoProductos", JSON.stringify(data));
      mostrarProductos(data);
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });
}

function mostrarProductos(data) {
  let widthScreen = window.screen.width;
  let contador = 1;
  let hastaAgrupamiento = 1;
  let row = document.getElementById("productos").innerHTML;
  let grupos = [];

  if (widthScreen > 820) {
    hastaAgrupamiento = 3;
  }

  for (var i = 0; i < data.length; i += hastaAgrupamiento) {
    var grupo = data.slice(i, i + hastaAgrupamiento); // Obtener un grupo de tres elementos o menos
    grupos.push(grupo);
  }

  grupos.forEach((elemento) => {
    let contadorProducto = 1;
    if (contador == 1) {
      row += '<div class="carousel-item active">';
    } else {
      row += '<div class="carousel-item">';
    }
    row += '<div class="container">';
    row += '<div class="row">';

    elemento.forEach((producto) => {
      if (contadorProducto == 1) {
        row += '<div class="col-lg-4">';
      } else {
        row += '<div class="col-lg-4 d-none d-lg-block">';
      }

      row += '<div class="card sombras">';
      row +=
        '<img class="card-img-top images_productos img-fluid" src="' +
        producto.imagen +
        '">';
      row += '<div class="card-body">';
      row += '<h5 class="card-title">' + producto.nombre + "</h5>";
      row += '<p class="card-text">';
      row += '<ul class="list-unstyled mt-3 mb-4">';

      producto.descripcion.forEach((descripcion) => {
        row += "<li>" + descripcion + "</li>";
      });

      row += "</ul>";
      row += "</p>";

      row +=
        '<button onclick="agregarProducto(' +
        producto.id +
        ')" class="btn btn-outline-dark" data-bs-toggle="tooltip" data-bs-placement="bottom"';
      row +=
        ' data-bs-title="Haga click para agregar el producto al carrito de compras">';
      row += '<i class="fa-solid fa-cart-shopping me-2"></i>';
      row += "Agregar al carrito";
      row += "</button>";
      row += "</div>";
      row += "</div>";
      row += "</div>";

      contadorProducto++;
    });

    row += "</div>";
    row += "</div>";
    row += "</div>";

    contador++;
  });
  document.getElementById("productos").innerHTML = row;
  inicializarTooltip();
}

function agregarProducto(id) {
  agregarCarrito(id);
  contadorCarrito();
  mostrarProductosCompras();
}

function agregarCarrito(id) {
  consultarJsonCompras(id);
}

function consultarJsonCompras(id) {
  if (
    localStorage.getItem("listaCompras") != null &&
    localStorage.getItem("listaCompras") != undefined
  ) {
    agregarProductoCompras(id);
  } else {
    crearJsonCompras(id);
  }
}

function agregarProductoCompras(id) {
    let listaCompras = JSON.parse(localStorage.getItem("listaCompras"));
    let listaProductos = JSON.parse(localStorage.getItem("listadoProductos"));
    let productoExistente = listaCompras.find((x) => x.id == id);
    let productoNuevo = listaProductos.find((x) => x.id == id);
    if (productoExistente != null && productoExistente != undefined) {
        productoExistente.cantidad = productoExistente.cantidad + 1;   
        let index = listaCompras.findIndex(x => x.id == id);
        listaCompras[index] = productoExistente;
    }else{
        productoNuevo.cantidad = 1;
        listaCompras.push(productoNuevo);
    }
    
    localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
}

function crearJsonCompras(id) {
  let listaProductos = JSON.parse(localStorage.getItem("listadoProductos"));
  let productoSeleccionado = listaProductos.find((x) => x.id == id);
  productoSeleccionado.cantidad = 1;

  let productos = [];
  productos.push(productoSeleccionado);
  localStorage.setItem("listaCompras", JSON.stringify(productos));
}

function contadorCarrito() {
  let contadorActual = document.getElementById("contadorCompra").innerText;
  if (contadorActual === "") {
    contadorActual = 1;
  } else {
    contadorActual = parseInt(contadorActual) + 1;
  }

  document.getElementById("contadorCompra").innerText = contadorActual;
  mostrarToaster("Producto agregado al carrito de compras correctamente");
}

function mostrarProductosCompras() {
  if (
    localStorage.getItem("listaCompras") != null &&
    localStorage.getItem("listaCompras") != undefined
  ) {
    let listadoCompras = JSON.parse(localStorage.getItem("listaCompras"));
    document.getElementById("cardCompras").innerHTML = "";
    let html = document.getElementById("cardCompras").innerHTML;
    listadoCompras.forEach((producto) => {
        html += '<div class="card mb-3">';
        html += '<div class="row g-0">';
        html += '<div class="col-md-4">';
        html += '<img src="' + producto.imagen + '" class="img-fluid rounded-start w-100 h-100">';
        html += '</div>';
        html += '<div class="col-md-8">';
        html += '<div class="card-body">';
        html += '<h5 class="card-title mb-3 text-center">' + producto.nombre + '</h5>';
        html += '<ul class="text-center list-unstyled">';
        html += '<li>Cantidad: ' + producto.cantidad + '</li>';
        html += '<li class="fw-bold fs-5">Valor: ' + convertirMoneda(producto.valor) + '</li>';
        html += '</ul>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';  
    });
    document.getElementById("cardCompras").innerHTML = html;
  }
}

function mostrarToaster(texto) {
    Toastify({
        text: texto,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function convertirMoneda(valor) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return formatter.format(valor);
}
