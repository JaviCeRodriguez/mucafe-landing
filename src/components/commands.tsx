import React from "react";

export const Commands: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mt-4">Comandos disponibles:</h2>
      <ul>
        <li>Fuerza: /addfue</li>
        <li>Agilidad: /addagi</li>
        <li>Vitalidad: /addvit</li>
        <li>Energía: /addene</li>
        <li>Comando: /addcom</li>
        <li>Bar: /bar</li>
        <li>PK: /pk</li>
        <li>Mensaje (a todo el server) /post</li>
        <li>Auto party: /re on /re auto</li>
      </ul>
    </div>
  );
};
