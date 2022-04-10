let accordion = document.getElementsByClassName("rules-permitions");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var rulesPermitionsText = this.nextElementSibling;
    if (rulesPermitionsText.style.maxHeight) {
        rulesPermitionsText.style.maxHeight = null;
    } else {
        rulesPermitionsText.style.maxHeight = rulesPermitionsText.scrollHeight + "px";
    }
  });
}
function action() {
  imageModal2.src = "images/tab-bg-active.png";
  imageModal.src = "images/tab-bg.png";

  blackModal.style.color = "#89B5B7";
  blackModal2.style.color = "#89B5B7";
  whiteblackModal.style.color = "white";
  whiteblackModal2.style.color = "white";

  document.querySelector(".minilock").style.display = "inline-block";
  document.querySelector(".btn-1").style.background = "#2E9EA1";
  document.querySelector(".btn-2").style.background = "#1A293B";

  hideModal.classList.add("hidden");

  tableModal1.classList.remove("hidden");
  tableModal2.classList.add("table2");

  document.querySelector(".undtable2").innerHTML =
    "*ლიდერბორდი და დარჩენილი ქეშ დროფ პრიზების ოდენობა განახლდება ავტომატურად, მონაწილე<br>თამაშების ფანჯარაში";
}

function action1() {
  imageModal.src = "images/tab-bg-active.png";
  imageModal2.src = "images/tab-bg.png";

  blackModal.style.color = "white";
  blackModal2.style.color = "white";
  whiteblackModal.style.color = "#89B5B7";
  whiteblackModal2.style.color = "#89B5B7";

  document.querySelector(".minilock").style.display = "none";
  document.querySelector(".btn-2").style.background = "#2E9EA1";
  document.querySelector(".btn-1").style.background = "#1A293B";

  hideModal.classList.remove("hidden");

  tableModal1.classList.add("hidden");
  tableModal2.classList.remove("table2");

  document.querySelector(".undtable2").innerHTML =
    "*ლიდერბორდი და დარჩენილი ქეშ დროფ პრიზების ოდენობა განახლდება ავტომატურად,მონაწილე თამაშების ფანჯარაში. <br> *თუ მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 40₾-ს, მაშინ მოთამაშის მოგებული მულტიპლიკატორი გამრავლდება 40₾-ზე <br> *ფრისპინების მოგების შემთხვევაში, 10 ცალი ფრისპინის ნომინალი განისაზღვრებამომგებიან სპინზე დადებული ფსონის<br> შესაბამისად. თუ მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 4₾-ს, მოთამაშე ჯამურად მიიღებს 10 ცალ 4 ლარიან ფრისპინს";
}

let activeModal = document.querySelector(".act-1");
let activeModal2 = document.querySelector(".act-2");
let activeModal3 = document.querySelector(".btn-1");
let activeModal4 = document.querySelector(".btn-2");

let imageModal2 = document.querySelector(".box");
let imageModal = document.querySelector(".box2");

let blackModal = document.querySelector(".dark2");
let blackModal2 = document.querySelector(".dark3");

let whiteblackModal = document.querySelector(".whitedark");
let whiteblackModal2 = document.querySelector(".whitedark2");

let hideModal = document.querySelector(".hidden");

let tableModal1 = document.querySelector(".table1");
let tableModal2 = document.querySelector(".table2");



activeModal.addEventListener("click", function () {
  action();
});
activeModal2.addEventListener("click", function () {
  action1();
});
activeModal3.addEventListener("click", function () {
  action();
});
activeModal4.addEventListener("click", function () {
  action1();
});