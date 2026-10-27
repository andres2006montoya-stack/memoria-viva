// Mapa centrado en El Salvador
const mapa = L.map("mapa").setView([13.75, -88.9], 9);

L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
  attribution: "Tiles &copy; Esri"
}).addTo(mapa);

departamentos.forEach(function (depto) {
  depto.historias.forEach(function (historia, i) {
    let lat, lng;

    if (historia.lat !== undefined && historia.lng !== undefined) {
      // La historia tiene su propia ubicación (por ejemplo, el lago de Ilopango)
      lat = historia.lat;
      lng = historia.lng;
    } else {
      // Si no, se reparte en la cuadrícula del departamento
      const fila = Math.floor(i / 5);
      const col = i % 5;
      lat = depto.lat + (fila - 1) * 0.035 + (col % 2) * 0.008;
      lng = depto.lng + (col - 2) * 0.045 + (fila % 2) * 0.01;
    }

    L.marker([lat, lng])
      .addTo(mapa)
      .bindPopup(
        "<small>" + depto.nombre + "</small>" +
        "<h3>" + historia.titulo + "</h3>" +
        "<p>" + historia.texto + "</p>"
      );
  });
});