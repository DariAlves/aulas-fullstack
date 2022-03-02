// CÓDIGO COMENTADO

// Importar o Módulo Nativo (Core Module) http - para isso, iremos usar a função require()

require('http');

/*
    Vamos armazenar nosso módulo em uma variável. Nesse caso, irei usar uma constante (const). É prática comum nomeá-la
    com o mesmo nome do módulo que estamos utilizando, mas isso não é obrigatório.
*/

const http = require('http');

/*
    Porta que o servidor irá ouvir. Para o nosso exemplo, irei usar a porta 3333.
*/

const port = 3333;

/*
    Agora vamos criar um servidor local. Iremos instanciar nosso servidor através do método (ou função) createServer().
    Iremos atribuí-lo à constante chamada server.
*/

const server = http.createServer('Nossa função de callback vem aqui!');

/*
    Nosso método (ou função) createServer() recebe como parâmetro uma função de retorno (ou callback), que será chamada 
    como uma resposta a um evento. Neste caso, nosso evento será uma requisição HTTP.
*/

function callback() {

}

/*
    Nossa função callback recebe recebe dois parâmetros: uma requisição (request) e uma resposta (response)
 */

function callback(request, response) {

}

/*
    Sempre que nossa função callback for disparada, iremos enviar um cabeçalho simples e uma resposta.

    Faremos uso dos métodos .writeHead() e .end():

    - writeHead(): 
        Envia um cabeçalho como resposta à solicitação. 
        Nesse nosso exemplo, teremos um Código de Status 200 (OK) e o tipo de conteúdo (text/plain);

    - end(): 
        Indica ao servidor que os cabeçalhos e corpo da resposta foram enviados. 
        Deve ser chamado em cada resposta.   
*/

function callback(request, response) {
    // Cabeçalho (header)
    response.writeHead(200, { 'Content-Type': 'text/plain'});

    // Resposta
    response.end('Node.js não é linguagem de programação! xD');
}

/*
    FLUXO

    - Criamos o nosso servidor
    - Recebemos um solicitação
    - Função callback é disparada, enviando um cabeçalho e um texto 'Node.js não é linguagem de programação! xD'
*/


// O servidor estará escutando na porta 3333.
server.listen(port);

// Mensagem quando startamos nosso servidor
server.listen(port, () => console.log(`Servidor está rodando na porta ${port}\nPressione Ctrl + C para sair...`));