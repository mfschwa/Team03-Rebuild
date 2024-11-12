import React, { useState } from 'react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    // Format the search query for the iTunes API
    const formattedQuery = encodeURIComponent(searchTerm);

    // Call the iTunes Search API
    const response = await fetch(
      `https://itunes.apple.com/search?term=${formattedQuery}&media=music`
    );

    if (response.ok) {
      const data = await response.json();
      setResults(data.results);
    } else {
      console.error('Error fetching data from iTunes API');
    }
  };

  return (
    <div>
      <h1>Catalog Page</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search iTunes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {results.map((item: any) => (
          <li key={item.trackId || item.collectionId}>
            <h3>{item.trackName || item.collectionName}</h3>
            <p>{item.artistName}</p>
            <img src={item.artworkUrl100} alt={item.trackName} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
