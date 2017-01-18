export default class scroll {
    constructor(el) {
        el.addEventListener('click', function() {
            document.querySelector('#' + el.innerHTML.toLowerCase().toString()).scrollIntoView({ behavior: 'smooth' });
        })         
    }
}