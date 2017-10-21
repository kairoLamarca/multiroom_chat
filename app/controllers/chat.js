module.exports.iniciaChat = function (application, req, res) {

    let dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    let erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
        return;
    }

    //io é uma variavel global criada no app.js usando o set
    application.get('io').emit(//Pedido para executar alguma ação
        'msgParaCliente', 
        {apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat'}
    );

    res.render('chat', { dadosForm: dadosForm });
}