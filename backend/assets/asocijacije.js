const asocijacije = [
  {
      "id": 1,
      "A": { "A1": "Jesen", "A2": "Temperatura", "A3": "Godišnje doba", "A4": "Lišće", "rjesenje": "HLADNOĆA" },
      "B": { "B1": "Planina", "B2": "Snijeg", "B3": "Zima", "B4": "Sport", "rjesenje": "SKIJANJE" },
      "C": { "C1": "Bazen", "C2": "Ljeto", "C3": "More", "C4": "Sunčanje", "rjesenje": "PLIVANJE" },
      "D": { "D1": "Maraton", "D2": "Brzina", "D3": "Staza", "D4": "Utrka", "rjesenje": "TRČANJE" },
      "glavno_rjesenje": "SPORT"
  },
  {
      "id": 2,
      "A": { "A1": "Knjiga", "A2": "Pisac", "A3": "Roman", "A4": "Stranice", "rjesenje": "LITERATURA" },
      "B": { "B1": "Filmska", "B2": "Glumci", "B3": "Produkcija", "B4": "Bioskop", "rjesenje": "KINO" },
      "C": { "C1": "Gitara", "C2": "Nota", "C3": "Orkestar", "C4": "Skladatelj", "rjesenje": "MUZIKA" },
      "D": { "D1": "Platno", "D2": "Boja", "D3": "Umjetnik", "D4": "Galerija", "rjesenje": "SLIKARSTVO" },
      "glavno_rjesenje": "UMJETNOST"
  },
  {
      "id": 3,
      "A": { "A1": "Rim", "A2": "Vatikanski trg", "A3": "Koloseum", "A4": "Makaron", "rjesenje": "ITALIJA" },
      "B": { "B1": "Pariz", "B2": "Ajfelov toranj", "B3": "Luvr", "B4": "Šampanjac", "rjesenje": "FRANCUSKA" },
      "C": { "C1": "Berlin", "C2": "Brandenburška kapija", "C3": "Autobahn", "C4": "Pivo", "rjesenje": "NJEMAČKA" },
      "D": { "D1": "Madrid", "D2": "Korida", "D3": "Flamenko", "D4": "Paella", "rjesenje": "ŠPANIJA" },
      "glavno_rjesenje": "EVROPA"
  },
  {
      "id": 4,
      "A": { "A1": "Jabuka", "A2": "Kruška", "A3": "Šljiva", "A4": "Trešnja", "rjesenje": "VOĆE" },
      "B": { "B1": "Mrkva", "B2": "Krastavac", "B3": "Paradajz", "B4": "Kupus", "rjesenje": "POVRĆE" },
      "C": { "C1": "Pile", "C2": "Riba", "C3": "Govedina", "C4": "Janjetina", "rjesenje": "MESO" },
      "D": { "D1": "Jogurt", "D2": "Mlijeko", "D3": "Sir", "D4": "Pavlaka", "rjesenje": "MLIJEČNI PROIZVODI" },
      "glavno_rjesenje": "HRANA"
  },
  {
      "id": 5,
      "A": { "A1": "Tesla", "A2": "Struja", "A3": "Edison", "A4": "Generator", "rjesenje": "ELEKTRICITET" },
      "B": { "B1": "Newton", "B2": "Jabuka", "B3": "Sila", "B4": "Masa", "rjesenje": "GRAVITACIJA" },
      "C": { "C1": "Einstein", "C2": "E=mc2", "C3": "Relativnost", "C4": "Fizika", "rjesenje": "TEORIJA" },
      "D": { "D1": "Zemlja", "D2": "Sunce", "D3": "Planeta", "D4": "Orbita", "rjesenje": "ASTRONOMIJA" },
      "glavno_rjesenje": "NAUKA"
  },
  {
      "id": 6,
      "A": { "A1": "Majka", "A2": "Otac", "A3": "Brat", "A4": "Sestra", "rjesenje": "PORODICA" },
      "B": { "B1": "Ručak", "B2": "Zajedno", "B3": "Razgovor", "B4": "Vrijeme", "rjesenje": "OBITELJ" },
      "C": { "C1": "Ljubav", "C2": "Podrška", "C3": "Sigurnost", "C4": "Toplina", "rjesenje": "KUĆA" },
      "D": { "D1": "Krov", "D2": "Stan", "D3": "Kuća", "D4": "Zajednica", "rjesenje": "STANOVANJE" },
      "glavno_rjesenje": "DOM"
  },
  {
      "id": 7,
      "A": { "A1": "Plava", "A2": "Duboka", "A3": "Valovi", "A4": "Brodić", "rjesenje": "VODA" },
      "B": { "B1": "Pješčana", "B2": "More", "B3": "Odmaralište", "B4": "Suncobran", "rjesenje": "PLAŽA" },
      "C": { "C1": "Turisti", "C2": "Putovanja", "C3": "Spavanje", "C4": "Soba", "rjesenje": "HOTEL" },
      "D": { "D1": "Avion", "D2": "Let", "D3": "Aerodrom", "D4": "Karta", "rjesenje": "PUTOVANJE" },
      "glavno_rjesenje": "ODMOR"
  },
  {
      "id": 8,
      "A": { "A1": "Nebo", "A2": "Bijela", "A3": "Oblaci", "A4": "Kiša", "rjesenje": "ATMOSFERA" },
      "B": { "B1": "Grmljavina", "B2": "Pljusak", "B3": "Oluja", "B4": "Munja", "rjesenje": "NEVRIJEME" },
      "C": { "C1": "Sunce", "C2": "Vrućina", "C3": "Sjaj", "C4": "Dug dan", "rjesenje": "LJETO" },
      "D": { "D1": "Sanje", "D2": "Zima", "D3": "Led", "D4": "Snijeg", "rjesenje": "HLADNOĆA" },
      "glavno_rjesenje": "VRIJEME"
  },

  /* DODATNE 42 ASOCIACIJE */

  {
      "id": 9,
      "A": { "A1": "Šuma", "A2": "Livada", "A3": "Polje", "A4": "Planina", "rjesenje": "VEGETACIJA" },
      "B": { "B1": "Reka", "B2": "Potok", "B3": "Jezero", "B4": "Vodopad", "rjesenje": "VODENI SVIJET" },
      "C": { "C1": "Sunce", "C2": "Oblak", "C3": "Kiša", "C4": "Mjesečina", "rjesenje": "NEBESKI PROSTOR" },
      "D": { "D1": "Vjetar", "D2": "Obala", "D3": "Pećina", "D4": "Otok", "rjesenje": "GEOGRAFSKI OBRAZ" },
      "glavno_rjesenje": "PRIRODA"
  },
  {
      "id": 10,
      "A": { "A1": "Računar", "A2": "Procesor", "A3": "Memorija", "A4": "Hard disk", "rjesenje": "INFORMATIKA" },
      "B": { "B1": "Internet", "B2": "Mreža", "B3": "Wi‑Fi", "B4": "Router", "rjesenje": "TRANSMISIJA" },
      "C": { "C1": "Pametni telefon", "C2": "Aplikacija", "C3": "Touchscreen", "C4": "Baterija", "rjesenje": "MOBILNOST" },
      "D": { "D1": "Robot", "D2": "Automat", "D3": "Senzor", "D4": "Algoritam", "rjesenje": "INOVACIJA" },
      "glavno_rjesenje": "TEHNOLOGIJA"
  },
  {
      "id": 11,
      "A": { "A1": "Drevni", "A2": "Civilizacija", "A3": "Faraon", "A4": "Piramida", "rjesenje": "EGIPAT" },
      "B": { "B1": "Rimski", "B2": "Car", "B3": "Forum", "B4": "Koloseum", "rjesenje": "RIM" },
      "C": { "C1": "Srednji vijek", "C2": "Kraljevstvo", "C3": "Dvorac", "C4": "Turnir", "rjesenje": "VITEŠTVO" },
      "D": { "D1": "Revolucija", "D2": "Deklaracija", "D3": "Rat", "D4": "Parlament", "rjesenje": "MODERNOST" },
      "glavno_rjesenje": "POVIJEST"
  },
  {
      "id": 12,
      "A": { "A1": "Teatar", "A2": "Opera", "A3": "Balet", "A4": "Kazalište", "rjesenje": "SCENA" },
      "B": { "B1": "Festival", "B2": "Konvencija", "B3": "Koncert", "B4": "Izložba", "rjesenje": "DOGAĐAJ" },
      "C": { "C1": "Običaj", "C2": "Ples", "C3": "Narod", "C4": "Tradicionalno", "rjesenje": "FOLK" },
      "D": { "D1": "Muzika", "D2": "Knjiga", "D3": "Likovna", "D4": "Film", "rjesenje": "IZRAZ" },
      "glavno_rjesenje": "KULTURA"
  },
  {
      "id": 13,
      "A": { "A1": "Simfonija", "A2": "Koncert", "A3": "Orkestar", "A4": "Nota", "rjesenje": "KLASIK" },
      "B": { "B1": "Rock", "B2": "Pop", "B3": "Punk", "B4": "Jazz", "rjesenje": "GENRE" },
      "C": { "C1": "Gitara", "C2": "Bubnjevi", "C3": "Klavir", "C4": "Saksofon", "rjesenje": "INSTRUMENT" },
      "D": { "D1": "Pjevač", "D2": "Solist", "D3": "Zbor", "D4": "Ritam", "rjesenje": "VOKAL" },
      "glavno_rjesenje": "MUZIKA"
  },
  {
      "id": 14,
      "A": { "A1": "Gramatika", "A2": "Sintaksa", "A3": "Rječnik", "A4": "Pravopis", "rjesenje": "STIL" },
      "B": { "B1": "Dialekt", "B2": "Akcenat", "B3": "Izgovor", "B4": "Lingvistika", "rjesenje": "VARIJACIJA" },
      "C": { "C1": "Komunikacija", "C2": "Pismenost", "C3": "Literatura", "C4": "Esej", "rjesenje": "IZRAZ" },
      "D": { "D1": "Alfabet", "D2": "Slovo", "D3": "Znak", "D4": "Simbol", "rjesenje": "PISMO" },
      "glavno_rjesenje": "JEZIK"
  },
  {
      "id": 15,
      "A": { "A1": "Zgrada", "A2": "Kula", "A3": "Stup", "A4": "Oblik", "rjesenje": "KONSTRUKCIJA" },
      "B": { "B1": "Most", "B2": "Tunel", "B3": "Fasada", "B4": "Plan", "rjesenje": "INŽENJERING" },
      "C": { "C1": "Krov", "C2": "Prozor", "C3": "Vrata", "C4": "Dizajn", "rjesenje": "ESTETIKA" },
      "D": { "D1": "Grad", "D2": "Centar", "D3": "Piazza", "D4": "Park", "rjesenje": "URBANIZAM" },
      "glavno_rjesenje": "ARHITEKTURA"
  },
  {
      "id": 16,
      "A": { "A1": "Tabla", "A2": "Figura", "A3": "Potez", "A4": "Polje", "rjesenje": "ŠAH" },
      "B": { "B1": "Kontroler", "B2": "Ekran", "B3": "Igrač", "B4": "Miš", "rjesenje": "VIDEO" },
      "C": { "C1": "Lopta", "C2": "Trčanje", "C3": "Tim", "C4": "Gol", "rjesenje": "FUTBOL" },
      "D": { "D1": "Mozgalica", "D2": "Zagonetka", "D3": "Rebus", "D4": "Enigma", "rjesenje": "LOGIKA" },
      "glavno_rjesenje": "IGRE"
  },
  {
      "id": 17,
      "A": { "A1": "Motor", "A2": "Volan", "A3": "Brzina", "A4": "Gume", "rjesenje": "SNAŽNOST" },
      "B": { "B1": "Karoserija", "B2": "Staklo", "B3": "Retrovizor", "B4": "Prednja", "rjesenje": "DIZAJN" },
      "C": { "C1": "Gorivo", "C2": "Benzin", "C3": "Dizel", "C4": "Električni", "rjesenje": "ENERGIJA" },
      "D": { "D1": "Autoput", "D2": "Brza vožnja", "D3": "Navigacija", "D4": "Put", "rjesenje": "VOŽNJA" },
      "glavno_rjesenje": "AUTOMOBILI"
  },
  {
      "id": 18,
      "A": { "A1": "Vlak", "A2": "Kolodvor", "A3": "Peron", "A4": "Šina", "rjesenje": "ŽELEZNICA" },
      "B": { "B1": "Brod", "B2": "Luka", "B3": "Mornar", "B4": "Kormilar", "rjesenje": "PLOVIDBA" },
      "C": { "C1": "Avion", "C2": "Terminal", "C3": "Let", "C4": "Pilot", "rjesenje": "AVIJACIJA" },
      "D": { "D1": "Bus", "D2": "Tramvaj", "D3": "Taksi", "D4": "Minibus", "rjesenje": "JAVNI" },
      "glavno_rjesenje": "TRANSPORT"
  },
  {
      "id": 19,
      "A": { "A1": "Telefon", "A2": "Poziv", "A3": "SMS", "A4": "Razgovor", "rjesenje": "DIALOZ" },
      "B": { "B1": "Sat", "B2": "Kod", "B3": "Kanal", "B4": "Frekvencija", "rjesenje": "TRANSMISIJA" },
      "C": { "C1": "Jezik", "C2": "Govor", "C3": "Pismo", "C4": "Reč", "rjesenje": "VERBALNO" },
      "D": { "D1": "Mimika", "D2": "Gest", "D3": "Pokret", "D4": "Obraz", "rjesenje": "NEVERBALNO" },
      "glavno_rjesenje": "KOMUNIKACIJA"
  },
  {
      "id": 20,
      "A": { "A1": "Novac", "A2": "Banka", "A3": "Štednja", "A4": "Investicija", "rjesenje": "FINANCIJE" },
      "B": { "B1": "Tržište", "B2": "Cijena", "B3": "Ponuda", "B4": "Potražnja", "rjesenje": "TRGOVINA" },
      "C": { "C1": "Rad", "C2": "Plaća", "C3": "Profit", "C4": "Trošak", "rjesenje": "ZARADA" },
      "D": { "D1": "Porez", "D2": "Inflacija", "D3": "Budžet", "D4": "Investitor", "rjesenje": "MAKROEKONOMIJA" },
      "glavno_rjesenje": "EKONOMIJA"
  },
  {
      "id": 21,
      "A": { "A1": "Debata", "A2": "Kampanja", "A3": "Izbori", "A4": "Glasanje", "rjesenje": "DEMOKRACIJA" },
      "B": { "B1": "Partija", "B2": "Lider", "B3": "Koalicija", "B4": "Program", "rjesenje": "STRANKA" },
      "C": { "C1": "Ustav", "C2": "Zakon", "C3": "Sabor", "C4": "Pravo", "rjesenje": "LEGISLATIVA" },
      "D": { "D1": "Manifest", "D2": "Simbol", "D3": "Propaganda", "D4": "Retorika", "rjesenje": "IDEOLOGIJA" },
      "glavno_rjesenje": "POLITIKA"
  },
  {
      "id": 22,
      "A": { "A1": "Sumnja", "A2": "Argument", "A3": "Dijalektika", "A4": "Pitanje", "rjesenje": "RACIONALNO" },
      "B": { "B1": "Etika", "B2": "Moral", "B3": "Vrijednost", "B4": "Princip", "rjesenje": "VREDNOVANJE" },
      "C": { "C1": "Sistem", "C2": "Ideja", "C3": "Uverenje", "C4": "Koncept", "rjesenje": "TEORIJA" },
      "D": { "D1": "Istina", "D2": "Spor", "D3": "Dijalog", "D4": "Sumnja", "rjesenje": "DISKUSIJA" },
      "glavno_rjesenje": "FILOZOFIJA"
  },
  {
      "id": 23,
      "A": { "A1": "Motivacija", "A2": "Ambicija", "A3": "San", "A4": "Osjećaj", "rjesenje": "PODSVIJEST" },
      "B": { "B1": "Pamćenje", "B2": "Učenje", "B3": "Analiza", "B4": "Percepcija", "rjesenje": "KOGNICIJA" },
      "C": { "C1": "Stres", "C2": "Tjeskoba", "C3": "Fobija", "C4": "Trauma", "rjesenje": "MENTALNOST" },
      "D": { "D1": "Osobnost", "D2": "Karakter", "D3": "Identitet", "D4": "Temperament", "rjesenje": "LIČNOST" },
      "glavno_rjesenje": "PSIHOLOGIJA"
  },
  {
      "id": 24,
      "A": { "A1": "Doktor", "A2": "Bolnica", "A3": "Operacija", "A4": "Pacijent", "rjesenje": "ZDRAVLJE" },
      "B": { "B1": "Anatomija", "B2": "Fiziologija", "B3": "Dijagnoza", "B4": "Sistem", "rjesenje": "TERAPIJA" },
      "C": { "C1": "Lijek", "C2": "Doza", "C3": "Injekcija", "C4": "Pilula", "rjesenje": "FARMACIJA" },
      "D": { "D1": "Simptom", "D2": "Bol", "D3": "Povraćanje", "D4": "Groznica", "rjesenje": "REMEDIJA" },
      "glavno_rjesenje": "MEDICINA"
  },
  {
      "id": 25,
      "A": { "A1": "Ćelija", "A2": "Nukleus", "A3": "Membrana", "A4": "Organel", "rjesenje": "MIKROSKOP" },
      "B": { "B1": "Gen", "B2": "DNK", "B3": "Evolucija", "B4": "Nasljedstvo", "rjesenje": "GENETIKA" },
      "C": { "C1": "Biljka", "C2": "Životinja", "C3": "Bakterija", "C4": "Gljiva", "rjesenje": "BIODIVERZITET" },
      "D": { "D1": "Ekosistem", "D2": "Stanište", "D3": "Hrana", "D4": "Ciklus", "rjesenje": "EKOLOGIJA" },
      "glavno_rjesenje": "BIOLOGIJA"
  },
  {
      "id": 26,
      "A": { "A1": "Sjever", "A2": "Jug", "A3": "Istok", "A4": "Zapad", "rjesenje": "KOMPAS" },
      "B": { "B1": "Grad", "B2": "Selo", "B3": "Metropola", "B4": "Naselje", "rjesenje": "URBANOST" },
      "C": { "C1": "Oceani", "C2": "Bregovi", "C3": "Greben", "C4": "Valovi", "rjesenje": "HIDROLOGIJA" },
      "D": { "D1": "Klima", "D2": "Oborina", "D3": "Temperatura", "D4": "Vremenski uvjeti", "rjesenje": "METEOROLOGIJA" },
      "glavno_rjesenje": "GEOGRAFIJA"
  },
  {
      "id": 27,
      "A": { "A1": "Atom", "A2": "Molekula", "A3": "Periodni", "A4": "Element", "rjesenje": "BONDOVI" },
      "B": { "B1": "Reakcija", "B2": "Katalizator", "B3": "Eksperiment", "B4": "Laboratorij", "rjesenje": "SINTETIKA" },
      "C": { "C1": "Kiselina", "C2": "Baza", "C3": "pH", "C4": "Neutralizacija", "rjesenje": "ACIDOST" },
      "D": { "D1": "Plin", "D2": "Kapljica", "D3": "Čvrsto", "D4": "Tekuće", "rjesenje": "STANJE" },
      "glavno_rjesenje": "KEMIJA"
  },
  {
      "id": 28,
      "A": { "A1": "Brzina", "A2": "Akceleracija", "A3": "Ubrzanje", "A4": "Masa", "rjesenje": "DINAMIKA" },
      "B": { "B1": "Sila", "B2": "Trakcija", "B3": "Otpor", "B4": "Moment", "rjesenje": "MEHANIKA" },
      "C": { "C1": "Energija", "C2": "Rad", "C3": "Snaga", "C4": "Vrijednost", "rjesenje": "TERMODINAMIKA" },
      "D": { "D1": "Svjetlost", "D2": "Optika", "D3": "Refleksija", "D4": "Loma", "rjesenje": "FOTONIKA" },
      "glavno_rjesenje": "FIZIKA"
  },
  {
      "id": 29,
      "A": { "A1": "Haljina", "A2": "Odjeća", "A3": "Tkanina", "A4": "Kroj", "rjesenje": "ŠIK" },
      "B": { "B1": "Cipele", "B2": "Torba", "B3": "Nakit", "B4": "Sat", "rjesenje": "DODACI" },
      "C": { "C1": "Trendi", "C2": "Moderno", "C3": "Klasično", "C4": "Retro", "rjesenje": "STILOVSKO" },
      "D": { "D1": "Kreacija", "D2": "Dizajner", "D3": "Skica", "D4": "Model", "rjesenje": "DIZAJN" },
      "glavno_rjesenje": "MODA"
  },
  {
      "id": 30,
      "A": { "A1": "Planinarenje", "A2": "Biciklizam", "A3": "Pješačenje", "A4": "Ribolov", "rjesenje": "AKTIVNOST" },
      "B": { "B1": "Kamp", "B2": "Logor", "B3": "Roštilj", "B4": "Priroda", "rjesenje": "IZLET" },
      "C": { "C1": "Plivanje", "C2": "Sunčanje", "C3": "Bazen", "C4": "More", "rjesenje": "ODMOR" },
      "D": { "D1": "Tenis", "D2": "Golf", "D3": "Odbojka", "D4": "Fudbal", "rjesenje": "SPORT" },
      "glavno_rjesenje": "REKREACIJA"
  },
  {
      "id": 31,
      "A": { "A1": "Mapa", "A2": "Kompas", "A3": "GPS", "A4": "Koordinate", "rjesenje": "NAVIGACIJA" },
      "B": { "B1": "Pruga", "B2": "Autoput", "B3": "Most", "B4": "Tunel", "rjesenje": "INFRASTRUKTURA" },
      "C": { "C1": "Putokaz", "C2": "Signal", "C3": "Znak", "C4": "Smjer", "rjesenje": "ORIJENTACIJA" },
      "D": { "D1": "Pjesma", "D2": "Avantura", "D3": "Destinacija", "D4": "Odredište", "rjesenje": "EKSKURSIJA" },
      "glavno_rjesenje": "PUTANJA"
  },
  {
      "id": 32,
      "A": { "A1": "Roman", "A2": "Priča", "A3": "Poezija", "A4": "Drama", "rjesenje": "STIL" },
      "B": { "B1": "Autor", "B2": "Pisac", "B3": "Scenarij", "B4": "Esej", "rjesenje": "KREATIVNOST" },
      "C": { "C1": "Stranica", "C2": "Čitanje", "C3": "Knjižnica", "C4": "Literatura", "rjesenje": "PISANOST" },
      "D": { "D1": "Mit", "D2": "Legenda", "D3": "Bajka", "D4": "Priča", "rjesenje": "MITOLOGIJA" },
      "glavno_rjesenje": "KNJIŽEVNOST"
  },
  {
      "id": 33,
      "A": { "A1": "Jelo", "A2": "Kuhinja", "A3": "Recept", "A4": "Sastojak", "rjesenje": "KUHANJE" },
      "B": { "B1": "Sladoled", "B2": "Torta", "B3": "Čokolada", "B4": "Keks", "rjesenje": "SLATKASTO" },
      "C": { "C1": "Meso", "C2": "Riba", "C3": "Povrće", "C4": "Voće", "rjesenje": "OSNOVNO" },
      "D": { "D1": "Kafa", "D2": "Čaj", "D3": "Sok", "D4": "Voda", "rjesenje": "PIĆE" },
      "glavno_rjesenje": "GASTRONOMIJA"
  },
  {
      "id": 34,
      "A": { "A1": "Ritam", "A2": "Pokret", "A3": "Korak", "A4": "Plesni stil", "rjesenje": "BALET" },
      "B": { "B1": "Hip‑hop", "B2": "Breakdance", "B3": "Street", "B4": "Freestyle", "rjesenje": "MODERNO" },
      "C": { "C1": "Valcer", "C2": "Tango", "C3": "Samba", "C4": "Foxtrot", "rjesenje": "KLASIK" },
      "D": { "D1": "Salsa", "D2": "Merengue", "D3": "Rumba", "D4": "Cha‑cha", "rjesenje": "LATINSKO" },
      "glavno_rjesenje": "PLES"
  },
  {
      "id": 35,
      "A": { "A1": "Druženje", "A2": "Sastanak", "A3": "Poziv", "A4": "Razgovor", "rjesenje": "KOMUNIKACIJA" },
      "B": { "B1": "Sigurnost", "B2": "Podrška", "B3": "Smijeh", "B4": "Zabava", "rjesenje": "OSJEĆANJE" },
      "C": { "C1": "Doviđenja", "C2": "Zajedno", "C3": "Upoznavanje", "C4": "Susret", "rjesenje": "VEZANOST" },
      "D": { "D1": "Dar", "D2": "Sjećanje", "D3": "Ljubav", "D4": "Poštovanje", "rjesenje": "NEZAMJENJIVOST" },
      "glavno_rjesenje": "PRIJATELJSTVO"
  },
  {
      "id": 36,
      "A": { "A1": "Predstava", "A2": "Scena", "A3": "Kazalište", "A4": "Režija", "rjesenje": "DRAMA" },
      "B": { "B1": "Maska", "B2": "Kostim", "B3": "Lik", "B4": "Dijalog", "rjesenje": "AKTOR" },
      "C": { "C1": "Kulis", "C2": "Scenografija", "C3": "Pozornica", "C4": "Dekor", "rjesenje": "DIZAJN" },
      "D": { "D1": "Premijera", "D2": "Gledatelj", "D3": "Kritika", "D4": "Recenzija", "rjesenje": "PERFORMANS" },
      "glavno_rjesenje": "TEATER"
  },
  {
      "id": 37,
      "A": { "A1": "Plan", "A2": "Strategija", "A3": "Cilj", "A4": "Putokaz", "rjesenje": "AMBICIJA" },
      "B": { "B1": "Snaga", "B2": "Fokus", "B3": "Odnosi", "B4": "Usmjerenje", "rjesenje": "INSPIRACIJA" },
      "C": { "C1": "Očekivanje", "C2": "Sanjarenje", "C3": "Izazov", "C4": "Projekcija", "rjesenje": "PROGNOZA" },
      "D": { "D1": "Ideja", "D2": "Koncept", "D3": "Rješenje", "D4": "Kreativnost", "rjesenje": "KREATIVNOST" },
      "glavno_rjesenje": "VIZIJA"
  },
  {
      "id": 38,
      "A": { "A1": "Skica", "A2": "Oblik", "A3": "Linija", "A4": "Struktura", "rjesenje": "KONCEPT" },
      "B": { "B1": "Boja", "B2": "Tekstura", "B3": "Forma", "B4": "Izgled", "rjesenje": "ESTETIKA" },
      "C": { "C1": "Inovacija", "C2": "Stil", "C3": "Funkcija", "C4": "Ravnoteža", "rjesenje": "KREATIVNOST" },
      "D": { "D1": "Detalj", "D2": "Proporcija", "D3": "Linija", "D4": "Oblik", "rjesenje": "HARMONIJA" },
      "glavno_rjesenje": "DIZAJN"
  },
  {
      "id": 39,
      "A": { "A1": "Konstrukcija", "A2": "Projekt", "A3": "Stroj", "A4": "Mašina", "rjesenje": "MEHANIKA" },
      "B": { "B1": "Alat", "B2": "Sistem", "B3": "Raspored", "B4": "Dizajn", "rjesenje": "TEHNIKA" },
      "C": { "C1": "Inovacija", "C2": "Optimizacija", "C3": "Automatizacija", "C4": "Rješenje", "rjesenje": "ROBOTIKA" },
      "D": { "D1": "Eksperiment", "D2": "Test", "D3": "Prototip", "D4": "Analiza", "rjesenje": "EKSPERIMENT" },
      "glavno_rjesenje": "INŽENJERING"
  },
  {
      "id": 40,
      "A": { "A1": "Investicija", "A2": "Kapital", "A3": "Novac", "A4": "Ulaganje", "rjesenje": "BIZNIS" },
      "B": { "B1": "Dioničko", "B2": "Burza", "B3": "Tržište", "B4": "Akcija", "rjesenje": "STOKOVNO" },
      "C": { "C1": "Kredit", "C2": "Zajam", "C3": "Kamata", "C4": "Bankar", "rjesenje": "ZADUŽENJE" },
      "D": { "D1": "Porez", "D2": "Budžet", "D3": "Trošak", "D4": "Profit", "rjesenje": "LIKVIDNOST" },
      "glavno_rjesenje": "FINANCIJE"
  },
  {
      "id": 41,
      "A": { "A1": "Škola", "A2": "Učitelj", "A3": "Učenik", "A4": "Klupa", "rjesenje": "INSTITUCIJA" },
      "B": { "B1": "Diploma", "B2": "Studij", "B3": "Predmet", "B4": "Sati", "rjesenje": "KURSI" },
      "C": { "C1": "Knjižnica", "C2": "Literatura", "C3": "Znanje", "C4": "Studija", "rjesenje": "AKADEMIJA" },
      "D": { "D1": "Ispit", "D2": "Test", "D3": "Ocjena", "D4": "Rezultat", "rjesenje": "EVALUACIJA" },
      "glavno_rjesenje": "OBRAZOVANJE"
  },
  {
      "id": 42,
      "A": { "A1": "Skladište", "A2": "Dostava", "A3": "Raspored", "A4": "Plan", "rjesenje": "OPERACIJA" },
      "B": { "B1": "Ruta", "B2": "Mapiranje", "B3": "Optimizacija", "B4": "Plan", "rjesenje": "DISPEČER" },
      "C": { "C1": "Furgon", "C2": "Kamion", "C3": "Voz", "C4": "Brod", "rjesenje": "PREVOZ" },
      "D": { "D1": "Trošak", "D2": "Brzina", "D3": "Efikasnost", "D4": "Koordinacija", "rjesenje": "MANAGEMENT" },
      "glavno_rjesenje": "LOGISTIKA"
  },
  {
      "id": 43,
      "A": { "A1": "Program", "A2": "Kod", "A3": "Softver", "A4": "Aplikacija", "rjesenje": "RAČUNALSTVO" },
      "B": { "B1": "Algoritam", "B2": "Logika", "B3": "Funkcija", "B4": "Petlja", "rjesenje": "PROGRAMIRANJE" },
      "C": { "C1": "Baza", "C2": "Podaci", "C3": "SQL", "C4": "Server", "rjesenje": "SISTEMSKO" },
      "D": { "D1": "Haker", "D2": "Sigurnost", "D3": "Firewall", "D4": "Šifriranje", "rjesenje": "SIGURNOST" },
      "glavno_rjesenje": "INFORMATIKA"
  },
  {
      "id": 44,
      "A": { "A1": "Gitara", "A2": "Bubnjevi", "A3": "Klavir", "A4": "Truba", "rjesenje": "AKUSTIKA" },
      "B": { "B1": "Flauta", "B2": "Oboa", "B3": "Klarinet", "B4": "Fagot", "rjesenje": "DUVAČKI" },
      "C": { "C1": "Violina", "C2": "Čelo", "C3": "Kontrabas", "C4": "Harfa", "rjesenje": "ŽICASTI" },
      "D": { "D1": "Ksilofon", "D2": "Marimba", "D3": "Timpani", "D4": "Bongosi", "rjesenje": "UDARNI" },
      "glavno_rjesenje": "INSTRUMENTI"
  },
  {
      "id": 45,
      "A": { "A1": "Grad", "A2": "Metropola", "A3": "Naselje", "A4": "Selo", "rjesenje": "STRUKTURA" },
      "B": { "B1": "Trg", "B2": "Piazza", "B3": "Ulica", "B4": "Aleja", "rjesenje": "PLANIRANJE" },
      "C": { "C1": "Most", "C2": "Tunel", "C3": "Cesta", "C4": "Put", "rjesenje": "INFRASTRUKTURA" },
      "D": { "D1": "Park", "D2": "Zgrada", "D3": "Kula", "D4": "Arena", "rjesenje": "ESTETIKA" },
      "glavno_rjesenje": "URBANIZAM"
  },
  {
      "id": 46,
      "A": { "A1": "Biljka", "A2": "Šuma", "A3": "Stanište", "A4": "Flora", "rjesenje": "BIOMASA" },
      "B": { "B1": "Životinja", "B2": "Fauna", "B3": "Divlji", "B4": "Priličje", "rjesenje": "BIODIVERZITET" },
      "C": { "C1": "Zagađenje", "C2": "Otpad", "C3": "Reciklaža", "C4": "Emisija", "rjesenje": "ODRŽIVOST" },
      "D": { "D1": "Klimat", "D2": "Oborina", "D3": "Temperatura", "D4": "Vremenski uvjeti", "rjesenje": "KLIMATSKO" },
      "glavno_rjesenje": "EKOLOGIJA"
  },
  {
      "id": 47,
      "A": { "A1": "Nagrada", "A2": "Trofej", "A3": "Ceremonija", "A4": "Medalja", "rjesenje": "AMBITIJA" },
      "B": { "B1": "Izazov", "B2": "Konkurencija", "B3": "Borba", "B4": "Dvojba", "rjesenje": "SUKOB" },
      "C": { "C1": "Trening", "C2": "Priprema", "C3": "Taktika", "C4": "Strategija", "rjesenje": "PREDANOST" },
      "D": { "D1": "Fair play", "D2": "Pravila", "D3": "Etika", "D4": "Kontrola", "rjesenje": "DISCIPLINA" },
      "glavno_rjesenje": "TAKMICENJE"
  },
  {
      "id": 48,
      "A": { "A1": "Slika", "A2": "Crtež", "A3": "Fotografija", "A4": "Ilustracija", "rjesenje": "KREATIVNO" },
      "B": { "B1": "Boja", "B2": "Paleta", "B3": "Kontrast", "B4": "Ton", "rjesenje": "ESTETIKA" },
      "C": { "C1": "Dimenzija", "C2": "Proporcija", "C3": "Perspektiva", "C4": "Kompozicija", "rjesenje": "KADRIRANJE" },
      "D": { "D1": "Digitalno", "D2": "Analogno", "D3": "Format", "D4": "Rezolucija", "rjesenje": "FORMAT" },
      "glavno_rjesenje": "VIZUALNO"
  },
  {
      "id": 49,
      "A": { "A1": "Tim", "A2": "Raspored", "A3": "Struktura", "A4": "Plan", "rjesenje": "KOORDINACIJA" },
      "B": { "B1": "Sastanak", "B2": "Konferencija", "B3": "Radionica", "B4": "Seminar", "rjesenje": "KOLEKTIV" },
      "C": { "C1": "Dokument", "C2": "Strategija", "C3": "Plan", "C4": "Inicijativa", "rjesenje": "UPRAVLJANJE" },
      "D": { "D1": "Projekt", "D2": "Akcija", "D3": "Cilj", "D4": "Implementacija", "rjesenje": "IMPLEMENTACIJA" },
      "glavno_rjesenje": "ORGANIZACIJA"
  },
  {
      "id": 50,
      "A": { "A1": "Ideja", "A2": "Sanjarenje", "A3": "Mašta", "A4": "Vizija", "rjesenje": "KREATIVNOST" },
      "B": { "B1": "Umjetnost", "B2": "Priroda", "B3": "Glazba", "B4": "Književnost", "rjesenje": "POTICANJE" },
      "C": { "C1": "Motivacija", "C2": "Podrška", "C3": "Poticaj", "C4": "Želja", "rjesenje": "PODSTICAJ" },
      "D": { "D1": "Inovacija", "D2": "Razvoj", "D3": "Napredak", "D4": "Revolucija", "rjesenje": "PROMJENA" },
      "glavno_rjesenje": "INSPIRACIJA"
  }
];

module.exports = asocijacije;
