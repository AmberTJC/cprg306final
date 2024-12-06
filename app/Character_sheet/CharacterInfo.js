import React, { useState } from 'react';

const CharacterInfo = () => {
  const [characterInfo, setCharacterInfo] = useState({
    name: '',
    race: '',
    class: '',
    alignment: '',
    background: '',
  });

  const handleInputChange = (field, value) => {
    setCharacterInfo({ ...characterInfo, [field]: value });
  };

  return (
    <div>
      <h2 className='text-2xl underline'>Character Information</h2>
      <div>
        <label className='text-xl'>
          Name:
          <input
            type="text"
            value={characterInfo.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Enter your character's name"
          />
        </label>
      </div>
      <div>
        <label>
          Race:
          <select
            value={characterInfo.race}
            onChange={(e) => handleInputChange('race', e.target.value)}
          >
            <option value="">Select Race</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Halfling">Halfling</option>
            <option value="Orc">Orc</option>
            <option value="Tiefling">Tiefling</option>
            
          </select>
        </label>
      </div>
      <div>
        <label>
          Class:
          <select
            value={characterInfo.class}
            onChange={(e) => handleInputChange('class', e.target.value)}
          >
            <option value="">Select Class</option>
            <option value="Fighter">Fighter</option>
            <option value="Wizard">Wizard</option>
            <option value="Rogue">Rogue</option>
            <option value="Cleric">Cleric</option>
            <option value="Bard">Bard</option>
            <option value="Paladin">Paladin</option>
            
          </select>
        </label>
      </div>
      <div>
        <label>
          Alignment:
          <select
            value={characterInfo.alignment}
            onChange={(e) => handleInputChange('alignment', e.target.value)}
          >
            <option value="">Select Alignment</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="True Neutral">True Neutral</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Background:
          <input className='size-fit'
            type="text"
            value={characterInfo.background}
            onChange={(e) => handleInputChange('background', e.target.value)}
            placeholder="Enter your character's background"
          />
        </label>
      </div>
    </div>
  );
};

export default CharacterInfo;

