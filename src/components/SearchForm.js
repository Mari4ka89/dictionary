import { useState } from "react";

export default function SearchForm({ handleSearch, defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword);

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(keyword);
  }

  function handleWordChange({ target: { value } }) {
    setKeyword(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter word"
        className="form-control form-control-lg"
        defaultValue={defaultKeyword}
        autoFocus={true}
        onChange={handleWordChange}
      />
    </form>
  );
}
