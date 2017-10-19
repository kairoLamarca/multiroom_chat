//importar modulo do framework express
let express = require('express');

//importar módulo do consign
let consign = require('consign');

//importar módulo do body-parser
let bodyParser = require('body-parser');

//importar módulo do express validator
let expressValidator = require('express-validator');

//iniciar o objeto do express
let app = express();

//Setar as variaveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurar middleware express.static
app.use(express.static('./app/public'));

//configurar middleware body-parser
app.use(bodyParser.urlencoded({extended: true}))

//configurar middleware express-validator
app.use(expressValidator());

//efetua o autoload das rotas, dos models e dos controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//exportar o objeto app
module.exports = app;