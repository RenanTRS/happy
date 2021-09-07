//create map
const map = L.map('mapid').setView([-27.2210624,-49.6455527], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
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
//L.marker([-27.2210624,-49.6455527], {icon: icon}).addTo(map);