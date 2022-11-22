// Ingreso de un usuario - switch

let perfil = "Invitado";
  switch (perfil){
    case " ":
        console.log("Debe especificar el perfil del usuario");
        break;

    case "Administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;

    case "Asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;

    case "Invitado":
        console.log("Usted sólo tiene permisos de consultar datos");
        break;

    default:
    console.log("Debe especificar un perfil válido");
  }

// Ingreso de un usuario - if else

let usuario = "administrador";

if (usuario == " "){
    console.log(acceso = "Debe especificar el perfil del usuario");

}else if(usuario == "Administrador" || "ADMINISTRADOR" || "administrador"){
    console.log("Usted tiene todos los privilegios de uso del sistema");

}else if(usuario == "Asistente" || "ASISTENTE" || "asistente"){
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");

}else if(usuario == "Invitado" || "INVITADO" || "invitado"){
    console.log("Usted sólo tiene permisos de consultar datos");
}else{
    console.log("Debe especificar un perfil válido");
}
