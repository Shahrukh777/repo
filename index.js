let mCount = document.getElementById("inc");
let count = 0;

function increment() {
    count = count + 1;
    mCount.innerText = count;
}


let saved = document.getElementById("saved");
function save(){
    let countStr = count + " - ";
    saved.textContent += countStr;
    count = 0;
    mCount.innerHTML = count; 
}

function reset(){
    count = 0;
    mCount.innerHTML = count; 
}