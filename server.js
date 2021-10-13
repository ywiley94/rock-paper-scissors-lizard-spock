const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
 
  else if (page == '/api') {
    let computerChoice = Math.random();
    if (computerChoice < 0.2) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.4) {
        computerChoice = "paper";
    } else if (computerChoice <= 0.6) {
        computerChoice = "scissors";
    } else if (computerChoice <= 0.8) {
        computerChoice = "lizard";
    } else {
        computerChoice = "spock";
    }

    if('student' in params){
      if(params['student']== 'rock' && computerChoice == 'scissors'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Rock Wins"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(computerChoice == 'paper'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Paper Wins"
        }
        res.end(JSON.stringify(objToJson));
      } else if(computerChoice == 'lizard'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Rock Wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'rock') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Spock Wins"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
      // if input = paper
      else if(params['student']== 'paper' && computerChoice == 'scissors'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Scissors wins!"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'rock'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Paper wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'lizard'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Lizard Wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'spock'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Paper Wins"
        }
        res.end(JSON.stringify(objToJson));
      }
      //if player chose scissors
      else if(params['student']== 'scissors' && computerChoice == 'paper'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Scissors wins!"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'lizard'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Scissors Wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'rock'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Rock Wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'spock'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Spock Wins"
        }
        res.end(JSON.stringify(objToJson));
      }
      // if player chose lizard
      else if(params['student']== 'lizard' && computerChoice == 'scissors'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Scissors wins!"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'rock'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Rock Wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'paper'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Lizard Wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'spock'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Lizard Wins"
        }
        res.end(JSON.stringify(objToJson));
      }
      //if player chose spock
      else if(params['student']== 'spock' && computerChoice == 'scissors'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Spock wins!"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'rock'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Spock Wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'lizard'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Lizard Wins"
        }
        res.end(JSON.stringify(objToJson));
      }else if(computerChoice == 'paper'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Paper Wins"
        }
        res.end(JSON.stringify(objToJson));
      }
    }//student if

  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);