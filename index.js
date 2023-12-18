
    function agregarTrabajador() {
        var nombre = document.getElementById("nombre").value;
        var puesto = document.getElementById("puesto").value;

        if (nombre && puesto) {
            var table = document.getElementById("workersTable");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = nombre;
            cell2.innerHTML = puesto;
            cell3.innerHTML = '<button onclick="editarTrabajador(this)">Editar</button> ' +
                              '<button onclick="eliminarTrabajador(this)">Eliminar</button>';

            // Limpiar el formulario después de agregar un trabajador
            document.getElementById("workerForm").reset();
        } else {
            alert("Por favor, ingresa todos los campos.");
        }
    }

    function editarTrabajador(btn) {
        var row = btn.parentNode.parentNode;
        var nombre = row.cells[0].innerHTML;
        var puesto = row.cells[1].innerHTML;

        document.getElementById("nombre").value = nombre;
        document.getElementById("puesto").value = puesto;

        // Eliminar la fila después de editar
        row.parentNode.removeChild(row);
    }

    function eliminarTrabajador(btn) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
