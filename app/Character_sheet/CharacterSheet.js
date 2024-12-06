import React, { useState } from 'react';
import AbilityScores from './AbilityScores';
import Proficiencies from './proficiencies';


console.log('AbilityScores:', AbilityScores);
console.log('Proficiencies:', Proficiencies);

const CharacterSheet = () => {
  const [level, setLevel] = useState(1);

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
      <AbilityScores />
      <Proficiencies level={level}/>
    </div>
  );
};

export default CharacterSheet;
