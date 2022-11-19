import React from "react";

const FilterCountry = ({ onFilter }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onFilter(regionName);
  };

  return (
    <>
      <select
        onChange={selectHandler}
        className="bg-white text-gray-600 outline-none px-4 py-2 rounded-md"
      >
        <option value="all" selected>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
};

export default FilterCountry;
