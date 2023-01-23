$(document).ready(function() {
    $("#myForm2").validate({
      rules: {
        perfil: {
          required: true,
          
        },
        especialidad: {
            required: true
          },
        profesion: {
            required: true
          },
        especialidad: {
            required: true
          },
        'checkboxGroup[]': {
            required: true,
            minlength: 1
          
        },
        git: {
            required: true,
            minlength: 10
          },
          msg: {
            required: true,
            minlength: 25
           
          }
        },
        messages: {
          perfil: {
            required: "Por favor seleccione un perfil"
           
          },
          especialidad: {
            required: "Por favor seleccione una especialidad"
          },
          profesion: {
            required: "Por favor seleccione una profesión si aplica"
          },
          especialidad: {
            required: "Por favor seleccione una especialidad si la posee"
          },
          'checkboxGroup[]': {
            required: "Por favor seleccione al meno una opción",
            minlength: "Por favor, seleccione al menos una opción del area de conocimiento"
          },
          git: {
            required: "Por favor  añada el URL de sus portafolios",
            minlength: "Debe poseer el formato git no menor de 10 caracteres"
          },
          msg: {
            required: "Por favor detalla tu solicitud",
            minlength: "El detalle de la solicitud debe contener al menos 25 caracteres"
          }
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            error.insertAfter(element);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("is-invalid");
        }
      });
    });
    


    $("#enviar").click(function(){
        var validado = $("#myForm2").valid();
        if(validado){
           alert('Sus datos fueron enviados satisfactoriamente');
        }
     });