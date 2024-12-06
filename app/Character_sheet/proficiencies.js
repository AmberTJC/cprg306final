const Proficiencies = ({ level }) => {
  const calculateProficiencyBonus = (level) => Math.ceil(level / 4) + 1;

  return (
    <div>
      <h2>Proficiency</h2>
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
    </div>
  );
};

export default Proficiencies;
