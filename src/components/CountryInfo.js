import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../util/api";

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const response = await fetch(`${apiURL}/name/${countryName}`);
        const data = await response.json();

        const filterData = data?.filter(function (el) {
          return el.name.common === `${countryName}`;
        });
        setCountry(filterData[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getCountryData();
  }, [countryName]);

  const prepareCurrencies = (currency) => {
    if (!currency) return;
    return Object.values(currency).map((curr) => curr.name);
  };

  return (
    <div className="px-32 py-6">
      <div>
        <Link to="/">
          <button className="mb-8 bg-white px-4 py-2 rounded-md text-blue-400 font-bold">
            Back
          </button>
        </Link>
      </div>
      <div>
        {loading && <h1>Loading...</h1>}
        {!loading && (
          <div className="flex gap-8">
            <div>
              <img
                src={country.flags.png}
                alt={country.name.common}
                width="640"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-8">{country.name.common}</h1>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span>
                    <span className="font-semibold text-xl">Native Name: </span>
                    {Object.values(country.name.nativeName)[0]?.common}
                  </span>
                  <span>
                    <span className="font-semibold text-xl">Population: </span>
                    {country.population}
                  </span>
                  <span>
                    <span className="font-semibold text-xl">Region: </span>
                    {country.region}
                  </span>
                  <span>
                    <span className="font-semibold text-xl">Sub Region: </span>
                    {country.subregion}
                  </span>
                  <span>
                    <span className="font-semibold text-xl">Capital: </span>
                    {country.capital[0]}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>
                    <span className="font-semibold text-xl">
                      Top Level Domain:{" "}
                    </span>
                    {country.tld[0]}
                  </span>
                  <span>
                    <span className="font-semibold text-xl">Currencies: </span>
                    {prepareCurrencies(country.currencies)}
                  </span>
                  <span>
                    <span className="font-semibold text-xl">Languages: </span>
                    {Object.values(country.languages) + ``}
                  </span>
                </div>
              </div>
              <div className="flex">
                <h1 className="font-semibold text-xl">Border Countries: </h1>
                <div>
                  {country.borders?.map((border) => (
                    <button className="p-1 bg-blue-400 text-white rounded">
                      {border}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
