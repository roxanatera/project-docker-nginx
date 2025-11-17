// Actualizar fecha y hora en tiempo real
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('datetime').textContent = 
        `Última actualización: ${now.toLocaleDateString('es-ES', options)}`;
}

// Actualizar cada segundo
setInterval(updateDateTime, 1000);
updateDateTime();