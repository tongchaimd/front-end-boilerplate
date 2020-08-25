function component() {
    const element = document.createElement('div');
    element.innerHTML = "Lorem Ipsum";
    return element;
}

document.body.appendChild(component());
