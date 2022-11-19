import React, { useState, useEffect } from "react";
import SearchCountry from "./SearchCountry";
import FilterCountry from "./FilterCountry";
import { apiURL } from "../util/api";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const response = await fetch(`${apiURL}/all`);
      const data = await response.json();

      const sortedData = data.sort(function (a, b) {
        return b.population - a.population;
      });

      setCountries(sortedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    console.log(`${apiURL}/name/${countryName}`);
    try {
      const response = await fetch(`${apiURL}/name/${countryName}`);
      if (!response.ok) throw new Error("Not found any country!");
      const data = await response.json();

      setCountries(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      let response;
      if (regionName === "all") {
        response = await fetch(`${apiURL}/all`);
        const data = await response.json();

        const sortedData = data.sort(function (a, b) {
          return b.population - a.population;
        });

        setCountries(sortedData);
      } else {
        response = await fetch(`${apiURL}/region/${regionName}`);
        const data = await response.json();

        setCountries(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="px-32 py-6">
      <div className="flex justify-between">
        <SearchCountry onSearch={getCountryByName} />
        <FilterCountry onFilter={getCountryByRegion} />
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-16">
        {loading && <h1>Loading...</h1>}
        {countries?.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
