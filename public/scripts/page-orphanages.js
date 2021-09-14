//Inserindo coordenadas             lat     long    zoom
const map = L.map('mapid').setView([-27.2210624,-49.6455527], 15);

//openstreetmap - mapa gratuito
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function addMarker({id, name, lat, lng}){
    //creat popup
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>`)

    //popup
    L.marker([lat, lng], {icon: icon}).addTo(map).bindPopup(popup);
}

const spans = document.querySelectorAll('.orphanages span');

spans.forEach((span)=>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    
    addMarker(orphanage);
});
