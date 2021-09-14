const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//create map
const map = L.map('mapid', options).setView([-27.2210624,-49.6455527], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//create and add marker
L.marker([-27.2210624,-49.6455527], {icon: icon}).addTo(map);


//image gallery
function selectImage(event){
    const button = event.currentTarget;
    
    //Remover todas as classes .active
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach((button)=>{
        button.classList.remove('active');
    });

    //Selecionar image clicada
    const image = button.children[0]; //pegando o primeiro filho de button
    const imageContainer = document.querySelector('.orphanage-details > img'); //Pegando a imagem grande do container

    //Atualizar o container de image
    imageContainer.src = image.src; //Mudando a imagem grande do container

    //Adicionar a classe .active para este botão
    button.classList.add('active');
}