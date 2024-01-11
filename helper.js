let dataFetch = fetch('./data.json').then((response) => response.json());
let cssFetch = fetch('./style.css').then((response) => response.text());

let styleElem = document.createElement('style');

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([dataFetch, cssFetch]).then(([data, css]) => {
        
        document.title = data.profile.name;

        styleElem.innerHTML = Mustache.render(css, data.style);
        document.getElementsByTagName('head')[0].appendChild(styleElem);

        render(data)
    });
});


// for gui_editor preview. Only allow from own origin
window.addEventListener('message', event => {
    if (window.location.origin === event.origin) {
        render(event.data)
        console.log(event)
        cssFetch.then(css => {
            styleElem.innerHTML = Mustache.render(css, event.data.style);
        });
    }
})

async function render(data) {
    // translate block type to a boolean for mustache to switch on
    data.blocks.forEach(b => b[b.block + "Block"] = true)
    // read and store file contents for html blocks
    for (const block of data.blocks.filter(b => b.block == "html")) {
        block.content = await fetch(block.file).then((response) => response.text())
    };
    let template = document.getElementById("template").innerHTML;
    document.getElementById("target").innerHTML = Mustache.render(template, data);
}
