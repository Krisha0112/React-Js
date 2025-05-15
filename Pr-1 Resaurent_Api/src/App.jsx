import React, { useState, useEffect } from 'react';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [query, setQuery] = useState('pizza');

  useEffect(() => {
    const fetchData = async () => {

      
  const fetchFood = (searchItem) => {
    fetch('https://zomato-api.p.rapidapi.com/search')
      .then((data) => data.json())
      .then((res) => {
        const temp = res.items.map((item) => item.id.foodId);
        setRestaurants(temp);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
      });
  };
    };

    fetchData();
  }, [query]);

  
  const handleSearch = (e) => {
    e.preventDefault();
    fetchFood(searchItem); 
  };

  return (
    <div align="center">
      <h2>🍕 Restaurant Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for food or cuisine"
          style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
        />
      </form>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {restaurants.map((res, index) => {
          const restaurant = res.restaurant;
          return (
            <li key={index} style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.location?.address}</p>
              {restaurant.featured_image ? (
                <img
                  src={restaurant.featured_image}
                  alt={restaurant.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                />
              ) : (
                <div style={{ width: '100%', height: '200px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                  <span style={{ color: '#999' }}>No image available</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
