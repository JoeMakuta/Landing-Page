
const hangMenu = document.querySelector("#header-one>div:first-child>div:nth-child(3)");
const hangButton = document.getElementById("icone1")
let countClick = 1;

hangButton.addEventListener('click', function () {
   if (countClick % 2) {
      hangMenu.style.display = "flex"
   }else{
      hangMenu.style.display = "none"
   }
   countClick++
}
);

// hangButton.style.display = 'block';
// hangMenu.style.display = "block"