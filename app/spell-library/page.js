"use client"

import { useEffect, useState } from "react";
import { getAllSpells } from "./api";
import Spell from "./spell";


export default function App() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const savedSpells = localStorage.getItem("spells");
    if (savedSpells) setSpells(JSON.parse(savedSpells));
    getAllSpells().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
    });
  }, []);

  return (
    <div className="font-serif text-center">
      {spells.length === 0 && <span className="loading">Loading...</span>}
      <ul className="spell-list">
        {spells.map((spell) => (
          <Spell key={spell.index} spell={spell} />
        ))}
      </ul>
    </div>
  );
}