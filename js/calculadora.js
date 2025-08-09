function calcularPaneles() {
  const consumo = parseFloat(document.getElementById("consumo").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(consumo) || consumo <= 0) {
    resultadoDiv.style.display = "none";
    return;
  }

  const produccionPorPanel = 50; // 50 kWh/mes por panel
  const paneles = Math.ceil(consumo / produccionPorPanel);
  const produccionTotal = paneles * produccionPorPanel;
  const cobertura = Math.min((produccionTotal / consumo) * 100, 100).toFixed(1);

  document.getElementById("paneles").textContent = paneles;
  document.getElementById("produccion").textContent = produccionTotal;
  document.getElementById("cobertura").textContent = cobertura;
  resultadoDiv.style.display = "block";
}