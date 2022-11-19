import React from "react";

const Country = ({ country }) => {
  const {
    name: { common },
    flags: { svg },
    population,
    region,
    capital,
  } = country;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="w-64 h-44">
        <img src={svg} alt={common} className="object-cover h-44" />
      </div>
      <div className="px-4 py-5 pt-8">
        <h1 className="font-semibold text-2xl mb-2">{common}</h1>
        <div className="flex flex-col">
          {" "}
          <span>
            <span className="font-semibold">Population:</span> {population}
          </span>
          <span>
            <span className="font-semibold">Region:</span> {region}
          </span>
          <span>
            <span className="font-semibold">Capital:</span> {capital}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Country;
