//create map
const map = L.map('mapid').setView([-27.2210624,-49.6455527], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

//create and add marker
let marker;

map.on('click', (event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    //remove icon
    marker && map.removeLayer(marker); //Se o marker existir remover layer (para limpar)

    //add icon layer
    marker = L.marker([lat, lng], {icon: icon}).addTo(map)
});

//Adicionar o campo de fotos
function addPhotoField(){
    //Pegar o container de fotos #images
    const container = document.querySelector('#images');

    //Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //Realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];
    if(input.value == ""){
        return;
    }

    //Limpar o campo antes de adicionar ao container de imagens
    input.value = "";
    
    //Adicionar o clone ao containder de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        return;
    }
    
    //Deletar o campo
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event){
    //retirar a classe .active (dos botões)
    const buttons = document.querySelectorAll('.button-select button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    //colocar a classe .active no botão clicado
    const button = event.currentTarget;
    button.classList.add('active');

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}

function validate(event){
    const lat = document.querySelector('input[name=lat]');
    const lng = document.querySelector('input[name=lng]');

    if(lat.value == '' | lng.value == ''){
        event.preventDefault();
        alert('Selecione um ponto no mapa');

    }
}