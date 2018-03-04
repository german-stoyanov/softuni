function solution (commands) {
    let f = (function () {
        let result = [];
        return function (command) {
            let commands = {
                add: function (element) {
                    result.push(element)
                },
                remove: function (element) {
                    result = result.filter(e=>e!==element)
                },
                print: () => {console.log(result.join(','))}
            }
            return commands[command.split(' ')[0]](command.split(' ')[1])
        }
    })();
    commands.forEach(command=>{
        f(command)
    })

}
solution(['add hello', 'add again', 'remove hello', 'add again','print'])

