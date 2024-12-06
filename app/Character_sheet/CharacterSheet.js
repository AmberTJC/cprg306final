import React, { useState } from 'react';
import AbilityScores from './AbilityScores';
import Proficiencies from './proficiencies';
import Equipment from './Equipment';


console.log('AbilityScores:', AbilityScores);
console.log('Proficiencies:', Proficiencies);

const CharacterSheet = () => {
  const [level, setLevel] = useState(1);

  const calculateProficiencyBonus = (level) => Math.ceil(level / 4) + 1;

  return (
    <div className=''>
      
      <label>
        Character Level:
        <input
          type="number"
          value={level}
          onChange={(e) => setLevel(parseInt(e.target.value) || 1)}
          min="1"
          max="20"
        />
      </label>
      <p>Proficiency Bonus: {calculateProficiencyBonus(level)}</p>
 
      <AbilityScores />
      <Equipment/>
      
      
    </div>
  );
};

export default CharacterSheet;
