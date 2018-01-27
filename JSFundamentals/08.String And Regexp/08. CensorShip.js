function solution (text,input = []) {
    for (let str of input) {
        let regex = new RegExp(str,'g');
        let dashes = '-'.repeat(str.length);
        text = text.replace(regex,dashes)
    }
    console.log(text)
}
solution('roses are red, violets are blue', [', violets are', 'red'])