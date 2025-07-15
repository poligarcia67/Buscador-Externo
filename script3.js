function redirigir3(selectId, fechaId) {
  const cantidad = document.getElementById(selectId).value;
  const fecha = document.getElementById(fechaId).value;
  const origenId = document.getElementById("destinoId").value;

  if (!fecha) {
    alert("Por favor seleccioná una fecha.");
    return;
  }

  const urlBase = "https://reservadirecta.sittnet.net/Commerce/TrenSolar/ServicioTransporteFerroviario/ServiciosButacasOmnibusBusquedaExterna";
  const queryParams = `?origenId=4791&destinoId=${origenId}&idaVuelta=false&fechaIda=${fecha}&fechaVuelta=&cantidadPasajeros=${cantidad}&TipoExperiencia=L`;
  const urlFinal = urlBase + queryParams;
  
  window.open(urlFinal, '_blank');
}
