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
    <div className="font-serif text-center 'flex columns-4 flex-wrap justify-center gap-4">
      {spells.length === 0 && <span className="loading">Loading...</span>}
      <ul>
        {spells.map((spell) => (
          <Spell key={spell.index} spell={spell}/>
        ))}
      </ul>
    </div>
  );
}