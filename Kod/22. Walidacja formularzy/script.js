window.onload=function () {
    let existUserName = ['admin' , 'user'];
    let usernameInput = document.getElementById('username');
    let usernameError = document.getElementById('username-error');

    document.getElementById('form').addEventListener('submit', function (e){
        e.preventDefault();


        if(validUser()){
            window.alert('Poprawnie wysłany formularz');
        }
    });

    function validUser() {
       let userValid = true;

       if (!checkRequiredInput(usernameInput)) {
           userValid = false;
           setErrorText('Podaj nazwę użytkwonika')

       } else if (!checkMinMaxLength(usernameInput,3,12)){
           userValid = false;
           setErrorText('Nazwa poiwnna mieć od 3 do 12 znaków')

       } else if (checkExistUserName(usernameInput)){
           userValid = false;
           setErrorText('Nazwa użytkownika została już wysłana')
       } else {
           usernameError.setAttribute('hidden',"");
       }


       return userValid;

    }

    function checkRequiredInput(input){
       return input.value.length > 0;
    }
    function checkMinMaxLength(input, min,max){
        return input.value.length >= min && input.value.length <= max;
    }
    function checkExistUserName(input) {
        return existUserName.includes(input.value);
    }
    function setErrorText(msg){
        usernameError.textContent = msg;
        usernameError.removeAttribute('hidden');
    }


};