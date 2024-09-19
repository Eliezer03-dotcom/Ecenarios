let currentImageIndex = 0;

function nextImage() {
    const imageContainer = document.getElementById('imagen-conter');
    const totalImages = imageContainer.children.length;
    const imageWidth = imageContainer.children[0].clientWidth; // Ancho de la primera imagen

    if (currentImageIndex <= 7) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // Volver al inicio
    }

    updateImagePosition(imageWidth);
}

function prevImage() {
    const imageContainer = document.getElementById('imagen-conter');
    const totalImages = imageContainer.children.length;
    const imageWidth = imageContainer.children[0].clientWidth; // Ancho de la primera imagen

    if (currentImageIndex > 0) {
        console.log(currentImageIndex);
        currentImageIndex--;
    } else {
        currentImageIndex = 8; // Volver al final
    }
    updateImagePosition(imageWidth);
}

function updateImagePosition(imageWidth) {
    const imageContainer = document.getElementById('imagen-conter');
    imageContainer.style.transform = `translateX(-${currentImageIndex * imageWidth}px)`;
}