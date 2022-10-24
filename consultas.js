// FIND: retorna todos as plataformas de streaming que estão no banco de dados
db.streamings.find().pretty(); 

// SIZE: lista as inscrições com 1 plataforma de streaming
db.inscricoes.find({platforms:{$size: 1}}).pretty();

// AGGREGATE, GROUP, MAX
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

// MATCH: lista todas as inscrições que contêm combos
db.inscricoes.aggregate([{$match : {combo: true}}]);

// GTE: seleciona todos os filmes/séries que tem nota maior ou igual a 8.5 no IMDB
//Mostra os selecionados com título e nota em ordem crescente
db.visual_media.find({
    imdb_score: {
        $gte: 8.5
    }
}, {
    title: 1,
    imdb_score: 1
}).sort({imdb_score : 1});

// SUM: mostra a soma de todos os valores de inscrição, agrupado por tipo de plano (mensal ou anual)
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

// COUNT: conta a quantidade total de filmes/séries
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

// TEXT, SEARCH
//Procura filmes/séries cujo nome do diretor contém "Miyazaki"
db.visual_media.createIndex( { director: "text" } )
db.visual_media.find( { $text: { $search: "Miyazaki"} } )

//SET
// Rodar db.inscricoes.find().pretty();  antes e depois para mostrar que houve a mudança
// Muda o nome do Pacote To Rule Them All para Combo Expelliarmus
db.inscricoes.updateOne({name: "Pacote To Rule Them All"}, {$set:{"name": "Combo Expelliarmus"}});

// ALL
// Seleciona os combos que oferecem Netflix e Disney+ simultaneamente
db.inscricoes.find({platforms: {$all: [
        db.streamings.findOne({"name": "Netflix"})._id,
        db.streamings.findOne({"name": "Disney+"})._id,
]}}).pretty();


// LIMIT:
// Retorna apenas 2 combos
db.inscricoes.aggregate([
  {$match : {combo: true}},
  {$limit: 2}
]);
// EXIST
// Ele tira metacritic da coleção cidade de Deus pois é falso, logo após lista a obra visual não possui a característica metacritic
db.visual_media.updateOne({title: "Cidade De Deus"}, {$unset: {"metacritic_must_see": null}});
db.visual_media.find({metacritic_must_see: {$exists: false}})

// WHERE E FUNCTION
// Retorna informações da mídia visual cujo nome é "House, M.D."
// OBS: @Bonna @João, tentem rodar essa consulta, ela não roda no Atlas, mas pelo que vimos na internet, roda no projeto local. Resta testar
db.visual_media.find({$where: function(){return (this.title == "House, M.D.")}})


// ADDTOSET
//Adiciona os serviços HBO Max e Netflix ao Pacote Não Falamos do Bruno
//para mostrar
//db.inscricoes.find({name : "Pacote Não falamos do Bruno"}).pretty();
db.inscricoes.updateMany(
    {name: "Pacote Não falamos do Bruno"}, {$addToSet:{
        platforms:{
            $each:[
                db.streamings.findOne({name: "HBO Max"})._id,
                db.streamings.findOne({name: "Netflix"})._id
            ]
        }
    }}
);

// AVG E LOOKUP
// Calcula a nota media dos filmes de cada serviço de streaming
db.streamings.aggregate([
    { $lookup: {
          from: "visual_media",
          localField: "media",
          foreignField: "_id",
          as: "media_info"
    } },
    { $set: {
          "media": "$media_info"
    } },
    { $project: {
          "media_info": 0
    } },
    { $unwind: "$media" },
    { $group: {
            _id: "$name", 
            average_imdb: { $avg: "$media.imdb_score"}
    } }
]);


//---------------RODAR POR ÚLTIMO-----------------------
// RENAMECOLLECTION 
// Muda o nome da Coleção visual_media para media_set
// Para conferir db.getCollectionNames()
db.visual_media.renameCollection("media_set");
