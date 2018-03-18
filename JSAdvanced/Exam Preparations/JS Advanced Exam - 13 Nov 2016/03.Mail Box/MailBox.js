class MailBox {
    constructor(){
        this.messages = [];
    }
    addMessage(subject,text){
        let message = {}
        message.subject = subject
        message.text = text;
        this.messages.push(message)
        return this;
    }
    deleteAllMessages(){
        this.messages = [];
    }
    findBySubject(substr){
        let pattern = new RegExp(substr,'');
        let results = this.messages.filter(a=>pattern.test(a.subject))
        return results
    }
    toString(){
        if(this.messageCount===0){
            return `* (empty mailbox)`
        }
        else {
            let result = '';
            for (let i = 0; i < this.messageCount; i++) {

                if(i===this.messages.length-1){
                    result += ` * [${this.messages[i].subject}] ${this.messages[i].text}`
                }
                else {
                    result += ` * [${this.messages[i].subject}] ${this.messages[i].text}\n`
                }
            }
            return result
        }

    }
    get messageCount(){
        return this.messages.length;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());

