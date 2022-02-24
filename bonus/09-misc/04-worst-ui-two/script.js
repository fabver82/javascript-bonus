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
    let targetPartTwo = target.innerText.slice(5,7);
    let targetPartThree = target.innerText.slice(7,9);
    let targetPartFour = target.innerText.slice(9,11);
    console.log(targetPartOne);
    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let partThree = document.getElementById('part-three');
    let partFour = document.getElementById('part-four');

    //TODO:set up data min and max
    partOne.addEventListener('click',function(){
        let currentValue = parseInt(partOne.innerText);
        let min = parseInt(partOne.getAttribute('data-min'));
        let max = parseInt(partOne.getAttribute('data-max'));
        if (currentValue >= max){
            currentValue = min;
        }else{
            currentValue++;
        }
        partOne.innerText=currentValue;
        targetPartOne = currentValue;
        target.innerText=`+${targetPartOne}${targetPartTwo}0000`;  
    })
    partTwo.addEventListener('click',function(){
        let currentValue = parseInt(partTwo.innerText);
        currentValue++;
        partTwo.innerText=currentValue;
        targetPartTwo = currentValue;
        target.innerText=`+${targetPartOne}${targetPartTwo}0000`;  
    })
    // your code here

})();
