# Slagalica - Multiplayer Kviz Igra

## 📌 Opis Projekta
Slagalica je multiplayer kviz igra inspirisana popularnom TV emisijom, koja omogućava igračima da se takmiče u različitim igrama koristeći web i mobilnu aplikaciju. Aplikacija je razvijena koristeći **React (Vite) za frontend**, **Node.js i Express za backend**, te **WebSockets (Socket.io) za real-time komunikaciju**.

## 🎮 Modovi Igre
Igra se sastoji od više različitih igara koje testiraju znanje i logiku igrača:

1. **Moj Broj** - Igrači dobijaju niz brojeva i ciljnu vrijednost, te koriste osnovne matematičke operacije kako bi došli do ciljnog broja.
2. **Spojnice** - Spajanje parova između dvije liste povezanih pojmova.
3. **Asocijacije** - Igra u kojoj igrači pogađaju ključnu riječ otkrivajući povezane pojmove.
4. **Ko zna zna** - Kviz sa pitanjima i ponuđenim odgovorima.
5. **Slagalica** - Formiranje najduže moguće riječi koristeći ponuđena slova.
6. **Skocko** - Igrači pokušavaju pogoditi kombinaciju 4 znaka od 6 ponuđenih.

## 🚀 Tehnologije
**Frontend:**
- React (Vite)
- React Router
- TailwindCSS za stilizaciju
- Axios za komunikaciju sa backendom
- WebSockets (Socket.io) za real-time funkcionalnosti

**Backend:**
- Node.js
- Express.js
- MongoDB za skladištenje podataka
- Socket.io za real-time multiplayer
- Firebase Storage za pohranu videozapisa (opciono)

## 🔧 Instalacija i Pokretanje

### Backend
1. Kloniraj repozitorij:
   ```sh
   git clone https://github.com/korisnik/slagalica.git
   cd slagalica/backend
   ```
2. Instaliraj zavisnosti:
   ```sh
   npm install
   ```
3. Pokreni backend server:
   ```sh
   npm start
   ```

### Frontend
1. Navigiraj u `frontend` direktorij:
   ```sh
   cd ../frontend
   ```
2. Instaliraj zavisnosti:
   ```sh
   npm install
   ```
3. Pokreni razvojni server:
   ```sh
   npm run dev
   ```

### Mobilna Verzija (React Native) -- u izradi
1. Navigiraj u `mobile` direktorij:
   ```sh
   cd ../mobile
   ```
2. Instaliraj zavisnosti:
   ```sh
   npm install
   ```
3. Pokreni aplikaciju na emulatoru:
   ```sh
   npx expo start
   ```

## 📌 Kako Igrati?
1. Posjeti igru na webu
2. Kreiraj link igre i podijeli sa prijateljem.
3. Igra se sastoji iz 6 različitih rundi.
4. Pokušaj da osvojiš što više bodova i pobijediš!

## 📜 Licenca
Ovaj projekat je open-source i može se koristiti u edukativne svrhe. Za više informacija, pogledaj **LICENSE** fajl.

---

💡 **Autor:** Belmin Muratović  
📧 Kontakt: belci911mu@gmail.com

