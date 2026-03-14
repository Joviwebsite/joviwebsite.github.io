
function Backbottom() {
    const btn = document.querySelector(".back-btn");
    btn.disabled = true;
    let dots = 0;
    const loading = setInterval(() => {
        dots = (dots + 1) % 4;
        btn.innerText = "Loading" + ".".repeat(dots);}, 300);
        setTimeout(() => {clearInterval(loading);
        window.history.back();},2000);
    }