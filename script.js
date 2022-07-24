function copyScript() {
    let text = document.getElementById("script-text").textContent;
    navigator.clipboard.writeText(text);
}