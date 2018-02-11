function solution (input = []) {
    let bannedUsers = [];
    let undefinedThings = [];
    let tokens = input.pop().split(' ');
    tokens.forEach(token=>{
        bannedUsers.push(token)
    })
    let  blockStats = ['closed'];
    let pattern = /#([a-zA-z][a-zA-Z_-]{1,}[a-zA-Z0-9]+)\b/g;
    let pattern2 = /<code>(.|\n)+?<\/code>/g;
    let text = '';
    input.forEach(line=>{
        text+=line+'\n';
    })
    let match = pattern2.exec(text);
    while(match){
        let ChangedMatch = match[0].replace(pattern,function (match) {
            undefinedThings.push(match)
            return undefined
        })
        text = text.replace(match[0],ChangedMatch)
        match = pattern2.exec(text)
    }
    let newLines = text.split('\n');
    newLines.forEach(line=>{
        let match = pattern.exec(line);
        line = line.replace(pattern,function (match,group1) {
            if(bannedUsers.includes(group1)){
                return match.replace(match,'*'.repeat(group1.length))
            }
            else{
                return match.replace(match,`<a href="/users/profile/show/${group1}">${group1}</a>`)
            }
        })
        console.log(line.replace(/\bundefined\b/g,function (match) {
            return undefinedThings.shift()
        }))
    })
}
solution([
    '<code>',
'gosho',
'#gosho',
'#madafaka',
'</code>',
'#1nval1d says yoo and I had to reply, so I',
'typed yoo muthafucka and then',
'#another_invalid_ said gz gg gj so I had to go incognito',
'and changed my user name to:',
'#Make_me_a_LINK!',
'the code in question is:',
'<code>',
'Console.WriteLine("#nimoa");',
'</code>',
'Make_me_a_LINK'
])