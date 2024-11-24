// Ejemplo: Mostrar un mensaje al hacer clic en el botón "Únete ahora"
const botonUnirse = document.querySelector('button');
botonUnirse.addEventListener('click', () => {
  alert('¡Gracias por tu interés! Pronto nos pondremos en contacto contigo.');
});
const enlaces = document.querySelectorAll('nav ul li a');
const secciones = document.querySelectorAll('section');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault();
    const seccionId = enlace.getAttribute('href').substring(1); // Obtiene el ID de la sección
    secciones.forEach(seccion => {
      seccion.style.display = 'none'; // Oculta todas las secciones
    });
    document.getElementById(seccionId).style.display = 'block'; // Muestra la sección seleccionada
  });
});
