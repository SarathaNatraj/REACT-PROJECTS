import { useState } from "react";
import countries from "../countries";
function CountrySearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h2> Country List</h2>

      <input
        type="text"
        placeholder="Search country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />

      <ul>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </ul>
    </div>
  );
}

export default CountrySearch;
