let dataFetch = fetch('./data.json').then((response) => response.json());
let cssFetch = fetch('./style.css').then((response) => response.text());

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([dataFetch, cssFetch]).then(([data, css]) => {
        document.title = data.profile.name;

        var style = document.createElement('style');
        style.innerHTML = Mustache.render(css, data.style);
        document.getElementsByTagName('head')[0].appendChild(style);

        let template = document.getElementById("template").innerHTML;
        document.getElementById("target").innerHTML = Mustache.render(template, data);
    });

});

// for gui_editor preview. Only allow from own origin
window.addEventListener('message', event => {
    if (window.location.origin === event.origin) {
        let template = document.getElementById("template").innerHTML;
        document.getElementById("target").innerHTML = Mustache.render(template, event.data);
    }
})
