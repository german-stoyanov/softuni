function fruit (string) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato','cucumber','pepper','onion','garlic','parsley'];
    if( fruits.includes(string)){
        console.log('fruit')
    }
    else if(vegetables.includes(string)){
        console.log('vegetable')
    }
    else console.log('unknown');

}


fruit('banana');