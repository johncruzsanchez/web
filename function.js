// Función principal para mostrar contenido según el dispositivo
function mostrarContenidoSegunDispositivo() {
    // Verificar si el dispositivo es un móvil
    var esMovil = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

    // Si es un móvil, mostrar el botón de descarga APK; de lo contrario, mostrar la imagen QR
    if (esMovil) {
        mostrarContenidoMovil();  // Cambiado a mostrarContenidoMovil para móviles
    } else {
        mostrarContenidoPC();  // Cambiado a mostrarContenidoPC para PCs
    }
}

// Función para mostrar el contenido en dispositivos móviles
function mostrarContenidoMovil() {
    // Crear un botón de descarga con un estilo diferente
    var botonDescarga = document.createElement('a');
    botonDescarga.href = 'https://github.com/johncruzsanchez/apk/releases/download/v1.0.0/RegistsAPP.apk';
    botonDescarga.innerHTML = 'Obtener la App';
    botonDescarga.setAttribute('download', 'RegistrAPP.apk');
    botonDescarga.classList.add('boton-movil'); // Agregado un estilo específico para móviles

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(botonDescarga);
}

// Función para mostrar el contenido en PC
function mostrarContenidoPC() {
    // Obtener el elemento con el ID 'contenidoDescarga'
    var contenidoDescarga = document.getElementById('contenidoDescarga');

    // Crear una imagen QR con un estilo diferente
    var imagenQR = document.createElement('img');
    imagenQR.src = 'qr.png';
    imagenQR.alt = 'Código QR para la descarga de la app';
    imagenQR.classList.add('imagen-qr-pc'); // Agregado un estilo específico para PCs

    // Agregar la imagen al contenido de descarga o al cuerpo del documento si no hay elemento con ID 'contenidoDescarga'
    if (contenidoDescarga) {
        contenidoDescarga.appendChild(imagenQR);
    } else {
        document.body.appendChild(imagenQR);
    }
}