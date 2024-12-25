import { Games } from "./games.module.js";
const game = new Games();

window.addEventListener("scroll", function () {
   if (scrollY > 40) {
      document.querySelector("nav").classList.add("fixed-top");
   } else {
      document.querySelector("nav").classList.remove("fixed-top");
   }

});




