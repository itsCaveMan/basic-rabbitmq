# ItsCaveMan
## _basic-rabbitmq_
🐰RabbitMQ 🐳Docker 📮NPM 🧩Node.JS 
##### _Bare bones RabbitMQ playgound_


[![N|Solid](https://www.cavan.works/static/images/favi.jpg)](http://www.cavan.works)


 <br/>
 <br/>
   


## Tech

Used in this project:

- [RabbitMQ] - open-source, distributed messaging queue
- [Docker] - software platform to build, test, and deploy containerised workloads
- [NPM] - default package manager for the JavaScript
- [Node.js] - open-source, cross-platform, back-end JavaScript runtime environment

   
[RabbitMQ]: <https://www.rabbitmq.com/>
[Docker]: <https://www.docker.com/>
[NPM]: <https://www.npmjs.com/>
[Node.js]: <https://nodejs.org/>

 <br/> <br/> <br/>


## How to

1. with docker installed, run: 
```sh
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

2. open repo in vscode
3. in CLI, run:
```sh
npm run publish "your message here"
npm run consume
```

 <br/> <br/> <br/>

# STUDY NOTES: on RabbitMQ


tutorial --> https://www.youtube.com/watch?v=Cie5v59mrTg


RabbitMQ - open source, distributed messaging que
<br>
Written in ERLANG language, best suited for massively scalable soft real-time systems with high reliability
<br>
Supports many communication protocols
<br>
RabbitMQ Is a soft real-time system
<br>
It was originally trying to solve a problem called **Spaghetti Mesh Architecture**
<br>
The left figure is clients communicating to each other, the right is a queue service such as RabbitMQ
https://i.ibb.co/xGjzsxN/Impact-N.png
![architecture](https://i.ibb.co/xGjzsxN/Impact-N.png)


  

  

  

  

  
<br><br>
Rabbits own protocol = AMQP - Advanced message queue protocol

<br>

**RabbitMQ Components:** index

-   AMQP
-   RabbitMQ Server
-   Channels
-   Queue
-   Publisher
-   Consumer
-   Exchange
-   Protocols


  https://i.ibb.co/GJwhpfY/RabbitMQ.png
  
  ![Abstract view](https://i.ibb.co/GJwhpfY/RabbitMQ.png)


  <br>
  
RabbitMQ top level abstract view:

1.  The RabbitMQ server
2.  The Publisher
3.  The two way **Stateful** coms **connection** between the Publisher and RabbitMQ using AMQP
4.  The Consumer
5.  Another two way **Stateful** coms **connection** between the Consumer and RabbitMQ using AMQP
6.  Channels
7.  Exchanges

  

  <br>
  <br>
  
**RabbitMQ Server**

-   Rabbit uses a middle/Central layer that all clients communicate to
-   This solves the spaghetti mess
-   Could be multiple servers, could be distributed
-   Uses listens to port **5672** by default

-   It is using TCP so it has to _listen_

-   **Pushes** message from publishers to intended consumers

  
<br>

**Publisher**

-   “Hey I am the client and I want to publish a message to the consumers that are interested in this message”
-   Establishes a **stateful TCP** connection between itself(the publisher) and the RabbitMQ server

-   It is a 2 way/bi directional communication connection, therefor the underlying transportation protocol is raw TCP.

-   Not HTTP, but rather **raw TCP**

-   AMQP wraps around the TCP. This adds extra stuff like its own HEADERS

-   Publishers and Consumers are not aware of Queues. However they are aware of **Exchanges**
-   Publishers can freely be created and killed, unlike consumers who upon creation must stay alive

  
<br>

**Consumer**

-   Receives message from server
-   Must ‘acknowledge’ messages in order to clear them from the queue
-   Message acknowledgment is very complicated and gets extremely in-depth, because its so important
-   RabbitMQ guarantees 1 successful acknowledgment

  
<br>

**Channels**

-   Channels take 1 stateful TCP bidirectional connection between Publisher/Consumer and RabbitMQ server, and, splits it up.
-   For example, Let’s say a particular view/page on your frontend has 5 consumers, well, rather than **each consumer** creating a connection to Rabbit server, the client can create **One** connection, and share it among each consumers. Each consumers gets their “Channel” in the connection to the Rabbit server
-   Channels keep things separated. each consumers connection is separated from other consumers
-   The technical terminology for Channels is **Multiplexing**

-   HTTP/2 uses multiplexing

  
<br>
  

**Exchanges**

-   Exchanges take care of propagating messages into Queues
-   The default exchange works for most cases
-   Advanced uses. Kinda like Django middleware
-   Support algorithms/filters to ‘fan out’ to different queues and stuff

  
<br>
  

**AMQP**

-   Advanced Messaging Queue Protocol
-   Basically wraps raw TCP with extra stuff like HEADERS
-   Has ‘clients’,
-   In js, using the **require(“amqplib”) ,** If anything returns a Bluebird, then that is a promise so must _await_ it

  

  

  

  

  
<br>
  

**How to RabbitMQ**

1.  With docker installed
2.  run: docker run hello-world

1.  You should see Hello World! In terminal. This confirms docker is installed correctly

4.  Now run: docker run --name rabbitmq -p 5672:5672 rabbitmq

1.  docker run (a container) --name (immediately name your new container) rabbitmq -p (expose this port) _port:port_ 5672:5672 rabbitmq(the actual rabbitmq container image that docker will pull from public container repository)
2.  When the image is downloaded and Spinned(span) up, that terminal will be ‘occupied’ as the running process of the container

6.  Create project folder **rabbitmq**
7.  Open folder in vscode
8.  Make publisher.js
9.  Run in terminal: npm init -y (creates package.json. -y tell npm “I know what I am doing just create package.json”)

  

  

Tips:

  


What we are going to build:
https://i.ibb.co/9G6PFWg/Async-Job-Manager.png
![Async job manager](https://i.ibb.co/9G6PFWg/Async-Job-Manager.png)
  

**Asynchronous job execution manager/engine**.

-   Publisher will publish jobs
-   The appropriate consumer for that job type will get the message and do the job




 <br/>
 <br/>




## License
MIT
