const Graph = require('./Graph');

// Use code below to test Graph.

const trainNetwork = new Graph(true, true);

const losAngeles = trainNetwork.addVertex('Los Angeles');
const sanFrancisco = trainNetwork.addVertex('San Francisco');
const newYork = trainNetwork.addVertex('New York');
const atlanta = trainNetwork.addVertex('Atlanta');
const denver = trainNetwork.addVertex('Denver');
const calgary = trainNetwork.addVertex('Calgary');

trainNetwork.addEdge(sanFrancisco, losAngeles, 400);
trainNetwork.addEdge(losAngeles, sanFrancisco, 400);
trainNetwork.addEdge(newYork, denver, 1800);
trainNetwork.addEdge(denver, newYork, 1800);
trainNetwork.addEdge(calgary, denver, 1000);
trainNetwork.addEdge(denver, calgary, 1000);
trainNetwork.addEdge(losAngeles, atlanta, 2100);
trainNetwork.addEdge(atlanta, losAngeles, 2100);

trainNetwork.print();
console.log('\n------');

trainNetwork.removeEdge(newYork, denver);
trainNetwork.removeVertex(calgary);
trainNetwork.removeEdge(denver, calgary);


trainNetwork.print();
