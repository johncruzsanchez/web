// Función principal para mostrar contenido según el dispositivo
function mostrarContenidoSegunDispositivo() {
    // Verificar si el dispositivo es un móvil
    var esMovil = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

    // Crear un contenedor para el contenido
    var contenedor = document.getElementById('contenidoDescarga');

    // Limpiar el contenido existente en el contenedor
    contenedor.innerHTML = '';

    // Si es un móvil, mostrar un diseño específico para móviles; de lo contrario, mostrar otro diseño
    if (esMovil) {
        mostrarContenidoParaMovil(contenedor);  // Mostrar contenido específico para móviles
    } else {
        mostrarContenidoParaPC(contenedor);  // Mostrar contenido específico para PCs
    }
}

// Función para mostrar contenido específico para móviles
function mostrarContenidoParaMovil(contenedor) {
    // Crear un botón de descarga para móviles
    var botonDescarga = document.createElement('a');
    botonDescarga.href = 'https://github.com/';
    botonDescarga.innerHTML = 'Descargar la aplicación para móviles';
    botonDescarga.setAttribute('download', 'RegistrAPP.apk');

    // Agregar el botón al contenedor
    contenedor.appendChild(botonDescarga);
}

// Función para mostrar contenido específico para PCs
function mostrarContenidoParaPC(contenedor) {
    // Crear una imagen QR para PCs
    var imagenQR = document.createElement('img');
    imagenQR.src = 'imagen-qr.png';
    imagenQR.alt = 'Código QR para la descarga en PC';

    // Agregar la imagen al contenedor
    contenedor.appendChild(imagenQR);
}