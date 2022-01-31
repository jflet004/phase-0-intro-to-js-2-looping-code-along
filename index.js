function writeCards(names, eventName) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
 
    return messages;
}
writeCards(["Jose", "Cassandra", "Batboy", "Luigi"], "birthday");

function countDown(int) {
    while (int >= 0) {
        console.log(int--);
    }
}
//console.log(countDown(20));