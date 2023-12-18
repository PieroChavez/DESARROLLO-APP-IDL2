
    window.onload = function () {
        var storedWorkers = JSON.parse(localStorage.getItem("workers")) || [];
        storedWorkers.forEach(function (worker) {
            agregarFila(worker.nombre, worker.puesto, worker.foto);
        });
    };

    function agregarTrabajador() {
        var nombre = document.getElementById("nombre").value;
        var puesto = document.getElementById("puesto").value;
        var foto = document.getElementById("foto").value;

        if (nombre && puesto) {
            // Guardar trabajador en el almacenamiento local
            var worker = { nombre: nombre, puesto: puesto, foto: foto };
            var storedWorkers = JSON.parse(localStorage.getItem("workers")) || [];
            storedWorkers.push(worker);
            localStorage.setItem("workers", JSON.stringify(storedWorkers));

            // Agregar trabajador a la tabla
            agregarFila(nombre, puesto, foto);

            // Limpiar el formulario después de agregar un trabajador
            document.getElementById("workerForm").reset();
        } else {
            alert("Por favor, ingresa todos los campos.");
        }
    }

    function agregarFila(nombre, puesto, foto) {
        var table = document.getElementById("workersTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = nombre;
        cell2.innerHTML = puesto;
        cell3.innerHTML = '<img src="' + foto + '" alt="Foto" style="max-width: 100px; max-height: 100px;">';
        cell4.innerHTML = '<button onclick="editarTrabajador(this)">Editar</button> ' +
                          '<button onclick="eliminarTrabajador(this)">Eliminar</button>';
    }

    function editarTrabajador(btn) {
        var row = btn.parentNode.parentNode;
        var nombre = row.cells[0].innerHTML;
        var puesto = row.cells[1].innerHTML;
        var foto = row.cells[2].innerHTML; // En este ejemplo, la URL de la foto se guarda directamente en la celda

        document.getElementById("nombre").value = nombre;
        document.getElementById("puesto").value = puesto;
        document.getElementById("foto").value = foto;

        // Eliminar la fila después de editar
        row.parentNode.removeChild(row);
    }

    function eliminarTrabajador(btn) {
        var row = btn.parentNode.parentNode;
        var nombre = row.cells[0].innerHTML;

        // Eliminar trabajador del almacenamiento local
        var storedWorkers = JSON.parse(localStorage.getItem("workers")) || [];
        var updatedWorkers = storedWorkers.filter(function (worker) {
            return worker.nombre !== nombre;
        });
        localStorage.setItem("workers", JSON.stringify(updatedWorkers));

        // Eliminar la fila de la tabla
        row.parentNode.removeChild(row);
    }
