let dataFetch = fetch('./data.json').then((response) => response.json());
let cssFetch = fetch('./style.css').then((response) => response.text());

let styleElem = document.createElement('style');

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([dataFetch, cssFetch]).then(([data, css]) => {
        // translate block type to a boolean for mustache to switch on
        data.blocks.forEach(b => b[b.block + "Block"] = true)

        document.title = data.profile.name;

        styleElem.innerHTML = Mustache.render(css, data.style);
        document.getElementsByTagName('head')[0].appendChild(styleElem);

        let template = document.getElementById("template").innerHTML;
        document.getElementById("target").innerHTML = Mustache.render(template, data);
    });
});

// for gui_editor preview. Only allow from own origin
window.addEventListener('message', event => {
    if (window.location.origin === event.origin) {
        let template = document.getElementById("template").innerHTML;
        document.getElementById("target").innerHTML = Mustache.render(template, event.data);
        cssFetch.then(css => {
            styleElem.innerHTML = Mustache.render(css, event.data.style);
        });
    }
})
