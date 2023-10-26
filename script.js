// Definición de un arreglo de nombres de imágenes
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

// Índice de la imagen actual que se está mostrando
var currentImageIndex = 0;

// Obtiene la referencia al elemento de la imagen en el documento HTML
var imageElement = document.getElementById("image");

// Obtiene la referencia a los botones "Anterior" y "Siguiente" en el documento HTML
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

// Función para mostrar la imagen actual en el elemento de la imagen
function displayCurrentImage() {
  imageElement.src = images[currentImageIndex];
}

// Agrega un evento de clic al botón "Anterior"
prevButton.addEventListener("click", function() {
  // Decrementa el índice de la imagen actual
  currentImageIndex--;

  // Si el índice es menor que cero, establece el índice al último elemento del arreglo
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  // Muestra la imagen actual
  displayCurrentImage();
});

// Agrega un evento de clic al botón "Siguiente"
nextButton.addEventListener("click", function() {
  // Incrementa el índice de la imagen actual
  currentImageIndex++;

  // Si el índice es igual o mayor que la longitud del arreglo, establece el índice al primero
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // Muestra la imagen actual
  displayCurrentImage();
});

// Muestra la imagen actual al cargar la página
displayCurrentImage();

