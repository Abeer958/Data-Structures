const Node = require('./Node');
const DoublyLinkedList = require('./DoublyLinkedList');

//Use code below to test DoublyLinkedList
// In terminal type: node index.js

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.printList();

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.printList();

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');
subway.printList();