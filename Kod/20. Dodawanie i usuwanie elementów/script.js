window.onload = function () {

    setTimeout(function (){

      let element =  document.createElement('div');
      element.textContent = '5';
      document.getElementById('big-box').appendChild(element);

    }, 3000)

    setTimeout( function (){

        let child = document.getElementById('box-two');
        let parent = document.getElementById('big-box');

        parent.removeChild(child);

    }, 5000)


}