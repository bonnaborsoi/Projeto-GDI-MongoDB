//FIND: retorna todos as plataformas de streaming que estão no banco de dados
db.streamings.find().pretty(); 

//SIZE: lista as inscrições com 1 plataforma de streaming
db.inscricoes.find({platforms:{$size: 1}}).pretty();

//MATCH: lista todas as inscrições que contêm combos
db.inscricoes.aggregate([{$match : {combo: true}}]);

//GTE: seleciona todos os filmes/séries que tem nota maior ou igual a 8.5 no IMDB
//Mostra os selecionados com título e nota em ordem crescente
db.visual_media.find({
    imdb_score: {
        $gte: 8.5
    }
}, {
    title: 1,
    imdb_score: 1
}).sort({imdb_score : 1});

//COUNT: conta a quantidade total de filmes/séries
db.visual_media.count();
