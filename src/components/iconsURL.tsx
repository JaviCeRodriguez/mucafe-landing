import React from "react";
import Discord from "../assets/discord.png";
import Mu from "../assets/mu.jpg";

export const IconsURL: React.FC = () => {
  return (
    <div className="my-4 flex w-full items-center justify-center">
      <a
        className="mx-2 text-center md:mx-10"
        href="https://discord.gg/JZaruXcyEP"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Discord} className="h-24 w-24" alt="Discord" />
        <p>Discord</p>
      </a>
      <a
        className="mx-2 text-center md:mx-10"
        href="https://mu.cafe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Mu}
          className="h-24 w-24 rounded-full object-cover"
          alt="MuCafé Web"
        />
        <p>Website</p>
      </a>
    </div>
  );
};
