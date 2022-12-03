"use strict";
function connect() {
    return require("amqplib")
        .connect("amqp://localhost")
        .then(function (conn) { return conn.createChannel(); });
}
function createQueue(channel, queue) {
    return new Promise(function (resolve, reject) {
        try {
            channel.assertQueue(queue, { durable: true });
            resolve(channel);
        }
        catch (err) {
            reject(err);
        }
    });
}
function sendToQueue(queue, message) {
    connect()
        .then(function (channel) { return createQueue(channel, queue); })
        .then(function (channel) {
        return channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    })
        .catch(function (err) { return console.log(err); });
}
function consume(queue, callback) {
    connect()
        .then(function (channel) { return createQueue(channel, queue); })
        .then(function (channel) { return channel.consume(queue, callback, { noAck: true }); })
        .catch(function (err) { return console.log(err); });
}
module.exports = {
    sendToQueue: sendToQueue,
    consume: consume,
};
