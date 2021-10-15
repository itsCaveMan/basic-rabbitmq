# ItsCaveMan
## _basic-rabbitmq_
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



## License
MIT
