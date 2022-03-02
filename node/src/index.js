const http = require('http');

const port = 3333;

function callback(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    response.end('Node.js não é linguagem de programação! xD');
}

const server = http.createServer(callback);

server.listen(port, () => console.log(`Servidor está rodando na porta ${port}\nPressione Ctrl + C para sair...`));