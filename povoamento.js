db.dropDatabase();

// Criando coleção de mídias (filmes e séries)
db.createCollection("visual_media");

// Inserindo na coleção
db.visual_media.insertMany([
{
  "title": "Star Wars: Episódio V - O Império Contra-Ataca",
  "director": "Irvin Kershner",
  "year": 1980,
  "genre": "fantasia",
  "classification": "L",
  "imdb_score": 8.7,
  "metacritic_must_see": true,
  "tipo": "filme"
},
{
  "title": "A Viagem de Chihiro",
  "director": "Hayao Miyazaki",
  "year": 2001,
  "genre": "animação",
  "classification": "L",
  "imdb_score": 8.6,
  "metacritic_must_see": true,
  "tipo": "filme"
},
{
  "title": "O Senhor dos Anéis: A Sociedade do Anel",
  "director": "Peter Jackson",
  "year": 2001,
  "genre": "fantasia",
  "classification": "12",
  "imdb_score": 8.8,
  "metacritic_must_see": true,
  "tipo": "filme"
},
{
  "title": "Karate Kid",
  "director": "Harald Zwart",
  "year": 2010,
  "genre": "drama",
  "classification": "10",
  "imdb_score": 6.2,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Tropa de Elite",
  "director": "José Padilha",
  "year": 2007,
  "genre": "ação",
  "classification": "16",
  "imdb_score": 8,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "As Vantagens De Ser Invisível",
  "director": "Stephen Chbosky",
  "year": 2012,
  "genre": "drama",
  "classification": "14",
  "imdb_score": 8,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Encanto",
  "director": "Jared Bush",
  "year": 2021,
  "genre": "animação",
  "classification": "L",
  "imdb_score": 7.2,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Cidade De Deus",
  "director": "Fernando Meirelles",
  "year": 2002,
  "genre": "drama",
  "classification": "18",
  "imdb_score": 8.6,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "O Som ao Redor",
  "director": "Kleber Mendonça Filho",
  "year": 2012,
  "genre": "drama",
  "classification": "16",
  "imdb_score": 7.1,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Interestelar",
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "ficção científica",
  "classification": "10",
  "imdb_score": 8.6,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Esposa de Mentirinha",
  "director": "Dennis Dugan",
  "year": 2011,
  "genre": "comédia",
  "classification": "12",
  "imdb_score": 6.4,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Clone Wars",
  "director": "Dave Filoni",
  "year": 2008,
  "genre": "animação",
  "classification": "12",
  "imdb_score": 8.4,
  "metacritic_must_see": false,
  "tipo": "série"
},
{
  "title": "Matrix",
  "director": "Lana Wachowski",
  "year": 1999,
  "genre": "ficção científica",
  "classification": "14",
  "imdb_score": 8.7,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Ilha do Medo",
  "director": "Martin Scorsese",
  "year": 2010,
  "genre": "suspense",
  "classification": "16",
  "imdb_score": 8.2,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "A Freira",
  "director": "Corin Hardy",
  "year": 2018,
  "genre": "terror",
  "classification": "14",
  "imdb_score": 5.3,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Game of Thrones",
  "director": "David Benioff",
  "year": 2011,
  "genre": "fantasia",
  "classification": "18",
  "imdb_score": 9.2,
  "metacritic_must_see": true,
  "tipo": "série"
},
{
  "title": "Supernatural",
  "director": "Eric Kipke",
  "year": 2005,
  "genre": "aventura",
  "classification": "12",
  "imdb_score": 8.4,
  "metacritic_must_see": false,
  "tipo": "série"
},
{
  "title": "O Rei Leão",
  "director": "Roger Allers",
  "year": 1994,
  "genre": "animação",
  "classification": "L",
  "imdb_score": 8.5,
  "metacritic_must_see": true,
  "tipo": "filme"
},
{
  "title": "De Volta para o Futuro",
  "director": "Robert Zemeckis",
  "year": 1985,
  "genre": "ficção científica",
  "classification": "L",
  "imdb_score": 8.5,
  "metacritic_must_see": true,
  "tipo": "filme"
},
{
  "title": "Homem de Ferro 3",
  "director": "Shane Black",
  "year": 2013,
  "genre": "ação",
  "classification": "12",
  "imdb_score": 7.1,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Se Beber, Não Case!",
  "director": "Todd Phillips",
  "year": 2009,
  "genre": "comédia",
  "classification": "14",
  "imdb_score": 7.7,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Como eu era antes de você",
  "director": "Thea Sharrock",
  "year": 2016,
  "genre": "romance",
  "classification": "12",
  "imdb_score": 7.4,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "The Mandalorian",
  "director": "Jon Favreau",
  "year": 2019,
  "genre": "fantasia",
  "classification": "14",
  "imdb_score": 8.7,
  "metacritic_must_see": false,
  "tipo": "série"
},
{
  "title": "O Silêncio dos Inocentes",
  "director": "Jonathan Demme",
  "year": 1991,
  "genre": "suspense",
  "classification": "14",
  "imdb_score": 8.6,
  "metacritic_must_see": true,
  "tipo": "filme"
},
{
  "title": "Homem-Aranha",
  "director": "Sam Raimi",
  "year": 2002,
  "genre": "aventura",
  "classification": "L",
  "imdb_score": 7.4,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Top Gun - Asas Indomáveis",
  "director": "Tony Scott",
  "year": 1986,
  "genre": "ação",
  "classification": "12",
  "imdb_score": 6.9,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "A Bela Adormecida",
  "director": "Clyde Geronimi",
  "year": 1959,
  "genre": "animação",
  "classification": "L",
  "imdb_score": 7.2,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "A Múmia",
  "director": "Stephen Sommers",
  "year": 1999,
  "genre": "aventura",
  "classification": "12",
  "imdb_score": 7.1,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "Até o Último Homem",
  "director": "Mel Gibson",
  "year": 2016,
  "genre": "histórico",
  "classification": "16",
  "imdb_score": 8.1,
  "metacritic_must_see": false,
  "tipo": "filme"
},
{
  "title": "A Grande Família",
  "director": "Maurício Farias",
  "year": 2001,
  "genre": "comédia",
  "classification": "12",
  "imdb_score": 7.7,
  "metacritic_must_see": false,
  "tipo": "série"
},
{
  "title": "Um Maluco no Pedaço",
  "director": "Jeff Melman",
  "year": 1990,
  "genre": "comédia",
  "classification": "L",
  "imdb_score": 7.9,
  "metacritic_must_see": false,
  "tipo": "série"
},
{
  "title": "Breaking Bad",
  "director": "Vince Gilligan",
  "year": 2008,
  "genre": "crime",
  "classification": "16",
  "imdb_score": 9.5,
  "metacritic_must_see": true,
  "tipo": "série"
},
{
  "title": "Avatar: A lenda de Aang",
  "director": "Joaquim dos Santos",
  "year": 2005,
  "genre": "animação",
  "classification": "10",
  "imdb_score": 9.3,
  "metacritic_must_see": false,
  "tipo": "série"
},
{
  "title": "House, M.D.",
  "director": "Deran Sarafian",
  "year": 2004,
  "genre": "drama",
  "classification": "14",
  "imdb_score": 8.7,
  "metacritic_must_see": false,
  "tipo": "série"
},
{
  "title": "How I Met Your Mother",
  "director": "Pamela Fryman",
  "year": 2005,
  "genre": "comédia",
  "classification": "12",
  "imdb_score": 8.3,
  "metacritic_must_see": false,
  "tipo": "série"
}]);

// Criando a coleção de streamings
db.createCollection("streamings");

// Inserindo na coleção
db.streamings.insertOne(
    {
        "name": "Disney+",
        "subscription_fee": 27.90,
        "headquarters": "Los Angeles",
        "founded": new Date("2019-11-12"),
        "media": [
            db.visual_media.findOne({"title": "Star Wars: Episódio V - O Império Contra-Ataca"})._id,
            db.visual_media.findOne({"title": "Encanto"})._id,
            db.visual_media.findOne({"title": "O Rei Leão"})._id,
            db.visual_media.findOne({"title": "Homem de Ferro 3"})._id,
            db.visual_media.findOne({"title": "A Bela Adormecida"})._id,
            db.visual_media.findOne({"title": "The Mandalorian"})._id,
            db.visual_media.findOne({"title": "Clone Wars"})._id,
        ]
    }
);

db.streamings.insertOne(
    {
        "name": "Netflix",
        "headquarters": "Los Gatos",
        "founded": new Date("1997-08-29"),
        "media": [
            db.visual_media.findOne({"title": "A Viagem de Chihiro"})._id,
            db.visual_media.findOne({"title": "Karate Kid"})._id,
            db.visual_media.findOne({"title": "O Som ao Redor"})._id,
            db.visual_media.findOne({"title": "Ilha do Medo"})._id,
            db.visual_media.findOne({"title": "De Volta para o Futuro"})._id,
            db.visual_media.findOne({"title": "Breaking Bad"})._id,
            db.visual_media.findOne({"title": "Avatar: A lenda de Aang"})._id,
        ]
    }
);

db.streamings.insertOne(
    {
        "name": "HBO Max",
        "headquarters": "Burbank",
        "founded": new Date("2020-05-27"),
        "media": [
            db.visual_media.findOne({"title": "Se Beber, Não Case!"})._id,
            db.visual_media.findOne({"title": "A Freira"})._id,
            db.visual_media.findOne({"title": "Matrix"})._id,
            db.visual_media.findOne({"title": "Interestelar"})._id,
            db.visual_media.findOne({"title": "Até o Último Homem"})._id,
            db.visual_media.findOne({"title": "Game of Thrones"})._id,
            db.visual_media.findOne({"title": "Supernatural"})._id,
        ]
    }
);

db.streamings.insertOne(
    {
        "name": "Prime Video",
        "headquarters": "Seattle",
        "founded": new Date("2006-09-07"),
        "media": [
            db.visual_media.findOne({"title": "O Senhor dos Anéis: A Sociedade do Anel"})._id,
            db.visual_media.findOne({"title": "O Silêncio dos Inocentes"})._id,
            db.visual_media.findOne({"title": "Esposa de Mentirinha"})._id,
            db.visual_media.findOne({"title": "Como eu era antes de você"})._id,
            db.visual_media.findOne({"title": "A Múmia"})._id,
            db.visual_media.findOne({"title": "House, M.D."})._id,
            db.visual_media.findOne({"title": "How I Met Your Mother"})._id,
        ]
    }
);

db.streamings.insertOne(
    {
        "name": "Globoplay",
        "headquarters": "Rio de Janeiro",
        "founded": new Date("2015-11-03"),
        "media": [
            db.visual_media.findOne({"title": "Tropa de Elite"})._id,
            db.visual_media.findOne({"title": "As Vantagens De Ser Invisível"})._id,
            db.visual_media.findOne({"title": "Cidade De Deus"})._id,
            db.visual_media.findOne({"title": "Homem-Aranha"})._id,
            db.visual_media.findOne({"title": "Top Gun - Asas Indomáveis"})._id,
	        db.visual_media.findOne({"title": "A Grande Família"})._id,
	        db.visual_media.findOne({"title": "Um Maluco no Pedaço"})._id,
        ]
    }
);

// Criando a coleção de inscrições
db.createCollection("inscricoes");

// Inserindo na coleção
db.inscricoes.insertOne(
    {
        "name": "Netflix Básico",
        "pacote": false,
        "subscription_fee": 25.90,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 1,
        "platforms": [
            db.streamings.findOne({"name": "Netflix"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Netflix Padrão",
        "pacote": false,
        "subscription_fee": 39.90,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 2,
        "platforms": [
            db.streamings.findOne({"name": "Netflix"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Netflix Premium",
        "pacote": false,
        "subscription_fee": 55.90,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 4,
        "platforms": [
            db.streamings.findOne({"name": "Netflix"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Disney+ mensal",
        "pacote": false,
        "subscription_fee": 27.90,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 4,
        "platforms": [
            db.streamings.findOne({"name": "Disney+"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Disney+ anual",
        "pacote": false,
        "subscription_fee": 279.90,
        "cancellation_fee": 0,
        "duration": "anual",
        "screens": 4,
        "platforms": [
            db.streamings.findOne({"name": "Disney+"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "HBO Max mensal",
        "pacote": false,
        "subscription_fee": 27.90,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "HBO Max"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "HBO Max anual",
        "pacote": false,
        "subscription_fee": 239.90,
        "cancellation_fee": 0,
        "duration": "anual",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "HBO Max"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Prime Video mensal",
        "pacote": false,
        "subscription_fee": 14.90,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "Prime Video"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Prime Video anual",
        "pacote": false,
        "subscription_fee": 119.0,
        "cancellation_fee": 0,
        "duration": "anual",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "Prime Video"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Globoplay mensal",
        "pacote": false,
        "subscription_fee": 22.90,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 5,
        "platforms": [
            db.streamings.findOne({"name": "Globoplay"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Globoplay anual",
        "pacote": false,
        "subscription_fee": 238.80,
        "cancellation_fee": 0,
        "duration": "anual",
        "screens": 5,
        "platforms": [
            db.streamings.findOne({"name": "Globoplay"})._id,
        ]
    }
);


db.inscricoes.insertOne(
    {
        "name": "Pacote Não falamos do Bruno",
        "pacote": true,
        "subscription_fee": 459.80,
        "cancellation_fee": 45.0,
        "duration": "anual",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "Globoplay"})._id,
            db.streamings.findOne({"name": "Disney+"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Pacote I have the high ground",
        "pacote": true,
        "subscription_fee": 72.90,
        "cancellation_fee": 10.0,
        "duration": "mensal",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "Netflix"})._id,
            db.streamings.findOne({"name": "Prime Video"})._id,
            db.streamings.findOne({"name": "Disney+"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Pacote Beginning to Believe",
        "pacote": true,
        "subscription_fee": 400,
        "cancellation_fee": 0,
        "duration": "anual",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "HBO Max"})._id,
            db.streamings.findOne({"name": "Globoplay"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Pacote To Rule Them All",
        "pacote": true,
        "subscription_fee": 106.80,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "HBO Max"})._id,
            db.streamings.findOne({"name": "Globoplay"})._id,
            db.streamings.findOne({"name": "Netflix"})._id,
            db.streamings.findOne({"name": "Prime Video"})._id,
            db.streamings.findOne({"name": "Disney+"})._id,
        ]
    }
);

db.inscricoes.insertOne(
    {
        "name": "Pacote Great Power",
        "pacote": true,
        "subscription_fee": 94.90,
        "cancellation_fee": 0,
        "duration": "mensal",
        "screens": 3,
        "platforms": [
            db.streamings.findOne({"name": "HBO Max"})._id,
            db.streamings.findOne({"name": "Globoplay"})._id,
            db.streamings.findOne({"name": "Netflix"})._id,
            db.streamings.findOne({"name": "Prime Video"})._id,
        ]
    }
);
