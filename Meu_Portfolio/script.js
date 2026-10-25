const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

  menu.classList.toggle("open");

});


const links = document.querySelectorAll("#menu a");

links.forEach(function (link) {

  link.addEventListener("click", function () {

    menu.classList.remove("open");

  });

});


const ano = new Date().getFullYear();

document.getElementById("year").textContent = ano;