var map = L.map('map').setView([41.4822184, -71.3103956], 15);

// osm layer
var osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamVuMCIsImEiOiJja3h0enZmdWQyMTFwMm5vZWRjcm42aDcyIn0.mUm0sqws5K8-nosjB1nReA'
});

osm.addTo(map)

// creating the marker 
let marker = L.icon({
    iconUrl: 'visual assets/icon-location.svg',
    iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]

})

//adding the marker to the map
L.marker([41.482144, -71.310512], {icon: marker}).addTo(map);