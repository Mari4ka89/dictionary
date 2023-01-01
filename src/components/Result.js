import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result({ definition }) {
  if (definition) {
    const { word, phonetics, meanings } = definition;

    return (
      <div className="Result">
        <section>
          <h1>{word}</h1>
          {phonetics.map(function (phonetic, index) {
            return <Phonetic phonetic={phonetic} key={index} />;
          })}
        </section>

        {meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  }

  return null;
}
