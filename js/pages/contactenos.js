function enviarDatos() {
    validarCampos()
}

function validarCampos() {
    let msj = "";
    let nombre = document.getElementById("txt_nombre");
    let email = document.getElementById("txt_email");
    let mensaje = document.getElementById("txt_mensaje");

    if (nombre.value == "") {
        msj += "Por favor, diligencie el campo nombre <br>" ;
        nombre.style.borderColor = "#ED4436"
    }else{
        nombre.style.borderColor = "#34954F"
    }
    if (email.value == "") {
        msj += "Por favor, diligencie el campo email <br>";
        email.style.borderColor = "#ED4436"
    }else{
        email.style.borderColor = "#34954F"
    }
    if (mensaje.value == "") {
        msj += "Por favor, diligencie el campo mensaje <br>";
        mensaje.style.borderColor = "#ED4436"
    }else{
        mensaje.style.borderColor = "#34954F"
    }

    if (msj != "") {
        mostrarModal(msj, "Validación Campos", "error");
    }else {
        mostrarModal("Hemos recibido tu mensaje. Gracias por contactarnos", "Contacto", "success");
        limpiarCampos();
    }
}

function limpiarCampos() {
    let nombre = document.getElementById("txt_nombre");
    let email = document.getElementById("txt_email");
    let mensaje = document.getElementById("txt_mensaje");
    document.getElementById("contador_mensaje").innerText = "0";

    nombre.value = "";
    email.value = "";
    mensaje.value = "";
    
    nombre.style.borderColor = "#DEE2E6";
    email.style.borderColor = "#DEE2E6";
    mensaje.style.borderColor = "#DEE2E6";
}

function contadorMensaje() {
    let cont = document.getElementById("txt_mensaje");
    if (cont.value == "") {
        document.getElementById("contador_mensaje").innerText = "0";
        cont.style.borderColor = "#ED4436"
    }else{
        cont.style.borderColor = "#34954F"
        cont = cont.value.length
        document.getElementById("contador_mensaje").innerText = cont;
    }
    
}

function validarCaracteres(event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }

}

function mostrarModal(msj, titulo, icono) {
    Swal.fire({
        icon: icono,
        title: titulo,
        html: msj,
    })
}