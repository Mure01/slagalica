const asocijacije = [
    {
      "id": 1,
      "A": { "A1": "Koloseum", "A2": "Forum", "A3": "Vatikan", "A4": "Antika", "rjesenje": "RIM" },
      "B": { "B1": "Eiffelov toranj", "B2": "Louvre", "B3": "Sena", "B4": "Bastilja", "rjesenje": "PARIZ" },
      "C": { "C1": "Big Ben", "C2": "Tower Bridge", "C3": "Buckingham", "C4": "Westminster", "rjesenje": "LONDON" },
      "D": { "D1": "Kraljevska palača", "D2": "Puerta del Sol", "D3": "El Retiro", "D4": "Prado", "rjesenje": "MADRID" },
      "glavno_rjesenje": "EVROPA"
    },
    {
      "id": 2,
      "A": { "A1": "Jabuka", "A2": "Banana", "A3": "Kivi", "A4": "Grožđe", "rjesenje": "VOĆE" },
      "B": { "B1": "Mrkva", "B2": "Krastavac", "B3": "Paradajz", "B4": "Kupus", "rjesenje": "POVRĆE" },
      "C": { "C1": "Piletina", "C2": "Govedina", "C3": "Janjetina", "C4": "Svinjetina", "rjesenje": "MESO" },
      "D": { "D1": "Mlijeko", "D2": "Sir", "D3": "Jogurt", "D4": "Pavlaka", "rjesenje": "MLIJEČNO" },
      "glavno_rjesenje": "HRANA"
    },
    {
      "id": 3,
      "A": { "A1": "Lopta", "A2": "Gol", "A3": "Trener", "A4": "Tim", "rjesenje": "FUDBAL" },
      "B": { "B1": "Obruč", "B2": "Skok", "B3": "Igrači", "B4": "Asistent", "rjesenje": "KOŠARKA" },
      "C": { "C1": "Reket", "C2": "Net", "C3": "Lopta", "C4": "Turnir", "rjesenje": "TENIS" },
      "D": { "D1": "Bazen", "D2": "Kapa", "D3": "Naočale", "D4": "Staza", "rjesenje": "PLIVANJE" },
      "glavno_rjesenje": "SPORT"
    },
    {
      "id": 4,
      "A": { "A1": "Let", "A2": "Krila", "A3": "Aerodrom", "A4": "Pilot", "rjesenje": "AVION" },
      "B": { "B1": "Kolodvor", "B2": "Šina", "B3": "Peron", "B4": "Karta", "rjesenje": "VLAK" },
      "C": { "C1": "Luka", "C2": "Mornar", "C3": "Paluba", "C4": "Kormilar", "rjesenje": "BROD" },
      "D": { "D1": "Volan", "D2": "Motor", "D3": "Guma", "D4": "Brzina", "rjesenje": "AUTO" },
      "glavno_rjesenje": "PUTOVANJE"
    },
    {
      "id": 5,
      "A": { "A1": "Žice", "A2": "Trzalica", "A3": "Akord", "A4": "Solo", "rjesenje": "GITARA" },
      "B": { "B1": "Tipke", "B2": "Pedala", "B3": "Sonata", "B4": "Koncert", "rjesenje": "KLAVIR" },
      "C": { "C1": "Ritam", "C2": "Set", "C3": "Beats", "C4": "Takt", "rjesenje": "BUBNJEVI" },
      "D": { "D1": "Duvački", "D2": "Jazz", "D3": "Solo", "D4": "Melodija", "rjesenje": "SAKSOFON" },
      "glavno_rjesenje": "MUZIKA"
    },
    {
      "id": 6,
      "A": { "A1": "Priča", "A2": "Likovi", "A3": "Avantura", "A4": "Zaplet", "rjesenje": "ROMAN" },
      "B": { "B1": "Stihovi", "B2": "Rima", "B3": "Emocija", "B4": "Metafora", "rjesenje": "POEZIJA" },
      "C": { "C1": "Argument", "C2": "Tema", "C3": "Rasprava", "C4": "Analiza", "rjesenje": "ESEJ" },
      "D": { "D1": "Životopis", "D2": "Događaji", "D3": "Istorija", "D4": "Sjećanje", "rjesenje": "BIOGRAFIJA" },
      "glavno_rjesenje": "KNJIGA"
    },
    {
      "id": 7,
      "A": { "A1": "Cvijet", "A2": "List", "A3": "Stablo", "A4": "Korijen", "rjesenje": "BILJKE" },
      "B": { "B1": "Sisavci", "B2": "Ptice", "B3": "Ribe", "B4": "Gmizavci", "rjesenje": "ŽIVOTINJE" },
      "C": { "C1": "Reka", "C2": "Jezero", "C3": "Okean", "C4": "Potok", "rjesenje": "VODA" },
      "D": { "D1": "Vrh", "D2": "Stijena", "D3": "Planinski lanac", "D4": "Kamen", "rjesenje": "PLANINE" },
      "glavno_rjesenje": "PRIRODA"
    },
    {
      "id": 8,
      "A": { "A1": "Neboder", "A2": "Palača", "A3": "Kuća", "A4": "Apartman", "rjesenje": "ZGRADE" },
      "B": { "B1": "Autoput", "B2": "Šetnica", "B3": "Trotoar", "B4": "Prometna zona", "rjesenje": "ULICE" },
      "C": { "C1": "Drvo", "C2": "Klupa", "C3": "Trava", "C4": "Fontana", "rjesenje": "PARKOVI" },
      "D": { "D1": "Skulptura", "D2": "Fontana", "D3": "Trg", "D4": "Sastanak", "rjesenje": "TRGOVI" },
      "glavno_rjesenje": "GRAD"
    },
    {
      "id": 9,
      "A": { "A1": "Procesor", "A2": "Tipkovnica", "A3": "Monitor", "A4": "Miš", "rjesenje": "RAČUNALO" },
      "B": { "B1": "Mreža", "B2": "Web", "B3": "Email", "B4": "Browser", "rjesenje": "INTERNET" },
      "C": { "C1": "Mobilni", "C2": "Aplikacija", "C3": "Poziv", "C4": "Snimka", "rjesenje": "TELEFON" },
      "D": { "D1": "Automat", "D2": "Senzor", "D3": "Algoritam", "D4": "Program", "rjesenje": "ROBOT" },
      "glavno_rjesenje": "TEHNOLOGIJA"
    },
    {
      "id": 10,
      "A": { "A1": "Eksponat", "A2": "Galerija", "A3": "Historija", "A4": "Izložba", "rjesenje": "MUZEJ" },
      "B": { "B1": "Predstava", "B2": "Scena", "B3": "Glumac", "B4": "Režija", "rjesenje": "KAZALIŠTE" },
      "C": { "C1": "Muzika", "C2": "Film", "C3": "Ples", "C4": "Izložba", "rjesenje": "FESTIVAL" },
      "D": { "D1": "Roman", "D2": "Poezija", "D3": "Esej", "D4": "Biografija", "rjesenje": "KNJIGA" },
      "glavno_rjesenje": "KULTURA"
    },
    {
      "id": 11,
      "A": { "A1": "Majka", "A2": "Otac", "A3": "Brat", "A4": "Sestra", "rjesenje": "OBITELJ" },
      "B": { "B1": "Smijeh", "B2": "Zajedno", "B3": "Podrška", "B4": "Susret", "rjesenje": "PRIJATELJI" },
      "C": { "C1": "Ured", "C2": "Šef", "C3": "Sastanak", "C4": "Plaća", "rjesenje": "POSAO" },
      "D": { "D1": "Tijelo", "D2": "Dijeta", "D3": "Vježba", "D4": "Odmor", "rjesenje": "ZDRAVLJE" },
      "glavno_rjesenje": "ŽIVOT"
    },
    {
      "id": 12,
      "A": { "A1": "Toplina", "A2": "Sjaj", "A3": "Blještavo", "A4": "Odmor", "rjesenje": "SUNČANO" },
      "B": { "B1": "Sivo", "B2": "Maglovito", "B3": "Tmurno", "B4": "Mračno", "rjesenje": "OBLAČNO" },
      "C": { "C1": "Kapi", "C2": "Oborina", "C3": "Vlažno", "C4": "Puno", "rjesenje": "KIŠOVITO" },
      "D": { "D1": "Bijelo", "D2": "Hladno", "D3": "Snijeg", "D4": "Pahulje", "rjesenje": "SNJEŽNO" },
      "glavno_rjesenje": "VREMENSKE PRILIKE"
    },
    {
      "id": 13,
      "A": { "A1": "Krov", "A2": "Prozor", "A3": "Vrata", "A4": "Sobe", "rjesenje": "KUĆA" },
      "B": { "B1": "Lift", "B2": "Etaža", "B3": "Blok", "B4": "Balkon", "rjesenje": "STAN" },
      "C": { "C1": "Luksuz", "C2": "Bazen", "C3": "Vrt", "C4": "Posjed", "rjesenje": "VILA" },
      "D": { "D1": "Kraljevina", "D2": "Historija", "D3": "Kamen", "D4": "Palata", "rjesenje": "DVORAC" },
      "glavno_rjesenje": "DOM"
    },
    {
      "id": 14,
      "A": { "A1": "Učitelj", "A2": "Učenik", "A3": "Klupa", "A4": "Razred", "rjesenje": "ŠKOLA" },
      "B": { "B1": "Fakultet", "B2": "Profesor", "B3": "Predmet", "B4": "Diploma", "rjesenje": "UNIVERZITET" },
      "C": { "C1": "Roman", "C2": "Poezija", "C3": "Esej", "C4": "Literatura", "rjesenje": "KNJIGA" },
      "D": { "D1": "Online", "D2": "Web", "D3": "Informacije", "D4": "Digitalno", "rjesenje": "ONLINE" },
      "glavno_rjesenje": "EDUKACIJA"
    },
    {
      "id": 15,
      "A": { "A1": "Kamera", "A2": "Glumac", "A3": "Scena", "A4": "Bioskop", "rjesenje": "FILM" },
      "B": { "B1": "Koncert", "B2": "Instrument", "B3": "Nota", "B4": "Pjevač", "rjesenje": "MUZIKA" },
      "C": { "C1": "Takmičenje", "C2": "Strategija", "C3": "Pobjeda", "C4": "Igra", "rjesenje": "IGRA" },
      "D": { "D1": "Serija", "D2": "Emisija", "D3": "Voditelj", "D4": "Ekran", "rjesenje": "TV" },
      "glavno_rjesenje": "ZABAVA"
    },
    {
      "id": 16,
      "A": { "A1": "Smjer", "A2": "Plan", "A3": "Putokaz", "A4": "Koordinate", "rjesenje": "MAPA" },
      "B": { "B1": "Volan", "B2": "Motor", "B3": "Guma", "B4": "Brzina", "rjesenje": "AUTO" },
      "C": { "C1": "Šina", "C2": "Peron", "C3": "Kolodvor", "C4": "Karta", "rjesenje": "VLAK" },
      "D": { "D1": "Luka", "D2": "Paluba", "D3": "Mornar", "D4": "Kormilar", "rjesenje": "BROD" },
      "glavno_rjesenje": "PUT"
    },
    {
      "id": 17,
      "A": { "A1": "Potok", "A2": "Jezero", "A3": "Okean", "A4": "Reka", "rjesenje": "VODA" },
      "B": { "B1": "Stablo", "B2": "List", "B3": "Kora", "B4": "Grančica", "rjesenje": "DRVO" },
      "C": { "C1": "Toplina", "C2": "Sjaj", "C3": "Iskra", "C4": "Zrake", "rjesenje": "SUNCE" },
      "D": { "D1": "Tlo", "D2": "Polje", "D3": "Dolina", "D4": "Planina", "rjesenje": "ZEMLJA" },
      "glavno_rjesenje": "PRIRODNI RESURSI"
    },
    {
      "id": 18,
      "A": { "A1": "Elegancija", "A2": "Materijal", "A3": "Fason", "A4": "Silueta", "rjesenje": "HALJINA" },
      "B": { "B1": "Papuče", "B2": "Tenisice", "B3": "Sandale", "B4": "Čizme", "rjesenje": "CIPELE" },
      "C": { "C1": "Ruksak", "C2": "Kožna", "C3": "Vreća", "C4": "Torba", "rjesenje": "TORBA" },
      "D": { "D1": "Sat", "D2": "Nakit", "D3": "Kapa", "D4": "Naočale", "rjesenje": "DODACI" },
      "glavno_rjesenje": "MODA"
    },
    {
      "id": 19,
      "A": { "A1": "Epizoda", "A2": "Zaplet", "A3": "Scenarij", "A4": "Glumac", "rjesenje": "SERIJA" },
      "B": { "B1": "Kamera", "B2": "Scena", "B3": "Redatelj", "B4": "Glumac", "rjesenje": "FILM" },
      "C": { "C1": "Slogan", "C2": "Brend", "C3": "Spot", "C4": "Jutro", "rjesenje": "REKLAMA" },
      "D": { "D1": "Priča", "D2": "Arhiva", "D3": "Istina", "D4": "Prirodno", "rjesenje": "DOKUMENTARAC" },
      "glavno_rjesenje": "TELEVIZIJA"
    },
    {
      "id": 20,
      "A": { "A1": "Platno", "A2": "Boja", "A3": "Kist", "A4": "Paleta", "rjesenje": "SLIKARSTVO" },
      "B": { "B1": "Kip", "B2": "Bronza", "B3": "Granit", "B4": "Oblik", "rjesenje": "KIPARSTVO" },
      "C": { "C1": "Objektiv", "C2": "Okvir", "C3": "Snimak", "C4": "Digitalno", "rjesenje": "FOTOGRAFIJA" },
      "D": { "D1": "Dizajn", "D2": "Ilustracija", "D3": "Tipografija", "D4": "Digitalno", "rjesenje": "GRAFIKA" },
      "glavno_rjesenje": "UMJETNOST"
    },
    {
      "id": 21,
      "A": { "A1": "Voćni", "A2": "Narandža", "A3": "Jabuka", "A4": "Bezalkoholni", "rjesenje": "SOK" },
      "B": { "B1": "Izvor", "B2": "Boca", "B3": "Čista", "B4": "Piće", "rjesenje": "VODA" },
      "C": { "C1": "Espresso", "C2": "Aroma", "C3": "Kratka", "C4": "Mlijeko", "rjesenje": "KAFA" },
      "D": { "D1": "Biljni", "D2": "Zeleni", "D3": "Crni", "D4": "Infuzija", "rjesenje": "ČAJ" },
      "glavno_rjesenje": "PIĆE"
    },
    {
      "id": 22,
      "A": { "A1": "Put", "A2": "Identitet", "A3": "Foto", "A4": "Pečat", "rjesenje": "PASOŠ" },
      "B": { "B1": "Dozvola", "B2": "Putovanje", "B3": "Ambasada", "B4": "Pečat", "rjesenje": "VIZA" },
      "C": { "C1": "Test", "C2": "Foto", "C3": "Dokument", "C4": "Prolaz", "rjesenje": "DOZVOLA" },
      "D": { "D1": "Posao", "D2": "Pravo", "D3": "Certifikat", "D4": "Dokument", "rjesenje": "LICENCA" },
      "glavno_rjesenje": "DOKUMENTI"
    },
    {
      "id": 23,
      "A": { "A1": "Figura", "A2": "Bacanje", "A3": "Brojevi", "A4": "Potez", "rjesenje": "ČOVJEČE" },
      "B": { "B1": "Imovina", "B2": "Kupovina", "B3": "Prodaja", "B4": "Kockica", "rjesenje": "MONOPOLY" },
      "C": { "C1": "Kralj", "C2": "Kraljica", "C3": "Pijun", "C4": "Figura", "rjesenje": "ŠAH" },
      "D": { "D1": "Slovo", "D2": "Riječ", "D3": "Tablica", "D4": "Bodovi", "rjesenje": "SCRABBLE" },
      "glavno_rjesenje": "STOLNA IGRA"
    },
    {
      "id": 24,
      "A": { "A1": "Predstava", "A2": "Glumac", "A3": "Scena", "A4": "Kostim", "rjesenje": "KAZALIŠTE" },
      "B": { "B1": "Arija", "B2": "Kostim", "B3": "Pjevač", "B4": "Orkestar", "rjesenje": "OPERA" },
      "C": { "C1": "Ples", "C2": "Glazba", "C3": "Kostim", "C4": "Tane", "rjesenje": "BALET" },
      "D": { "D1": "Smijeh", "D2": "Show", "D3": "Gosti", "D4": "Scena", "rjesenje": "KABARET" },
      "glavno_rjesenje": "POZORIŠTE"
    },
    {
      "id": 25,
      "A": { "A1": "Okrugla", "A2": "Igra", "A3": "Bacanje", "A4": "Zabava", "rjesenje": "LOPTA" },
      "B": { "B1": "Tenis", "B2": "Udarac", "B3": "Drvo", "B4": "Lopta", "rjesenje": "REKET" },
      "C": { "C1": "Zaštita", "C2": "Borba", "C3": "Sigurnost", "C4": "Odbrana", "rjesenje": "ŠTIT" },
      "D": { "D1": "Hokej", "D2": "Led", "D3": "Igra", "D4": "Dvorana", "rjesenje": "PALIČICA" },
      "glavno_rjesenje": "SPORTSKI ALATI"
    },
    {
      "id": 26,
      "A": { "A1": "Lutka", "A2": "Automobil", "A3": "Zagonetka", "A4": "Kocke", "rjesenje": "IGRAČKE" },
      "B": { "B1": "Učitelj", "B2": "Razred", "B3": "Knjiga", "B4": "Tablica", "rjesenje": "ŠKOLA" },
      "C": { "C1": "Mali", "C2": "Udobne", "C3": "Boje", "C4": "Igra", "rjesenje": "CIPELE" },
      "D": { "D1": "Čokolada", "D2": "Bombone", "D3": "Keks", "D4": "Lollipop", "rjesenje": "SLATKIŠI" },
      "glavno_rjesenje": "DJECA"
    },
    {
      "id": 27,
      "A": { "A1": "Gitara", "A2": "Bubnjevi", "A3": "Solo", "A4": "Koncert", "rjesenje": "ROCK" },
      "B": { "B1": "Hit", "B2": "Dance", "B3": "Studio", "B4": "Album", "rjesenje": "POP" },
      "C": { "C1": "Rap", "C2": "Beat", "C3": "Freestyle", "C4": "MC", "rjesenje": "HIP-HOP" },
      "D": { "D1": "Orkestar", "D2": "Simfonija", "D3": "Koncert", "D4": "Kompozicija", "rjesenje": "KLASIK" },
      "glavno_rjesenje": "GLAZBA"
    },
    {
      "id": 28,
      "A": { "A1": "Bog", "A2": "Molitva", "A3": "Svećenik", "A4": "Zvonik", "rjesenje": "CRKVA" },
      "B": { "B1": "Kur'an", "B2": "Imam", "B3": "Minaret", "B4": "Vjera", "rjesenje": "DŽAMIJA" },
      "C": { "C1": "Torah", "C2": "Rabbi", "C3": "Šabat", "C4": "Obred", "rjesenje": "SINAGOGA" },
      "D": { "D1": "Meditacija", "D2": "Mandala", "D3": "Buda", "D4": "Hram", "rjesenje": "HRAM" },
      "glavno_rjesenje": "VJEROVANJE"
    },
    {
      "id": 29,
      "A": { "A1": "Glumac", "A2": "Predstava", "A3": "Kostim", "A4": "Izgled", "rjesenje": "MASKA" },
      "B": { "B1": "Pozornica", "B2": "Svjetlo", "B3": "Dekor", "B4": "Efekt", "rjesenje": "SCENA" },
      "C": { "C1": "Kreativnost", "C2": "Kamera", "C3": "Plan", "C4": "Direktor", "rjesenje": "REŽIJA" },
      "D": { "D1": "Odjeća", "D2": "Dizajn", "D3": "Boja", "D4": "Forma", "rjesenje": "KOSTIM" },
      "glavno_rjesenje": "POZORIŠNA UMJETNOST"
    },
    {
      "id": 30,
      "A": { "A1": "Poziv", "A2": "Snimka", "A3": "Kontakt", "A4": "Mobilni", "rjesenje": "TELEFON" },
      "B": { "B1": "Inbox", "B2": "Poruka", "B3": "Adresa", "B4": "Digitalno", "rjesenje": "EMAIL" },
      "C": { "C1": "Ručni", "C2": "Pera", "C3": "Papir", "C4": "Olovka", "rjesenje": "PIŠMO" },
      "D": { "D1": "Mreža", "D2": "Web", "D3": "Digitalno", "D4": "Browser", "rjesenje": "WEB" },
      "glavno_rjesenje": "KOMUNIKACIJA"
    },
    {
      "id": 31,
      "A": { "A1": "Luksuz", "A2": "Elegancija", "A3": "Komfor", "A4": "Forma", "rjesenje": "LIMUZINA" },
      "B": { "B1": "Otvoren", "B2": "Krov", "B3": "Brzina", "B4": "Stil", "rjesenje": "KABRIOLET" },
      "C": { "C1": "Ekologija", "C2": "Baterija", "C3": "Motor", "C4": "Ušteda", "rjesenje": "HIBRID" },
      "D": { "D1": "Veliki", "D2": "Robustan", "D3": "Porodični", "D4": "Prostor", "rjesenje": "SUV" },
      "glavno_rjesenje": "AUTOMOBILI"
    },
    {
      "id": 32,
      "A": { "A1": "More", "A2": "Sunce", "A3": "Plaža", "A4": "Rijeka", "rjesenje": "DALMACIJA" },
      "B": { "B1": "Vinograd", "B2": "Maslinik", "B3": "Kamen", "B4": "Grad", "rjesenje": "ISTRA" },
      "C": { "C1": "Glavni", "C2": "Trg", "C3": "Katedrala", "C4": "Park", "rjesenje": "ZAGREB" },
      "D": { "D1": "Polja", "D2": "Voće", "D3": "Meso", "D4": "Tradicionalno", "rjesenje": "SLAVONIJA" },
      "glavno_rjesenje": "HRVATSKA"
    },
    {
      "id": 33,
      "A": { "A1": "Crveno", "A2": "Simbol", "A3": "Bijelo", "A4": "Puls", "rjesenje": "SRCE" },
      "B": { "B1": "Usne", "B2": "Romantika", "B3": "Toplina", "B4": "Poljubac", "rjesenje": "POLJUBAC" },
      "C": { "C1": "Partner", "C2": "Povjerenje", "C3": "Podrška", "C4": "Zajednica", "rjesenje": "VEZA" },
      "D": { "D1": "Osmeh", "D2": "Radost", "D3": "Zadovoljstvo", "D4": "Smijeh", "rjesenje": "SREĆA" },
      "glavno_rjesenje": "LJUBAV"
    },
    {
      "id": 34,
      "A": { "A1": "Meki", "A2": "Puh", "A3": "Spavanje", "A4": "Udobnost", "rjesenje": "JASTUKI" },
      "B": { "B1": "Toplina", "B2": "Meko", "B3": "Pliš", "B4": "Tkanina", "rjesenje": "ĆEBADA" },
      "C": { "C1": "Sjedalo", "C2": "Udobno", "C3": "Mekano", "C4": "Luksuz", "rjesenje": "FOTELJE" },
      "D": { "D1": "Košulja", "D2": "Čist", "D3": "Boja", "D4": "Tkanina", "rjesenje": "POSTELJINA" },
      "glavno_rjesenje": "KOMFOR"
    },
    {
      "id": 35,
      "A": { "A1": "Trening", "A2": "Teretana", "A3": "Kondicija", "A4": "Pokret", "rjesenje": "VJEŽBA" },
      "B": { "B1": "Voće", "B2": "Povrće", "B3": "Proteini", "B4": "Plan", "rjesenje": "DIJETA" },
      "C": { "C1": "San", "C2": "Relaks", "C3": "Odmor", "C4": "Mir", "rjesenje": "ODMOR" },
      "D": { "D1": "Hidratacija", "D2": "Čista", "D3": "Boca", "D4": "Piće", "rjesenje": "VODA" },
      "glavno_rjesenje": "ZDRAVLJE"
    },
    {
      "id": 36,
      "A": { "A1": "Papir", "A2": "Metal", "A3": "Simbol", "A4": "Banka", "rjesenje": "NOVAC" },
      "B": { "B1": "Kartica", "B2": "Isplata", "B3": "Pin", "B4": "Transakcija", "rjesenje": "BANKOMAT" },
      "C": { "C1": "Dionica", "C2": "Profit", "C3": "Tržište", "C4": "Plan", "rjesenje": "INVESTICIJA" },
      "D": { "D1": "Država", "D2": "Stopa", "D3": "Obaveza", "D4": "Pravila", "rjesenje": "POREZ" },
      "glavno_rjesenje": "FINANCIJE"
    },
    {
      "id": 37,
      "A": { "A1": "Naslov", "A2": "Članak", "A3": "Foto", "A4": "Tiskano", "rjesenje": "NOVINE" },
      "B": { "B1": "Emisija", "B2": "Voditelj", "B3": "Scena", "B4": "Glumac", "rjesenje": "TV" },
      "C": { "C1": "Jezik", "C2": "Zvuk", "C3": "Emisija", "C4": "Daljinski", "rjesenje": "RADIO" },
      "D": { "D1": "Web", "D2": "Blog", "D3": "Portal", "D4": "Digitalno", "rjesenje": "WEB" },
      "glavno_rjesenje": "MEDIJI"
    },
    {
      "id": 38,
      "A": { "A1": "Tabla", "A2": "Kartice", "A3": "Potez", "A4": "Tim", "rjesenje": "DRUŠTVENE" },
      "B": { "B1": "Konzola", "B2": "Kontroler", "B3": "Grafika", "B4": "Igra", "rjesenje": "VIDEO" },
      "C": { "C1": "Kockice", "C2": "Brojevi", "C3": "Šansa", "C4": "Bacanje", "rjesenje": "KOCKE" },
      "D": { "D1": "Slika", "D2": "Dio", "D3": "Sastavi", "D4": "Reši", "rjesenje": "PUZZLE" },
      "glavno_rjesenje": "IGRE"
    },
    {
      "id": 39,
      "A": { "A1": "Ured", "A2": "Šef", "A3": "Sastanak", "A4": "Plaća", "rjesenje": "POSAO" },
      "B": { "B1": "Učitelj", "B2": "Razred", "B3": "Ispit", "B4": "Knjiga", "rjesenje": "ŠKOLA" },
      "C": { "C1": "Čišćenje", "C2": "Pranje", "C3": "Kuhanje", "C4": "Organizacija", "rjesenje": "KUĆA" },
      "D": { "D1": "Vrijeme", "D2": "Termini", "D3": "Plan", "D4": "Datum", "rjesenje": "ROK" },
      "glavno_rjesenje": "OBAVEZE"
    },
    {
      "id": 40,
      "A": { "A1": "Avion", "A2": "Pilot", "A3": "Aerodrom", "A4": "Krila", "rjesenje": "LET" },
      "B": { "B1": "Šina", "B2": "Kolodvor", "B3": "Peron", "B4": "Karta", "rjesenje": "VLAK" },
      "C": { "C1": "Luka", "C2": "Mornar", "C3": "Paluba", "C4": "Kormilar", "rjesenje": "BROD" },
      "D": { "D1": "Volan", "D2": "Motor", "D3": "Brzina", "D4": "Guma", "rjesenje": "AUTO" },
      "glavno_rjesenje": "PUTNIŠTVO"
    },
    {
      "id": 41,
      "A": { "A1": "Lopta", "A2": "Gol", "A3": "Igrači", "A4": "Trener", "rjesenje": "FUDBAL" },
      "B": { "B1": "Obruč", "B2": "Skok", "B3": "Tim", "B4": "Dunk", "rjesenje": "KOŠARKA" },
      "C": { "C1": "Reket", "C2": "Net", "C3": "Lopta", "C4": "Turnir", "rjesenje": "TENIS" },
      "D": { "D1": "Trčanje", "D2": "Skok", "D3": "Bacanje", "D4": "Staza", "rjesenje": "ATLETIKA" },
      "glavno_rjesenje": "SPORT"
    },
    {
      "id": 42,
      "A": { "A1": "Platno", "A2": "Kist", "A3": "Boja", "A4": "Paleta", "rjesenje": "SLIKARSTVO" },
      "B": { "B1": "Nota", "B2": "Gitara", "B3": "Klavir", "B4": "Bubnjevi", "rjesenje": "MUZIKA" },
      "C": { "C1": "Scenarij", "C2": "Glumac", "C3": "Kamera", "C4": "Režija", "rjesenje": "FILM" },
      "D": { "D1": "Tane", "D2": "Ritam", "D3": "Scena", "D4": "Kostim", "rjesenje": "PLES" },
      "glavno_rjesenje": "UMJETNOST"
    },
    {
      "id": 43,
      "A": { "A1": "Tabla", "A2": "Kartice", "A3": "Potez", "A4": "Strategija", "rjesenje": "IGRE" },
      "B": { "B1": "Scena", "B2": "Glumac", "B3": "Kamera", "B4": "Redatelj", "rjesenje": "FILM" },
      "C": { "C1": "Nota", "C2": "Pjevač", "C3": "Koncert", "C4": "Album", "rjesenje": "MUZIKA" },
      "D": { "D1": "Serija", "D2": "Emisija", "D3": "Voditelj", "D4": "Scenarij", "rjesenje": "TV" },
      "glavno_rjesenje": "ZABAVA"
    },
    {
      "id": 44,
      "A": { "A1": "Toplina", "A2": "More", "A3": "Svjetlost", "A4": "Odmor", "rjesenje": "LJETO" },
      "B": { "B1": "Snijeg", "B2": "Mraz", "B3": "Led", "B4": "Pahulje", "rjesenje": "ZIMA" },
      "C": { "C1": "Cvijet", "C2": "Buđenje", "C3": "Zelenilo", "C4": "Miris", "rjesenje": "PROLJEĆE" },
      "D": { "D1": "Lišće", "D2": "Šarenilo", "D3": "Sakupljanje", "D4": "Dim", "rjesenje": "JESEN" },
      "glavno_rjesenje": "VREME"
    },
    {
      "id": 45,
      "A": { "A1": "Figura", "A2": "Bacanje", "A3": "Brojevi", "A4": "Potez", "rjesenje": "ČOVJEČE" },
      "B": { "B1": "Imovina", "B2": "Kupovina", "B3": "Prodaja", "B4": "Kockica", "rjesenje": "MONOPOLY" },
      "C": { "C1": "Kralj", "C2": "Kraljica", "C3": "Pijun", "C4": "Figura", "rjesenje": "ŠAH" },
      "D": { "D1": "Slovo", "D2": "Riječ", "D3": "Tablica", "D4": "Bodovi", "rjesenje": "SCRABBLE" },
      "glavno_rjesenje": "STOLNA IGRA"
    },
    {
      "id": 46,
      "A": { "A1": "Jabuka", "A2": "Banana", "A3": "Kivi", "A4": "Grožđe", "rjesenje": "VOĆE" },
      "B": { "B1": "Mrkva", "B2": "Krastavac", "B3": "Paradajz", "B4": "Kupus", "rjesenje": "POVRĆE" },
      "C": { "C1": "Piletina", "C2": "Govedina", "C3": "Janjetina", "C4": "Svinjetina", "rjesenje": "MESO" },
      "D": { "D1": "Mlijeko", "D2": "Sir", "D3": "Jogurt", "D4": "Pavlaka", "rjesenje": "MLIJEČNO" },
      "glavno_rjesenje": "PREHRANA"
    },
    {
      "id": 47,
      "A": { "A1": "Predstava", "A2": "Glumac", "A3": "Scena", "A4": "Kostim", "rjesenje": "KAZALIŠTE" },
      "B": { "B1": "Arija", "B2": "Kostim", "B3": "Pjevač", "B4": "Orkestar", "rjesenje": "OPERA" },
      "C": { "C1": "Ples", "C2": "Glazba", "C3": "Kostim", "C4": "Tane", "rjesenje": "BALET" },
      "D": { "D1": "Humor", "D2": "Show", "D3": "Gosti", "D4": "Scena", "rjesenje": "KABARET" },
      "glavno_rjesenje": "POZORIŠTE"
    },
    {
      "id": 48,
      "A": { "A1": "Pilot", "A2": "Aerodrom", "A3": "Let", "A4": "Krila", "rjesenje": "AVION" },
      "B": { "B1": "Šina", "B2": "Kolodvor", "B3": "Peron", "B4": "Karta", "rjesenje": "VLAK" },
      "C": { "C1": "Luka", "C2": "Mornar", "C3": "Paluba", "C4": "Kormilar", "rjesenje": "BROD" },
      "D": { "D1": "Volan", "D2": "Motor", "D3": "Brzina", "D4": "Guma", "rjesenje": "AUTO" },
      "glavno_rjesenje": "PUTOVANJE"
    },
    {
      "id": 49,
      "A": { "A1": "Poziv", "A2": "Snimka", "A3": "Mobilni", "A4": "Kontakt", "rjesenje": "TELEFON" },
      "B": { "B1": "Inbox", "B2": "Poruka", "B3": "Adresa", "B4": "Digitalno", "rjesenje": "EMAIL" },
      "C": { "C1": "Ručni", "C2": "Pera", "C3": "Papir", "C4": "Olovka", "rjesenje": "PIŠMO" },
      "D": { "D1": "Web", "D2": "Blog", "D3": "Portal", "D4": "Digitalno", "rjesenje": "WEB" },
      "glavno_rjesenje": "KOMUNIKACIJA"
    },
    {
      "id": 50,
      "A": { "A1": "Tabla", "A2": "Kartice", "A3": "Potez", "A4": "Strategija", "rjesenje": "IGRE" },
      "B": { "B1": "Scena", "B2": "Glumac", "B3": "Kamera", "B4": "Redatelj", "rjesenje": "FILM" },
      "C": { "C1": "Nota", "C2": "Pjevač", "C3": "Koncert", "C4": "Album", "rjesenje": "MUZIKA" },
      "D": { "D1": "Serija", "D2": "Emisija", "D3": "Voditelj", "D4": "Scenarij", "rjesenje": "TV" },
      "glavno_rjesenje": "ZABAVA"
    }
  ]
  

  module.exports = asocijacije;