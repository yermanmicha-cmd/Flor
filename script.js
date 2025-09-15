document.addEventListener('click', function(event) {
    // Clona la flor que ya creaste en el HTML
    const florOriginal = document.querySelector('.flor-container');
    const nuevaFlor = florOriginal.cloneNode(true);
    
    // Asigna una posición aleatoria en la pantalla
    nuevaFlor.style.position = 'absolute';
    nuevaFlor.style.left = `${event.clientX}px`;
    nuevaFlor.style.top = `${event.clientY}px`;
    
    // Hace que la nueva flor sea visible
    nuevaFlor.style.display = 'block';

    // Agrega la nueva flor al cuerpo del documento
    document.body.appendChild(nuevaFlor);
});