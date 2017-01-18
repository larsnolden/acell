export default class shadowscroll {
    constructor(el) {
        window.addEventListener('scroll', function(){
            if(document.body.scrollTop > 100) {                
                el.style.transition = 'box-shadow 0.4s';
                el.style['box-shadow'] = '0px 2px 11px 0px black';
            }
            else {
                el.style['box-shadow'] = 'none';
            }
        });
    }
}