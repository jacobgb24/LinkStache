document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json').then((response) => response.json()).then((json) => {     
        render('profile', json.profile)

    });
});

function render(elementId, data) {
    let element = document.getElementById(elementId);
    element.innerHTML = Mustache.render(element.innerHTML, data);
}