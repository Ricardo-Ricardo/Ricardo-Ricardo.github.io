let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/manchester-city.svg'){
        myImage.setAttribute('src','images/psg.png');
    } else {
        myImage.setAttribute('src','images/manchester-city.svg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Manchester City is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'name';
    myHeading.textContent = "Manchester City is cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}