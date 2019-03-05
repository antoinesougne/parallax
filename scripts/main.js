var panierLink = document.querySelector(".link-panier");
var panier = document.querySelector(".panier");

panierLink.addEventListener("click", function(e) {
  panier.classList.toggle("hidden");
  e.preventDefault();
});
