
  

// Jquery de validacion del Formulario con sweetalert

nombre = $("#nombre");
apellido = $("#apellido");
email = $("#email");
empresa = $("#empresa");
telefono = $("#telefono");
detalle = $("#detalle");



$("#send_form").on("click", function(){

    if(nombre.val() == ""){
        $("#nombre").focus();
        lanzarSweetAlertError("Indique su nombre");
        
         return false
        }

    if(apellido.val() == ""){
          $("#apellido").focus();
          lanzarSweetAlertError("Indique su apellido");
          return false
          }    

    if (email.val() == ""){ 
       $("#email").focus();
        lanzarSweetAlertError("Indique un email valido");
        return false
        }

    if (telefono.val() == ""){
        $("#telefono").focus();
        lanzarSweetAlertError("Indique un Teléfono");
        return false
        }

    if (empresa.val() == ""){
        $("#empresa").focus();
          lanzarSweetAlertError("Indique su empresa");
          return false
          }

      if (detalle.val() == ""){
           $("#detalle").focus();
            lanzarSweetAlertError("Detalle su solicitud");
            return false
            }

        Swal.fire(
            {title: "¡Perfecto!.",
            text: "Solicitud Almacenado Correctamente.",
            icon: 'success'}
        )
    })


function lanzarSweetAlertError(campo){
    let mensaje_text = `${campo} no puede estar vacío, favor complételo.`
    Swal.fire({
        icon: 'error',
        title: 'Oops, algo salió mal',
        text: mensaje_text,
      })
}