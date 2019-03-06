/* Affichage Panier */

let panierLink = document.querySelector(".link-panier");
let panier = document.querySelector(".panier");
let layer = document.querySelector(".layer");

panierLink.addEventListener("click", function (e) {
  panier.classList.toggle("hidden");
  layer.classList.toggle("none");
  e.preventDefault(); /* Empêcher le rafrachissement de la page au click */
});

layer.addEventListener("click", function (e) {
  panier.classList.toggle("hidden");
  layer.classList.toggle("none");
});


/* Système de panier */

// initialisation du local storage
function localStorageInit() {
  window.localStorage;
  localStorage.setItem("test", "oui");

}

localStorageInit();

