window.onload = function () {
    let storedWorkers = JSON.parse(localStorage.getItem("workers")) || [];
    storedWorkers.forEach(function (worker) {
        agregarFila(worker.nombre, worker.puesto, worker.foto);
    });
};

function agregarTrabajador() {
    let nombre = document.getElementById("nombre").value;
    let puesto = document.getElementById("puesto").value;
    let foto = document.getElementById("foto").value;

    if (nombre && puesto) {
        // Guardar trabajador
        let worker = { nombre: nombre, puesto: puesto, foto: foto };
        let storedWorkers = JSON.parse(localStorage.getItem("workers")) || [];
        storedWorkers.push(worker);
        localStorage.setItem("workers", JSON.stringify(storedWorkers));

        // Agregar trabajador a la tabla
        agregarFila(nombre, puesto, foto);

        // Limpiar el formulario 
        document.getElementById("workerForm").reset();
    } else {
        alert("Por favor, ingresa todos los campos.");
    }
}

function agregarFila(nombre, puesto, foto) {
    let table = document.getElementById("workersTable");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = nombre;
    cell2.innerHTML = puesto;
    cell3.innerHTML = '<img src="' + foto + '" alt="Foto">';
    cell4.innerHTML = '<button onclick="editarTrabajador(this)">Editar</button> ' +
                      '<button onclick="eliminarTrabajador(this)">Eliminar</button>';
}

function editarTrabajador(btn) {
    let row = btn.parentNode.parentNode;
    let nombre = row.cells[0].innerHTML;
    let puesto = row.cells[1].innerHTML;
    let foto = row.cells[2].innerHTML;

    document.getElementById("nombre").value = nombre;
    document.getElementById("puesto").value = puesto;
    document.getElementById("foto").value = foto;

    // Eliminar la fila después de editar
    row.parentNode.removeChild(row);
}

function eliminarTrabajador(btn) {
    let row = btn.parentNode.parentNode;
    let nombre = row.cells[0].innerHTMlet
    
    let storedWorkers = JSON.parse(localStorage.getItem("workers")) || [];
    let updatedWorkers = storedWorkers.filter(function (worker) {
        return worker.nombre !== nombre;
    });
    localStorage.setItem("workers", JSON.stringify(updatedWorkers));

    // Eliminar la fila de la tabla
    row.parentNode.removeChild(row);
}



// Añadir evento change
document.getElementById('foto').addEventListener('change', mostrarVistaPrevia);

function mostrarVistaPrevia() {
    var input = document.getElementById('foto');
    var preview = document.getElementById('preview');

    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    var files = input.files;
    if (files.length > 0) {
        var img = document.createElement('img');
        img.src = URL.createObjectURL(files[0]);
        img.alt = 'Vista previa';
        img.style.maxWidth = '100px';
        img.style.maxHeight = '100px';
        preview.appendChild(img);
    }
}
