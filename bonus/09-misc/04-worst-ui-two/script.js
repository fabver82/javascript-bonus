/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target = document.getElementById('target');
    let targetPartOne = target.innerText.slice(1,4);
    console.log(targetPartOne);
    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let partThree = document.getElementById('part-three');
    let partFour = document.getElementById('part-four');

    partOne.addEventListener('click',function(){
        let currentValue = parseInt(partOne.innerText);
        currentValue++;
        partOne.innerText=currentValue;
        targetPartOne = currentValue;
        target.innerText=`+${targetPartOne}000000`;  
    })
    // your code here

})();
