const con = require('../routes/db');

exports.list = function(req, res) {
    console.log('listing..');
    con.connect((err) => {
        con.query('SELECT titulo,texto,logins_nick FROM conteudo ORDER BY id_conteudo DESC;', (err, sqlres) => {
            if (err) console.log("Erro: %s", err);
            // console.log('\t\t\tResultado:\n');
            // sqlres.forEach(element => {
            //     console.log('Titulo:\t%s', element.titulo);
            //     console.log('Texto:\t%s\n\n', element.texto);
            //     console.log('-----------------');
            // });
            res.render(
                'home.ejs', {
                    nome_tabela: "conteudo",
                    data: sqlres
                });
            console.log('rendering');
        });
    });
}