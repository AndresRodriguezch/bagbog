function btn_ingresar() {
    validarCampos()
}

function validarCampos() {
    let msj = ""
    let email = document.getElementById("txt_email");
    let password = document.getElementById("txt_password");

    if (email.value == "") {
        msj += "Por favor, ingrese el Correo Electronico </br>";
    }
    if (password.value == "") {
        msj += "Por favor, ingrese la Contraseña </br>";
    } else if (password.value.length <= 8) {
        msj += "El min. de caracteres para el campo Contraseña es 8 </br>";
    }

    if (msj != "") {
        mostrarModal(msj, "Validación Campos", "error");
    }else {
        location.replace('../../index.html');
    }
}

function mostrarContrasena(){
    var tipo = document.getElementById("txt_password");
    var icon = document.getElementById("icon_mostrarContraseña")
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

function mostrarModal(msj, titulo, icono) {
    Swal.fire({
        icon: icono,
        title: titulo,
        html: msj,
    })
}