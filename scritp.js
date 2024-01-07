const disableFont = document.querySelector(".disable-font");
const addFont = document.querySelector(".add-font");
const contentNumber = document.querySelectorAll(".content-number > h1");

disableFont.addEventListener("click", () => {
    disableFont.remove();
    addFont.insertAdjacentHTML("afterbegin","<h1 class='disable-font'>ここでは私が調べてきた情報をまとめております<h1>");
});

for(let i = 0; i < contentNumber.length; i++) {
    contentNumber[i].insertAdjacentHTML("afterbegin",i + ".");
}