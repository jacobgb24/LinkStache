document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json').then((response) => response.json()).then((json) => {     
        let body = document.getElementById("body");
        body.innerHTML = Mustache.render(body.innerHTML, json);
    });
});
