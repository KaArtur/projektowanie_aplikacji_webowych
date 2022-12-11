window.onload = function () {

    //czasowe opóźnanie

    setTimeout(function (){
        document.getElementById('element-one').textContent = 'Nowa wartość';
        document.getElementById('element-two').innerHTML = '<b>Pogrubiony tekst</b>';

    }, 1500);




};