//FIND: retorna todos as plataformas de streaming que estão no banco de dados
db.streamings.find().pretty(); 

//SIZE: lista as inscrições com 1 plataforma de streaming
db.inscricoes.find({platforms:{$size: 1}}).pretty();

//AGGREGATE, GROUP, MAX
db.visual_media.aggregate( [
   //Filtra as mídias buscando os que são filmes
   {
      $match: {  "type": "filme"}
   },
   //Agrupa os filmes com base em gênero e diz qual é o que tem a maior avaliação
   {
      $group: { _id: "$genre", highest_rating: {$max: "$imdb_score"}}
   }
  ]);

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

//SUM: mostra a soma de todos os valores de inscrição, agrupado por tipo de plano (mensal ou anual)
db.inscricoes.aggregate(
[
     {
       $group:
         {
           _id: "$duration",
           total: { $sum: "$subscription_fee"},
         }
     }
]
)

//COUNT: conta a quantidade total de filmes/séries
db.visual_media.count();

// PROJECT, COND 
// Faz uma comparação de todas os pacotes e os classifica entre caro e barato
db.inscricoes.aggregate(
   [
     {
       $project:
          {
            _id: 0,
            name: 1,
            subscription_fee: 
            {$cond: {if: {$gte: ["$subscription_fee", 100]}, then: "Caro", else: "Barato"}},
          }
     }
   ]
);

//TEXT
//Procura filmes/séries cujo nome do diretor contém "Miyazaki"
db.visual_media.createIndex( { director: "text" } )
db.visual_media.find( { $text: { $search: "Miyazaki"} } )

// SET
// Muda o nome do Pacote To Rule Them All para Combo Expelliarmus
db.inscricoes.updateOne({name: "Pacote To Rule Them All"}, {$set:{"name": "Combo Expelliarmus"}});

// ALL(NÃO FUNFA)
// Seleciona os combos que oferecem Netflix e Disney+ simultaneamente
db.inscricoes.find({streamings: {$all: [
    db.streamings.findOne({"name": "Netflix"})._id,
    db.streamings.findOne({"name": "Disney+"})._id,
]}}).pretty();
