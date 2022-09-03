const LinkedList = require('./LinkedList');

//Use code below to test LinkedList
// In terminal type: node index.js

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
seasons.printList();

console.log(seasons)