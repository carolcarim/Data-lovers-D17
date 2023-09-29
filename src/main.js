import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/got/got.js";

const dataGot = data.got;

const root = document.querySelector("#root");

root.appendChild(renderItems(dataGot));
const liContainerAll = root.querySelectorAll(".container");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close");

liContainerAll.forEach((liContainer) => {
  liContainer.addEventListener("click", function (event) {
    modal.style.display = "block";
  });
});

console.log(dataGot);

const modalContent = document.querySelector(".modal-content");
const character = dataGot[0];

const X = `
  Nombre: ${dataGot.fullName} <br>
  Casa: ${dataGot.family} <br>
  Título: ${dataGot.title} <br>
  Año de nacimiento: ${dataGot.born} <br>
  Año de muerte: ${dataGot.death} <br>
  `;

modalContent.innerHTML = X;
console.log(X);

// Cerrar el modal cuando se hace click en el botón de cierre
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cierra el modal si se hace click en el fondo oscuro
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});