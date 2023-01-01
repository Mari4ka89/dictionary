export default function Result({ definition }) {
  return definition ? (
    <section>
      <h1>{definition.word}</h1>
    </section>
  ) : null;
}
