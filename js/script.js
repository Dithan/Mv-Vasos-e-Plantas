const btnMobile = document.getElementById("btn-mobile");

if (btnMobile) {
  function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }
}

btnMobile.addEventListener("click", toggleMenu);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
