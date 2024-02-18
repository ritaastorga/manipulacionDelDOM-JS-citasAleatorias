let botonElemento = document.getElementById("botonCambiarCita");
let citaElemento = document.getElementById("cita");
let autorElemento = document.getElementById("autor");

function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElemento.innerText = `'${citas[indiceAleatorio].texto}'`;
  autorElemento.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElemento.addEventListener("click", cambiarCita);
