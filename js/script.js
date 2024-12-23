function update() {
    const horlogeElement = document.getElementById('horloge');
    const maintenant = new Date();
    const heures = String(maintenant.getHours()).padStart(2, '0');
    const minutes = String(maintenant.getMinutes()).padStart(2, '0');
    const secondes = String(maintenant.getSeconds()).padStart(2, '0');
    horlogeElement.textContent = `${heures}:${minutes}:${secondes}`;
}

update();
setInterval(update, 1000);
