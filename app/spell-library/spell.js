export default function Spell({ spell }) {
    return (
      <div >
        <ul>
      <li>
        <div className="my-6 justify-items-center text-center bg-amber-50 text-black w-1/5 border-solid border-amber-700 border-2 bg-gradient-to-r from-amber-50 to-amber-100 rounded"  >
        <hgroup >
          <h4><strong>{spell.name}</strong></h4>
          <small>
            {spell.level > 0 && `Level ${spell.level} `}
            {spell.school.name}
            {spell.level === 0 && " cantrip"}
          </small>
        </hgroup>
        <div>
          <p>
            <strong>Casting Time</strong>
            {spell.casting_time}
          </p>
          <p>
            <strong>Range</strong>
            {spell.range}
          </p>
          <p>
            <strong>Components</strong>
            {spell.components.join(", ")}
          </p>
          <p>
            <strong>Duration</strong>
            {spell.duration}
          </p>
          </div>
        </div>
      </li>
      </ul>
      </div>
    );
  }