import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiStar, FiHeart, FiMapPin } from 'react-icons/fi';
import { useFavorites } from '../context/FavoritesContext';
import { FALLBACK_RESTAURANT_IMAGE } from '../data/mockData';
import './RestaurantCard.css';

export default function RestaurantCard({ restaurant }) {
  const { isFavoriteRestaurant, toggleFavoriteRestaurant } = useFavorites();
  const isFav = isFavoriteRestaurant(restaurant.id);
  const [imgError, setImgError] = useState(false);
  const imgSrc = imgError ? FALLBACK_RESTAURANT_IMAGE : restaurant.image;

  return (
    <div className="restaurant-card">
      <div className="restaurant-image-wrapper">
        <img
          src={imgSrc}
          alt={restaurant.name}
          className="restaurant-image"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        <button 
          className={`favorite-btn ${isFav ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            toggleFavoriteRestaurant(restaurant.id);
          }}
          aria-label="Toggle Favorite"
        >
          <FiHeart className={isFav ? 'filled' : ''} />
        </button>
        {restaurant.discount && <span className="discount-badge">{restaurant.discount}</span>}
        {!restaurant.isOpen && <div className="closed-overlay">Closed</div>}
      </div>
      
      <div className="restaurant-info">
        <div className="restaurant-header">
          <h3 className="restaurant-name">{restaurant.name}</h3>
          <span className="restaurant-rating">
            <FiStar className="star-icon" /> {restaurant.rating}
          </span>
        </div>
        
        <p className="restaurant-cuisine">{restaurant.cuisine}</p>

        <p className="restaurant-location">
          <FiMapPin className="location-icon" /> {restaurant.city}
        </p>
        
        <div className="restaurant-footer">
          <span className="delivery-time"><FiClock /> {restaurant.deliveryTime}</span>
          <span className="price-level">{restaurant.priceLevel}</span>
        </div>
      </div>
    </div>
  );
}
