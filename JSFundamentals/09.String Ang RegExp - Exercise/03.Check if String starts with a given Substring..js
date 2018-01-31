function solution(text,starting) {
    let startingText = text.substring(0,starting.length);
    if(startingText === starting){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
solution('Marketing Fundamentals, starting 19/10/2016',
'Marketing Fundamentals, sta'
)