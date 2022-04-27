import menu from "./modules/menu";
import home from "./modules/home";
import contact from "./modules/contact"; 

import './style.css'

// constants
const content = document.querySelector("#content");
const body = document.createElement("div");

// variables
let currentTab = '';

function init() {
    let headline = document.createElement("div");

    body.id = "body";

    // headline buttons
    let btnHome     = createHeadlineButton("Home","#",headline);
    let btnMenu     = createHeadlineButton("Menu","#",headline);
    let btnContact  = createHeadlineButton("Contact","#",headline);

    // create headline element
    headline.id = "headline";
    content.appendChild(headline);
    content.appendChild(body);
    // go to main tab
    goToTab("Home")
}

function resetTab() {
    while(body.firstChild) {
        body.removeChild(body.lastChild);
    }
}

const goToTab = (title) => {
    resetTab();

    // remove the old active tab styling class name
    if(currentTab !== '') document.getElementById(currentTab).classList.remove('selected');
    // add new active tab styling class name
    document.getElementById(title).classList.add('selected');
    currentTab = title;

    if(title == 'Home') {
        home.init(body);
    }
    if(title == 'Menu') {
        menu.init(body);
    }
    if(title == 'Contact') {
        contact.init(body);
    }
}

const createHeadlineButton = (title, link, headlineDiv) => {
    let button = document.createElement("a")

    button.id = title;
    button.href = link;
    button.textContent = title;
    button.classList.add("headline-button")
    headlineDiv.appendChild(button);

    button.addEventListener("click", (e) => {
        goToTab(title);
    })

    return button;
}

/* not yet implemented
window.onscroll = () => {
    stickyHeadline()
};*/

document.addEventListener("DOMContentLoaded", (e) => {
    init();
})