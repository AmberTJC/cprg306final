export default function Spell({ spell }) {
    return (
      <div >
      <li>
        <hgroup>
          <h4>{spell.name}</h4>
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
      </li>
      </div>
    );
  }