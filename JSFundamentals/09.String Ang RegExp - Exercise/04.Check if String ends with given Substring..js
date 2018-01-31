function solution (text,ending) {
    if(text.endsWith(ending)){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
solution('This sentence ends with fun?',
    'fun?'
    )