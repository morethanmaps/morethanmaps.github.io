var baMap = L.map('baMap', {tap: false}).setView([-17.481474, 177.664622], 12);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(baMap);

L.marker([-17.466968, 177.632485])
    .addTo(baMap)
	.bindPopup('<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#mangroveModal">Ba Mangroves</button>')
    .openPopup();

L.marker([-17.482582, 177.665842])
    .addTo(baMap)
    .bindPopup('<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#fishingBoatModal">Fishing Boats</button>');

L.marker([-17.549451, 177.740522])
    .addTo(baMap)
    .bindPopup('<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#pineappleModal">Pineapple Farm</button>');



