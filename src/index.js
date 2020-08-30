function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'app');
    return element;
}

document.body.appendChild(component());
document.title = "Lorem";

import Vue from 'vue/dist/vue.js';
import App from './App.vue';

const app = new Vue({
    el: '#app',
    render: h => h(App),
});
