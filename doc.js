document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('chec');
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.querySelectorAll('.menu_novo');

    // Função para verificar se um elemento é descendente de outro
    function isDescendant(element, ancestors) {
        for (let i = 0; i < ancestors.length; i++) {
            if (element === ancestors[i] || ancestors[i].contains(element)) {
                return true;
            }
        }
        return false;
    }

    // Função para lidar com o clique em um item de menu
    function handleClick(event) {
        console.log(event.target);
        console.log(event.currentTarget);
    }

    // Função para abrir o menu
    function openMenu() {
        menuIcon.style.color = '#2C62F1';
        menuItems.forEach(function(item) {
            item.addEventListener('click', handleClick);
        });
        document.addEventListener('click', closeMenuOnClickOutside);
    }

    // Função para fechar o menu quando clicar fora
    function closeMenuOnClickOutside(event) {
        if (event.target !== menuIcon && !isDescendant(event.target, menuItems)) {
            checkbox.checked = false;
            menuIcon.style.color = '#ffffff';
            menuItems.forEach(function(item) {
                item.removeEventListener('click', handleClick);
            });
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }

    // Lidar com a alteração do checkbox
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            openMenu();
        } else {
            checkbox.checked = false; // Impedir que o checkbox seja desmarcado
            closeMenuOnClickOutside();
        }
    });
});