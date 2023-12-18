function obtenerDatosFormulario() {
    var id = $("#id").val();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var edad = $("#edad").val();
    var curso = $("#curso").val();
  
    return {
      id: id,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      curso: curso
    };
  }
  
  function procesarDatosFormulario(datos) {
    var accion = $("#boton").val();
  
    if (accion == "Crear") {
      // Crear al alumno
      $.ajax({
        type: "POST",
        url: "/crud",
        data: datos,
        success: function(data) {
          // Si la creación fue exitosa
          if (data == "ok") {
            // Mostrar un mensaje de éxito
            alert("El alumno se creó correctamente.");
          } else {
            // Mostrar un mensaje de error
            alert("Ocurrió un error al crear al alumno.");
          }
        }
      });
    } else if (accion == "Editar") {
      // Editar al alumno
      $.ajax({
        type: "PUT",
        url: "/crud",
        data: datos,
        success: function(data) {
          // Si la edición fue exitosa
          if (data == "ok") {
            // Mostrar un mensaje de éxito
            alert("El alumno se editó correctamente.");
          } else {
            // Mostrar un mensaje de error
            alert("Ocurrió un error al editar al alumno.");
          }
        }
      });
    }
  }
  
  $(document).ready(function() {
    // Obtener los datos del formulario
    var datos = obtenerDatosFormulario();
  
    // Procesar los datos
    procesarDatosFormulario(datos);
  });
  