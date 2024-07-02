import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Item.css'; // Ensure you import your CSS file

const Item = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchItems = async () => {
      console.log("useEffect Item")
      try {
        
        const response = await axios.get('https://mocki.io/v1/912c35af-fe9c-4031-a630-de67d4fd3793');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);
   
  return (
    <div className="item-section-wrapper">
      <div className="item-section-top">
        <h1 className="primary-heading">Our Healthy Menu</h1>

      </div>
      <div className="item-section-bottom">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-description">{item.description}</p>
            <p className="item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
