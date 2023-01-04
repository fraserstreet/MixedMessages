console.log("In main.js");

class MessageText {
    constructor() {
        this.messageArray = [[], [], []];
    }
    loadMessage(position, message) {
        try {
            if ((position < 0) || (position > 2)) {
                throw "position must be 0-2";
            }
            this.messageArray[position].push(message);
        } catch (err) {
            console.log(`Range error position=${position}`);
        }
    }
    printMessagesByPosition(position) {
        this.messageArray[position].forEach(function (str, index) { console.log(index, str); });
    }
}



let messageRep = new MessageText();

messageRep.loadMessage(0, "Now is the time");
messageRep.loadMessage(0, 'The quick brown fox');
messageRep.loadMessage(1, 'for all good men');
messageRep.loadMessage(1, 'jumped over the');
messageRep.loadMessage(2, 'to come to the aid of their country');
messageRep.loadMessage(2, 'lazy goat');
messageRep.loadMessage(4, 'should be an error');
messageRep.printMessagesByPosition(0);
messageRep.printMessagesByPosition(1);
messageRep.printMessagesByPosition(2);
console.table(messageRep);
// messageRep.printMessagesByPosition(4);
