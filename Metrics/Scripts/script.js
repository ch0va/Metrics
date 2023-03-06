const mobileHeader = document.getElementById("mobile-header");
const blackout = document.getElementById("blackout");
const cbMenu = document.querySelector("#toggle input");
const body = document.getElementById('body');
const links= document.querySelectorAll('#mobile-header  a');
links.forEach((link) => {
  link.onclick = function () {
    cbMenu.checked = false;
    toggle.click();
  };
});


toggle.addEventListener("click", function () {
  mobileHeader.classList.toggle("active");
  blackout.classList.toggle("blackout");
  body.classList.toggle("fixed");
});

blackout.onclick = function () {
  cbMenu.checked = false;
  toggle.click();
  menuOn = false;
};



// if (cbMenu.checked === false) {
//   window.addEventListener("scroll", function () {
//     cbMenu.checked = false;
//     toggle.click();
//   });
// }