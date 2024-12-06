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


  const [searchLevel, setSearchLevel] = useState('');

  
  const filteredSpells = spells.filter((spell) =>
    searchLevel === '' ? true : spell.level === parseInt(searchLevel)
  );


  return (

    <div>

<div >
      <h1 className="text-3xl">Spell List</h1>
      <label>
  Search by Level:
  <select className="text-black" value={searchLevel} onChange={(e) => setSearchLevel(e.target.value)}>
    <option value="">All Levels</option>
    <option value="1">Level 1</option>
    <option value="2">Level 2</option>
    <option value="3">Level 3</option>
    <option value="4">Level 4</option>
    <option value="5">Level 5</option>
    <option value="6">Level 6</option>
    <option value="7">Level 7</option>
    <option value="8">Level 8</option>
    <option value="9">Level 9</option>
  </select>
</label>
      <ul>
        {filteredSpells.length > 0 ? (
          filteredSpells.map((spell, index) => (
            <li key={index}>
              
              <Spell key={spell.index} spell={spell}/>
            </li>
          ))
        ) : (
          <li>No spells found for level {searchLevel}</li>
        )}
      </ul>
    </div>


   
    </div>
  );
}