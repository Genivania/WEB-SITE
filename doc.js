document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menu-icon");

    // Verifique se o menu está sendo aberto ou fechado com base no estado do checkbox
    if (this.checked) {
        menuIcon.style.color = "blue"; // Cor quando o menu está ativo
    } else {
        menuIcon.style.color = "#ffffff"; // Cor padrão quando o menu não está ativo
    }

});

