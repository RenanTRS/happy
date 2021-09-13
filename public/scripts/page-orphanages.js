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
//creat popup
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

//popup
L.marker([-27.2210624,-49.6455527], {icon: icon}).addTo(map).bindPopup(popup);