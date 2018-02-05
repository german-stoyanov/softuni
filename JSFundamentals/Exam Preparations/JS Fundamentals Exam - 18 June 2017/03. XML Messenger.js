function solution (input) {
    let pattern = /^<message((\s+[a-z]+="[A-Za-z0-9\s.-]+")+)>((.|\n)+)<\/message>$/;
    let result = '';
    let pattern1=/([a-z]+)="([A-Za-z0-9 .]+)"/g;
    let tokens = pattern.exec(input)
    if(!tokens){
        console.log("Invalid message format");
        return;
    }
    let senders = tokens[1].trim();
    let message = tokens[3];
    let send= '';
    let receive = '';
    let tokens1 = pattern1.exec(senders)
    while(tokens1){
        if(tokens1[1]==='to'){
            receive = tokens1[2]
        }
        else if(tokens1[1]==='from'){
            send = tokens1[2]
        }
        tokens1 = pattern1.exec(senders)
    }
    if(send===''||receive===''){
        console.log("Missing attributes");
        return;
    }
    message = message.split('\n')
    result+=`<article>\n`;
    result+=`    <div>From: <span class="sender">${send}</span></div>
    <div>To: <span class="recipient">${receive}</span></div>\n`
    result+=' <div>\n';
    message.forEach(line=>{
    result+=`    <p>${line}</p>\n`

    })
    result+=' </div>\n'
    result+='</article>\n'
    console.log(result)
}
solution('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old \n lets go out for a beer</message>')