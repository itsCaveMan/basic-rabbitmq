
// amqplib is a 'promise' based library (using Bluebird). which is fantastic because it 'promisefy' our amqp
const amqp = require("amqplib")


const msg = {number: process.argv[2]}

connect(); // run our publisher


async function connect(){

    try {

        // create a connection to our docker rabbitmq server.
        // amqp://localhost:5672 = protocol://url to server:port
        // returns a Bluebird promise
        // this leaves us with our TCP connection
        const connection = await amqp.connect("amqp://localhost:5672")

        // create a channel in the connection. so we can push messages to the server
        // createChannel can give a rejectedChannel , which will throw an error. so you can use then().then().. or the catch below
        const channel = await connection.createChannel()

        // will make sure the passed queue exists on the server. if it does not exist then it will create the queue
        const results = await channel.assertQueue("jobs")

        // take our msg hash map, turn it into a string (as json), and create a buffer from the string
        // you can send any string in the buffer. eg hi -> Buffer.from('hi')
        var bufferToSend = Buffer.from(JSON.stringify(msg))
        channel.sendToQueue("jobs", bufferToSend)

        console.log(`Job sent successfully: ${msg.number}`);

        setTimeout(()=>process.exit(), 500)
        // process.exit()


    } catch (error) {
        console.log(error);
    }

}


