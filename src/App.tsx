import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex max-h-screen flex-col items-center justify-start overflow-y-scroll">
      <h1 className="mt-10 mb-24 text-5xl font-bold text-white underline underline-offset-8">
        &gt;&gt; MuCafé ☕ &lt;&lt;
      </h1>
      <div className="m-4 flex flex-col rounded-md border-4 border-yellow-600 bg-stone-800 bg-opacity-75 p-4 text-lg font-medium text-white">
        <p className="text-center">
          Servidor Nuevo de Mu 99B+DL Downgrade (con posibilidades de
          actualizaciones a Season 6)
        </p>
        <p>
          Servidores hosteados en Latinoamerica. Donde desde el Zen es
          importante. Posee sistema de banco de joyas y shop tanto por zen como
          por joyas, hasta por Wcoins (aún no activas)
        </p>
        <p>
          Registro por web (página aun en preparación). Por ahora solo para
          registro (ATENCION!! Resetear por comando /reset dentro del juego)
        </p>

        <h2 className="mt-4">Sobre el server:</h2>
        <ul>
          <li>Exp: 250x</li>
          <li>Drop Items: 50x</li>
          <li>Drop Zen: 30x</li>
          <li>Mobs x Spot: 5</li>
          <li>Max stats: 32767</li>
          <li>Reset: 400</li>
          <li>Borra Stats: Si</li>
          <li>Puntos por Reset: 1300</li>
          <li>Costo de reset: 10.000.000 zen</li>
          <li>Bless bug: Off</li>
          <li>Shop de items: No</li>
          <li>Quest Marlon activada (Combo Bk)</li>
          <li>Sistema VIP (+exp+drop): Pronto!</li>
          <li>
            Posteo de items a la venta (presionando&nbsp;
            <p className=" inline-block rounded-md bg-slate-800 px-2 font-mono text-yellow-500">
              control + clic derecho
            </p>{" "}
            sobre el ítem a vender)
          </li>
        </ul>

        <h2 className="mt-4">Comandos disponibles:</h2>
        <ul>
          <li>Fuerza: /addfue</li>
          <li>Agilidad: /addagi</li>
          <li>Vitalidad: /addvit</li>
          <li>Energía: /addene</li>
          <li>Comando: /addcom</li>
          <li>Bar: /bar</li>
          <li>PK: /pk</li>
          <li>Mesaje (a todo el server) /post</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
