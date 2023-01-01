export default function Synonyms({ synonyms }) {
  if (synonyms && synonyms.length) {
    return (
      <div className="Synonyms">
        <strong>Similar:</strong>

        <ul>
          {synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }

  return null;
}
