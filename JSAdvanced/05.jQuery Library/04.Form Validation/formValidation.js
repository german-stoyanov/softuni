function validate() {
    let isChecked = false;
    let usernamePattern = /\b[a-zA-Z0-9]{3,20}\b/;
    let passwordPattern = /\b[a-zA-Z0-9_]{5,15}\b/;
    let patternForEmail = /@.*?\./;
    let patternForCompanyNumber = /^[1-9][0-9]{3}\b/;
    $('#company').click(showCompanyInfo);
    function showCompanyInfo() {
        if(!isChecked){
            isChecked = true;
            $('#companyInfo').css('display','block')
        }
        else{
            isChecked = false;
            $('#companyInfo').css('display','none')
        }
    }
    $('#submit').click(makeTheValidations);
    function makeTheValidations(event) {
        let isValid = true;
        event.preventDefault();
        $('#username').css('border-color','');
        $('#email').css('border-color','');
        $('#password').css('border-color','');
        $('#confirm-password').css('border-color','');
        $('#companyNumber').css('border-color','');
        if(!usernamePattern.test($('#username').val())){
            $('#username').css('border-color','red');
            isValid = false
        }
        if(!((passwordPattern.test($('#password').val()))&&$('#password').val()===$('#confirm-password').val())){
            $('#password').css('border-color','red');
            $('#confirm-password').css('border-color','red');
            isValid = false
        }
        if(!patternForEmail.test($('#email').val())){
            $('#email').css('border-color','red');
            isValid = false
        }

        if($('#companyInfo').css('display')==='block') {
            if (!patternForCompanyNumber.test($('#companyNumber').val())) {
                $('#companyNumber').css('border-color', 'red');
                isValid = false
            }
        }
        if(isValid){
            $('#valid').css('display','block')
        }
        else{
            $('#valid').css('display','none')
        }
    }
}