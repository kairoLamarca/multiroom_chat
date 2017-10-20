//importar as configurações do servidor
let app = require('./config/server');

//parametrizar a porta de escuta
let server = app.listen(80, () => {
    console.log('Servidor online na porta 80');
})

io = require('socket.io').listen(server);

//criar a conexão por websocket
io.on('connection', (socket) => {//evento pré definido no socket.io, executa quando há uma conexão do lado do cliente
    console.log('usuario conectou');

    socket.on('disconnect', () => {
        console.log('Usuário desconectou');
    });

})