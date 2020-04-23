function component() {
    const element = document.createElement('div');
    element.innerHTML = "whoops";
    return element;
}

document.body.appendChild(component());
