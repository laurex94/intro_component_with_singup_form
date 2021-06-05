
/*input functions*/
function start (){
    /*div forms*/
    let formControlInputName = document.getElementById('FormControlInput1');
    let formControlInputLastName = document.getElementById('FormControlInput2');
    let formControlInputEmail = document.getElementById('FormControlInput3');
    let formControlInputPassword = document.getElementById('FormControlInput4');
    /*Img warning*/
    let warningName = document.getElementById('imgWarning1');
    let warningLastName = document.getElementById('imgWarning2');
    let warningEmail = document.getElementById('imgWarning3');
    let warningPassword = document.getElementById('imgWarning4');
    /*Paragraph warning */
    let pWarningName = document.getElementById("p-warning1");
    let pWarningLastName = document.getElementById("p-warning2");
    let pWarningEmail = document.getElementById("p-warning3");
    let pWarningPassword = document.getElementById("p-warning4");
    /*Inputs*/
    const name = document.getElementById('name');
    const lastname = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const button = document.getElementById ('button');
    /*input listeners*/
    name.addEventListener( 'input', validate);
    lastname.addEventListener( 'input', validate);
    email.addEventListener( 'input', validate);
    password.addEventListener( 'input', validate);
    button.addEventListener("click", validate)
    
    //validate ();
    function validate() {
        /*Validating name*/
        if(name.value==="") {
            warningName.classList.remove("img-active");
            formControlInputName.classList.remove('mb-4');
            formControlInputName.classList.remove('border-dark');
            pWarningName.classList.remove("active");
        }else {
            warningName.classList.add("img-active");
            formControlInputName.classList.add('mb-4');
            formControlInputName.classList.add('border-dark');
            pWarningName.classList.add("active");
        } 
        /*Validating last name*/
        if(lastname.value==="") {
            warningLastName.classList.remove("img-active");
            formControlInputLastName.classList.remove('mb-4');
            formControlInputLastName.classList.remove('border-dark');
            pWarningLastName.classList.remove("active")
        }else {
            warningLastName.classList.add("img-active");
            formControlInputLastName.classList.add('mb-4');
            formControlInputLastName.classList.add('border-dark');
            pWarningLastName.classList.add("active");
        }
        /*Validating email*/
        if(email.value==="") {
            warningEmail.classList.remove("img-active");
            formControlInputEmail.classList.remove('mb-4');
            formControlInputEmail.classList.remove('border-dark');
            pWarningEmail.classList.remove("active");
        }else {
            warningEmail.classList.add("img-active");
            formControlInputEmail.classList.add('mb-4');
            formControlInputEmail.classList.add('border-dark');
            pWarningEmail.classList.add("active");
        }
        /*Validating password*/
        if(password.value==="") {
            warningPassword.classList.remove("img-active");
            formControlInputPassword.classList.remove('mb-4');
            formControlInputPassword.classList.remove('border-dark');
            pWarningPassword.classList.remove("active");
        }else {
            warningPassword.classList.add("img-active");
            formControlInputPassword.classList.add('mb-4');
            formControlInputPassword.classList.add('border-dark');
            pWarningPassword.classList.add("active");
        }
    }
}

/*call input functions*/
window.addEventListener('load', start)
