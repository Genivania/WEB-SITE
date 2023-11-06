document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('chec');
    const menuIcon = document.getElementById('menu-icon');
    

    checkbox.addEventListener('change', function() {
        console.log('Evento de alteração acionado');
        if (this.checked) {
            menuIcon.style.color = '#2C62F1';
        } else {
            menuIcon.style.color = '#ffffff';
        }
    });
    
});

