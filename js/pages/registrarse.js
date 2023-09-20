function btn_crearUsuario() {
    validarCampos()
}

function validarCampos() {
    let msj = "";
    let nombre1 = document.getElementById("nombre1");
    let apellido1 = document.getElementById("apellido1");
    let apellido2 = document.getElementById("apellido2");
    let edad = document.getElementById("edad");
    let genero = document.getElementById("genero");
    let tipoDocumento = document.getElementById("tipo_documento");
    let numeroDocumento = document.getElementById("numero_documento");
    let correo = document.getElementById("correo");
    let direccion = document.getElementById("direccion");
    let contrasena = document.getElementById("contraseña");
    let btn_contrasena = document.getElementById("btn_mostrarContraseña");
    let confirmarContrasena = document.getElementById("confirmar_contraseña");
    let btn_confirmarContrasena = document.getElementById("btn_mostrarConfirmarContraseña");
    let validarContador = 1;

    // validar nombre 1
    if (nombre1.value == "") {
        nombre1.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, ingrese el Nombre 1. <br>";
        validarContador = validarContador + 1;
    }
    else {
        if (nombre1.value.length < 3) {
            nombre1.style.borderColor = "#E43D30";
            msj += validarContador + ") El minimo de caracteres es 3 para el campo Nombre 1. <br>";
            validarContador = validarContador + 1;
        } else {
            nombre1.style.borderColor = "#2A9D4A";
        }
    }

    // validar apellido 1
    if (apellido1.value == "") {
        apellido1.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, ingrese el Apellido 1. <br>";
        validarContador = validarContador + 1;
    }
    else if (apellido1.value.length < 3) {
        apellido1.style.borderColor = "#E43D30";
        msj += validarContador + ") El minimo de caracteres es 3 para el campo Apellido 1. <br>";
        validarContador = validarContador + 1;
    } else {
        apellido1.style.borderColor = "#2A9D4A";
    }

    // validar apellido 2
    if (apellido2.value == "") {
        apellido2.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, ingrese el Apellido 2. <br>";
        validarContador = validarContador + 1;
    }
    else if (apellido2.value.length < 3) {
        apellido2.style.borderColor = "#E43D30";
        msj += validarContador + ") El minimo de caracteres es 3 para el campo Apellido 2. <br>";
        validarContador = validarContador + 1;
    } else {
        apellido2.style.borderColor = "#2A9D4A";
    }

    // validar edad
    if (edad.value == "") {
        edad.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, seleccionar Edad. <br>";
        validarContador = validarContador + 1;
    }
    else if (edad.value < 18) {
        edad.style.borderColor = "#E43D30";
        msj += validarContador + ") No tienes la edad minima para registrarte. <br>"
        validarContador = validarContador + 1;
    } else {
        edad.style.borderColor = "#2A9D4A";
    }

    // validar genero
    if (genero.value == 0) {
        genero.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, seleccionar Genero. <br>";
        validarContador = validarContador + 1;
    }
    else {
        genero.style.borderColor = "#2A9D4A";
    }

    // validar tipo de documento
    if (tipoDocumento.value == 0) {
        tipoDocumento.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, seleccionar Tipo De Documento. <br>";
        validarContador = validarContador + 1;
    }
    else {
        tipoDocumento.style.borderColor = "#2A9D4A";
    }

    // validar numero de documento
    if (numeroDocumento.value == "") {
        numeroDocumento.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, ingresar Numero De Documento. <br>";
        validarContador = validarContador + 1;
    }
    else if (numeroDocumento.value.length < 10) {
        numeroDocumento.style.borderColor = "#E43D30";
        msj += validarContador + ") El minimo de caracteres es 10 para el campo Numero De Documento. <br>";
        validarContador = validarContador + 1;
    } else {
        numeroDocumento.style.borderColor = "#2A9D4A";
    }

    // validar correo
    if (correo.value == "") {
        correo.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, ingresar Correo. <br>";
        validarContador = validarContador + 1;
    }
    else {
        correo.style.borderColor = "#2A9D4A";
    }

    // validar direccion
    if (direccion.value == "") {
        direccion.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, ingresar Direccion. <br>";
        validarContador = validarContador + 1;
    }
    else {
        direccion.style.borderColor = "#2A9D4A";
    }

    // validar contraseña
    if (contrasena.value == "") {
        contrasena.style.borderColor = "#E43D30";
        btn_contrasena.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, ingresar Contraseña. <br>";
        validarContador = validarContador + 1;
    }
    else if (contrasena.value.length < 8) {
        contrasena.style.borderColor = "#E43D30";
        btn_contrasena.style.borderColor = "#E43D30";
        msj += validarContador + ") El minimo de caracteres es 8 para el campo Contraseña. <br>";
        validarContador = validarContador + 1;
    } else {
        contrasena.style.borderColor = "#2A9D4A";
        btn_contrasena.style.borderColor = "#2A9D4A";
    }

     // validar confirmar contraseña
    if (confirmarContrasena.value == "") {
        confirmarContrasena.style.borderColor = "#E43D30";
        btn_confirmarContrasena.style.borderColor = "#E43D30";
        msj += validarContador + ") Por favor, confirme la Contraseña. <br>";
        validarContador = validarContador + 1;
    } else if (confirmarContrasena.value != contrasena.value) {
        confirmarContrasena.style.borderColor = "#E43D30";
        btn_confirmarContrasena.style.borderColor = "#E43D30";
        msj += validarContador + ") No coindiden las contraseñas. <br>";
        validarContador = validarContador + 1;
    } else {
        confirmarContrasena.style.borderColor = "#2A9D4A";
        btn_confirmarContrasena.style.borderColor = "#2A9D4A";
    }

    if (msj != "") {
        mostrarModal(msj, "Validación Campos", "error");
    }else {
        mostrarModal("Se ha guardado correctamente", "Validación Campos", "success");
        setTimeout(function () {
            location.replace('../../index.html');
        }, 1000)
    }
}

function mostrarModal(msj, titulo, icono) {
    Swal.fire({
        icon: icono,
        title: titulo,
        html: msj,
    })
}

function validarNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

// Funcion que bloquea caracteres especiales
function validarCaracteres(event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }

}

// Funcion que bloquea la barra espaciadora
function eliminarEspacios(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key == 32) {
        e.preventDefault();
    }
}

function mostrarContrasena(contrasena, icono){
    var tipo = document.getElementById("" + contrasena + "");
    var icon = document.getElementById("" + icono + "")
    if(tipo.type == "password"){
        tipo.type = "text";
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
    }else{
        tipo.type = "password";
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
    }
}