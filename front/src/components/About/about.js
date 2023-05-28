// methods: {
//     isInViewport(el) {
//         let top = el.offsetTop;
//         let left = el.offsetLeft;
//         let width = el.offsetWidth;
//         let height = el.offsetHeight;

//         while (el.offsetParent) {
//             el = el.offsetParent;
//             top = el.offsetTop;
//             left = el.offsetLeft;
//         }

//         return (
//             top < (window.pageYOffset + window.innerHeight) &&
//             left < (window.pageXOffset + window.innerWidth) &&
//             (top + height) > window.pageYOffset &&
//             (left + width) > window.pageXOffset
//         );
//     }
    
// }
// window.addEventListener('scroll', function (event) {
//     for (let i = 0; i < this.play.length; i++) {
//         if (isInViewport(this.play[i])) {
//             this.play[i].classList.add('play-on')
//         }
//     }
// })