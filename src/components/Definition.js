import Synonyms from "./Synonyms";

export default function Definition({ definition }) {
  return (
    <div className="Definition">
      <p>{definition.definition}</p>
      <em>{definition.example}</em>
      <Synonyms synonyms={definition.synonyms} />
    </div>
  );
}
