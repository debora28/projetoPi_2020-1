
//RESOLVER SAPOHA AMANHÃ

const conexaoBase = require("./conexaoBase");

function ProcurarColecaoBase( nome ,nomeFuncao='ProcurarColecao'){
    nome = "medico do caralho";
    const funcao = async function ProcurarColecao(client, nome="medico do caralho") {
        result = await client.db("bancoteste").collection("medicos").findOne({ "nome" :+" "+nome });//findOne({ _id: nome });

        if (result) {
            console.log(`Found a listing in the collection with the name '${nome}':`);
            console.log(result);
            console.log(result.nome);
        } else {
            console.log(`No listings found with the name '${nome}'`);
        };
    };
    conexaoBase.ConectarBase(funcao, nomeFuncao);
};

ProcurarColecaoBase("medico do caralho");



/* _id
:
"123111"
nome
:
"medico do caralho"
 */