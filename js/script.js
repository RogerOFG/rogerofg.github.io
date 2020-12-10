document.getElementById("icon-menu").addEventListener("click", mostar_menu);

function mostar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("mostrar-menu").classList.toggle('mostrar-lateral');

}