const pitanja = [
    {
        "pitanje": "Koji je najveći kontinent na svijetu?",
        "odgovori": ["Evropa", "Azija", "Afrika", "Sjeverna Amerika"],
        "tacanOdgovor": "Azija"
    },
    {
        "pitanje": "Koja je najveća pustinja na svijetu?",
        "odgovori": ["Sahara", "Gobi", "Kalahari", "Antarktička pustinja"],
        "tacanOdgovor": "Antarktička pustinja"
    },
    {
        "pitanje": "Koja je najduža rijeka na svijetu?",
        "odgovori": ["Nil", "Amazon", "Jangce", "Mississippi"],
        "tacanOdgovor": "Nil"
    },
    {
        "pitanje": "Koji je glavni grad Francuske?",
        "odgovori": ["Pariz", "Marsej", "Lyon", "Nica"],
        "tacanOdgovor": "Pariz"
    },
    {
        "pitanje": "Koja zemlja se prostire na najviše vremenskih zona?",
        "odgovori": ["Rusija", "SAD", "Kanada", "Kina"],
        "tacanOdgovor": "Rusija"
    },
    {
        "pitanje": "Koji je najviši vrh na svijetu?",
        "odgovori": ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        "tacanOdgovor": "Mount Everest"
    },
    {
        "pitanje": "Koja je najmanja država na svijetu po površini?",
        "odgovori": ["Monako", "Vatikan", "San Marino", "Lihtenštajn"],
        "tacanOdgovor": "Vatikan"
    },
    {
        "pitanje": "Koja država je poznata kao 'Zemlja izlazećeg sunca'?",
        "odgovori": ["Kina", "Južna Koreja", "Japan", "Vijetnam"],
        "tacanOdgovor": "Japan"
    },
    {
        "pitanje": "Koji ocean je najveći?",
        "odgovori": ["Atlantski", "Indijski", "Tihi", "Arktički"],
        "tacanOdgovor": "Tihi"
    },
    {
        "pitanje": "Koji je najduži planinski lanac na svijetu?",
        "odgovori": ["Alpe", "Ande", "Himalaji", "Kordiljere"],
        "tacanOdgovor": "Ande"
    },
    {
        "pitanje": "Koje godine je počeo Prvi svjetski rat?",
        "odgovori": ["1914", "1918", "1939", "1945"],
        "tacanOdgovor": "1914"
    },
    {
        "pitanje": "Koji događaj označio je kraj Drugog svjetskog rata?",
        "odgovori": ["Kapitulacija Njemačke", "Kapitulacija Japana", "Bombardiranje Berlina", "Bitka za Staljingrad"],
        "tacanOdgovor": "Kapitulacija Japana"
    },
    {
        "pitanje": "Ko je bio prvi predsjednik Sjedinjenih Američkih Država?",
        "odgovori": ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        "tacanOdgovor": "George Washington"
    },
    {
        "pitanje": "Koja drevna civilizacija je izgradila piramide u Gizi?",
        "odgovori": ["Rimska", "Grčka", "Egipatska", "Maja"],
        "tacanOdgovor": "Egipatska"
    },
    {
        "pitanje": "Koji veliki rat se vodio između 1861. i 1865. godine u SAD-u?",
        "odgovori": ["Prvi svjetski rat", "Građanski rat", "Drugi svjetski rat", "Hladni rat"],
        "tacanOdgovor": "Građanski rat"
    },
    {
        "pitanje": "Koji imperator je poznat po rečenici 'Dođite, vidite, pobijedili smo'?",
        "odgovori": ["Julije Cezar", "Augustus", "Napoleon Bonaparte", "Karel Veliki"],
        "tacanOdgovor": "Julije Cezar"
    },
    {
        "pitanje": "U kojem gradu se nalazi Berlinski zid?",
        "odgovori": ["Pariz", "Madrid", "Berlin", "Rim"],
        "tacanOdgovor": "Berlin"
    },
    {
        "pitanje": "Koja država je imala 'Željeznu zavezu' tokom Hladnog rata?",
        "odgovori": ["SAD", "Sovjetski Savez", "Kina", "Indija"],
        "tacanOdgovor": "Sovjetski Savez"
    },
    {
        "pitanje": "Koja je bitka iz 1066. godine promijenila istoriju Engleske?",
        "odgovori": ["Bitka kod Hastingsa", "Bitka kod Agincourta", "Bitka kod Waterlooa", "Bitka kod Boswortha"],
        "tacanOdgovor": "Bitka kod Hastingsa"
    },
    {
        "pitanje": "Koji rimski car je poznat po izgradnji Koloseuma?",
        "odgovori": ["Nero", "Augustus", "Trajan", "Vespasian"],
        "tacanOdgovor": "Vespasian"
    },
    {
        "pitanje": "Koji je hemijski simbol za vodu?",
        "odgovori": ["H2O", "CO2", "O2", "NaCl"],
        "tacanOdgovor": "H2O"
    },
    {
        "pitanje": "Ko je otkrio zakon gravitacije?",
        "odgovori": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        "tacanOdgovor": "Isaac Newton"
    },
    {
        "pitanje": "Koji je najtvrđi prirodni materijal?",
        "odgovori": ["Čelik", "Dijamant", "Kvarc", "Titan"],
        "tacanOdgovor": "Dijamant"
    },
    {
        "pitanje": "Koja planeta je poznata kao Crveni planet?",
        "odgovori": ["Merkur", "Venera", "Mars", "Jupiter"],
        "tacanOdgovor": "Mars"
    },
    {
        "pitanje": "Šta proučava biologija?",
        "odgovori": ["Zvijezde", "Živa bića", "Kemijske reakcije", "Povijest Zemlje"],
        "tacanOdgovor": "Živa bića"
    },
    {
        "pitanje": "Koji gas najviše čini Zemljinu atmosferu?",
        "odgovori": ["Kisik", "Azot", "Ugljen-dioksid", "Helijum"],
        "tacanOdgovor": "Azot"
    },
    {
        "pitanje": "Koje su osnovne čestice atoma?",
        "odgovori": ["Protoni, neutroni, elektroni", "Protoni i elektroni", "Neutroni i protoni", "Elektroni i fotoni"],
        "tacanOdgovor": "Protoni, neutroni, elektroni"
    },
    {
        "pitanje": "Koja teorija objašnjava nastanak svemira?",
        "odgovori": ["Teorija relativnosti", "Teorija evolucije", "Veliki prasak", "Teorija struna"],
        "tacanOdgovor": "Veliki prasak"
    },
    {
        "pitanje": "Šta predstavlja skraćenica DNA?",
        "odgovori": ["Dezoksiribonukleinska kiselina", "Ribonukleinska kiselina", "Protein", "Enzim"],
        "tacanOdgovor": "Dezoksiribonukleinska kiselina"
    },
    {
        "pitanje": "Koja vrsta energije dolazi iz sunca?",
        "odgovori": ["Vjetar", "Sunčeva energija", "Voda", "Nuklearna energija"],
        "tacanOdgovor": "Sunčeva energija"
    },
    {
        "pitanje": "Koliko igrača ima fudbalski tim na terenu?",
        "odgovori": ["9", "10", "11", "12"],
        "tacanOdgovor": "11"
    },
    {
        "pitanje": "Koja zemlja je osvojila Svjetsko prvenstvo u fudbalu 2018. godine?",
        "odgovori": ["Brazil", "Francuska", "Njemačka", "Argentina"],
        "tacanOdgovor": "Francuska"
    },
    {
        "pitanje": "Koja je najpoznatija biciklistička trka?",
        "odgovori": ["Giro d'Italia", "Vuelta a España", "Tour de France", "Paris-Roubaix"],
        "tacanOdgovor": "Tour de France"
    },
    {
        "pitanje": "Koji sport se igra loptom i palicom, a popularan je u Kanadi?",
        "odgovori": ["Hokej na ledu", "Rugby", "Američki fudbal", "Košarka"],
        "tacanOdgovor": "Hokej na ledu"
    },
    {
        "pitanje": "Koliko igrača čini tim u košarci na terenu?",
        "odgovori": ["4", "5", "6", "7"],
        "tacanOdgovor": "5"
    },
    {
        "pitanje": "Koja zemlja je domaćin Olimpijskih igara 2016. godine?",
        "odgovori": ["Kina", "Brazil", "Velika Britanija", "Rusija"],
        "tacanOdgovor": "Brazil"
    },
    {
        "pitanje": "Koji sport se igra s reketom i lopticom preko mreže?",
        "odgovori": ["Tenis", "Badminton", "Squash", "Ping Pong"],
        "tacanOdgovor": "Tenis"
    },
    {
        "pitanje": "Koji je najpoznatiji teniski turnir?",
        "odgovori": ["Wimbledon", "US Open", "Australian Open", "Roland Garros"],
        "tacanOdgovor": "Wimbledon"
    },
    {
        "pitanje": "Koja zemlja je osvojila najviše medalja na Olimpijskim igrama?",
        "odgovori": ["Rusija", "Kina", "Sjedinjene Američke Države", "Nemačka"],
        "tacanOdgovor": "Sjedinjene Američke Države"
    },
    {
        "pitanje": "Koji sport se najviše povezuje sa Michaelom Jordanom?",
        "odgovori": ["Košarka", "Fudbal", "Baseball", "Tenis"],
        "tacanOdgovor": "Košarka"
    },
    {
        "pitanje": "Ko je napisao 'Na Drini ćuprija'?",
        "odgovori": ["Ivo Andrić", "Meša Selimović", "Mak Dizdar", "Aleksa Šantić"],
        "tacanOdgovor": "Ivo Andrić"
    },
    {
        "pitanje": "Koji slikar je poznat po djelu 'Zvjezdana noć'?",
        "odgovori": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Salvador Dalí"],
        "tacanOdgovor": "Vincent van Gogh"
    },
    {
        "pitanje": "Koje djelo se smatra jednim od najpoznatijih Shakespearovih?",
        "odgovori": ["Romeo i Julija", "Hamlet", "Macbeth", "Othello"],
        "tacanOdgovor": "Romeo i Julija"
    },
    {
        "pitanje": "Koji pisac je napisao 'Prokleta avlija'?",
        "odgovori": ["Ivo Andrić", "Meša Selimović", "Alija Isaković", "Mak Dizdar"],
        "tacanOdgovor": "Ivo Andrić"
    },
    {
        "pitanje": "Koji umjetnički pravac karakterizira djela Pabla Picassa?",
        "odgovori": ["Impresionizam", "Ekspresionizam", "Kubizam", "Renesansa"],
        "tacanOdgovor": "Kubizam"
    },
    {
        "pitanje": "Koja knjiga je napisana od strane J.R.R. Tolkiena?",
        "odgovori": ["Rat i mir", "Gospodar prstenova", "1984", "Lovac u žitu"],
        "tacanOdgovor": "Gospodar prstenova"
    },
    {
        "pitanje": "Koji autor je napisao 'Ubiti pticu rugalicu'?",
        "odgovori": ["Harper Lee", "George Orwell", "J.D. Salinger", "F. Scott Fitzgerald"],
        "tacanOdgovor": "Harper Lee"
    },
    {
        "pitanje": "Koji je glavni lik romana 'Mali princ'?",
        "odgovori": ["Mali princ", "Pilot", "Lisica", "Kralj"],
        "tacanOdgovor": "Mali princ"
    },
    {
        "pitanje": "Koji stil arhitekture karakterizira katedralu u Chartresu?",
        "odgovori": ["Gotika", "Barok", "Romenesque", "Renesansa"],
        "tacanOdgovor": "Gotika"
    },
    {
        "pitanje": "Koji je poznati bosanskohercegovački pisac koji je osvojio Nobelovu nagradu?",
        "odgovori": ["Ivo Andrić", "Meša Selimović", "Miroslav Krleža", "Mak Dizdar"],
        "tacanOdgovor": "Ivo Andrić"
    },
    {
        "pitanje": "Koja zemlja je rodno mjesto Beatlesa?",
        "odgovori": ["SAD", "Velika Britanija", "Kanada", "Australija"],
        "tacanOdgovor": "Velika Britanija"
    },
    {
        "pitanje": "Koji muzički žanr karakterizira Bob Marleyja?",
        "odgovori": ["Rock", "Reggae", "Jazz", "Pop"],
        "tacanOdgovor": "Reggae"
    },
    {
        "pitanje": "Koji instrument svira Yo-Yo Ma?",
        "odgovori": ["Pianino", "Violoncello", "Saksofon", "Gitara"],
        "tacanOdgovor": "Violoncello"
    },
    {
        "pitanje": "Koji instrument je najprepoznatljiv u džezu?",
        "odgovori": ["Saksofon", "Harmonika", "Gitara", "Bubnjevi"],
        "tacanOdgovor": "Saksofon"
    },
    {
        "pitanje": "Koja nota dolazi posle G u muzičkoj skali?",
        "odgovori": ["A", "B", "C", "D"],
        "tacanOdgovor": "A"
    },
    {
        "pitanje": "Koji poznati skladatelj komponovao je 'Simfoniju br. 9'?",
        "odgovori": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
        "tacanOdgovor": "Ludwig van Beethoven"
    },
    {
        "pitanje": "Koji žanr glazbe povezuje se s Elvisom Preslejem?",
        "odgovori": ["Rock and Roll", "Pop", "Country", "Jazz"],
        "tacanOdgovor": "Rock and Roll"
    },
    {
        "pitanje": "Koji instrument ima 88 tipki?",
        "odgovori": ["Gitara", "Klavir", "Violoncello", "Saksofon"],
        "tacanOdgovor": "Klavir"
    },
    {
        "pitanje": "Koja je najveća muzička nagrada?",
        "odgovori": ["Grammy", "Oscar", "Emmy", "Tony"],
        "tacanOdgovor": "Grammy"
    },
    {
        "pitanje": "Koji bend je poznat po hitu 'Bohemian Rhapsody'?",
        "odgovori": ["The Beatles", "Queen", "The Rolling Stones", "Nirvana"],
        "tacanOdgovor": "Queen"
    },
    {
        "pitanje": "Koja web stranica je razvijena od strane Mozille?",
        "odgovori": ["Chrome", "Edge", "Firefox", "Opera"],
        "tacanOdgovor": "Firefox"
    },
    {
        "pitanje": "Koja kompanija je proizvela iPhone?",
        "odgovori": ["Samsung", "Apple", "Google", "Microsoft"],
        "tacanOdgovor": "Apple"
    },
    {
        "pitanje": "Koja tehnologija se koristi za bežični internet?",
        "odgovori": ["Bluetooth", "Wi-Fi", "Ethernet", "NFC"],
        "tacanOdgovor": "Wi-Fi"
    },
    {
        "pitanje": "Šta znači skraćenica HTML?",
        "odgovori": ["Hyper Text Markup Language", "HighText Machine Language", "Hyperlink Text Management Language", "Home Tool Markup Language"],
        "tacanOdgovor": "Hyper Text Markup Language"
    },
    {
        "pitanje": "Koji je osnivač Microsofta?",
        "odgovori": ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        "tacanOdgovor": "Bill Gates"
    },
    {
        "pitanje": "Koji protokol se koristi za pregled web stranica?",
        "odgovori": ["HTTP", "FTP", "SMTP", "IMAP"],
        "tacanOdgovor": "HTTP"
    },
    {
        "pitanje": "Koja tehnologija je osnova za Bitcoin?",
        "odgovori": ["Cloud computing", "Blockchain", "Big Data", "AI"],
        "tacanOdgovor": "Blockchain"
    },
    {
        "pitanje": "Koji je najpopularniji operativni sistem za mobilne uređaje?",
        "odgovori": ["iOS", "Android", "Windows Phone", "BlackBerry OS"],
        "tacanOdgovor": "Android"
    },
    {
        "pitanje": "Koji programski jezik se najčešće koristi za razvoj web aplikacija?",
        "odgovori": ["Python", "Java", "JavaScript", "C++"],
        "tacanOdgovor": "JavaScript"
    },
    {
        "pitanje": "Šta znači skraćenica CPU?",
        "odgovori": ["Central Processing Unit", "Computer Personal Unit", "Central Print Unit", "Control Processing Unit"],
        "tacanOdgovor": "Central Processing Unit"
    },
    {
        "pitanje": "Koja kompanija je poznata po operativnom sistemu Windows?",
        "odgovori": ["Apple", "Google", "Microsoft", "IBM"],
        "tacanOdgovor": "Microsoft"
    },
    {
        "pitanje": "Koja životinja je poznata kao 'kralj džungle'?",
        "odgovori": ["Lav", "Tigar", "Slon", "Medvjed"],
        "tacanOdgovor": "Lav"
    },
    {
        "pitanje": "Koji je najveći sisar na svijetu?",
        "odgovori": ["Afrički slon", "Plavi kit", "Žirafa", "Bijeli medvjed"],
        "tacanOdgovor": "Plavi kit"
    },
    {
        "pitanje": "Koja je najbrža kopnena životinja?",
        "odgovori": ["Antilopa", "Gepard", "Lav", "Srna"],
        "tacanOdgovor": "Gepard"
    },
    {
        "pitanje": "Koja biljka se koristi za proizvodnju papira?",
        "odgovori": ["Bambus", "Drvo", "Pamuk", "Kukuruz"],
        "tacanOdgovor": "Drvo"
    },
    {
        "pitanje": "Koja je najviša planina u Evropi?",
        "odgovori": ["Mont Blanc", "Elbrus", "Matterhorn", "Grossglockner"],
        "tacanOdgovor": "Elbrus"
    },
    {
        "pitanje": "Koja planeta je najbliža Suncu?",
        "odgovori": ["Venera", "Merkur", "Mars", "Zemlja"],
        "tacanOdgovor": "Merkur"
    },
    {
        "pitanje": "Koja vrsta energije se dobija iz vjetra?",
        "odgovori": ["Sunčeva energija", "Vjetroelektrična energija", "Nuklearna energija", "Voda"],
        "tacanOdgovor": "Vjetroelektrična energija"
    },
    {
        "pitanje": "Koji proces biljke pretvara sunčevu svjetlost u energiju?",
        "odgovori": ["Fotosinteza", "Respiracija", "Fermentacija", "Transpiracija"],
        "tacanOdgovor": "Fotosinteza"
    },
    {
        "pitanje": "Koji element je najzastupljeniji u Zemljinoj kori?",
        "odgovori": ["Kisik", "Silicijum", "Aluminijum", "Željezo"],
        "tacanOdgovor": "Kisik"
    },
    {
        "pitanje": "Koja je najveća topla pustinja na svijetu?",
        "odgovori": ["Sahara", "Gobi", "Kalahari", "Arabijska pustinja"],
        "tacanOdgovor": "Sahara"
    },
    {
        "pitanje": "Koja je valuta Sjedinjenih Američkih Država?",
        "odgovori": ["Euro", "Dolar", "Funta", "Jen"],
        "tacanOdgovor": "Dolar"
    },
    {
        "pitanje": "Koja organizacija okuplja zemlje radi ekonomskog razvoja?",
        "odgovori": ["UNESCO", "NATO", "OECD", "FIFA"],
        "tacanOdgovor": "OECD"
    },
    {
        "pitanje": "Koja je najveća ekonomija svijeta?",
        "odgovori": ["Kina", "SAD", "Japan", "Njemačka"],
        "tacanOdgovor": "SAD"
    },
    {
        "pitanje": "Koja institucija se bavi monetarnom politikom u EU?",
        "odgovori": ["Europska središnja banka", "Svjetska banka", "IMF", "OECD"],
        "tacanOdgovor": "Europska središnja banka"
    },
    {
        "pitanje": "Koji politički sustav je zasnovan na izborima i zastupničkoj vlasti?",
        "odgovori": ["Monarhija", "Republika", "Diktatura", "Teokracija"],
        "tacanOdgovor": "Republika"
    },
    {
        "pitanje": "Koji međunarodni sporazum regulira trgovinu između zemalja?",
        "odgovori": ["NAFTA", "EU", "ASEAN", "OPEC"],
        "tacanOdgovor": "NAFTA"
    },
    {
        "pitanje": "Koji ekonomist je poznat po djelu 'Bogatstvo naroda'?",
        "odgovori": ["John Maynard Keynes", "Adam Smith", "Milton Friedman", "Karl Marx"],
        "tacanOdgovor": "Adam Smith"
    },
    {
        "pitanje": "Koja je funkcija središnje banke?",
        "odgovori": ["Izdavanje novca", "Organizacija izbora", "Izrada zakona", "Regulacija škole"],
        "tacanOdgovor": "Izdavanje novca"
    },
    {
        "pitanje": "Koji politički pokret zagovara slobodno tržište?",
        "odgovori": ["Socializam", "Kapitalizam", "Komunizam", "Anarhizam"],
        "tacanOdgovor": "Kapitalizam"
    },
    {
        "pitanje": "Koja zemlja je poznata po parlamentarnom sustavu?",
        "odgovori": ["Sjedinjene Države", "Ujedinjeno Kraljevstvo", "Rusija", "Kina"],
        "tacanOdgovor": "Ujedinjeno Kraljevstvo"
    },
    {
        "pitanje": "Koji film je osvojio Oscara za najbolji film 1994. godine?",
        "odgovori": ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Braveheart"],
        "tacanOdgovor": "Forrest Gump"
    },
    {
        "pitanje": "Koji glumac glumi Jamesa Bonda u filmu 'Casino Royale' (2006)?",
        "odgovori": ["Daniel Craig", "Sean Connery", "Roger Moore", "Pierce Brosnan"],
        "tacanOdgovor": "Daniel Craig"
    },
    {
        "pitanje": "Koji film je režirao Steven Spielberg o dinosaurima?",
        "odgovori": ["Jurassic Park", "E.T.", "Indiana Jones", "Schindler's List"],
        "tacanOdgovor": "Jurassic Park"
    },
    {
        "pitanje": "Koji film je poznat po rečenici 'May the Force be with you'?",
        "odgovori": ["Star Wars", "Star Trek", "The Matrix", "Avatar"],
        "tacanOdgovor": "Star Wars"
    },
    {
        "pitanje": "Koja je najpoznatija filmska nagrada?",
        "odgovori": ["Grammy", "Oscar", "Emmy", "Tony"],
        "tacanOdgovor": "Oscar"
    },
    {
        "pitanje": "Koji film je adaptacija romana 'Gospodar prstenova'?",
        "odgovori": ["Hobit", "Gospodar prstenova", "Igra prijestolja", "Eragon"],
        "tacanOdgovor": "Gospodar prstenova"
    },
    {
        "pitanje": "Koji serijal filmova prati avanture Harryja Pottera?",
        "odgovori": ["Fantastične zveri", "Twilight", "Harry Potter", "The Chronicles of Narnia"],
        "tacanOdgovor": "Harry Potter"
    },
    {
        "pitanje": "Koja je najgledanija televizijska serija svih vremena?",
        "odgovori": ["Friends", "Game of Thrones", "Breaking Bad", "M*A*S*H"],
        "tacanOdgovor": "M*A*S*H"
    },
    {
        "pitanje": "Koji film je dobio Oscara za najbolji film 2020. godine?",
        "odgovori": ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
        "tacanOdgovor": "Parasite"
    },
    {
        "pitanje": "Koji animirani lik nosi crvenu kapu i bijele rukavice?",
        "odgovori": ["Mickey Mouse", "Donald Duck", "Goofy", "Pluto"],
        "tacanOdgovor": "Mickey Mouse"
    },
    {
        "pitanje": "Koji je autor romana '1984'?",
        "odgovori": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
        "tacanOdgovor": "George Orwell"
    },
    {
        "pitanje": "Koji roman počinje rečenicom 'Svi sretni obitelji nalik su jedna na drugu'?",
        "odgovori": ["Rat i mir", "Ana Karenjina", "Zločin i kazna", "Braća Karamazovi"],
        "tacanOdgovor": "Ana Karenjina"
    },
    {
        "pitanje": "Koji je autor romana 'Lovac u žitu'?",
        "odgovori": ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain"],
        "tacanOdgovor": "J.D. Salinger"
    },
    {
        "pitanje": "Koja knjiga se smatra jednim od najvažnijih djela svjetske književnosti o ratu?",
        "odgovori": ["Rat i mir", "Na Drini ćuprija", "Sto godina samoće", "Zločin i kazna"],
        "tacanOdgovor": "Rat i mir"
    },
    {
        "pitanje": "Koji pisac je napisao 'Mali princ'?",
        "odgovori": ["Antoine de Saint-Exupéry", "Victor Hugo", "Albert Camus", "Jean-Paul Sartre"],
        "tacanOdgovor": "Antoine de Saint-Exupéry"
    },
    {
        "pitanje": "Koja knjiga je adaptirana u seriju 'Igra prijestolja'?",
        "odgovori": ["Pesma leda i vatre", "Gospodar prstenova", "Hobit", "Kraljevski put"],
        "tacanOdgovor": "Pesma leda i vatre"
    },
    {
        "pitanje": "Koji je poznati pjesnik iz Bosne i Hercegovine?",
        "odgovori": ["Mak Dizdar", "Meša Selimović", "Ivo Andrić", "Milorad Pavić"],
        "tacanOdgovor": "Mak Dizdar"
    },
    {
        "pitanje": "Koji autor je napisao 'Bašta, pepeo'?",
        "odgovori": ["Danilo Kiš", "Ivo Andrić", "Meša Selimović", "Mak Dizdar"],
        "tacanOdgovor": "Danilo Kiš"
    },
    {
        "pitanje": "Koji je najpoznatiji detektiv u književnosti?",
        "odgovori": ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Philip Marlowe"],
        "tacanOdgovor": "Sherlock Holmes"
    },
    {
        "pitanje": "Koji roman opisuje život u distopijskom društvu gdje je sve pod nadzorom?",
        "odgovori": ["1984", "Brave New World", "Fahrenheit 451", "We"],
        "tacanOdgovor": "1984"
    },
    {
        "pitanje": "Koliko je 7 x 8?",
        "odgovori": ["54", "56", "64", "58"],
        "tacanOdgovor": "56"
    },
    {
        "pitanje": "Koji je sljedeći broj u nizu: 2, 4, 6, 8, ...?",
        "odgovori": ["9", "10", "12", "14"],
        "tacanOdgovor": "10"
    },
    {
        "pitanje": "Koji je kvadrat broja 12?",
        "odgovori": ["144", "124", "156", "132"],
        "tacanOdgovor": "144"
    },
    {
        "pitanje": "Koliko je 100 podijeljeno sa 4?",
        "odgovori": ["20", "25", "24", "30"],
        "tacanOdgovor": "25"
    },
    {
        "pitanje": "Koji je rezultat izraza 5 + 3 x 2?",
        "odgovori": ["16", "11", "13", "10"],
        "tacanOdgovor": "11"
    },
    {
        "pitanje": "Koji broj je prost?",
        "odgovori": ["15", "21", "17", "9"],
        "tacanOdgovor": "17"
    },
    {
        "pitanje": "Šta je π (pi) približno?",
        "odgovori": ["3.14", "2.17", "3.41", "4.13"],
        "tacanOdgovor": "3.14"
    },
    {
        "pitanje": "Koliko strana ima kvadrat?",
        "odgovori": ["3", "4", "5", "6"],
        "tacanOdgovor": "4"
    },
    {
        "pitanje": "Koja je površina pravokutnika dimenzija 5 i 3?",
        "odgovori": ["8", "15", "10", "18"],
        "tacanOdgovor": "15"
    },
    {
        "pitanje": "Koji je najveći jednocifreni prost broj?",
        "odgovori": ["2", "3", "5", "7"],
        "tacanOdgovor": "7"
    },
    {
        "pitanje": "Koliko dana ima jedna (neprestupna) godina?",
        "odgovori": ["365", "366", "364", "367"],
        "tacanOdgovor": "365"
    },
    {
        "pitanje": "Koja je najpoznatija katedrala u Parizu?",
        "odgovori": ["Notre-Dame", "Sacre-Coeur", "Louvre", "Pantheon"],
        "tacanOdgovor": "Notre-Dame"
    },
    {
        "pitanje": "Koliko kontinenata ima na Zemlji?",
        "odgovori": ["5", "6", "7", "8"],
        "tacanOdgovor": "7"
    },
    {
        "pitanje": "Koji je najpoznatiji muzej u Parizu?",
        "odgovori": ["Louvre", "Metropolitan", "Prado", "Hermitage"],
        "tacanOdgovor": "Louvre"
    },
    {
        "pitanje": "Koja životinja je simbol mudrosti?",
        "odgovori": ["Sova", "Orao", "Vuk", "Lisica"],
        "tacanOdgovor": "Sova"
    },
    {
        "pitanje": "Koji je najčešći element u svemiru?",
        "odgovori": ["Helijum", "Vodonik", "Kisik", "Ugljenik"],
        "tacanOdgovor": "Vodonik"
    },
    {
        "pitanje": "Koja je poznata teorija o poreklu čovječanstva?",
        "odgovori": ["Teorija evolucije", "Teorija relativnosti", "Teorija crne rupe", "Teorija kvantne mehanike"],
        "tacanOdgovor": "Teorija evolucije"
    },
    {
        "pitanje": "Koliko prstiju ima prosječan čovjek?",
        "odgovori": ["8", "10", "12", "14"],
        "tacanOdgovor": "10"
    },
    {
        "pitanje": "Koji je najveći kontinent prema broju stanovnika?",
        "odgovori": ["Afrika", "Azija", "Evropa", "Sjeverna Amerika"],
        "tacanOdgovor": "Azija"
    },
    {
        "pitanje": "Koji sport se najčešće igra širom svijeta?",
        "odgovori": ["Fudbal", "Košarka", "Rugby", "Kriket"],
        "tacanOdgovor": "Fudbal"
    },
    {
        "pitanje": "Koja je najveća svjetska religija po broju sljedbenika?",
        "odgovori": ["Hrišćanstvo", "Islam", "Hinduizam", "Budizam"],
        "tacanOdgovor": "Hrišćanstvo"
    },
    {
        "pitanje": "Koji filozof je napisao 'Republiku'?",
        "odgovori": ["Aristotel", "Platon", "Sokrat", "Kant"],
        "tacanOdgovor": "Platon"
    },
    {
        "pitanje": "Koji svetac je poznat kao zaštitnik putnika?",
        "odgovori": ["Sveti Nikola", "Sveti Franjo", "Sveti Juraj", "Sveti Marko"],
        "tacanOdgovor": "Sveti Nikola"
    },
    {
        "pitanje": "Koja religija se temelji na učenjima Siddharthe Gautame?",
        "odgovori": ["Hrišćanstvo", "Islam", "Budizam", "Judaizam"],
        "tacanOdgovor": "Budizam"
    },
    {
        "pitanje": "Koji je glavni sveti tekst u islamu?",
        "odgovori": ["Biblija", "Kur'an", "Veda", "Tora"],
        "tacanOdgovor": "Kur'an"
    },
    {
        "pitanje": "Koja je najveća grana hrišćanstva?",
        "odgovori": ["Katoličanstvo", "Pravoslavlje", "Protestantizam", "Anglikanizam"],
        "tacanOdgovor": "Katoličanstvo"
    },
    {
        "pitanje": "Koji filozof je poznat po rečenici 'Mislim, dakle jesam'?",
        "odgovori": ["Descartes", "Nietzsche", "Kant", "Hegel"],
        "tacanOdgovor": "Descartes"
    },
    {
        "pitanje": "Koja religija slavi Diwali?",
        "odgovori": ["Hinduizam", "Islam", "Budizam", "Judaizam"],
        "tacanOdgovor": "Hinduizam"
    },
    {
        "pitanje": "Koja filozofska škola promiče ideju 'cesta sredina'?",
        "odgovori": ["Stoicizam", "Epikurejci", "Aristotelovska filozofija", "Budizam"],
        "tacanOdgovor": "Budizam"
    },
    {
        "pitanje": "Koji je glavni grad Vatikana?",
        "odgovori": ["Rim", "Milano", "Firenca", "Napulj"],
        "tacanOdgovor": "Rim"
    },
    {
        "pitanje": "Koja organela se naziva 'energetska centrala' ćelije?",
        "odgovori": ["Jezgro", "Mitohondrij", "Ribosom", "Lizozom"],
        "tacanOdgovor": "Mitohondrij"
    },
    {
        "pitanje": "Koja krvna grupa se smatra univerzalnim davaocem?",
        "odgovori": ["A", "B", "AB", "O"],
        "tacanOdgovor": "O"
    },
    {
        "pitanje": "Koji organ filtrira krv u ljudskom tijelu?",
        "odgovori": ["Srce", "Pluća", "Bubrezi", "Jetra"],
        "tacanOdgovor": "Bubrezi"
    },
    {
        "pitanje": "Koji sistem u ljudskom tijelu pumpa krv?",
        "odgovori": ["Respiratorni sistem", "Cirkulatorni sistem", "Digestivni sistem", "Neuronski sistem"],
        "tacanOdgovor": "Cirkulatorni sistem"
    },
    {
        "pitanje": "Koji hormon regulira šećer u krvi?",
        "odgovori": ["Adrenalin", "Insulin", "Kortizol", "Estrogen"],
        "tacanOdgovor": "Insulin"
    },
    {
        "pitanje": "Koja je najveća životinja na svijetu?",
        "odgovori": ["Slon", "Plavi kit", "Krokodil", "Žirafa"],
        "tacanOdgovor": "Plavi kit"
    },
    {
        "pitanje": "Koliko kostiju ima prosječni odrasli čovjek?",
        "odgovori": ["206", "210", "196", "220"],
        "tacanOdgovor": "206"
    },
    {
        "pitanje": "Koji vitamin se proizvodi u koži pod uticajem sunca?",
        "odgovori": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "tacanOdgovor": "Vitamin D"
    },
    {
        "pitanje": "Koja grupa životinja uključuje ribe, vodozemce, gmizavce, ptice i sisare?",
        "odgovori": ["Bezkičmenjaci", "Kičmenjaci", "Insekti", "Amfibije"],
        "tacanOdgovor": "Kičmenjaci"
    },
    {
        "pitanje": "Koji proces opisuje pretvaranje glukoze u energiju u ćeliji?",
        "odgovori": ["Fotosinteza", "Glikoliza", "Oksidacija", "Fermentacija"],
        "tacanOdgovor": "Glikoliza"
    },
    {
        "pitanje": "Koji element ima atomski broj 1?",
        "odgovori": ["Helijum", "Vodonik", "Litijum", "Uran"],
        "tacanOdgovor": "Vodonik"
    },
    {
        "pitanje": "Koja je hemijska formula za ugljen-dioksid?",
        "odgovori": ["CO", "CO2", "O2", "H2O"],
        "tacanOdgovor": "CO2"
    },
    {
        "pitanje": "Koji element je poznat kao teški metal?",
        "odgovori": ["Olovo", "Aluminijum", "Magnezijum", "Natrijum"],
        "tacanOdgovor": "Olovo"
    },
    {
        "pitanje": "Koji je najlakši metal?",
        "odgovori": ["Željezo", "Litijum", "Aluminijum", "Magnezijum"],
        "tacanOdgovor": "Litijum"
    },
    {
        "pitanje": "Šta je pH vrijednost neutralne otopine?",
        "odgovori": ["7", "0", "14", "5"],
        "tacanOdgovor": "7"
    },
    {
        "pitanje": "Koji element se nalazi u sastavu soli?",
        "odgovori": ["Ugljenik", "Natrijum", "Kalcijum", "Silikon"],
        "tacanOdgovor": "Natrijum"
    },
    {
        "pitanje": "Koja vrsta reakcije se dešava kada se kiselina pomiješa s bazom?",
        "odgovori": ["Oksidacija", "Neutralizacija", "Redukcija", "Fotoliza"],
        "tacanOdgovor": "Neutralizacija"
    },
    {
        "pitanje": "Koji element je tekuć na sobnoj temperaturi?",
        "odgovori": ["Živa", "Bakar", "Željezo", "Srebro"],
        "tacanOdgovor": "Živa"
    },
    {
        "pitanje": "Koji je otkrivač periodičkog sistema elemenata?",
        "odgovori": ["Dmitrij Mendelejev", "Albert Einstein", "Isaac Newton", "Niels Bohr"],
        "tacanOdgovor": "Dmitrij Mendelejev"
    },
    {
        "pitanje": "Koji element je poznat kao plemeniti plin?",
        "odgovori": ["Helijum", "Kisik", "Ugljenik", "Dušik"],
        "tacanOdgovor": "Helijum"
    },
    {
        "pitanje": "Koji zakon objašnjava gibanje planeta?",
        "odgovori": ["Newtonov zakon gravitacije", "Ohmov zakon", "Maxwellove jednadžbe", "Einsteinova teorija relativnosti"],
        "tacanOdgovor": "Newtonov zakon gravitacije"
    },
    {
        "pitanje": "Šta mjeri termometar?",
        "odgovori": ["Tlak", "Temperaturu", "Brzinu", "Vlažnost"],
        "tacanOdgovor": "Temperaturu"
    },
    {
        "pitanje": "Kolika je brzina svjetlosti u vakuumu (približno)?",
        "odgovori": ["300,000 km/s", "150,000 km/s", "100,000 km/s", "500,000 km/s"],
        "tacanOdgovor": "300,000 km/s"
    },
    {
        "pitanje": "Koji zakon termodinamike glasi: 'Energija se ne stvara ni ne uništava, samo se prenosi i transformira'?",
        "odgovori": ["Prvi zakon", "Drugi zakon", "Treći zakon", "Nulti zakon"],
        "tacanOdgovor": "Prvi zakon"
    },
    {
        "pitanje": "Šta je električni otpor?",
        "odgovori": ["Mjera protoka struje", "Mjera prepreke protoku struje", "Mjera napona", "Mjera snage"],
        "tacanOdgovor": "Mjera prepreke protoku struje"
    },
    {
        "pitanje": "Koja veličina se mjeri u jedinici vata?",
        "odgovori": ["Energija", "Snaga", "Rad", "Otpor"],
        "tacanOdgovor": "Snaga"
    },
    {
        "pitanje": "Koji zakon opisuje odnos napona, struje i otpora?",
        "odgovori": ["Ohmov zakon", "Newtonov zakon", "Faradayev zakon", "Archimedov zakon"],
        "tacanOdgovor": "Ohmov zakon"
    },
    {
        "pitanje": "Koja veličina se u elektrostatiki naziva električno polje?",
        "odgovori": ["Električno polje", "Magnetno polje", "Gravitacijsko polje", "Tlak"],
        "tacanOdgovor": "Električno polje"
    },
    {
        "pitanje": "Šta je inercija?",
        "odgovori": ["Otpor promjeni stanja mirovanja ili kretanja", "Sposobnost stvaranja energije", "Mjera brzine", "Mjera temperature"],
        "tacanOdgovor": "Otpor promjeni stanja mirovanja ili kretanja"
    },
    {
        "pitanje": "Koja je jedinica za mjerenje električnog naboja?",
        "odgovori": ["Volt", "Ampere", "Kjulon", "Ohm"],
        "tacanOdgovor": "Kjulon"
    },
    {
        "pitanje": "Koja skraćenica označava 'Central Processing Unit'?",
        "odgovori": ["CPU", "GPU", "RAM", "ROM"],
        "tacanOdgovor": "CPU"
    },
    {
        "pitanje": "Koja je najpoznatija društvena mreža?",
        "odgovori": ["Facebook", "LinkedIn", "Twitter", "Instagram"],
        "tacanOdgovor": "Facebook"
    },
    {
        "pitanje": "Koji je najpopularniji operativni sistem za računare?",
        "odgovori": ["macOS", "Linux", "Windows", "Unix"],
        "tacanOdgovor": "Windows"
    },
    {
        "pitanje": "Šta znači skraćenica RAM?",
        "odgovori": ["Random Access Memory", "Readily Available Memory", "Run Access Memory", "Real Access Memory"],
        "tacanOdgovor": "Random Access Memory"
    },
    {
        "pitanje": "Koji je alat za obradu teksta u paketu Microsoft Office?",
        "odgovori": ["Excel", "Word", "PowerPoint", "Access"],
        "tacanOdgovor": "Word"
    },
    {
        "pitanje": "Koji protokol se koristi za prijenos web stranica?",
        "odgovori": ["HTTP", "FTP", "SMTP", "IMAP"],
        "tacanOdgovor": "HTTP"
    },
    {
        "pitanje": "Koji je najveći pretraživač interneta?",
        "odgovori": ["Google", "Bing", "Yahoo", "DuckDuckGo"],
        "tacanOdgovor": "Google"
    },
    {
        "pitanje": "Koji je jezik programiranja poznat po upotrebi u web razvoju?",
        "odgovori": ["Java", "Python", "JavaScript", "C#"],
        "tacanOdgovor": "JavaScript"
    },
    {
        "pitanje": "Koji program se koristi za stvaranje proračunskih tablica?",
        "odgovori": ["Word", "Excel", "PowerPoint", "Outlook"],
        "tacanOdgovor": "Excel"
    },
    {
        "pitanje": "Šta je URL?",
        "odgovori": ["Univerzalni Resurs Lokator", "Jedinstveni Resurs Lokator", "Uniform Resource Locator", "Unificirani Resurs Lokator"],
        "tacanOdgovor": "Uniform Resource Locator"
    },
    {
        "pitanje": "Koja je boja neba za vedar dan?",
        "odgovori": ["Plava", "Zelena", "Crvena", "Žuta"],
        "tacanOdgovor": "Plava"
    },
    {
        "pitanje": "Koliko sati ima dan?",
        "odgovori": ["12", "24", "48", "6"],
        "tacanOdgovor": "24"
    },
    {
        "pitanje": "Koji se instrument obično koristi u orkestru?",
        "odgovori": ["Gitara", "Klavir", "Violina", "Harmonika"],
        "tacanOdgovor": "Violina"
    },
    {
        "pitanje": "Koja je najbrža riba u moru?",
        "odgovori": ["Tuna", "Marlin", "Morski pas", "Losos"],
        "tacanOdgovor": "Marlin"
    },
    {
        "pitanje": "Koji je najpoznatiji simbol mira?",
        "odgovori": ["Golubica", "Crveni križ", "Bijela zastava", "Plava zvijezda"],
        "tacanOdgovor": "Golubica"
    },
    {
        "pitanje": "Koja je osnovna jedinica za vrijeme?",
        "odgovori": ["Sekunda", "Minuta", "Sat", "Dan"],
        "tacanOdgovor": "Sekunda"
    },
    {
        "pitanje": "Koji se alat koristi za mjerenje težine?",
        "odgovori": ["Mjerilo", "Termometar", "Barometar", "Higrometar"],
        "tacanOdgovor": "Mjerilo"
    },
    {
        "pitanje": "Koji oblik se obično povezuje sa simbolom ljubavi?",
        "odgovori": ["Kružnica", "Srce", "Trokut", "Kvadrat"],
        "tacanOdgovor": "Srce"
    },
    {
        "pitanje": "Koji je najčešći tip stanovanja?",
        "odgovori": ["Kuća", "Stan", "Hotel", "Kamp"],
        "tacanOdgovor": "Stan"
    },
    {
        "pitanje": "Koji je najpoznatiji festival u Rio de Janeiru?",
        "odgovori": ["Karneval", "Oktoberfest", "Burning Man", "Coachella"],
        "tacanOdgovor": "Karneval"
    },
    {
        "pitanje": "Koja država je poznata po fjordovima?",
        "odgovori": ["Švedska", "Norveška", "Finska", "Danska"],
        "tacanOdgovor": "Norveška"
    },
    {
        "pitanje": "Koji je tradicionalni bosanski instrument?",
        "odgovori": ["Saz", "Tamburica", "Šargija", "Fujara"],
        "tacanOdgovor": "Saz"
    },
    {
        "pitanje": "Koji je poznati bosanskohercegovački festival filma?",
        "odgovori": ["Sarajevo Film Festival", "Mostar Film Festival", "Banja Luka Film Festival", "Tuzla Film Festival"],
        "tacanOdgovor": "Sarajevo Film Festival"
    },
    {
        "pitanje": "Koja je najpoznatija nošnja u Bosni i Hercegovini?",
        "odgovori": ["Narodna nošnja", "Kebara", "Opanci", "Sutjeska"],
        "tacanOdgovor": "Narodna nošnja"
    },
    {
        "pitanje": "Koji je tradicionalni ples u Bosni i Hercegovini?",
        "odgovori": ["Kolo", "Flamenco", "Tango", "Samba"],
        "tacanOdgovor": "Kolo"
    },
    {
        "pitanje": "Koji je glavni sastojak u tradicionalnom bosanskom jelu 'čevapi'?",
        "odgovori": ["Piletina", "Govedina", "Janjetina", "Svinjetina"],
        "tacanOdgovor": "Govedina"
    },
    {
        "pitanje": "Koja je najpoznatija bosanska pjesma?",
        "odgovori": ["Emina", "Moj dilbere", "Kad zamirišu jorgovani", "Sejdefu majka buđaše"],
        "tacanOdgovor": "Moj dilbere"
    },
    {
        "pitanje": "Koja je tradicionalna bosanska kafa?",
        "odgovori": ["Espresso", "Turska kafa", "Filter kafa", "Instant kafa"],
        "tacanOdgovor": "Turska kafa"
    },
    {
        "pitanje": "Koji grad u Bosni i Hercegovini je poznat po Starom mostu?",
        "odgovori": ["Sarajevo", "Banja Luka", "Mostar", "Tuzla"],
        "tacanOdgovor": "Mostar"
    },
    {
        "pitanje": "Koji je poznati bosanski pisac koji je napisao 'Hazarski rečnik'?",
        "odgovori": ["Meša Selimović", "Ivo Andrić", "Milorad Pavić", "Dževad Karahasan"],
        "tacanOdgovor": "Milorad Pavić"
    },
    {
        "pitanje": "Koji je najpoznatiji fudbalski klub iz Engleske?",
        "odgovori": ["Manchester United", "Real Madrid", "Bayern München", "Juventus"],
        "tacanOdgovor": "Manchester United"
    },
    {
        "pitanje": "Koji je najveći teniski turnir?",
        "odgovori": ["Roland Garros", "US Open", "Wimbledon", "Australian Open"],
        "tacanOdgovor": "Wimbledon"
    },
    {
        "pitanje": "Koji sport se igra na ledu?",
        "odgovori": ["Hokej na ledu", "Rugby", "Fudbal", "Košarka"],
        "tacanOdgovor": "Hokej na ledu"
    },
    {
        "pitanje": "Koja je najpoznatija Formula 1 trka?",
        "odgovori": ["Grand Prix Monaka", "Indijanski Grand Prix", "Grand Prix Italije", "Grand Prix Nemačke"],
        "tacanOdgovor": "Grand Prix Monaka"
    },
    {
        "pitanje": "Koji je poznati NBA košarkaš?",
        "odgovori": ["LeBron James", "Cristiano Ronaldo", "Lionel Messi", "Tom Brady"],
        "tacanOdgovor": "LeBron James"
    },
    {
        "pitanje": "Koji sport se često naziva 'kralj sportova'?",
        "odgovori": ["Fudbal", "Košarka", "Tenis", "Rugby"],
        "tacanOdgovor": "Fudbal"
    },
    {
        "pitanje": "Koliko igrača ima košarkaški tim na terenu?",
        "odgovori": ["4", "5", "6", "7"],
        "tacanOdgovor": "5"
    },
    {
        "pitanje": "Koji sport se igra s palicom i loptom na travi?",
        "odgovori": ["Kriket", "Baseball", "Ragbi", "Hokej"],
        "tacanOdgovor": "Kriket"
    },
    {
        "pitanje": "Koja je najpoznatija sportska aktivnost u Indiji?",
        "odgovori": ["Kriket", "Fudbal", "Hokej", "Tenis"],
        "tacanOdgovor": "Kriket"
    },
    {
        "pitanje": "Koji sport je igrao na antičkim Olimpijskim igrama?",
        "odgovori": ["Boks", "Ragbi", "Nogomet", "Košarka"],
        "tacanOdgovor": "Boks"
    },
    {
        "pitanje": "Koji indikator mjeri prosječnu promjenu cijena potrošačkih proizvoda?",
        "odgovori": ["BDP", "Inflacija", "Nezaposlenost", "Kamata"],
        "tacanOdgovor": "Inflacija"
    },
    {
        "pitanje": "Koja mjera predstavlja bruto domaći proizvod?",
        "odgovori": ["Ukupna vrijednost proizvodnje", "Ukupni dohodak stanovništva", "Ukupna potrošnja", "Ukupni uvoz"],
        "tacanOdgovor": "Ukupna vrijednost proizvodnje"
    },
    {
        "pitanje": "Koja zemlja je poznata kao 'Zemlja izlazećeg sunca'?",
        "odgovori": ["Japan", "Kina", "Južna Koreja", "Indija"],
        "tacanOdgovor": "Japan"
    },
    {
        "pitanje": "Koja ekonomska teorija zagovara slobodno tržište?",
        "odgovori": ["Keynesijanizam", "Neoliberalizam", "Marxizam", "Protektivizam"],
        "tacanOdgovor": "Neoliberalizam"
    },
    {
        "pitanje": "Koji porez se obračunava na dodanu vrijednost?",
        "odgovori": ["PDV", "Porez na dohodak", "Porez na imovinu", "Carina"],
        "tacanOdgovor": "PDV"
    },
    {
        "pitanje": "Koji međunarodni forum okuplja najveće svjetske ekonomije?",
        "odgovori": ["G7", "G20", "BRICS", "ASEAN"],
        "tacanOdgovor": "G20"
    },
    {
        "pitanje": "Koja je valuta u Velikoj Britaniji?",
        "odgovori": ["Euro", "Funta", "Dolar", "Jen"],
        "tacanOdgovor": "Funta"
    },
    {
        "pitanje": "Koji je najvažniji finansijski centar svijeta?",
        "odgovori": ["New York", "London", "Tokio", "Hong Kong"],
        "tacanOdgovor": "New York"
    },
    {
        "pitanje": "Koji međunarodni monetarni fond postoji?",
        "odgovori": ["IMF", "WTO", "OPEC", "UNESCO"],
        "tacanOdgovor": "IMF"
    },
    {
        "pitanje": "Koja je uloga centralne banke?",
        "odgovori": ["Kontrola novčane mase", "Organizacija izbora", "Nadzor nad medijima", "Upravljanje školstvom"],
        "tacanOdgovor": "Kontrola novčane mase"
    },
    {
        "pitanje": "Koliko otkucaja srca ima prosječan odrasli u minuti u mirovanju?",
        "odgovori": ["60-100", "40-60", "100-120", "120-140"],
        "tacanOdgovor": "60-100"
    },
    {
        "pitanje": "Koji vitamin je važan za vid?",
        "odgovori": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "tacanOdgovor": "Vitamin A"
    },
    {
        "pitanje": "Koji organ je odgovoran za pumpanje krvi?",
        "odgovori": ["Bubrezi", "Pluća", "Srce", "Jetra"],
        "tacanOdgovor": "Srce"
    },
    {
        "pitanje": "Koja je preporučena dnevna količina vode za odraslu osobu?",
        "odgovori": ["1 litar", "2 litre", "3 litre", "4 litre"],
        "tacanOdgovor": "2 litre"
    },
    {
        "pitanje": "Šta je BMI?",
        "odgovori": ["Indeks telesne mase", "Mjera visine", "Mjera krvnog pritiska", "Test inteligencije"],
        "tacanOdgovor": "Indeks telesne mase"
    },
    {
        "pitanje": "Koja bolest je poznata kao 'tiha epidemija'?",
        "odgovori": ["Dijabetes", "Grip", "Malaria", "Tuberkuloza"],
        "tacanOdgovor": "Dijabetes"
    },
    {
        "pitanje": "Koji virus uzrokuje COVID-19?",
        "odgovori": ["SARS-CoV-2", "Influenza", "HIV", "Ebola"],
        "tacanOdgovor": "SARS-CoV-2"
    },
    {
        "pitanje": "Koja je preporučena doza vitamina C dnevno za odraslu osobu?",
        "odgovori": ["50 mg", "75 mg", "90 mg", "120 mg"],
        "tacanOdgovor": "90 mg"
    },
    {
        "pitanje": "Koja je glavna funkcija imunog sistema?",
        "odgovori": ["Probava hrane", "Borba protiv infekcija", "Regulacija hormona", "Transport kisika"],
        "tacanOdgovor": "Borba protiv infekcija"
    },
    {
        "pitanje": "Koja je najčešća bolest srca?",
        "odgovori": ["Infarkt", "Aritmija", "Srčana insuficijencija", "Kardiomiopatija"],
        "tacanOdgovor": "Infarkt"
    },
    {
        "pitanje": "Koja je najposjećenija svjetska turistička destinacija?",
        "odgovori": ["Pariz", "New York", "London", "Dubai"],
        "tacanOdgovor": "Pariz"
    },
    {
        "pitanje": "Koji je poznati muzej u Londonu?",
        "odgovori": ["British Museum", "Louvre", "Hermitage", "Prado"],
        "tacanOdgovor": "British Museum"
    },
    {
        "pitanje": "Koja je poznata planina u Švicarskoj?",
        "odgovori": ["Matterhorn", "Mont Blanc", "Elbrus", "K2"],
        "tacanOdgovor": "Matterhorn"
    },
    {
        "pitanje": "Koja država je poznata po tradicionalnim samurajima?",
        "odgovori": ["Kina", "Japan", "Južna Koreja", "Tajland"],
        "tacanOdgovor": "Japan"
    },
    {
        "pitanje": "Koja poznata reka prolazi kroz Pariz?",
        "odgovori": ["Temza", "Seina", "Rin", "Po"],
        "tacanOdgovor": "Seina"
    },
    {
        "pitanje": "Koji grad je poznat kao 'Grad svjetlosti'?",
        "odgovori": ["New York", "Pariz", "Rim", "Berlin"],
        "tacanOdgovor": "Pariz"
    },
    {
        "pitanje": "Koja država je poznata po alpinizmu?",
        "odgovori": ["Nepal", "Španija", "Portugal", "Egipat"],
        "tacanOdgovor": "Nepal"
    },
    {
        "pitanje": "Koji je najveći aerodrom na svijetu?",
        "odgovori": ["Heathrow", "Dubai International", "Hartsfield–Jackson Atlanta", "Charles de Gaulle"],
        "tacanOdgovor": "Hartsfield–Jackson Atlanta"
    },
    {
        "pitanje": "Koji je poznati autohtoni festival u Španiji?",
        "odgovori": ["La Tomatina", "Oktoberfest", "Carnival", "Diwali"],
        "tacanOdgovor": "La Tomatina"
    },
    {
        "pitanje": "Koja destinacija je poznata po Kanjonu?",
        "odgovori": ["Grand Canyon", "Niagara", "Victoria Falls", "Mount Rushmore"],
        "tacanOdgovor": "Grand Canyon"
    },
    {
        "pitanje": "Koji je najpoznatiji proizvođač automobila iz Njemačke?",
        "odgovori": ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"],
        "tacanOdgovor": "Volkswagen"
    },
    {
        "pitanje": "Koja je najpoznatija trkačka serija u svijetu automobila?",
        "odgovori": ["Formula 1", "Nascar", "Rally", "IndyCar"],
        "tacanOdgovor": "Formula 1"
    },
    {
        "pitanje": "Koji je prvi automobil proizveden u serijskoj proizvodnji?",
        "odgovori": ["Ford Model T", "Mercedes-Benz Patent-Motorwagen", "Volkswagen Beetle", "Chevrolet Impala"],
        "tacanOdgovor": "Ford Model T"
    },
    {
        "pitanje": "Koji se sustav koristi za mjerenje brzine vozila?",
        "odgovori": ["Mph", "Km/h", "Mps", "Ft/s"],
        "tacanOdgovor": "Km/h"
    },
    {
        "pitanje": "Koja je najpoznatija trkačka marka motocikala?",
        "odgovori": ["Harley-Davidson", "Ducati", "Yamaha", "Suzuki"],
        "tacanOdgovor": "Harley-Davidson"
    },
    {
        "pitanje": "Koji instrument se koristi za mjerenje pritiska u gumama?",
        "odgovori": ["Manometar", "Barometar", "Termometar", "Higrometar"],
        "tacanOdgovor": "Manometar"
    },
    {
        "pitanje": "Koja je glavna komponenta automobilske motorizacije koja sagorijeva gorivo?",
        "odgovori": ["Baterija", "Motor", "Mjenjač", "Kočnice"],
        "tacanOdgovor": "Motor"
    },
    {
        "pitanje": "Koja je električna jedinica za mjerenje kapaciteta baterija?",
        "odgovori": ["Volt", "Amper", "Wh", "Ah"],
        "tacanOdgovor": "Ah"
    },
    {
        "pitanje": "Koje gorivo se najčešće koristi u automobilima?",
        "odgovori": ["Benzin", "Dizel", "Električni", "Vodonični"],
        "tacanOdgovor": "Benzin"
    },
    {
        "pitanje": "Koji je poznati proizvođač luksuznih automobila iz Italije?",
        "odgovori": ["Ferrari", "Lamborghini", "Maserati", "Alfa Romeo"],
        "tacanOdgovor": "Ferrari"
    },
    {
        "pitanje": "Koji je bio glavni uzrok pada Rimskog Carstva?",
        "odgovori": ["Ekonomska nestabilnost", "Napadi barbarskih plemena", "Religijske razlike", "Sve navedeno"],
        "tacanOdgovor": "Sve navedeno"
    },
    {
        "pitanje": "Koja civilizacija se razvila u Mezopotamiji?",
        "odgovori": ["Egipatska", "Sumerska", "Inka", "Maja"],
        "tacanOdgovor": "Sumerska"
    },
    {
        "pitanje": "Koji grad je bio centar Rimskog Carstva?",
        "odgovori": ["Rim", "Atena", "Constantinople", "Kartagina"],
        "tacanOdgovor": "Rim"
    },
    {
        "pitanje": "Koji događaj označava kraj srednjeg vijeka?",
        "odgovori": ["Otkrivanje Amerike", "Pad Konstantinopolja", "Početak industrijske revolucije", "Prvi svjetski rat"],
        "tacanOdgovor": "Pad Konstantinopolja"
    },
    {
        "pitanje": "Koji kralj je bio poznat kao 'Sunčev kralj'?",
        "odgovori": ["Ludvig XIV", "Henrik VIII", "Karel Veliki", "Ivan Grozni"],
        "tacanOdgovor": "Ludvig XIV"
    },
    {
        "pitanje": "Koja država je bila poznata po Inka civilizaciji?",
        "odgovori": ["Meksiko", "Peru", "Brazil", "Kolumbija"],
        "tacanOdgovor": "Peru"
    },
    {
        "pitanje": "Koji je bio glavni grad Osmanskog Carstva?",
        "odgovori": ["Istanbul", "Ankara", "Beograd", "Skoplje"],
        "tacanOdgovor": "Istanbul"
    },
    {
        "pitanje": "Koji važan događaj se odigrao 1969. godine?",
        "odgovori": ["Prvi čovjek na Mjesecu", "Pad Berlinskog zida", "Početak Hladnog rata", "Osnivanje EU"],
        "tacanOdgovor": "Prvi čovjek na Mjesecu"
    },
    {
        "pitanje": "Koja država je bila centar renesanse?",
        "odgovori": ["Francuska", "Italija", "Njemačka", "Španija"],
        "tacanOdgovor": "Italija"
    },
    {
        "pitanje": "Koji dokument potpisan 1215. godine u Engleskoj?",
        "odgovori": ["Magna Carta", "Bill of Rights", "Deklaracija nezavisnosti", "Ustav SAD"],
        "tacanOdgovor": "Magna Carta"
    },
    {
        "pitanje": "Koji organ u ljudskom tijelu proizvodi insulin?",
        "odgovori": ["Pankreas", "Jetra", "Bubrezi", "Pluća"],
        "tacanOdgovor": "Pankreas"
    },
    {
        "pitanje": "Koja je najveća planeta u našem solarnom sistemu?",
        "odgovori": ["Zemlja", "Saturn", "Jupiter", "Uran"],
        "tacanOdgovor": "Jupiter"
    },
    {
        "pitanje": "Šta je fotosinteza?",
        "odgovori": ["Proces disanja biljaka", "Proces proizvodnje hrane u biljkama", "Proces rasta životinja", "Proces isparavanja vode"],
        "tacanOdgovor": "Proces proizvodnje hrane u biljkama"
    },
    {
        "pitanje": "Koji je najveći organ u ljudskom tijelu?",
        "odgovori": ["Koža", "Jetra", "Pluća", "Bubrezi"],
        "tacanOdgovor": "Koža"
    },
    {
        "pitanje": "Koja planeta ima prstenove?",
        "odgovori": ["Mars", "Jupiter", "Saturn", "Neptun"],
        "tacanOdgovor": "Saturn"
    },
    {
        "pitanje": "Koji je glavni sastojak vazduha?",
        "odgovori": ["Kisik", "Azot", "Ugljen-dioksid", "Helijum"],
        "tacanOdgovor": "Azot"
    },
    {
        "pitanje": "Koji fenomen uzrokuje pojavu duge?",
        "odgovori": ["Refleksija i refrakcija svjetlosti", "Samo refleksija", "Samo refrakcija", "Difrakcija"],
        "tacanOdgovor": "Refleksija i refrakcija svjetlosti"
    },
    {
        "pitanje": "Šta je H2SO4?",
        "odgovori": ["Voda", "Sumporna kiselina", "Natrijum hlorid", "Amonijak"],
        "tacanOdgovor": "Sumporna kiselina"
    },
    {
        "pitanje": "Koji je najveći organ u biljci?",
        "odgovori": ["List", "Koren", "Stablo", "Cvijet"],
        "tacanOdgovor": "List"
    },
    {
        "pitanje": "Koja čestica čini atom?",
        "odgovori": ["Protoni, neutroni, elektroni", "Molekule", "Ioni", "Atomi"],
        "tacanOdgovor": "Protoni, neutroni, elektroni"
    },
    {
        "pitanje": "Koji programski jezik primarno koriste za razvoj iOS aplikacija?",
        "odgovori": ["Swift", "Java", "Kotlin", "Objective-C"],
        "tacanOdgovor": "Swift"
    },
    {
        "pitanje": "Koji je najpoznatiji internet pretraživač?",
        "odgovori": ["Google Chrome", "Mozilla Firefox", "Safari", "Opera"],
        "tacanOdgovor": "Google Chrome"
    },
    {
        "pitanje": "Koja društvena mreža je najpopularnija?",
        "odgovori": ["Facebook", "Twitter", "Instagram", "LinkedIn"],
        "tacanOdgovor": "Facebook"
    },
    {
        "pitanje": "Koja tehnologija se koristi za bežično punjenje uređaja?",
        "odgovori": ["Bluetooth", "NFC", "Qi", "Wi-Fi"],
        "tacanOdgovor": "Qi"
    },
    {
        "pitanje": "Koji uređaj se najčešće koristi za prenos digitalnih fotografija?",
        "odgovori": ["Hard disk", "USB flash drive", "CD-ROM", "SSD"],
        "tacanOdgovor": "USB flash drive"
    },
    {
        "pitanje": "Koji je najpoznatiji sistem za upravljanje bazama podataka?",
        "odgovori": ["MySQL", "Oracle", "SQL Server", "MongoDB"],
        "tacanOdgovor": "MySQL"
    },
    {
        "pitanje": "Koji softver se koristi za obradu fotografija?",
        "odgovori": ["Adobe Photoshop", "Microsoft Paint", "GIMP", "Corel Draw"],
        "tacanOdgovor": "Adobe Photoshop"
    },
    {
        "pitanje": "Koji uređaj se koristi za iskustvo virtualne stvarnosti?",
        "odgovori": ["VR headset", "Smartphone", "Tablet", "Laptop"],
        "tacanOdgovor": "VR headset"
    },
    {
        "pitanje": "Koji operativni sistem je najčešći na serverima?",
        "odgovori": ["Windows", "Linux", "macOS", "Android"],
        "tacanOdgovor": "Linux"
    },
    {
        "pitanje": "Šta je cloud computing?",
        "odgovori": ["Obrada podataka na udaljenim serverima", "Lokalno skladištenje podataka", "Softverska licenca", "Hardverski update"],
        "tacanOdgovor": "Obrada podataka na udaljenim serverima"
    },
    {
        "pitanje": "Koja je najveća zemlja po površini?",
        "odgovori": ["Kanada", "Kina", "Rusija", "SAD"],
        "tacanOdgovor": "Rusija"
    },
    {
        "pitanje": "Koja je najduža rijeka u Evropi?",
        "odgovori": ["Volga", "Dunav", "Don", "Rajna"],
        "tacanOdgovor": "Volga"
    },
    {
        "pitanje": "Koji je najviši vrh u Evropi?",
        "odgovori": ["Mont Blanc", "Elbrus", "Matterhorn", "Grossglockner"],
        "tacanOdgovor": "Elbrus"
    },
    {
        "pitanje": "Koja zemlja je poznata po fjordovima?",
        "odgovori": ["Norveška", "Švedska", "Island", "Finska"],
        "tacanOdgovor": "Norveška"
    },
    {
        "pitanje": "Koji je glavni grad Australije?",
        "odgovori": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        "tacanOdgovor": "Canberra"
    },
    {
        "pitanje": "Koja zemlja je poznata po piramidalnoj arhitekturi?",
        "odgovori": ["Egipat", "Meksiko", "Peru", "Kina"],
        "tacanOdgovor": "Egipat"
    },
    {
        "pitanje": "Koji je najveći otok na svijetu?",
        "odgovori": ["Grönland", "Nova Gvineja", "Borneo", "Madagaskar"],
        "tacanOdgovor": "Grönland"
    },
    {
        "pitanje": "Koji planinski lanac dominira u Sjevernoj Americi?",
        "odgovori": ["Rocky Mountains", "Appalachians", "Sierra Nevada", "Ande"],
        "tacanOdgovor": "Rocky Mountains"
    },
    {
        "pitanje": "Koji je glavni grad Kanade?",
        "odgovori": ["Toronto", "Montreal", "Vankuver", "Ottawa"],
        "tacanOdgovor": "Ottawa"
    },
    {
        "pitanje": "Koja je najveća zemlja u Južnoj Americi?",
        "odgovori": ["Argentina", "Brazil", "Peru", "Kolumbija"],
        "tacanOdgovor": "Brazil"
    },
    {
        "pitanje": "Koji je debitantski dugometražni film Quentina Tarantina?",
        "odgovori": ["Pulp Fiction", "Reservoir Dogs", "Kill Bill", "Inglourious Basterds"],
        "tacanOdgovor": "Reservoir Dogs"
    },
    {
        "pitanje": "Koji sport se igra na ledu s metlama?",
        "odgovori": ["Hokej", "Curling", "Bobsleigh", "Skeleton"],
        "tacanOdgovor": "Curling"
    },
    {
        "pitanje": "Koji je najpoznatiji astronom?",
        "odgovori": ["Galileo Galilei", "Nicolaus Copernicus", "Johannes Kepler", "Edwin Hubble"],
        "tacanOdgovor": "Galileo Galilei"
    },
    {
        "pitanje": "Koji je poznati roman Gabriela Garcíe Márqueza?",
        "odgovori": ["Sto godina samoće", "Ljubav u doba kolere", "Derviš i smrt", "Gospodar prstenova"],
        "tacanOdgovor": "Sto godina samoće"
    },
    {
        "pitanje": "Koji je najpoznatiji grad u Indiji?",
        "odgovori": ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
        "tacanOdgovor": "Mumbai"
    },
    {
        "pitanje": "Koji instrument ima tipične crno-bele tipke?",
        "odgovori": ["Gitara", "Klavir", "Violina", "Bubnjevi"],
        "tacanOdgovor": "Klavir"
    },
    {
        "pitanje": "Koji je glavni sastojak u sushi-ju?",
        "odgovori": ["Tjestenina", "Riža", "Hljeb", "Krompir"],
        "tacanOdgovor": "Riža"
    },
    {
        "pitanje": "Koja zemlja se smatra rodnim mjestom antičkih olimpijskih igara?",
        "odgovori": ["Grecija", "Italija", "Egipat", "Kina"],
        "tacanOdgovor": "Grecija"
    },
    {
        "pitanje": "Koji je glavni grad Španije?",
        "odgovori": ["Barcelona", "Madrid", "Sevilla", "Valensija"],
        "tacanOdgovor": "Madrid"
    },
    {
        "pitanje": "Koji je poznati inovator u oblasti električne energije?",
        "odgovori": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Guglielmo Marconi"],
        "tacanOdgovor": "Nikola Tesla"
    },
    {
        "pitanje": "Koji je glavni grad Turske?",
        "odgovori": ["Istanbul", "Ankara", "Izmir", "Antalija"],
        "tacanOdgovor": "Ankara"
    },
    {
        "pitanje": "Koja je najduža rijeka u Evropi?",
        "odgovori": ["Volga", "Dunav", "Po", "Elbe"],
        "tacanOdgovor": "Dunav"
    },
    {
        "pitanje": "Koja je najpoznatija rimska cesta?",
        "odgovori": ["Via Appia", "Via Egnatia", "Via Augusta", "Via Sacra"],
        "tacanOdgovor": "Via Appia"
    },
    {
        "pitanje": "Koji je otac moderne fizike?",
        "odgovori": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
        "tacanOdgovor": "Albert Einstein"
    },
    {
        "pitanje": "Koja je najveća pustinja u Africi?",
        "odgovori": ["Sahara", "Kalahari", "Namib", "Danakil"],
        "tacanOdgovor": "Sahara"
    },
    {
        "pitanje": "Koja država ima najviše stanovnika na svijetu?",
        "odgovori": ["Indija", "SAD", "Kina", "Indonezija"],
        "tacanOdgovor": "Kina"
    },
    {
        "pitanje": "Koja je najbrža životinja na kopnu?",
        "odgovori": ["Gepard", "Lav", "Antilopa", "Zebra"],
        "tacanOdgovor": "Gepard"
    },
    {
        "pitanje": "Koji element ima atomski broj 6?",
        "odgovori": ["Ugljenik", "Kisik", "Azot", "Vodik"],
        "tacanOdgovor": "Ugljenik"
    },
    {
        "pitanje": "Koja planeta je poznata kao plavi planet?",
        "odgovori": ["Mars", "Venera", "Zemlja", "Jupiter"],
        "tacanOdgovor": "Zemlja"
    },
    {
        "pitanje": "Koji je najpoznatiji festival u Brazilu?",
        "odgovori": ["Karneval", "Oktoberfest", "La Tomatina", "Diwali"],
        "tacanOdgovor": "Karneval"
    },
    {
        "pitanje": "Koji je najpoznatiji roman u svjetskoj književnosti?",
        "odgovori": ["Rat i mir", "1984", "Gospodar prstenova", "Sto godina samoće"],
        "tacanOdgovor": "Sto godina samoće"
    },
    {
        "pitanje": "Koji slikar je naslikao 'Guernicu'?",
        "odgovori": ["Pablo Picasso", "Salvador Dalí", "Henri Matisse", "Joan Miró"],
        "tacanOdgovor": "Pablo Picasso"
    },
    {
        "pitanje": "Koja je najpoznatija simfonija Ludwiga van Beethovena?",
        "odgovori": ["Simfonija br. 5", "Simfonija br. 9", "Simfonija br. 3", "Simfonija br. 7"],
        "tacanOdgovor": "Simfonija br. 5"
    },
    {
        "pitanje": "Koji sport se igra sa loptom i palicom na travi?",
        "odgovori": ["Kriket", "Hokej", "Rugby", "Fudbal"],
        "tacanOdgovor": "Kriket"
    },
    {
        "pitanje": "Koji je glavni grad Australije?",
        "odgovori": ["Sydney", "Melbourne", "Canberra", "Perth"],
        "tacanOdgovor": "Canberra"
    },
    {
        "pitanje": "Koja zemlja je poznata po Maple Leaf?",
        "odgovori": ["SAD", "Kanada", "Australija", "Nova Zelandija"],
        "tacanOdgovor": "Kanada"
    },
    {
        "pitanje": "Koji je najpoznatiji istraživač Antarktika?",
        "odgovori": ["Roald Amundsen", "Robert Scott", "Ernest Shackleton", "James Clark Ross"],
        "tacanOdgovor": "Roald Amundsen"
    },
    {
        "pitanje": "Koji je najpoznatiji film Stivena Spielberga o vanzemaljcima?",
        "odgovori": ["E.T.", "Jurassic Park", "Schindler's List", "Indiana Jones"],
        "tacanOdgovor": "E.T."
    },
    {
        "pitanje": "Koji je najpoznatiji električni automobil?",
        "odgovori": ["Tesla Model S", "Nissan Leaf", "BMW i3", "Chevy Bolt"],
        "tacanOdgovor": "Tesla Model S"
    },
    {
        "pitanje": "Koja je najpoznatija književna nagrada?",
        "odgovori": ["Pulitzer", "Nobel", "Man Booker", "Hugo"],
        "tacanOdgovor": "Nobel"
    },
    {
        "pitanje": "Koja je najpoznatija starogrčka epika?",
        "odgovori": ["Ilijada", "Odiseja", "Eneida", "Mahabharata"],
        "tacanOdgovor": "Ilijada"
    },
    {
        "pitanje": "Koji je glavni sastojak u tradicionalnoj japanskoj supi miso?",
        "odgovori": ["Soja", "Riba", "Piletina", "Biftek"],
        "tacanOdgovor": "Soja"
    },
    {
        "pitanje": "Koji muzički instrument ima 88 tipki?",
        "odgovori": ["Klavir", "Organ", "Gitara", "Violina"],
        "tacanOdgovor": "Klavir"
    },
    {
        "pitanje": "Koji je najpoznatiji most u San Franciscu?",
        "odgovori": ["Golden Gate", "Brooklyn", "Tower Bridge", "Charles Bridge"],
        "tacanOdgovor": "Golden Gate"
    },
    {
        "pitanje": "Koji je najpoznatiji univerzitet u SAD-u?",
        "odgovori": ["Harvard", "Stanford", "MIT", "Yale"],
        "tacanOdgovor": "Harvard"
    },
    {
        "pitanje": "Koji sport se igra s lopticama na bilijarskom stolu?",
        "odgovori": ["Bilijar", "Snooker", "Ping Pong", "Bowling"],
        "tacanOdgovor": "Snooker"
    },
    {
        "pitanje": "Koja je najpoznatija slatka poslastica Italije?",
        "odgovori": ["Tiramisu", "Gelato", "Cannoli", "Panna Cotta"],
        "tacanOdgovor": "Tiramisu"
    },
    {
        "pitanje": "Koja zemlja je domaćin Olimpijskih igara 2020. godine?",
        "odgovori": ["Japan", "Kina", "Brazil", "Rusija"],
        "tacanOdgovor": "Japan"
    },
    {
        "pitanje": "Koji poznati slikar je naslikao 'Zvjezdanu noć'?",
        "odgovori": ["Vincent van Gogh", "Claude Monet", "Salvador Dalí", "Edvard Munch"],
        "tacanOdgovor": "Vincent van Gogh"
    },
    {
        "pitanje": "Koja planeta ima najveći broj prstenova?",
        "odgovori": ["Saturn", "Uran", "Neptun", "Jupiter"],
        "tacanOdgovor": "Saturn"
    },
    {
        "pitanje": "Koji je najpoznatiji detektiv u književnosti?",
        "odgovori": ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Sam Spade"],
        "tacanOdgovor": "Sherlock Holmes"
    },
    {
        "pitanje": "Koji je najpoznatiji fudbalski turnir u automobilizmu?",
        "odgovori": ["Formula 1", "Nascar", "Rally Dakar", "Indy 500"],
        "tacanOdgovor": "Formula 1"
    },
    {
        "pitanje": "Koja je osnovna jedinica za mjerenje temperature?",
        "odgovori": ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
        "tacanOdgovor": "Kelvin"
    },
    {
        "pitanje": "Koja država je poznata po Pizzi?",
        "odgovori": ["Italija", "Francuska", "Grčka", "Španija"],
        "tacanOdgovor": "Italija"
    },
    {
        "pitanje": "Koja zemlja je poznata kao 'Zemlja tulipana'?",
        "odgovori": ["Holandija", "Belgija", "Njemačka", "Danska"],
        "tacanOdgovor": "Holandija"
    },
    {
        "pitanje": "Koji je glavni sastojak guacamolea?",
        "odgovori": ["Avokado", "Paradajz", "Kukuruz", "Krastavac"],
        "tacanOdgovor": "Avokado"
    },
    {
        "pitanje": "Koji poznati autor je napisao '1984'?",
        "odgovori": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"],
        "tacanOdgovor": "George Orwell"
    },
    {
        "pitanje": "Koji je glavni grad Švedske?",
        "odgovori": ["Stockholm", "Oslo", "Kopenhagen", "Helsinki"],
        "tacanOdgovor": "Stockholm"
    },
    {
        "pitanje": "Koja je najveća zemlja u Južnoj Americi?",
        "odgovori": ["Argentina", "Brazil", "Čile", "Peru"],
        "tacanOdgovor": "Brazil"
    },
    {
        "pitanje": "Koja se valuta koristi u Japanu?",
        "odgovori": ["Yen", "Won", "Dolar", "Euro"],
        "tacanOdgovor": "Yen"
    },
    {
        "pitanje": "Koji je glavni sastojak u čuvenom francuskom jelu 'Bouillabaisse'?",
        "odgovori": ["Riba", "Piletina", "Govedina", "Plodovi mora"],
        "tacanOdgovor": "Riba"
    },
    {
        "pitanje": "Koji je najpoznatiji astronomski teleskop u svemiru?",
        "odgovori": ["Hubble", "James Webb", "Chandra", "Spitzer"],
        "tacanOdgovor": "Hubble"
    },
    {
        "pitanje": "Koja je najčešća krvna grupa?",
        "odgovori": ["O", "A", "B", "AB"],
        "tacanOdgovor": "O"
    },
    {
        "pitanje": "Koji sport se igra u bazenu s lopticama?",
        "odgovori": ["Vaterpolo", "Rugby", "Košarka", "Fudbal"],
        "tacanOdgovor": "Vaterpolo"
    },
    {
        "pitanje": "Koji je najpoznatiji filmski festival u Cannesu?",
        "odgovori": ["Cannes Film Festival", "Venice Film Festival", "Sundance", "Berlin Film Festival"],
        "tacanOdgovor": "Cannes Film Festival"
    },
    {
        "pitanje": "Koja je najpoznatija knjiga o Harryju Potteru?",
        "odgovori": ["Harry Potter i kamen mudraca", "Harry Potter i odaja tajni", "Harry Potter i vještičji prsten", "Harry Potter i zatočenik Azkabana"],
        "tacanOdgovor": "Harry Potter i kamen mudraca"
    },
    {
        "pitanje": "Koja je najpoznatija sportska liga u SAD-u?",
        "odgovori": ["NFL", "NBA", "MLB", "NHL"],
        "tacanOdgovor": "NFL"
    },
    {
        "pitanje": "Koja država je domaćin FIFA Svjetskog prvenstva 2018. godine?",
        "odgovori": ["Rusija", "Brazil", "Katar", "Njemačka"],
        "tacanOdgovor": "Rusija"
    },
    {
        "pitanje": "Koji je najpoznatiji autohtoni muzej u Bosni i Hercegovini?",
        "odgovori": ["Narodni muzej BiH", "Muzej Sarajeva", "Gazi Husrev-begov muzej", "Arheološki muzej"],
        "tacanOdgovor": "Gazi Husrev-begov muzej"
    },
    {
        "pitanje": "Koji je najpoznatiji bosanski pjevač?",
        "odgovori": ["Halid Bešlić", "Dino Merlin", "Zdravko Čolić", "Željko Joksimović"],
        "tacanOdgovor": "Dino Merlin"
    },
    {
        "pitanje": "Koji je najveći okean na svijetu?",
        "odgovori": ["Tihi", "Atlantski", "Indijski", "Arktički"],
        "tacanOdgovor": "Tihi"
    },
    {
        "pitanje": "Koja je najpoznatija piramida u Egiptu?",
        "odgovori": ["Keopsova", "Kefrenova", "Mikerinova", "Sunčeva"],
        "tacanOdgovor": "Keopsova"
    },
    {
        "pitanje": "Koji je najpoznatiji islandic autor?",
        "odgovori": ["Halldór Laxness", "Arnaldur Indriðason", "Sjón", "Davíð Stefánsson"],
        "tacanOdgovor": "Halldór Laxness"
    },
    {
        "pitanje": "Koja je najveća planina u Aziji?",
        "odgovori": ["K2", "Kangchenjunga", "Everest", "Lhotse"],
        "tacanOdgovor": "Everest"
    },
    {
        "pitanje": "Koja je poznata teorija o porijeklu svemira?",
        "odgovori": ["Teorija Velikog praska", "Teorija inflacije", "Teorija superstruna", "Teorija crne rupe"],
        "tacanOdgovor": "Teorija Velikog praska"
    },
    {
        "pitanje": "Koji je najpoznatiji internet pretraživač?",
        "odgovori": ["Google", "Bing", "Yahoo", "DuckDuckGo"],
        "tacanOdgovor": "Google"
    },
    {
        "pitanje": "Koja je najveća država u Africi?",
        "odgovori": ["Alžir", "Egipat", "Sudan", "Libija"],
        "tacanOdgovor": "Alžir"
    },
    {
        "pitanje": "Koji muzički žanr je popularizirao Bob Marley?",
        "odgovori": ["Reggae", "Rock", "Jazz", "Blues"],
        "tacanOdgovor": "Reggae"
    },
    {
        "pitanje": "Koja knjiga opisuje iskustva u koncentracionom logoru?",
        "odgovori": ["Dnevnik Anne Frank", "Prisoner of Auschwitz", "Man's Search for Meaning", "Night"],
        "tacanOdgovor": "Dnevnik Anne Frank"
    },
    {
        "pitanje": "Koji je najpoznatiji glazbeni festival na svijetu?",
        "odgovori": ["Glastonbury", "Coachella", "Rock in Rio", "Tomorrowland"],
        "tacanOdgovor": "Glastonbury"
    },
    {
        "pitanje": "Koja je najpoznatija slastica Francuske?",
        "odgovori": ["Macaron", "Croissant", "Eclair", "Creme brulee"],
        "tacanOdgovor": "Macaron"
    },
    {
        "pitanje": "Koji je najpoznatiji otok u Karibima?",
        "odgovori": ["Kuba", "Jamajka", "Bahami", "Dominikanska Republika"],
        "tacanOdgovor": "Kuba"
    },
    {
        "pitanje": "Koji poznati inženjer je dizajnirao Eiffelov toranj?",
        "odgovori": ["Gustave Eiffel", "Le Corbusier", "Norman Foster", "Santiago Calatrava"],
        "tacanOdgovor": "Gustave Eiffel"
    },
    {
        "pitanje": "Koja država je poznata po tradicionalnom samurajskom nasljeđu?",
        "odgovori": ["Japan", "Kina", "Južna Koreja", "Vijetnam"],
        "tacanOdgovor": "Japan"
    },
    {
        "pitanje": "Koja je najpoznatija planinska staza u SAD-u?",
        "odgovori": ["Appalachians", "Rocky Mountains", "Pacific Crest Trail", "Continental Divide Trail"],
        "tacanOdgovor": "Pacific Crest Trail"
    },
    {
        "pitanje": "Koji je poznati bosanskohercegovački glumac?",
        "odgovori": ["Senad Bašić", "Tarik Filipović", "Mirsad Tuka", "Sahradžije Garić"],
        "tacanOdgovor": "Senad Bašić"
    },
    {
        "pitanje": "Koja je najpoznatija destinacija za planinarenje u Alpima?",
        "odgovori": ["Chamonix", "Zermatt", "Innsbruck", "St. Moritz"],
        "tacanOdgovor": "Chamonix"
    },
    {
        "pitanje": "Koji je najpoznatiji muzej moderne umjetnosti u New Yorku?",
        "odgovori": ["MoMA", "Metropolitan Museum", "Guggenheim", "Whitney"],
        "tacanOdgovor": "MoMA"
    },
    {
        "pitanje": "Koji sport se igra s reketom i lopticama, popularan u Aziji?",
        "odgovori": ["Badminton", "Squash", "Tenis", "Stoni tenis"],
        "tacanOdgovor": "Badminton"
    },
    {
        "pitanje": "Koji je glavni grad Kanade?",
        "odgovori": ["Toronto", "Ottawa", "Vankuver", "Montreal"],
        "tacanOdgovor": "Ottawa"
    },
    {
        "pitanje": "Koja je najpoznatija slika Leonarda da Vincija?",
        "odgovori": ["Mona Liza", "Posljednja večera", "Vitruvijev čovjek", "Dama sa hermelinom"],
        "tacanOdgovor": "Mona Liza"
    },
    {
        "pitanje": "Koji se jezik primarno govori u Brazilu?",
        "odgovori": ["Portugalski", "Španski", "Francuski", "Engleski"],
        "tacanOdgovor": "Portugalski"
    },
    {
        "pitanje": "Koji je najpoznatiji umjetnički pokret 20. stoljeća?",
        "odgovori": ["Kubizam", "Impresionizam", "Renesansa", "Barok"],
        "tacanOdgovor": "Kubizam"
    },
    {
        "pitanje": "Koja poznata osoba je nositelj Nobelove nagrade za mir?",
        "odgovori": ["Malala Yousafzai", "Nelson Mandela", "Mahatma Gandhi", "Martin Luther King Jr."],
        "tacanOdgovor": "Nelson Mandela"
    },
    {
        "pitanje": "Koji je najpoznatiji glazbeni instrument u klasičnoj glazbi?",
        "odgovori": ["Violina", "Klavir", "Cimbalom", "Gitara"],
        "tacanOdgovor": "Klavir"
    },
    {
        "pitanje": "Koji je najpoznatiji član britanske kraljevske porodice?",
        "odgovori": ["Kraljica Elizabeta II", "Princ William", "Princ Charles", "Princ Harry"],
        "tacanOdgovor": "Kraljica Elizabeta II"
    },
    {
        "pitanje": "Koji je najpoznatiji matematičar iz antike?",
        "odgovori": ["Euklid", "Arhimed", "Pitagora", "Platon"],
        "tacanOdgovor": "Euklid"
    },
    {
        "pitanje": "Koji je najpoznatiji filozof iz stare Grčke?",
        "odgovori": ["Sokrat", "Platon", "Aristotel", "Diogen"],
        "tacanOdgovor": "Sokrat"
    },
    {
        "pitanje": "Koji je najpoznatiji glazbeni sastav 70-ih?",
        "odgovori": ["The Beatles", "Led Zeppelin", "Pink Floyd", "Queen"],
        "tacanOdgovor": "Pink Floyd"
    },
    {
        "pitanje": "Koji je najpoznatiji glazbeni festival u Evropi?",
        "odgovori": ["Glastonbury", "Roskilde", "Primavera Sound", "Sziget"],
        "tacanOdgovor": "Sziget"
    },
    {
        "pitanje": "Koji je najveći otok u Mediteranu?",
        "odgovori": ["Sicilija", "Sardinija", "Kibris", "Kreta"],
        "tacanOdgovor": "Sicilija"
    },
    {
        "pitanje": "Koja država je poznata po tradicionalnoj flamenko muzici?",
        "odgovori": ["Španija", "Portugal", "Italija", "Grčka"],
        "tacanOdgovor": "Španija"
    },
    {
        "pitanje": "Koji je glavni grad Španije?",
        "odgovori": ["Madrid", "Barcelona", "Valensija", "Sevilla"],
        "tacanOdgovor": "Madrid"
    },
    {
        "pitanje": "Koji poznati izumitelj je patentirao žarulju?",
        "odgovori": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
        "tacanOdgovor": "Thomas Edison"
    },
    {
        "pitanje": "Koja je najpoznatija berza na svijetu?",
        "odgovori": ["NYSE", "NASDAQ", "London Stock Exchange", "Tokyo Stock Exchange"],
        "tacanOdgovor": "NYSE"
    },
    {
        "pitanje": "Koja je najveća država u Aziji po površini?",
        "odgovori": ["Kina", "Indija", "Rusija", "Saudijska Arabija"],
        "tacanOdgovor": "Rusija"
    },
    {
        "pitanje": "Koji je najpoznatiji evropski kompozitor?",
        "odgovori": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
        "tacanOdgovor": "Wolfgang Amadeus Mozart"
    },
    {
        "pitanje": "Koji je najpoznatiji roman Viktora Igoa?",
        "odgovori": ["Les Misérables", "Notre-Dame de Paris", "The Hunchback of Notre-Dame", "L'Assommoir"],
        "tacanOdgovor": "Les Misérables"
    },
    {
        "pitanje": "Koji je poznati bosanski pisac?",
        "odgovori": ["Ivo Andrić", "Meša Selimović", "Aleksandar Hemon", "Mak Dizdar"],
        "tacanOdgovor": "Ivo Andrić"
    },
    {
        "pitanje": "Koja je najpoznatija svjetska trgovačka kuća?",
        "odgovori": ["Harrods", "Macy's", "Selfridges", "Galeries Lafayette"],
        "tacanOdgovor": "Harrods"
    },
    {
        "pitanje": "Koji poznati brend automobila proizvodi u Njemačkoj?",
        "odgovori": ["BMW", "Toyota", "Ford", "Chevrolet"],
        "tacanOdgovor": "BMW"
    },
    {
        "pitanje": "Koji je najpoznatiji automobil električne energije?",
        "odgovori": ["Tesla", "Nissan Leaf", "Chevrolet Bolt", "BMW i3"],
        "tacanOdgovor": "Tesla"
    },
    {
        "pitanje": "Koja je najpoznatija destinacija za zimske sportove?",
        "odgovori": ["Alpe", "Rocky Mountains", "Ande", "Himalaji"],
        "tacanOdgovor": "Alpe"
    },
    {
        "pitanje": "Koji je najpoznatiji naučni časopis?",
        "odgovori": ["Nature", "Science", "Cell", "PNAS"],
        "tacanOdgovor": "Nature"
    },
    {
        "pitanje": "Koja je najpoznatija formula u fizici?",
        "odgovori": ["E=mc^2", "F=ma", "V=IR", "P=IV"],
        "tacanOdgovor": "E=mc^2"
    },
    {
        "pitanje": "Koji se poznati model zrakoplova koristi u ratnom vazduhoplovstvu?",
        "odgovori": ["F-16", "MiG-29", "Su-27", "F-22"],
        "tacanOdgovor": "F-16"
    },
    {
        "pitanje": "Koji je najpoznatiji naučni eksperiment u fizici?",
        "odgovori": ["Dvostruki prorez", "Cern eksperiment", "Higgsov bozon", "Zlatna ploča"],
        "tacanOdgovor": "Dvostruki prorez"
    },
    {
        "pitanje": "Koji je najpoznatiji sportaš u istoriji olimpijskih igara?",
        "odgovori": ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Jesse Owens"],
        "tacanOdgovor": "Michael Phelps"
    },
    {
        "pitanje": "Koja zemlja je domaćin najpoznatijeg bejzbol turnira?",
        "odgovori": ["SAD", "Kuba", "Japan", "Dominikanska Republika"],
        "tacanOdgovor": "SAD"
    },
    {
        "pitanje": "Koji je najpoznatiji tradicionalni ples na Bliskom istoku?",
        "odgovori": ["Dabke", "Belly dance", "Samba", "Tango"],
        "tacanOdgovor": "Dabke"
    },
    {
        "pitanje": "Koji je najveći sisar na planeti?",
        "odgovori": ["Plavi kit", "Slon", "Gepard", "Nosorog"],
        "tacanOdgovor": "Plavi kit"
    },
    {
        "pitanje": "Koja je najpoznatija rijeka u Sjedinjenim Državama?",
        "odgovori": ["Mississippi", "Missouri", "Colorado", "Rio Grande"],
        "tacanOdgovor": "Mississippi"
    },
    {
        "pitanje": "Koja je najpoznatija piramida u Meksiku?",
        "odgovori": ["Piramida Sunca", "Piramida Mjeseca", "El Castillo", "Templo Mayor"],
        "tacanOdgovor": "Piramida Sunca"
    },
    {
        "pitanje": "Koji poznati izumitelj je poznat po radio tehnologiji?",
        "odgovori": ["Nikola Tesla", "Guglielmo Marconi", "Thomas Edison", "Alexander Graham Bell"],
        "tacanOdgovor": "Guglielmo Marconi"
    },
    {
        "pitanje": "Koja je najpoznatija vinska regija u Francuskoj?",
        "odgovori": ["Bordeaux", "Burgundija", "Champagne", "Côtes du Rhône"],
        "tacanOdgovor": "Bordeaux"
    },
    {
        "pitanje": "Koja je najpoznatija modna manifestacija?",
        "odgovori": ["Paris Fashion Week", "New York Fashion Week", "Milan Fashion Week", "London Fashion Week"],
        "tacanOdgovor": "Paris Fashion Week"
    },
    {
        "pitanje": "Koji je najpoznatiji evropski fudbalski klub?",
        "odgovori": ["Real Madrid", "FC Barcelona", "Manchester United", "Bayern München"],
        "tacanOdgovor": "FC Barcelona"
    },
    {
        "pitanje": "Koji poznati muzičar je poznat kao 'Kralj rock 'n' rolla'?",
        "odgovori": ["Elvis Presley", "Chuck Berry", "Little Richard", "Jerry Lee Lewis"],
        "tacanOdgovor": "Elvis Presley"
    },
    {
        "pitanje": "Koji je najpoznatiji film Quentina Tarantina?",
        "odgovori": ["Pulp Fiction", "Reservoir Dogs", "Kill Bill", "Inglourious Basterds"],
        "tacanOdgovor": "Pulp Fiction"
    },
    {
        "pitanje": "Koji se poznati astronom koristi teleskop za otkrivanje planeta?",
        "odgovori": ["Galileo Galilei", "Edwin Hubble", "Carl Sagan", "Neil deGrasse Tyson"],
        "tacanOdgovor": "Galileo Galilei"
    },
    {
        "pitanje": "Koja je najpoznatija biblioteka na svijetu?",
        "odgovori": ["Biblioteka Kongres", "Britanska knjižnica", "New York Public Library", "Biblioteka Alejandrija"],
        "tacanOdgovor": "Britanska knjižnica"
    },
    {
        "pitanje": "Koji je najpoznatiji glazbeni instrument Indije?",
        "odgovori": ["Sitar", "Tabla", "Sarod", "Veena"],
        "tacanOdgovor": "Sitar"
    },
    {
        "pitanje": "Koja je najpoznatija svjetska trgovačka marka sportske opreme?",
        "odgovori": ["Nike", "Adidas", "Puma", "Reebok"],
        "tacanOdgovor": "Nike"
    },
    {
        "pitanje": "Koji je najpoznatiji serijal knjiga za mlade?",
        "odgovori": ["Harry Potter", "Percy Jackson", "The Hunger Games", "Divergent"],
        "tacanOdgovor": "Harry Potter"
    },
    {
        "pitanje": "Koji je najpoznatiji filmski festival u SAD-u?",
        "odgovori": ["Sundance", "Cannes", "Tribeca", "Venice"],
        "tacanOdgovor": "Sundance"
    },
    {
        "pitanje": "Koji je najpoznatiji bejzbol igrač svih vremena?",
        "odgovori": ["Babe Ruth", "Jackie Robinson", "Willie Mays", "Lou Gehrig"],
        "tacanOdgovor": "Babe Ruth"
    },
    {
        "pitanje": "Koja je najpoznatija arheološka lokalitet u Peruu?",
        "odgovori": ["Machu Picchu", "Nazca Lines", "Sacsayhuamán", "Chan Chan"],
        "tacanOdgovor": "Machu Picchu"
    },
    {
        "pitanje": "Koji je najpoznatiji sportski događaj na svijetu?",
        "odgovori": ["FIFA Svjetsko prvenstvo", "Olimpijske igre", "Tour de France", "Super Bowl"],
        "tacanOdgovor": "Olimpijske igre"
    },
    {
        "pitanje": "Koji je najpoznatiji film Stevena Spielberga?",
        "odgovori": ["E.T.", "Indiana Jones", "Jurassic Park", "Schindler's List"],
        "tacanOdgovor": "E.T."
    },
    {
        "pitanje": "Koja je najpoznatija aplikacija za društvene mreže?",
        "odgovori": ["Facebook", "Instagram", "Twitter", "Snapchat"],
        "tacanOdgovor": "Facebook"
    },
    {
        "pitanje": "Koji je najpoznatiji brend luksuznih satova?",
        "odgovori": ["Rolex", "Omega", "Tag Heuer", "Patek Philippe"],
        "tacanOdgovor": "Rolex"
    },
    {
        "pitanje": "Koji je najpoznatiji restoran s Michelin zvjezdicama?",
        "odgovori": ["Noma", "El Celler de Can Roca", "Osteria Francescana", "The Fat Duck"],
        "tacanOdgovor": "Noma"
    },
    {
        "pitanje": "Koji je najpoznatiji pisac iz Španije?",
        "odgovori": ["Miguel de Cervantes", "Federico García Lorca", "Gabriel García Márquez", "Mario Vargas Llosa"],
        "tacanOdgovor": "Miguel de Cervantes"
    },
    {
        "pitanje": "Koji je najpoznatiji portretni slikar renesanse?",
        "odgovori": ["Leonardo da Vinci", "Michelangelo", "Raphael", "Titian"],
        "tacanOdgovor": "Leonardo da Vinci"
    },
    {
        "pitanje": "Koji je najpoznatiji brod iz doba otkrića?",
        "odgovori": ["Santa Maria", "Mayflower", "Titanic", "Endeavour"],
        "tacanOdgovor": "Santa Maria"
    },
    {
        "pitanje": "Koja je najpoznatija atrakcija u Parizu?",
        "odgovori": ["Eiffelov toranj", "Louvre", "Notre-Dame", "Arc de Triomphe"],
        "tacanOdgovor": "Eiffelov toranj"
    },
    {
        "pitanje": "Koja je najpoznatija katedrala u Španiji?",
        "odgovori": ["Sagrada Familia", "Seville Cathedral", "Toledo Cathedral", "Burgos Cathedral"],
        "tacanOdgovor": "Sagrada Familia"
    },
    {
        "pitanje": "Koja je najpoznatija pjesma grupe Queen?",
        "odgovori": ["Bohemian Rhapsody", "We Will Rock You", "Another One Bites the Dust", "Radio Ga Ga"],
        "tacanOdgovor": "Bohemian Rhapsody"
    },
    {
        "pitanje": "Koji je najpoznatiji slikarski stil Piet Mondriana?",
        "odgovori": ["Kubizam", "Neoplasticizam", "Impresionizam", "Ekspresionizam"],
        "tacanOdgovor": "Neoplasticizam"
    },
    {
        "pitanje": "Koji je najpoznatiji evropski fudbalski turnir?",
        "odgovori": ["UEFA Euro", "Champions League", "Europa League", "Copa del Rey"],
        "tacanOdgovor": "UEFA Euro"
    },
    {
        "pitanje": "Koji je najpoznatiji filmski režiser u Evropi?",
        "odgovori": ["Federico Fellini", "Ingmar Bergman", "François Truffaut", "Andrei Tarkovsky"],
        "tacanOdgovor": "Ingmar Bergman"
    },
    {
        "pitanje": "Koja je najpoznatija muzička nagrada u Americi?",
        "odgovori": ["Grammy", "MTV", "Billboard", "Academy Award"],
        "tacanOdgovor": "Grammy"
    },
    {
        "pitanje": "Koji je najpoznatiji dizajner modnih torbi?",
        "odgovori": ["Louis Vuitton", "Gucci", "Prada", "Chanel"],
        "tacanOdgovor": "Louis Vuitton"
    },
    {
        "pitanje": "Koji je najpoznatiji svjetski košarkaški tim?",
        "odgovori": ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Miami Heat"],
        "tacanOdgovor": "Los Angeles Lakers"
    },
    {
        "pitanje": "Koji je najpoznatiji roman britanskog autora J.K. Rowling?",
        "odgovori": ["Harry Potter i kamen mudraca", "Harry Potter i odaja tajni", "Harry Potter i vještičji prsten", "Harry Potter i zatočenik Azkabana"],
        "tacanOdgovor": "Harry Potter i kamen mudraca"
    },
    {
        "pitanje": "Koji je najpoznatiji glazbeni instrument Indonezije?",
        "odgovori": ["Gamelan", "Angklung", "Sasando", "Kecapi"],
        "tacanOdgovor": "Angklung"
    },
    {
        "pitanje": "Koja je najpoznatija etnička grupa u Indoneziji?",
        "odgovori": ["Javanci", "Balinežani", "Sundanesi", "Minangkabau"],
        "tacanOdgovor": "Javanci"
    },
    {
        "pitanje": "Koji je najpoznatiji festival u Meksiku?",
        "odgovori": ["Día de los Muertos", "Cinco de Mayo", "Las Posadas", "Feria de San Marcos"],
        "tacanOdgovor": "Día de los Muertos"
    },
    {
        "pitanje": "Koji je najpoznatiji sport u Kini?",
        "odgovori": ["Ping Pong", "Badminton", "Košarka", "Fudbal"],
        "tacanOdgovor": "Ping Pong"
    },
    {
        "pitanje": "Koji je najpoznatiji festival u Kini?",
        "odgovori": ["Kineska Nova godina", "Mid-Autumn Festival", "Dragon Boat Festival", "Qingming Festival"],
        "tacanOdgovor": "Kineska Nova godina"
    },
    {
        "pitanje": "Koja je najpoznatija svjetska korporacija za tehnologiju?",
        "odgovori": ["Apple", "Microsoft", "Google", "Amazon"],
        "tacanOdgovor": "Apple"
    },
    {
        "pitanje": "Koja je najpoznatija knjiga Stefana Zweiga?",
        "odgovori": ["Šahista", "Svijet u kojem živim", "Putnik bez mape", "Sedam dana u Minhenu"],
        "tacanOdgovor": "Šahista"
    },
    {
        "pitanje": "Koja je najpoznatija priča braće Grim?",
        "odgovori": ["Pepeljuga", "Crvenkapica", "Snežana", "Hansel i Gretel"],
        "tacanOdgovor": "Crvenkapica"
    },
    {
        "pitanje": "Koja je najpoznatija opera Giuseppe Verdi?",
        "odgovori": ["La Traviata", "Aida", "Rigoletto", "Otello"],
        "tacanOdgovor": "La Traviata"
    },
    {
        "pitanje": "Koji je najpoznatiji antički spomenik u Grčkoj?",
        "odgovori": ["Parthenon", "Akropola", "Stoa", "Agora"],
        "tacanOdgovor": "Parthenon"
    },
    {
        "pitanje": "Koji je najpoznatiji savremeni umjetnik?",
        "odgovori": ["Banksy", "Jeff Koons", "Damien Hirst", "Yayoi Kusama"],
        "tacanOdgovor": "Banksy"
    },
    {
        "pitanje": "Koja je najpoznatija turistička destinacija u Južnoj Africi?",
        "odgovori": ["Kapski Grad", "Johannesburg", "Durban", "Pretoria"],
        "tacanOdgovor": "Kapski Grad"
    },
    {
        "pitanje": "Koja je najpoznatija životinjska vrsta u Africi?",
        "odgovori": ["Slon", "Lav", "Žirafa", "Nosorog"],
        "tacanOdgovor": "Slon"
    },
    {
        "pitanje": "Koja je najpoznatija rijeka u Africi?",
        "odgovori": ["Nil", "Kongo", "Zambezi", "Niger"],
        "tacanOdgovor": "Nil"
    },
    {
        "pitanje": "Koji je najpoznatiji stadion na svijetu?",
        "odgovori": ["Camp Nou", "Wembley", "Maracanã", "Old Trafford"],
        "tacanOdgovor": "Camp Nou"
    },
    {
        "pitanje": "Koji je najpoznatiji muzejski kompleks u Londonu?",
        "odgovori": ["British Museum", "Tate Modern", "National Gallery", "Victoria and Albert Museum"],
        "tacanOdgovor": "British Museum"
    },
    {
        "pitanje": "Koja je najpoznatija metropola u SAD-u?",
        "odgovori": ["New York", "Los Angeles", "Chicago", "Houston"],
        "tacanOdgovor": "New York"
    },
    {
        "pitanje": "Koja je najpoznatija trgovačka ulica u New Yorku?",
        "odgovori": ["Fifth Avenue", "Madison Avenue", "Broadway", "Wall Street"],
        "tacanOdgovor": "Fifth Avenue"
    },
    {
        "pitanje": "Koja je najpoznatija univerzitetska institucija u Velikoj Britaniji?",
        "odgovori": ["University of Oxford", "University of Cambridge", "Imperial College London", "London School of Economics"],
        "tacanOdgovor": "University of Oxford"
    },
    {
        "pitanje": "Koji je najpoznatiji simpozij u tehnologiji?",
        "odgovori": ["CES", "MWC", "IFA", "Computex"],
        "tacanOdgovor": "CES"
    },
    {
        "pitanje": "Koji je najpoznatiji hrvatski glazbenik?",
        "odgovori": ["Oliver Dragojević", "Gibonni", "Tajči", "Severina"],
        "tacanOdgovor": "Oliver Dragojević"
    },
    {
        "pitanje": "Koja je najpoznatija destinacija za skijanje u Evropi?",
        "odgovori": ["Zermatt", "Chamonix", "St. Anton", "Cortina d'Ampezzo"],
        "tacanOdgovor": "St. Anton"
    },
    {
        "pitanje": "Koji je najpoznatiji festival u Njemačkoj?",
        "odgovori": ["Oktoberfest", "Berlinale", "Wacken Open Air", "Rock am Ring"],
        "tacanOdgovor": "Oktoberfest"
    },
    {
        "pitanje": "Koja je najpoznatija knjiga američkog pisca Ernesta Hemingwaya?",
        "odgovori": ["Starac i more", "Za kim zvoni zvono", "Adios, Amerika", "Sunce se rađa"],
        "tacanOdgovor": "Starac i more"
    },
    {
        "pitanje": "Koja je najpoznatija rijeka u Aziji?",
        "odgovori": ["Yangtze", "Ganges", "Mekong", "Indus"],
        "tacanOdgovor": "Yangtze"
    },
    {
        "pitanje": "Koja je najpoznatija planinska regija u SAD-u?",
        "odgovori": ["Rocky Mountains", "Appalachians", "Sierra Nevada", "Cascade Range"],
        "tacanOdgovor": "Rocky Mountains"
    },
    {
        "pitanje": "Koja je najpoznatija rimska arena?",
        "odgovori": ["Koloseum", "Circus Maximus", "Forum Romanum", "Palatine Hill"],
        "tacanOdgovor": "Koloseum"
    },
    {
        "pitanje": "Koji je najpoznatiji autor američke književnosti?",
        "odgovori": ["Ernest Hemingway", "Mark Twain", "F. Scott Fitzgerald", "John Steinbeck"],
        "tacanOdgovor": "Mark Twain"
    },
    {
        "pitanje": "Koji je najpoznatiji lik iz stripova DC Comicsa?",
        "odgovori": ["Batman", "Superman", "Wonder Woman", "Flash"],
        "tacanOdgovor": "Batman"
    },
    {
        "pitanje": "Koji je najpoznatiji lik iz stripova Marvela?",
        "odgovori": ["Spider-Man", "Iron Man", "Captain America", "Hulk"],
        "tacanOdgovor": "Spider-Man"
    },
    {
        "pitanje": "Koja je najpoznatija znamenitost u San Francisku?",
        "odgovori": ["Golden Gate Bridge", "Alcatraz", "Fisherman's Wharf", "Lombard Street"],
        "tacanOdgovor": "Golden Gate Bridge"
    },
    {
        "pitanje": "Koja je najpoznatija slastica u Belgiji?",
        "odgovori": ["Waffle", "Čokolada", "Bitterballen", "Moules-frites"],
        "tacanOdgovor": "Waffle"
    },
    {
        "pitanje": "Koji je najpoznatiji glazbeni festival u Americi?",
        "odgovori": ["Coachella", "Lollapalooza", "Bonnaroo", "South by Southwest"],
        "tacanOdgovor": "Coachella"
    },
    {
        "pitanje": "Koji je najpoznatiji film iz Holivuda?",
        "odgovori": ["Titanic", "Avatar", "Star Wars", "The Godfather"],
        "tacanOdgovor": "The Godfather"
    },
    {
        "pitanje": "Koji je najpoznatiji događaj u istoriji Drugog svjetskog rata?",
        "odgovori": ["Bitka za Staljingrad", "Napad na Pearl Harbor", "Normandijsko iskrcavanje", "Pad Berlina"],
        "tacanOdgovor": "Normandijsko iskrcavanje"
    },
    {
        "pitanje": "Koja rimska boginja ljubavi?",
        "odgovori": ["Venus", "Diana", "Minerva", "Juno"],
        "tacanOdgovor": "Venus"
    },
    {
        "pitanje": "Koja planeta je najveća?",
        "odgovori": ["Jupiter", "Saturn", "Uran", "Neptun"],
        "tacanOdgovor": "Jupiter"
    },
    {
        "pitanje": "Koji je najpoznatiji antički filozof?",
        "odgovori": ["Sokrat", "Platon", "Aristotel", "Epikur"],
        "tacanOdgovor": "Sokrat"
    },
    {
        "pitanje": "Koja je najpoznatija rečenica iz 'Hamleta'?",
        "odgovori": ["Biti ili ne biti", "Sve je dobro što se dobro završi", "Kralj je ubijen", "Pitanje života i smrti"],
        "tacanOdgovor": "Biti ili ne biti"
    },
    {
        "pitanje": "Koji je najpoznatiji evropski fudbalski turnir?",
        "odgovori": ["UEFA Euro", "Champions League", "Europa League", "Copa del Rey"],
        "tacanOdgovor": "UEFA Euro"
    },
    {
        "pitanje": "Koja je najpoznatija nacionalna himna u Evropi?",
        "odgovori": ["Bože pravde", "Lijepa naša domovino", "Deutschlandlied", "La Marseillaise"],
        "tacanOdgovor": "La Marseillaise"
    },
    {
        "pitanje": "Koja regija je najpoznatija po proizvodnji čaja?",
        "odgovori": ["Indija", "Kina", "Šri Lanka", "Kenija"],
        "tacanOdgovor": "Kina"
    },
    {
        "pitanje": "Koji je najpoznatiji naučni institut u SAD-u?",
        "odgovori": ["NASA", "MIT", "Caltech", "Harvard University"],
        "tacanOdgovor": "NASA"
    },
    {
        "pitanje": "Koja građevina dominira Dubaijem?",
        "odgovori": ["Burj Khalifa", "Burj Al Arab", "Dubai Mall", "Palm Jumeirah"],
        "tacanOdgovor": "Burj Khalifa"
    },
    {
        "pitanje": "Koja je najpoznatija stara trgovačka ruta?",
        "odgovori": ["Put svile", "Put začina", "Put zlata", "Put pamuka"],
        "tacanOdgovor": "Put svile"
    },
    {
        "pitanje": "Koji je najpoznatiji alat za navigaciju?",
        "odgovori": ["GPS", "Kompas", "Atlas", "Mape"],
        "tacanOdgovor": "GPS"
    },
    {
        "pitanje": "Koja je najpoznatija platforma za online učenje?",
        "odgovori": ["Coursera", "Udemy", "edX", "Khan Academy"],
        "tacanOdgovor": "Khan Academy"
    },
    {
        "pitanje": "Koji je najpoznatiji autor distopijskog romana?",
        "odgovori": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Suzanne Collins"],
        "tacanOdgovor": "George Orwell"
    },
    {
        "pitanje": "Koji je najpoznatiji jezik programiranja?",
        "odgovori": ["Python", "JavaScript", "Java", "C++"],
        "tacanOdgovor": "Python"
    },
    {
        "pitanje": "Koji je najpoznatiji alat za upravljanje projektima?",
        "odgovori": ["Trello", "Asana", "Jira", "Basecamp"],
        "tacanOdgovor": "Trello"
    },
    {
        "pitanje": "Koja je najpoznatija web stranica za video sadržaj?",
        "odgovori": ["YouTube", "Vimeo", "Dailymotion", "Netflix"],
        "tacanOdgovor": "YouTube"
    },
    {
        "pitanje": "Koji je najpoznatiji uređaj za e-čitanje?",
        "odgovori": ["Kindle", "Kobo", "Nook", "Sony Reader"],
        "tacanOdgovor": "Kindle"
    },
    {
        "pitanje": "Koja je najpoznatija platforma za mikrobilogovanje?",
        "odgovori": ["Twitter", "Tumblr", "Reddit", "Facebook"],
        "tacanOdgovor": "Twitter"
    },
    {
        "pitanje": "Koji je najpoznatiji brend sportske obuće?",
        "odgovori": ["Nike", "Adidas", "Puma", "Reebok"],
        "tacanOdgovor": "Nike"
    },
    {
        "pitanje": "Koja je najpoznatija društvena mreža za profesionalce?",
        "odgovori": ["LinkedIn", "Facebook", "Instagram", "Twitter"],
        "tacanOdgovor": "LinkedIn"
    },
    {
        "pitanje": "Koja je najpoznatija online platforma za prodaju?",
        "odgovori": ["Amazon", "eBay", "Etsy", "Alibaba"],
        "tacanOdgovor": "Amazon"
    },
    {
        "pitanje": "Koji je najpoznatiji jezik u svijetu?",
        "odgovori": ["Engleski", "Mandarinski", "Španski", "Hindi"],
        "tacanOdgovor": "Mandarinski"
    },
    {
        "pitanje": "Koji je najpoznatiji stil muzike iz 80-ih?",
        "odgovori": ["New Wave", "Rock", "Pop", "Heavy Metal"],
        "tacanOdgovor": "New Wave"
    },
    {
        "pitanje": "Koji je najpoznatiji ples iz 20-ih?",
        "odgovori": ["Charleston", "Swing", "Tango", "Samba"],
        "tacanOdgovor": "Charleston"
    },
    {
        "pitanje": "Koja je najpoznatija slika Edvarda Muncha?",
        "odgovori": ["Vrik", "Sunčana poljana", "Krik", "Mona Liza"],
        "tacanOdgovor": "Krik"
    },
    {
        "pitanje": "Koji je najpoznatiji hrvatski sportaš?",
        "odgovori": ["Luka Modrić", "Goran Ivanišević", "Janica Kostelić", "Dražen Petrović"],
        "tacanOdgovor": "Goran Ivanišević"
    },
    {
        "pitanje": "Koja je najpoznatija filmska manifestacija na Balkanu?",
        "odgovori": ["Sarajevo Film Festival", "Belgrade Film Festival", "Zagreb Film Festival", "Skopje Film Festival"],
        "tacanOdgovor": "Sarajevo Film Festival"
    },
    {
        "pitanje": "Koja je najpoznatija pjesma Dalijine?",
        "odgovori": ["Ti si mi u krvi", "Moj dilbere", "Stanica Podlugovi", "Ja te volim"],
        "tacanOdgovor": "Ti si mi u krvi"
    },
    {
        "pitanje": "Koji je najpoznatiji bosanski nacionalni park?",
        "odgovori": ["Una", "Sutjeska", "Plitvička jezera", "Kravica"],
        "tacanOdgovor": "Sutjeska"
    },
    {
        "pitanje": "Koja je najpoznatija tradicija u Bosni i Hercegovini?",
        "odgovori": ["Sevdalinka", "Kafana", "Ćevapi", "Narodna nošnja"],
        "tacanOdgovor": "Sevdalinka"
    }
]

module.exports = pitanja;