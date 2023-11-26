const panelButton = document.getElementById("button-panel");

const eventListeners = () => {
    panelButton.addEventListener("click",goPanel)
}
const goPanel = () => {
    const newPageUrl = "panel.html";
    window.location.href = newPageUrl;
}

eventListeners();