console.log("In main.js");

class MessageText {
    constructor() {
        this.messageArray = [[], [], []];
    }
    loadMessage(position, message) {
        this.messageArray[position].push(message);
    }
    printMessagesByPosition(position) {
        this.messageArray[position].forEach(function(str, index) {console.log(index, str);});
    }
}



let messageRep = new MessageText();

messageRep.loadMessage(0, "Now is the time");
messageRep.loadMessage(0, 'The quick brown fox');
messageRep.loadMessage(1, 'for all good men');
messageRep.loadMessage(1, 'jumped over the');
messageRep.loadMessage(2, 'to come to the aid of their country');
messageRep.loadMessage(2, 'lazy goat');
messageRep.printMessagesByPosition(0);
messageRep.printMessagesByPosition(1);
messageRep.printMessagesByPosition(2);
