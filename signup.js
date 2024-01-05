function setError(error) {
let sms = document.querySelector('.sms');
sms.innerHTML = error;
}


function validation(){
    let fName = document.querySelector('.fName');
    let lName = document.querySelector('.lName');
    let email = document.querySelector('.email');
    let pass = document.querySelector('.password');

    let validationResult = true;
    if(fName.length<3){
        console.log("*Enter a vaild name");
        validationResult = false;
    }
    return validationResult;
}
