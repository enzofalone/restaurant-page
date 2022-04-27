const contact = (() => {
    const init = (bodyDiv) => {
        let title = document.createElement('h1');
        title.textContent = "Hello contact";

        bodyDiv.appendChild(title);
    };

    return {
        init
    };
})();

export default contact;