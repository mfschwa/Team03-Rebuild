import React, { useState } from 'react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [mediaType, setMediaType] = useState('all');
  const [explicit, setExplicit] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    // Format the search query for the iTunes API
    const formattedQuery = encodeURIComponent(searchTerm);
    const mediaQuery = mediaType !== 'all' ? `&media=${mediaType}` : '';
    const explicitQuery = explicit ? '' : '&explicit=no';

    // Call the iTunes Search API with filters
    const response = await fetch(
      `https://itunes.apple.com/search?term=${formattedQuery}${mediaQuery}${explicitQuery}&limit=50`
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
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="music">Music</option>
          <option value="movie">Movies</option>
          <option value="podcast">Podcasts</option>
          <option value="audiobook">Audiobooks</option>
          <option value="ebook">eBooks</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={explicit}
            onChange={() => setExplicit(!explicit)}
          />
          Allow Explicit Content
        </label>

        <button type="submit">Search</button>
      </form>

      <div className="gallery">
        {results.map((item: any) => (
          <div key={item.trackId || item.collectionId} className="gallery-item">
            <h3>{item.trackName || item.collectionName}</h3>
            <p>{item.artistName}</p>
            <img src={item.artworkUrl100} alt={item.trackName || item.collectionName} />
            <p>
              {item.collectionPrice
                ? `Price: $${item.collectionPrice} | Points: ${Math.round(item.collectionPrice)}`
                : 'Price not available'}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .gallery-item {
          width: calc(20% - 16px); /* 5 items per row */
          text-align: center;
          padding: 8px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        @media (max-width: 768px) {
          .gallery-item {
            width: calc(50% - 16px); /* 2 items per row on smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Catalog;
