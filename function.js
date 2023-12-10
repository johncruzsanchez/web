// Función principal para mostrar contenido según el dispositivo
function mostrarContenidoSegunDispositivo() {
    // Verificar si el dispositivo es un móvil
    var esMovil = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

    // Si es un móvil, mostrar el botón de descarga APK; de lo contrario, mostrar la imagen QR
    if (esMovil) {
        mostrarBotonDescargaAPK();  // Cambiado a mostrarBotonDescarga para móviles
    } else {
        mostrarImagenQR();  // Cambiado a mostrarImagenQR para PCs
    }
}

// Función para mostrar el botón de descarga para APK
function mostrarBotonDescargaAPK() {
    // Crear un botón de descarga para APK
    var botonDescargaAPK = document.createElement('a');
    botonDescargaAPK.href = '';
    botonDescargaAPK.innerHTML = 'Descargar APK';
    botonDescargaAPK.setAttribute('download', 'RegistrAPP.apk');

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(botonDescargaAPK);
}

// Función para mostrar la imagen QR
function mostrarImagenQR() {
    // Obtener el elemento con el ID 'contenidoDescarga'
    var contenidoDescarga = document.getElementById('contenidoDescarga');

    // Crear una imagen QR
    var imagenQR = document.createElement('img');
    imagenQR.src = 'imagen-qr.png';
    imagenQR.alt = 'Código QR para la descarga';

    // Agregar la imagen al contenido de descarga
    contenidoDescarga.appendChild(imagenQR);
}