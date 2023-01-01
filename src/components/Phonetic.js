import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic({ phonetic }) {
  if (phonetic) {
    const { text, audio } = phonetic;

    return (
      <div className="Phonetic">
        <a
          href={audio}
          target="_blank"
          rel="noopener noreferrer"
          title="Listen"
          className="d-flex align-items-center column-gap-2"
        >
          <FontAwesomeIcon icon={faVolumeHigh} />
          <h2>{text}</h2>
        </a>
      </div>
    );
  }

  return null;
}
