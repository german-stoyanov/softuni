function solution(username,email,number,text=[]) {
    let result = [];
    let regexUserName = /<![a-zA-Z]+!>/g;
    let regexEmail = /<@[a-zA-Z]+@>/g;
    let regexNumber = /<\+[a-zA-Z]+\+>/g;
    function replacer (str){

            str = str.replace(regexUserName,username);


            str =  str.replace(regexEmail,email);


            str =  str.replace(regexNumber,number)
            console.log(str)



    }
    text.forEach(x =>{
        replacer(x);


    })

}
solution('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
)