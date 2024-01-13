const disableFont = document.querySelector(".disable-font");
const addFont = document.querySelector(".add-font");
const contentNumber = document.querySelectorAll(".content-number > h1");
const observerTest = document.querySelector(".observer-test");

const callback = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("inView");
        } else {
            entry.target.classList.remove("inView");
        }
    });
}

const ot = new IntersectionObserver(callback);

disableFont.addEventListener("click", () => {
    disableFont.remove();
    addFont.insertAdjacentHTML("afterbegin","<h1 class='disable-font'>ここでは私が調べてきた情報をまとめております<h1>");
});

for(let i = 0; i < contentNumber.length; i++) {
    contentNumber[i].insertAdjacentHTML("afterbegin",i + ".");
}

ot.observe(observerTest);

//https://qiita.com/greencha/items/ee49e2acd885eddc5570 ←ここを参照中