curl
     curl http://localhost:8000/
     curl -i http://localhost:8000/

ab
     ab -n 1000 -c 100 http://127.0.0.1:8000

Node.js Manual & Documentation: https://nodejs.org/api/net.html

To test TCP server:
     telnet localhost 8000
     nc localhost 8000


Node Debug:
     node hello-world-dbg.js
     node debug hello-world-dbg.js
     38:00 --> node debug


Problem with Node.js:
     yang: for example: no driver to database
     No long calling stack: how to solve:
          http://nodejs.org/illuminati0.pdf


Other resources:
     expressjs.com:
     npm: node package manager: npmjs.com


