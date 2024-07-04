document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    // programacao das abas de videos youtube
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('videos__play--is-active');
        });
    };
});

function escondeTodasAbas() {
    const tabsContainers = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainers.length; i++) {
        tabsContainers[i].classList.remove('videos__play--is-active');
    };
};