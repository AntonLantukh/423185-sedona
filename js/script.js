var link = document.querySelector(".search-name");
var popup = document.querySelector(".search-basis");
var form = popup.querySelector("form");
var datein = popup.querySelector(".date-in");
var dateout = popup.querySelector(".date-out");
var adults = popup.querySelector(".adults");
var children = popup.querySelector(".children");
var dateininput = localStorage.getItem("datein");
var dateoutinput = localStorage.getItem("dateout");
var adultsinput = localStorage.getItem("adults");
var childreninput = localStorage.getItem("children");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.toggle("model-content-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.toggle ("model-content-show");
  }
});

if (dateininput) {
  datein.value = dateininput;
};

if (dateoutinput) {
  dateout.value = dateoutinput;
};

if (adultsinput) {
  adults.value = adultsinput;
};

if (childreninput) {
  children.value = childreninput;
};

form.addEventListener("submit", function(evt){
  if (!datein.value || !dateout.value || !adults.value || !children.value) {
   evt.preventDefault();
   popup.offsetWidth = popup.offsetWidth;
   popup.classList.toggle("modal-error");
} else {
   localStorage.setItem("datein", datein.value);
   localStorage.setItem("dateout", dateout.value);
   localStorage.setItem("adults", adults.value);
   localStorage.setItem("children", children.value);
}
});
