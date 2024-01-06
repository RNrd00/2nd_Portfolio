const disableFont = document.querySelector(".disable-font");
const addFont = document.querySelector(".add-font");

disableFont.addEventListener("click", () => {
    disableFont.remove();
    addFont.insertAdjacentHTML("afterbegin","<h1 class='disable-font'>ここでは私が調べてきた情報をまとめております<h1>");
});