const menu = (() => {
    const init = (bodyDiv) => {
        let title = document.createElement('h1');
        title.textContent = "Hello menu";

        bodyDiv.appendChild(title);
    };

    return {
        init
    };
})();

export default menu;