function palindrome (input) {
    function isPalindrome(input) {
        let returnedvalue = true;
        for (let i = 0;i<input.length/2;i++){
            if(input[i]!=input[input.length-i-1]){
                returnedvalue =  false;
            }
        }
        return returnedvalue
    }
    if(!isPalindrome(input)){
        console.log('false')
    }
    else {
        console.log('true')
    }
}
palindrome('racecar')