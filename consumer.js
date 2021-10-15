const amqp = require("amqplib")

connect()

async function connect() {
    
    try {
        
        // establish a connection to the server
        const connection = await amqp.connect("amqp://localhost:5672")
        
        // create a channel in the connection for this consumer
        const channel = await connection.createChannel()

        // check that the queue 'jobs' exists, if not create it
        const results = await channel.assertQueue("jobs")

        channel.consume("jobs", message => {
            console.log(`message from queue: ${message.content.toString()}`);
            var map = JSON.parse(message.content.toString())
            // console.log(map.number);
            if (map.number == 5){
                channel.ack(message)
            }
            if(map.number > 100)
                channel.ackAll()
        })

        console.log("Waiting for messages...");



    } catch (error) {
        console.log(error);
    }

}