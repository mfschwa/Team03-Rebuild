import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { DataStore } from '@aws-amplify/datastore';
import { CartItem } from '../models';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [mediaType, setMediaType] = useState('all');
  const [explicit, setExplicit] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = async () => {
      const cartItems = await DataStore.query(CartItem);
      setCart(cartItems);
    };
    loadCart();

    const subscription = DataStore.observe(CartItem).subscribe(() => loadCart());
    return () => subscription.unsubscribe();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    const formattedQuery = encodeURIComponent(searchTerm);
    const mediaQuery = mediaType !== 'all' ? `&media=${mediaType}` : '';
    const explicitQuery = explicit ? '' : '&explicit=no';

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${formattedQuery}${mediaQuery}${explicitQuery}&limit=50`
      );

      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      } else {
        console.error('Error fetching data from iTunes API');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const toggleCartItem = async (item: any) => {
    const isItemInCart = cart.some(cartItem => cartItem.trackId === item.trackId);

    if (isItemInCart) {
      const itemToDelete = cart.find(cartItem => cartItem.trackId === item.trackId);
      if (itemToDelete) {
        await DataStore.delete(CartItem, c => c.trackId('eq', item.trackId));
        setCart(cart.filter(cartItem => cartItem.trackId !== item.trackId));
      }
    } else {
      const newCartItem = new CartItem({
        trackId: item.trackId,
        name: item.trackName || item.collectionName,
        artist: item.artistName,
        price: item.collectionPrice,
        imageUrl: item.artworkUrl100,
      });
      await DataStore.save(newCartItem);
      setCart([...cart, newCartItem]);
    }
  };

  const isInCart = (item: any) => cart.some(cartItem => cartItem.trackId === item.trackId);

  const goToCheckout = () => navigate('/checkout');

  return (
    <div>
      <h1>Catalog Page</h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
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
        </div>
        <button onClick={goToCheckout} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaShoppingCart size={24} />
          <span>({cart.length})</span>
        </button>
      </form>
      <div className="gallery">
        {results.map((item: any) => (
          <div key={item.trackId || item.collectionId} className="gallery-item">
            <h3>{item.trackName || item.collectionName}</h3>
            <p>{item.artistName}</p>
            <img src={item.artworkUrl100} alt={item.trackName || item.collectionName} />
            <p>{item.collectionPrice ? `Price: $${item.collectionPrice} | Points: ${Math.round(item.collectionPrice)}` : 'Price not available'}</p>
            <button onClick={() => toggleCartItem(item)}>
              {isInCart(item) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
