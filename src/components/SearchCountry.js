import React, { useState } from "react";

const SearchCountry = ({ onSearch }) => {
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(country);
    setCountry("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="outline-none px-4 py-2 rounded-md"
        type="text"
        placeholder="Search country..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    </form>
  );
};

export default SearchCountry;
