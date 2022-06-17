import React from "react";
import { Commands } from "./components/commands";
import { IconsURL } from "./components/iconsURL";
import { InfoServer } from "./components/infoServer";

const App: React.FC = () => {
  return (
    <div className="flex max-h-screen  flex-col items-center justify-start overflow-y-scroll">
      <div className="max-w-5xl pb-20">
        <h1 className="mt-10 mb-24 w-full text-center text-4xl font-bold text-white underline underline-offset-8 sm:text-5xl md:text-6xl">
          &gt;&gt; MuCafé ☕ &lt;&lt;
        </h1>
        <div className="m-4 flex flex-col rounded-md border-4 border-yellow-600 bg-stone-800 bg-opacity-75 p-4 text-lg font-medium text-white">
          <p className="text-center">
            Servidor Nuevo de Mu 99B+DL Downgrade (con posibilidades de
            actualizaciones a Season 6)
          </p>
          <p>
            Servidores hosteados en Latinoamerica. Donde desde el Zen es
            importante. Posee sistema de banco de joyas y shop tanto por zen
            como por joyas, hasta por Wcoins (aún no activas)
          </p>
          <p>
            Registro por web (página aun en preparación). Por ahora solo para
            registro (ATENCION!! Resetear por comando /reset dentro del juego)
          </p>

          <IconsURL />

          <div className="flex flex-col lg:flex-row">
            <InfoServer />

            <Commands />
          </div>
        </div>
      </div>
      <footer className="mb-2 text-white">
        MuCafé &copy; {new Date().getFullYear()} -{" "}
        <a
          href="https://javo.dev.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-yellow-500"
        >
          Made by Javo 🧉
        </a>
      </footer>
    </div>
  );
};

export default App;
