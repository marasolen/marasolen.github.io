const homeTab = "about-tab";

const selectTab = (tab) => {
    const tabs = document.getElementsByClassName("tab");

    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].id === tab) {
            tabs[i].style.display = "block";
        } else {
            tabs[i].style.display = "none";
        }
    }
};

window.onload = () => {
    const tabButtons = document.getElementsByClassName("tab-button");

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].onclick = () => {
            selectTab(tabButtons[i].getAttribute("value"));
        };
    }

    selectTab(homeTab);
}