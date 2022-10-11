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

//PROJECT, COND
db.inscricoes.aggregate(
   [
     {
      $match: {  "pacote": "true"}
     },
     {
      $match: {  "duration": "mensal"}
     },
     {
       $project:
          {
            _id: 0,
            name: 1,
            subscription_fee: {$cond: {if: {$gte: ["$subscription_fee", 100]}, then: "Caro", else: "Barato"}},
          }
     }
   ]
)
