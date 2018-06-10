function solution(commands=[]) {
    let playTheCommands = (function () {
        let text = ''
        return function (command) {
            let tokens = command.split(' ')
            if(tokens[0]==='append'){
                text+=tokens[1];
            }
            else if(tokens[0]==='print'){
                console.log(text)
            }
            else if(tokens[0]==='removeStart'){
                text = text.slice(Number(tokens[1]))
            }
            else if(tokens[0] ==='removeEnd'){
                text = text.slice(0,text.length-Number(tokens[1]))
            }
        }
    })()

    commands.forEach(command=>{
        playTheCommands(command)
    })
}
solution(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']
)
