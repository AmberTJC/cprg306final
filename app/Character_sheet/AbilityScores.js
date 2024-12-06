import React, { useState } from 'react';

const AbilityScores = () => {
  const [scores, setScores] = useState({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const handleScoreChange = (ability, value) => {
    setScores({ ...scores, [ability]: parseInt(value) || 0 });
  };

  const calculateModifier = (score) => Math.floor((score - 10) / 2);

  return (
    <div>
      <h2 className = 'text-xl'>Ability Scores</h2>
      {Object.keys(scores).map((ability) => (
        <div key={ability} className=''>
          <label className=''>
            {ability.charAt(0).toUpperCase() + ability.slice(1)}:
            <input className='w-10'
              type="number"
              value={scores[ability]}
              onChange={(e) => handleScoreChange(ability, e.target.value)}
            />
          </label>
          <span>Modifier: {calculateModifier(scores[ability])}</span>
        </div>
      ))}
    </div>
  );
};

export default AbilityScores;

