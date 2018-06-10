function solution(commands) {

    let f = (function () {
        let result = {};
        return function (command) {
            let commands = {
                create:function (name) {
                    result[name] = {}
                },
                createInherit: function(name,parent){
                    result[name] = Object.create(result[parent])
                },
                set:function (name,key,value) {
                    result[name][key] = value
                },
                print:function (name) {
                    let result1 = []
                    for (let prop in result[name]) {
                        result1.push(`${prop}:${result[name][prop]}`)
                    }
                    console.log(result1.join(', '))
                }
            };
            let commandTokens = command.split(' ');
            if(commandTokens[0]==='create'&&commandTokens.length===2){
                return commands['create'](commandTokens[1])
            }
            else if(commandTokens[0]==='create'&&commandTokens.length===4){
                return commands['createInherit'](commandTokens[1],commandTokens[3])
            }
            else if(commandTokens[0]==='set'){
                return commands['set'](commandTokens[1],commandTokens[2],commandTokens[3])
            }
            else {
                return commands['print'](commandTokens[1])
            }
        }
    })();
    commands.forEach(command=>{
      f(command)
    })
}
solution(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)

