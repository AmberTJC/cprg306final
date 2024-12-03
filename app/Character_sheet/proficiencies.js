const Proficiencies = ({ level }) => {
  const calculateProficiencyBonus = (level) => Math.ceil(level / 4) + 1;

  return (
    <div>
      <h2>Proficiency</h2>
      <label>
        Level:
        <input type="number" value={level} readOnly />
      </label>
      <p>Proficiency Bonus: {calculateProficiencyBonus(level)}</p>
    </div>
  );
};

export default Proficiencies;
