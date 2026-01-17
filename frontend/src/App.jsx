import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { io } from "socket.io-client";
import { GameContext } from "./context/GameContext";

const socket = io(import.meta.env.VITE_BACKEND_URL);

// ⚡ constants outside component (no re-alloc every render)
const LS_KEYS_TO_CLEAR = [
  "id",
  "enemyPlayer",
  "letters",
  "longestWord",
  "points",
  "skocko",
  "extendedDigits",
  "mainNumber",
  "randomDoubleDigit",
  "playedGames",
  "singleDigits",
];

const GAME_CARDS = [
  { t: "Slagalica", i: "🧩" },
  { t: "Moj broj", i: "🔢" },
  { t: "Kombinacije", i: "🎰" },
  { t: "Spojnice", i: "🔗" },
  { t: "Kviz", i: "❓" },
  { t: "Asocijacije", i: "🧠" },
];

const App = () => {
  const { setSocketId } = useContext(GameContext);

  const [roomName, setRoomName] = useState("");
  const [copied, setCopied] = useState(false);

  const copiedTimerRef = useRef(null);

  const gameUrl = useMemo(() => {
    return roomName ? `${window.location.origin}/game/${roomName}` : "";
  }, [roomName]);

  // ✅ clean localStorage once
  useEffect(() => {
    for (const k of LS_KEYS_TO_CLEAR) localStorage.removeItem(k);

    return () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    };
  }, []);

  // ✅ stable listener
  useEffect(() => {
    const onGameLinkCreated = (data) => {
      setRoomName(data.roomName);
      localStorage.setItem("id", data.id);
      setSocketId(data.id);
    };

    socket.on("gameLinkCreated", onGameLinkCreated);
    return () => socket.off("gameLinkCreated", onGameLinkCreated);
  }, [setSocketId]);

  


const createGame = () => {
  setCopied(false);
  socket.emit("createGameLink");
};

  const copyLink = useCallback(async () => {
    if (!gameUrl) return;

    try {
      await navigator.clipboard.writeText(gameUrl);
      setCopied(true);

      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // fallback (older browsers)
      try {
        const ta = document.createElement("textarea");
        ta.value = gameUrl;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);

        setCopied(true);
        if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
        copiedTimerRef.current = setTimeout(() => setCopied(false), 1500);
      } catch {
        alert("Ne mogu kopirati link na ovom browseru. Kopiraj ručno: " + gameUrl);
      }
    }
  }, [gameUrl]);

  const shareOnFacebook = useCallback(() => {
    if (!gameUrl) return;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(gameUrl)}`,
      "_blank"
    );
  }, [gameUrl]);

  const shareOnMessenger = useCallback(() => {
    if (!gameUrl) return;

    const mMe = `https://m.me/?link=${encodeURIComponent(gameUrl)}`;
    window.open(mMe, "_blank");
  }, [gameUrl]);

  return (
    <>
      {/* TOP BAR */}
      <div className="sticky top-0 z-30 bg-gradient-to-r from-sky-600 to-blue-700 shadow-2xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-widest uppercase">
            Slagalica
          </h1>
          <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs uppercase tracking-widest">
            🎮 Single & Multiplayer
          </div>
        </div>
      </div>

      {/* PAGE */}
      <div className="min-h-[85vh] px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: ABOUT */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-white/80 text-xs uppercase tracking-widest">
              ℹ️ O igri
            </div>

            <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-widest uppercase">
              Šest igara. Jedan duel.
            </h2>

            <p className="mt-4 leading-relaxed">
              Slagalica se sastoji od sekvence šest kratkih igara (Slagalica, Moj broj,
              Kombinacije, Spojnice, Kviz znanja i Asocijacije) u trajanju oko 10–12 minuta.
              Igrači koriste znanje i taktiku kako bi pobijedili protivnika u direktnom duelu.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {GAME_CARDS.map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl bg-black/25 border border-white/10 p-4 text-white shadow-inner"
                >
                  <div className="text-2xl">{x.i}</div>
                  <div className="mt-2 font-extrabold uppercase tracking-widest text-sm">
                    {x.t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-white/80 text-xs uppercase tracking-widest">
              🚀 Start
            </div>

            {/* SINGLE */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-6 shadow-inner">
              <h3 className="text-white text-xl font-extrabold tracking-widest uppercase">
                Singleplayer
              </h3>
              <p className="text-white/70 mt-2">
                Igraj sam i treniraj brzinu i taktiku.
              </p>

              <a
                href="/singleplayer"
                className="mt-5 inline-flex w-full justify-center py-4 rounded-full font-extrabold uppercase tracking-widest
                  bg-gradient-to-r from-emerald-500 to-green-700 text-white shadow-[0_0_35px_rgba(16,185,129,0.55)]
                  hover:scale-[1.02] active:scale-95 transition"
              >
                Započni igru
              </a>
            </div>

            {/* MULTI */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-6 shadow-inner">
              <h3 className="text-white text-xl font-extrabold tracking-widest uppercase">
                Multiplayer
              </h3>
              <p className="text-white/70 mt-2">
                Kreiraj link i pošalji prijatelju — igrajte 1v1.
              </p>

              <button
                onClick={createGame}
                className="mt-5 w-full py-4 rounded-full font-extrabold uppercase tracking-widest
                  bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow-xl
                  hover:scale-[1.02] active:scale-95 transition"
              >
                🔗 Kreiraj link
              </button>

              {/* LINK CARD */}
              <div className="mt-5 rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-white/80 text-xs uppercase tracking-widest">
                    Tvoj link
                  </p>
                  {roomName ? (
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-emerald-600 text-white">
                      Spreman
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white/10 text-white/70">
                      Nije kreiran
                    </span>
                  )}
                </div>

                <a
                  href={roomName ? `/game/${roomName}` : "#"}
                  className={`mt-2 block break-all font-mono text-sm sm:text-base
                    ${roomName ? "text-white underline underline-offset-4" : "text-white/40 cursor-not-allowed"}`}
                  onClick={(e) => !roomName && e.preventDefault()}
                >
                  {roomName ? gameUrl : "Klikni 'Kreiraj link' da dobiješ URL"}
                </a>

                {/* ACTION BUTTONS */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={copyLink}
                    disabled={!roomName}
                    className={`py-3 rounded-2xl font-extrabold uppercase tracking-widest transition shadow
                      ${roomName
                        ? "bg-gray-800/70 text-white hover:scale-[1.02] active:scale-95"
                        : "bg-gray-800/30 text-white/40 cursor-not-allowed"
                      }`}
                  >
                    {copied ? "✅ Kopirano" : "Kopiraj"}
                  </button>

                  <button
                    onClick={shareOnMessenger}
                    disabled={!roomName}
                    className={`py-3 rounded-2xl font-extrabold uppercase tracking-widest transition shadow
                      ${roomName
                        ? "bg-gradient-to-r from-fuchsia-600 to-pink-700 text-white hover:scale-[1.02] active:scale-95"
                        : "bg-white/10 text-white/40 cursor-not-allowed"
                      }`}
                  >
                    Messenger
                  </button>

                  <button
                    onClick={shareOnFacebook}
                    disabled={!roomName}
                    className={`py-3 rounded-2xl font-extrabold uppercase tracking-widest transition shadow
                      ${roomName
                        ? "bg-blue-600 text-white hover:scale-[1.02] active:scale-95"
                        : "bg-blue-600/30 text-white/40 cursor-not-allowed"
                      }`}
                  >
                    Facebook
                  </button>
                </div>

                <p className="mt-4 text-white/60 text-xs">
                  Messenger: klik na dugme otvara chat gdje samo zalijepiš i pošalješ link. Ako si na mobitelu, radi još brže.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
 