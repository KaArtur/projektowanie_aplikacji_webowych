window.onload = function () {

    let boxContainer = document.getElementById('box-container');


    let clickCounter = 0;
    let doubleClickCounter = 0;
    let keyDownCounter = 0;

    document.addEventListener('click', function (){
        document.getElementById('click-counter').textContent = ++clickCounter;
    });

    document.addEventListener('dblclick', function (){
        document.getElementById('double-click-counter').textContent= ++doubleClickCounter;
    });

    document.addEventListener('keydown',function (){
        document.getElementById('key-down-click-counter').textContent = ++keyDownCounter;
    });

    document.getElementById('add-element').addEventListener('click', function (){
        let newElement = document.createElement('div');
        newElement.classList.add('box');

        boxContainer.appendChild(newElement);
    });


    boxContainer.addEventListener('click', function (e){
        if (e.target.className.includes('box')){
          //  this.removeChild(e.target);
            e.target.style.backgroundColor = 'white'  //zmieniona wersja na zajeciach
        }
    });






}