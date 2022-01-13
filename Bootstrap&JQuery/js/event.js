$.ajax({
    // la URL para la petición
    url: "jquery.json",

    // la información a enviar
    // (también es posible utilizar una cadena de datos)

    // especifica si será una petición POST o GET
    type: 'GET',

    // el tipo de información que se espera de respuesta
    dataType: 'json',

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success: function(json) {
        console.log(json)

        for (let i = 0; i < json.eventos.length; i++) {
            var event = json.eventos[i]; // (o el campo que necesites)

            if (event.tipo == "Twitter") {
                $('#e' + event.dia).append('<a class="bg-primary rounded btn" data-target="#mymodal" data-bs-toggle="mymodal" href="javascript:mostrarDetalle">' + event.nombre + '</a>');
            } else if (event.tipo == "Instagram") {
                $('#e' + event.dia).append('<p class="bg-danger rounded">' + event.nombre + '</p>');
            } else {
                $('#e' + event.dia).append('<p class="bg-success rounded">' + event.nombre + '</p>');
            }
            // $('#e' + event.dia).append(JSON.stringify(event));
        }

        function mostrarDetalle(event) {
            $('#contenido' + event.dia).html('<p>' + event.nombre + '</p>');
            $("#mymodal").modal("show");
        }
    }

    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    // error: function(xhr, status) {
    //     alert('Disculpe, ocurrió un problema');
    // }
});