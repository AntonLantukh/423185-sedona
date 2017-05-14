var link = document.querySelector(".search-name");
var popup = document.querySelector(".search-basis");
var form = popup.querySelector("form");
var datein = popup.querySelector(".date-in");
var dateout = popup.querySelector(".date-out");
var adults = popup.querySelector(".adults");
var children = popup.querySelector(".children");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.toggle("model-content-show");
});

form.addEventListener("submit", function(evt){
  if (!datein.value || !dateout.value || !adults.value || !children.value)
   evt.preventDefault();
   console.log("Нет данных");
});
