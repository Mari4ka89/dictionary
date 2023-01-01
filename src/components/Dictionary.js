import { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Result from "./Result";

export default function Dictionary({ defaultKeyword }) {
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);

  function handleImages(response) {
    console.log(response);
  }

  function loadImages(keyword) {
    const apiKey = "563492ad6f91700001000001ca11a752a0ea4e56ae3e7e2cb5d96997";
    const apiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function handleResponse({ data }) {
    const entry = data[0];

    setDefinition(entry);
    loadImages(entry.word);
  }

  function search(keyword) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <SearchForm handleSearch={search} />
        <Result definition={definition} />
      </div>
    );
  } else {
    setLoaded(true);
    search(defaultKeyword);

    return "Loading!";
  }
}
