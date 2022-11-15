document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json').then((response) => response.json()).then((json) => {     
        document.title = json.profile.name

        fetch('./style.css').then((response) => response.text()).then((body) => {
            var style = document.createElement('style');
            style.innerHTML = Mustache.render(body, json.style);
            document.getElementsByTagName('head')[0].appendChild(style);

            // load html after style to avoid jarring changes
            let template = document.getElementById("template").innerHTML;
            document.getElementById("target").innerHTML = Mustache.render(template, json);
        })
    });

    
});
