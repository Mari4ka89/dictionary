import Definition from "./Definition";

export default function Meaning({ meaning }) {
  if (meaning) {
    const { partOfSpeech, definitions } = meaning;

    return (
      <div className="Meaning">
        <h3>{partOfSpeech}</h3>
        {definitions.map((definition, index) => (
          <Definition definition={definition} key={index} />
        ))}
      </div>
    );
  }

  return null;
}
