function openPopup(imageSrc, imageText) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupText').textContent = imageText;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
