import React from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
