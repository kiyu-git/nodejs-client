const { Client, Server } = require('node-osc');
const io = require('socket.io-client');

// OSCで使用するポートを指定
const client = new Client('127.0.0.1', 3333);

var socket = io.connect('');//接続先のURLを指定 ex.) https://  .com

socket.on('message' ,function (data) {
  client.send('/message', String(data));
  console.log(String(data))
});
