const home = (() => {
    const init = (bodyDiv) => {
        let title = document.createElement('h1');
        
        
        title.textContent = "Hello home";
        
        bodyDiv.appendChild(title);
    };

    return {
        init
    };
})();

export default home;