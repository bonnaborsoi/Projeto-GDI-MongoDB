//FIND: retorna todos as plataformas de streaming que estão no banco de dados
db.streamings.find().pretty(); 

//SIZE: lista as inscrições com 1 plataforma de streaming
db.inscricoes.find({platforms:{$size: 1}}).pretty();

//MATCH: lista todas as inscrições que contêm combos
db.inscricoes.aggregate([{$match : {combo: true}}]);

//COUNT: conta a quantidade total de filmes/séries
db.visual_media.count();
