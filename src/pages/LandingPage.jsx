import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import RestaurantCard from '../components/RestaurantCard';
import LocationPicker from '../components/LocationPicker';
import { useLocation } from '../context/LocationContext';
import { categories, categoryImages, restaurants } from '../data/mockData';
import './LandingPage.css';

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { selectedCity } = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const cityRestaurants = selectedCity === 'All Cities'
    ? restaurants
    : restaurants.filter(r => r.city === selectedCity);

  const featuredRestaurants = cityRestaurants.filter(r => r.rating >= 4.5).slice(0, 4);
  const topRated = [...cityRestaurants].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const fastDelivery = [...cityRestaurants].sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime)).slice(0, 4);
  const exclusiveDeals = cityRestaurants.filter(r => r.discount && r.discount !== 'No Discount').slice(4, 8);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content fade-in-up">
            <LocationPicker className="hero-location-picker" />
            <h1 className="hero-title">
              Taste the Difference,<br/>
              Taste the <span className="text-orange">Good Life</span>
            </h1>
            <p className="hero-subtitle">
              {selectedCity === 'All Cities'
                ? 'Discover the best food & drinks from top restaurants around you. Fast delivery, fresh food, and great taste.'
                : `Discover the best food & drinks from top restaurants in ${selectedCity}. Fast delivery, fresh food, and great taste.`}
            </p>
            
            <form className="hero-search" onSubmit={handleSearch}>
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search for restaurants, cuisines, or food..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn-primary">Search</button>
            </form>
          </div>
          
          <div className="hero-image-container fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="hero-bg-shape"></div>
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" 
              alt="Healthy Food Bowl" 
              className="hero-image"
            />
            <div className="floating-card floating-1">
              <span className="floating-icon">⭐</span>
              <div>
                <h4>Top Rated</h4>
                <p>4.9/5 Average</p>
              </div>
            </div>
            <div className="floating-card floating-2">
              <span className="floating-icon">🚀</span>
              <div>
                <h4>Fast Delivery</h4>
                <p>Under 30 mins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-section container">
        <div className="promo-banner">
          <div className="promo-content">
            <h2>Get <span className="highlight">50% OFF</span> on your first order!</h2>
            <p>Use code <strong>WELCOME50</strong> at checkout and enjoy delicious meals at half the price.</p>
            <Link to="/restaurants" className="btn-secondary promo-btn">Order Now</Link>
          </div>
          <div className="promo-image-wrapper">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" alt="Delicious Burger" className="promo-image" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section container">
        <div className="section-header">
          <h2 className="section-title">Explore <span className="text-orange">Categories</span></h2>
        </div>
        <div className="categories-scroll">
          {categories.map((category, index) => (
            <Link to={`/restaurants?category=${category}`} key={index} className="category-item">
              <div className="category-img-wrapper">
                <img 
                  src={categoryImages[category]} 
                  alt={category} 
                  loading="lazy"
                />
              </div>
              <h3>{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Restaurants */}
      {cityRestaurants.length === 0 ? (
        <section className="featured-section container">
          <div className="no-city-results">
            <h2>No restaurants in {selectedCity} yet</h2>
            <p>Try switching to a different city to see what's available.</p>
          </div>
        </section>
      ) : (
      <section className="featured-section container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="text-orange">Restaurants</span>{selectedCity !== 'All Cities' ? ` in ${selectedCity}` : ''}</h2>
          <Link to="/restaurants" className="view-all-link">View All <FiArrowRight /></Link>
        </div>
        
        <div className="restaurant-grid">
          {featuredRestaurants.map(restaurant => (
            <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} className="card-link">
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      </section>
      )}

      {/* Top Rated */}
      {cityRestaurants.length > 0 && (
      <section className="featured-section container">
        <div className="section-header">
          <h2 className="section-title">Top Rated <span className="text-orange">Near You</span></h2>
        </div>
        <div className="restaurant-grid">
          {topRated.map(restaurant => (
            <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} className="card-link">
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      </section>
      )}

      {/* Fast Delivery */}
      {cityRestaurants.length > 0 && (
      <section className="featured-section container">
        <div className="section-header">
          <h2 className="section-title">Fast <span className="text-orange">Delivery</span></h2>
        </div>
        <div className="restaurant-grid">
          {fastDelivery.map(restaurant => (
            <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} className="card-link">
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      </section>
      )}

      {/* Exclusive Deals */}
      {exclusiveDeals.length > 0 && (
        <section className="featured-section container">
          <div className="section-header">
            <h2 className="section-title">Exclusive <span className="text-orange">Deals</span></h2>
          </div>
          <div className="restaurant-grid">
            {exclusiveDeals.map(restaurant => (
              <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} className="card-link">
                <RestaurantCard restaurant={restaurant} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
