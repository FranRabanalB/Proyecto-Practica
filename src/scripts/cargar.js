// Obtener referencias al input, al área de carga y al contenedor de contenido
const inputArchivo = document.getElementById('file');
const contenedorContenido = document.getElementById('contenido');
const areaDeCarga = document.querySelector('.file-upload-label');

// Manejar evento de cambio en el input[type="file"]
inputArchivo.addEventListener('change', (event) => {
    leerArchivo(event.target.files[0]);
});

// Manejar eventos de arrastrar y soltar
areaDeCarga.addEventListener('dragover', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado
    areaDeCarga.classList.add('dragging'); // Agrega una clase visual (opcional)
});

areaDeCarga.addEventListener('dragleave', () => {
    areaDeCarga.classList.remove('dragging'); // Elimina la clase visual (opcional)
});

areaDeCarga.addEventListener('drop', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado
    areaDeCarga.classList.remove('dragging'); // Elimina la clase visual (opcional)
    
    const archivo = event.dataTransfer.files[0]; // Obtener el archivo arrastrado
    if (archivo) {
        leerArchivo(archivo); // Leer el archivo
    }
});

// Función para leer y mostrar el archivo
function leerArchivo(archivo) {
    if (archivo) {
        const lector = new FileReader(); // Crear un lector de archivos

        lector.onload = function (event) {
            const contenido = event.target.result; // Contenido del archivo
            contenedorContenido.textContent = contenido; // Mostrar contenido en el <pre>
        };

        lector.onerror = function () {
            contenedorContenido.textContent = 'Error al leer el archivo.';
        };

        lector.readAsText(archivo); // Leer el archivo
    } else {
        contenedorContenido.textContent = 'No se seleccionó ningún archivo.';
    }
}
