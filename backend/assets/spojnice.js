const spojnice = [
  {
    "naziv": "Film i glavni glumac",
    "parovi": {
      "Titanic": "Leonardo DiCaprio",
      "Forrest Gump": "Tom Hanks",
      "Iron Man": "Robert Downey Jr.",
      "The Dark Knight": "Christian Bale",
      "Gladiator": "Russell Crowe",
      "The Matrix": "Keanu Reeves",
      "Joker": "Joaquin Phoenix",
      "Pirates of the Caribbean": "Johnny Depp"
    }
  },
  {
    "naziv": "Države i glavni gradovi",
    "parovi": {
      "Francuska": "Pariz",
      "Italija": "Rim",
      "Njemačka": "Berlin",
      "Španija": "Madrid",
      "Velika Britanija": "London",
      "Japan": "Tokio",
      "SAD": "Washington D.C.",
      "Rusija": "Moskva"
    }
  },
  {
    "naziv": "Sport i njegov simbolični sportista",
    "parovi": {
      "Fudbal": "Lionel Messi",
      "Košarka": "Michael Jordan",
      "Tenis": "Novak Đoković",
      "Atletika": "Usain Bolt",
      "Plivanje": "Michael Phelps",
      "Formula 1": "Lewis Hamilton",
      "Hokej na ledu": "Wayne Gretzky",
      "Biciklizam": "Lance Armstrong"
    }
  },
  {
    "naziv": "Nobelovci i oblasti u kojima su dobili nagradu",
    "parovi": {
      "Albert Einstein": "Fizika",
      "Marie Curie": "Hemija",
      "Ernest Hemingway": "Književnost",
      "Malala Yousafzai": "Mirovnost",
      "Alexander Fleming": "Medicina",
      "Richard Feynman": "Teorijska fizika",
      "Bob Dylan": "Literatura",
      "Martin Luther King Jr.": "Građanska prava"
    }
  },
  {
    "naziv": "Rijeke i zemlje kroz koje prolaze",
    "parovi": {
      "Dunav": "Njemačka",
      "Nil": "Egipat",
      "Volga": "Rusija",
      "Rajna": "Njemačka",
      "Temza": "Velika Britanija",
      "Mississippi": "SAD",
      "Amazon": "Brazil",
      "Ganges": "Indija"
    }
  },
  {
    "naziv": "Poznati mostovi i gradovi",
    "parovi": {
      "Golden Gate": "San Francisco",
      "Tower Bridge": "London",
      "Brooklyn Bridge": "New York",
      "Rialto Bridge": "Venecija",
      "Charles Bridge": "Prag",
      "Ponte Vecchio": "Firenca",
      "Sydney Harbour Bridge": "Sydney",
      "Chain Bridge": "Budimpešta"
    }
  },
  {
    "naziv": "Drevne civilizacije i njihove lokacije",
    "parovi": {
      "Egipćani": "Egipat",
      "Maje": "Meksiko",
      "Inke": "Peru",
      "Asteci": "Meksiko",
      "Babilonci": "Irak",
      "Rimljani": "Italija",
      "Grci": "Grčka",
      "Kinezi": "Kina"
    }
  },
  {
    "naziv": "Poznate slike i njihovi autori",
    "parovi": {
      "Mona Lisa": "Leonardo da Vinci",
      "Zvezdana noć": "Vincent van Gogh",
      "Guernica": "Pablo Picasso",
      "Poslednja večera": "Leonardo da Vinci",
      "Devojka s bisernom minđušom": "Johannes Vermeer",
      "Upornost sećanja": "Salvador Dalí",
      "Suton na Impresiji": "Claude Monet",
      "Američka gotika": "Grant Wood"
    }
  },
  {
    "naziv": "Poznati izumi i njihovi izumitelji",
    "parovi": {
      "Telefon": "Alexander Graham Bell",
      "Žarulja": "Thomas Edison",
      "Telegraf": "Samuel Morse",
      "Automobil": "Karl Benz",
      "Penicilin": "Alexander Fleming",
      "Parna mašina": "James Watt",
      "Radio": "Nikola Tesla",
      "Internet": "Tim Berners-Lee"
    }
  },
  {
    "naziv": "Fudbalski klubovi i zemlje",
    "parovi": {
      "Real Madrid": "Španija",
      "Bayern München": "Njemačka",
      "Juventus": "Italija",
      "Manchester United": "Engleska",
      "PSG": "Francuska",
      "Ajax": "Nizozemska",
      "Boca Juniors": "Argentina",
      "Flamengo": "Brazil"
    }
  },
  {
    "naziv": "Automobilske marke i zemlje porijekla",
    "parovi": {
      "Ferrari": "Italija",
      "Mercedes": "Njemačka",
      "Toyota": "Japan",
      "Ford": "SAD",
      "Renault": "Francuska",
      "Volvo": "Švedska",
      "Hyundai": "Južna Koreja",
      "Tesla": "SAD"
    }
  },
  {
    "naziv": "Hemijski elementi i njihovi simboli",
    "parovi": {
      "Vodonik": "H",
      "Kiseonik": "O",
      "Ugljenik": "C",
      "Natrijum": "Na",
      "Željezo": "Fe",
      "Sumpor": "S",
      "Kalcijum": "Ca",
      "Azot": "N"
    }
  },
  {
    "naziv": "Poznati naučnici i njihova otkrića",
    "parovi": {
      "Isaac Newton": "Gravitacija",
      "Nikola Tesla": "Naizmjenična struja",
      "Marie Curie": "Radijacija",
      "Charles Darwin": "Evolucija",
      "Albert Einstein": "Teorija relativnosti",
      "Galileo Galilei": "Teleskop",
      "Dmitri Mendeleev": "Periodni sistem",
      "Alexander Fleming": "Penicilin"
    }
  },
  {
    "naziv": "Najviši planinski vrhovi i kontinenti",
    "parovi": {
      "Everest": "Azija",
      "Mont Blanc": "Evropa",
      "Denali": "Sjeverna Amerika",
      "Aconcagua": "Južna Amerika",
      "Kilimandžaro": "Afrika",
      "Vinson": "Antarktik",
      "Elbrus": "Evropa",
      "Kosciuszko": "Australija"
    }
  },
  {
    "naziv": "Poznati pisci i njihova djela",
    "parovi": {
      "William Shakespeare": "Hamlet",
      "Fyodor Dostoevsky": "Zločin i kazna",
      "Leo Tolstoy": "Rat i mir",
      "George Orwell": "1984",
      "J.K. Rowling": "Harry Potter",
      "Agatha Christie": "Deset malih crnaca",
      "Homer": "Ilijada",
      "Dante Alighieri": "Božanstvena komedija"
    }
  },
  {
    "naziv": "Poznate svjetske građevine i njihove lokacije",
    "parovi": {
      "Ajfelov toranj": "Pariz",
      "Kineski zid": "Kina",
      "Koloseum": "Rim",
      "Taj Mahal": "Indija",
      "Big Ben": "London",
      "Statua slobode": "New York",
      "Petra": "Jordan",
      "Machu Picchu": "Peru"
    }
  },
  {
    "naziv": "Poznate kompanije i njihovi osnivači",
    "parovi": {
      "Apple": "Steve Jobs",
      "Microsoft": "Bill Gates",
      "Facebook": "Mark Zuckerberg",
      "Amazon": "Jeff Bezos",
      "Tesla": "Elon Musk",
      "Google": "Larry Page",
      "Nike": "Phil Knight",
      "McDonald's": "Ray Kroc"
    }
  },
  {
    "naziv": "Planine i države u kojima se nalaze",
    "parovi": {
      "Mont Everest": "Nepal",
      "Kilimandžaro": "Tanzanija",
      "Alpe": "Švicarska",
      "Andi": "Argentina",
      "Karpati": "Rumunija",
      "Stara planina": "Bugarska",
      "Apenini": "Italija",
      "Pamir": "Tadžikistan"
    }
  },
  {
    "naziv": "Književna djela i autori",
    "parovi": {
      "Na Drini ćuprija": "Ivo Andrić",
      "Ana Karenjina": "Lav Tolstoj",
      "Braća Karamazovi": "Fjodor Dostojevski",
      "Zločin i kazna": "Fjodor Dostojevski",
      "Gospodar prstenova": "J.R.R. Tolkien",
      "Harry Potter": "J.K. Rowling",
      "1984": "George Orwell",
      "Lovac u žitu": "J.D. Salinger"
    }
  },
  {
    "naziv": "Muzika – kompozitori i njihova djela",
    "parovi": {
      "Beethoven": "Deveta simfonija",
      "Mozart": "Mala noćna muzika",
      "Bach": "Tokata i fuga u d-molu",
      "Čajkovski": "Labudovo jezero",
      "Vivaldi": "Četiri godišnja doba",
      "Brahms": "Mađarski plesovi",
      "Ravel": "Bolero",
      "Chopin": "Nokturno u E-molu"
    }
  },
  {
    "naziv": "Mitologija – bogovi i njihove sfere moći",
    "parovi": {
      "Zeus": "Nebo i gromovi",
      "Posejdon": "More",
      "Ares": "Rat",
      "Afrodita": "Ljubav",
      "Hades": "Podzemni svijet",
      "Atena": "Mudrost",
      "Hermes": "Glasnik bogova",
      "Apolon": "Sunce i muzika"
    }
  },
  {
    "naziv": "Glavni likovi i njihova književna djela",
    "parovi": {
      "Hamlet": "Hamlet",
      "Don Kihot": "Don Kihot",
      "Sherlock Holmes": "Sherlock Holmes",
      "Harry Potter": "Harry Potter",
      "Frodo Baggins": "Gospodar prstenova",
      "Oliver Twist": "Oliver Twist",
      "Anna Karenina": "Ana Karenjina",
      "Jay Gatsby": "Veliki Getsbi"
    }
  },
  {
    "naziv": "Svjetske valute i njihove zemlje",
    "parovi": {
      "Dolar": "SAD",
      "Evro": "Evropska unija",
      "Funta": "Velika Britanija",
      "Jen": "Japan",
      "Juan": "Kina",
      "Frank": "Švicarska",
      "Rublja": "Rusija",
      "Kruna": "Švedska"
    }
  },

  /* DODATNE SPOJNICE: id 24 do 50 */

  {
    "naziv": "Poznati glazbenici i njihovi hitovi",
    "parovi": {
      "Michael Jackson": "Thriller",
      "Madonna": "Like a Virgin",
      "Elvis Presley": "Jailhouse Rock",
      "Prince": "Purple Rain",
      "Whitney Houston": "I Will Always Love You",
      "Beyoncé": "Single Ladies",
      "Freddie Mercury": "Bohemian Rhapsody",
      "Adele": "Rolling in the Deep"
    }
  },
  {
    "naziv": "Poznate knjige i njihovi autori",
    "parovi": {
      "1984": "George Orwell",
      "Brave New World": "Aldous Huxley",
      "The Catcher in the Rye": "J.D. Salinger",
      "To Kill a Mockingbird": "Harper Lee",
      "Pride and Prejudice": "Jane Austen",
      "Moby Dick": "Herman Melville",
      "The Great Gatsby": "F. Scott Fitzgerald",
      "War and Peace": "Leo Tolstoy"
    }
  },
  {
    "naziv": "Svjetski festivali i gradovi",
    "parovi": {
      "Oktoberfest": "München",
      "Carnival": "Rio de Janeiro",
      "La Tomatina": "Buñol",
      "Diwali": "Varanasi",
      "Burning Man": "Black Rock City",
      "Cannes Film Festival": "Cannes",
      "Coachella": "Indio",
      "Mardi Gras": "New Orleans"
    }
  },
  {
    "naziv": "Poznate serije i glavni likovi",
    "parovi": {
      "Breaking Bad": "Walter White",
      "Game of Thrones": "Jon Snow",
      "The Sopranos": "Tony Soprano",
      "Friends": "Rachel Green",
      "Stranger Things": "Eleven",
      "The Office": "Michael Scott",
      "House": "Dr. House",
      "Sherlock": "Sherlock Holmes"
    }
  },
  {
    "naziv": "Poznate marke pametnih telefona i zemlje porijekla",
    "parovi": {
      "Apple": "SAD",
      "Samsung": "Južna Koreja",
      "Huawei": "Kina",
      "Xiaomi": "Hong Kong",
      "OnePlus": "Tajvan",
      "Sony": "Japan",
      "Nokia": "Finska",
      "LG": "Taiwan"
    }
  },
  {
    "naziv": "Poznati restorani i kuhinje",
    "parovi": {
      "Noma": "Danska",
      "El Celler de Can Roca": "Španija",
      "Osteria Francescana": "Italija",
      "The French Laundry": "SAD",
      "Gaggan": "Indija",
      "Mirazur": "Francuska",
      "Central": "Peru",
      "Mugaritz": "Japan"
    }
  },
  {
    "naziv": "Poznati sportisti i njihove reprezentacije",
    "parovi": {
      "Cristiano Ronaldo": "Portugal",
      "Lionel Messi": "Argentina",
      "Neymar": "Brazil",
      "Kylian Mbappé": "Francuska",
      "Manuel Neuer": "Njemačka",
      "Zlatan Ibrahimović": "Švedska",
      "Megan Rapinoe": "SAD",
      "Sachin Tendulkar": "Indija"
    }
  },
  {
    "naziv": "Poznati biciklisti i trke",
    "parovi": {
      "Eddy Merckx": "Giro d'Italia",
      "Lance Armstrong": "Tour de France",
      "Miguel Indurain": "Vuelta a España",
      "Bradley Wiggins": "Paris–Nice",
      "Mark Cavendish": "Milan–San Remo",
      "Fabian Cancellara": "Strade Bianche",
      "Peter Sagan": "Amstel Gold Race",
      "Tom Dumoulin": "Liège–Bastogne–Liège"
    }
  },
  {
    "naziv": "Poznate arhitektonske građevine i stilovi",
    "parovi": {
      "Burj Khalifa": "Modern",
      "Sydney Opera House": "Futuristic",
      "Fallingwater": "Organicka",
      "The Shard": "Contemporary",
      "Guggenheim Bilbao": "Dekonstruizam",
      "Sagrada Família": "Gaudíjev",
      "Taj Mahal": "Mogulski",
      "Colosseum": "Antički"
    }
  },
  {
    "naziv": "Poznati automobili i modeli",
    "parovi": {
      "Ford Mustang": "Klasični američki",
      "Chevrolet Camaro": "Moderni američki",
      "BMW M3": "Njemački",
      "Audi R8": "Njemački premium",
      "Lamborghini Aventador": "Italijanski",
      "Ferrari F40": "Ikonični Ferrari",
      "Porsche 911": "Njemački sportski",
      "McLaren F1": "Britanski"
    }
  },
  {
    "naziv": "Poznate startup kompanije i osnivači",
    "parovi": {
      "Uber": "Travis Kalanick",
      "Airbnb": "Brian Chesky",
      "Spotify": "Daniel Ek",
      "Snapchat": "Evan Spiegel",
      "SpaceX": "Elon Musk",
      "Stripe": "Patrick i John Collison",
      "Dropbox": "Drew Houston",
      "WeWork": "Adam Neumann"
    }
  },
  {
    "naziv": "Poznate skulpture i kipari",
    "parovi": {
      "David": "Michelangelo",
      "Laocoön": "Athenodoros",
      "The Thinker": "Auguste Rodin",
      "Venus de Milo": "Alexandros",
      "The Kiss": "Constantin Brâncuși",
      "Ecstasy of Saint Teresa": "Bernini",
      "Bird in Space": "Alberto Giacometti",
      "Unique Forms of Continuity in Space": "Umberto Boccioni"
    }
  },
  {
    "naziv": "Poznati sportovi i nacionalne lige",
    "parovi": {
      "Fudbal": "Premier League",
      "Košarka": "NBA",
      "Baseball": "MLB",
      "Hokej": "NHL",
      "Američki fudbal": "NFL",
      "Rugby": "Six Nations",
      "Kriket": "IPL",
      "Tenis": "ATP Tour"
    }
  },
  {
    "naziv": "Poznate europske države i znamenitosti",
    "parovi": {
      "Italija": "Koloseum",
      "Francuska": "Eiffelov toranj",
      "Njemačka": "Brandenburška kapija",
      "Španija": "Sagrada Familia",
      "Grčka": "Akropola",
      "Portugal": "Torre de Belém",
      "Nizozemska": "Rijksmuseum",
      "Austrija": "Schönbrunn"
    }
  },
  {
    "naziv": "Poznate jezera i zemlje",
    "parovi": {
      "Superior": "SAD/Kanada",
      "Victoria": "Tanzanija",
      "Baikal": "Rusija",
      "Como": "Italija",
      "Geneva": "Švicarska",
      "Loch Ness": "Škotska",
      "Titicaca": "Bolivija/Peru",
      "Balaton": "Mađarska"
    }
  },
  {
    "naziv": "Poznati muzeji i gradovi",
    "parovi": {
      "Louvre": "Pariz",
      "British Museum": "London",
      "Metropolitan Museum": "New York",
      "Hermitage": "Sankt Peterburg",
      "Uffizi": "Firenca",
      "Prado": "Madrid",
      "Rijksmuseum": "Amsterdam",
      "Acropolis Museum": "Atina"
    }
  },
  {
    "naziv": "Poznate vinarije i regije",
    "parovi": {
      "Château Margaux": "Bordeaux",
      "Opus One": "Kalifornija",
      "Penfolds": "South Australia",
      "Antinori": "Toskana",
      "Vega Sicilia": "Ribera del Duero",
      "Cloudy Bay": "Marlborough",
      "Château d'Yquem": "Sauternes",
      "Bodegas Torres": "Priorat"
    }
  },
  {
    "naziv": "Poznati sportski stadioni i gradovi",
    "parovi": {
      "Camp Nou": "Barcelona",
      "Wembley": "London",
      "Maracanã": "Rio de Janeiro",
      "San Siro": "Milano",
      "Allianz Arena": "Munich",
      "Old Trafford": "Manchester",
      "Signal Iduna Park": "Dortmund",
      "Anfield": "Liverpool"
    }
  },
  {
    "naziv": "Poznate televizijske emisije i voditelji",
    "parovi": {
      "The Tonight Show": "Jimmy Fallon",
      "Late Night with Conan O'Brien": "Conan O'Brien",
      "The Daily Show": "Trevor Noah",
      "Last Week Tonight": "John Oliver",
      "Good Morning America": "Robin Roberts",
      "60 Minutes": "Mike Wallace",
      "The Ellen DeGeneres Show": "Ellen DeGeneres",
      "Saturday Night Live": "Kenan Thompson"
    }
  },
  {
    "naziv": "Poznati filmski festivali i gradovi",
    "parovi": {
      "Cannes Film Festival": "Cannes",
      "Venice Film Festival": "Venecija",
      "Sundance": "Park City",
      "Berlin International Film Festival": "Berlin",
      "Toronto International Film Festival": "Toronto",
      "Rotterdam Film Festival": "Rotterdam",
      "Sitges Film Festival": "Sitges",
      "Locarno Film Festival": "Locarno"
    }
  },
  {
    "naziv": "Poznate videoigre i studiji",
    "parovi": {
      "The Legend of Zelda": "Nintendo",
      "Super Mario": "Shigeru Miyamoto",
      "Halo": "Bungie",
      "Call of Duty": "Infinity Ward",
      "Grand Theft Auto": "Rockstar",
      "Minecraft": "Mojang",
      "Fortnite": "Epic Games",
      "World of Warcraft": "Blizzard"
    }
  },
  {
    "naziv": "Poznati operni izvođači i opere",
    "parovi": {
      "Luciano Pavarotti": "La bohème",
      "Maria Callas": "Tosca",
      "Plácido Domingo": "Carmen",
      "Jose Carreras": "Pagliacci",
      "Montserrat Caballé": "Don Giovanni",
      "Birgit Nilsson": "Die Walküre",
      "Leontyne Price": "Aida",
      "Renata Tebaldi": "Madama Butterfly"
    }
  },
  {
    "naziv": "Poznati jazz glazbenici i albumi",
    "parovi": {
      "Miles Davis": "Kind of Blue",
      "John Coltrane": "A Love Supreme",
      "Duke Ellington": "Ellington at Newport",
      "Billie Holiday": "Lady Sings the Blues",
      "Louis Armstrong": "What a Wonderful World",
      "Charlie Parker": "Bird and Diz",
      "Herbie Hancock": "Head Hunters",
      "Thelonious Monk": "Monk's Dream"
    }
  },
  {
    "naziv": "Poznati rap izvođači i hitovi",
    "parovi": {
      "Tupac": "California Love",
      "The Notorious B.I.G.": "Juicy",
      "Jay-Z": "Empire State of Mind",
      "Eminem": "Lose Yourself",
      "Kendrick Lamar": "HUMBLE.",
      "Dr. Dre": "Still D.R.E.",
      "Nas": "Illmatic",
      "Kanye West": "Stronger"
    }
  },
  {
    "naziv": "Poznati plesači i plesni stilovi",
    "parovi": {
      "Martha Graham": "Modern Dance",
      "Michael Jackson": "Moonwalk",
      "Fred Astaire": "Swing",
      "Gene Kelly": "Tap Dance",
      "Shakira": "Hip Shimmy",
      "Misty Copeland": "Ballet",
      "Rudolf Nureyev": "Ballet (klasika)",
      "Alvin Ailey": "Contemporary"
    }
  },
  {
    "naziv": "Poznati slikari i slikarski pokreti",
    "parovi": {
      "Pablo Picasso": "Kubizam",
      "Vincent van Gogh": "Postimpresionizam",
      "Claude Monet": "Impresionizam",
      "Salvador Dalí": "Surrealizam",
      "Edvard Munch": "Ekspresionizam",
      "Jackson Pollock": "Abstraktni ekspresionizam",
      "Georges Seurat": "Pointilizam",
      "Frida Kahlo": "Meksikanizam"
    }
  },
  {
    "naziv": "Poznate plesne skupine i koreografi",
    "parovi": {
      "Riverdance": "Irska",
      "Cirque du Soleil": "Kanadski",
      "Lambada": "Brazilski",
      "Bollywood Dance": "Indijski",
      "Salsa Crew": "Kubanski",
      "Hip-Hop Crew": "Američki",
      "Flamenco Grupo": "Španski",
      "Tango Argentino": "Argentinski"
    }
  }
];

module.exports = spojnice;
