/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let source = document.getElementsByTagName('img').item(0);
    let hover_image = source.getAttribute('data-hover');
    console.log(hover_image);
    source.addEventListener('mouseover',function(){
        source.src = hover_image;
    })
    // your code here

})();
