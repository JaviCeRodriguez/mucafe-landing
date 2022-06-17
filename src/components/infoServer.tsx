import React from "react";

export const InfoServer: React.FC = () => {
  return (
    <div className="flex max-w-lg flex-col">
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
          <p className="inline-block rounded-md bg-slate-800 px-2 font-mono text-yellow-500">
            control + clic derecho
          </p>{" "}
          sobre el ítem a vender)
        </li>
      </ul>
    </div>
  );
};
