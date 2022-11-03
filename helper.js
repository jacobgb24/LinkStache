document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json').then((response) => response.json()).then((json) => {     
        let body = document.getElementById("body");
        body.innerHTML = Mustache.render(body.innerHTML, json);

        fetch('./style.css').then((response) => response.text()).then((body) => {
            var style = document.createElement('style');
            style.innerHTML = Mustache.render(body, json.style);
            document.getElementsByTagName('head')[0].appendChild(style);
        })
    });

    
});
