import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiSearch, FiFilter, FiChevronDown, FiClock, FiTruck, FiStar, FiTag, FiMapPin } from 'react-icons/fi';
import RestaurantCard from '../components/RestaurantCard';
import LocationPicker from '../components/LocationPicker';
import { useLocation } from '../context/LocationContext';
import { restaurants, categories, allFoods } from '../data/mockData';
import './RestaurantsPage.css';

const QUICK_FILTERS = [
  { key: 'openNow', label: 'Open Now', icon: FiClock },
  { key: 'freeDelivery', label: 'Free Delivery', icon: FiTruck },
  { key: 'topRated', label: 'Top Rated', icon: FiStar },
  { key: 'offers', label: 'Offers', icon: FiTag },
];

export default function RestaurantsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'All';
  const { selectedCity, setSelectedCity } = useLocation();
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('rating');
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    let result = [...restaurants];

    // Filter by selected delivery city
    if (selectedCity && selectedCity !== 'All Cities') {
      result = result.filter(r => r.city === selectedCity);
    }

    // Filter by Search Term (matches restaurant name, cuisine, or food items)
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      // Find restaurants where food matches
      const matchingFoodRestIds = new Set(
        allFoods.filter(f => f.name.toLowerCase().includes(lowerTerm)).map(f => f.restaurantId)
      );
      
      result = result.filter(r => 
        r.name.toLowerCase().includes(lowerTerm) || 
        r.cuisine.toLowerCase().includes(lowerTerm) ||
        matchingFoodRestIds.has(r.id)
      );
    }

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(r => r.cuisine.includes(activeCategory));
    }

    // Quick filters
    if (activeFilters.includes('openNow')) result = result.filter(r => r.isOpen);
    if (activeFilters.includes('freeDelivery')) result = result.filter(r => r.deliveryFee === 0);
    if (activeFilters.includes('topRated')) result = result.filter(r => r.rating >= 4.5);
    if (activeFilters.includes('offers')) result = result.filter(r => r.discount && r.discount !== 'No Discount');

    // Sorting implementation (O(n log n) average)
    result.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'ratingLow') return a.rating - b.rating;
      if (sortBy === 'deliveryFast') {
        const timeA = parseInt(a.deliveryTime);
        const timeB = parseInt(b.deliveryTime);
        return timeA - timeB;
      }
      if (sortBy === 'priceLow') return a.priceLevel.length - b.priceLevel.length;
      if (sortBy === 'priceHigh') return b.priceLevel.length - a.priceLevel.length;
      if (sortBy === 'alpha') return a.name.localeCompare(b.name);
      return 0;
    });

    setFilteredRestaurants(result);
  }, [searchTerm, activeCategory, sortBy, activeFilters, selectedCity]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const toggleFilter = (key) => {
    setActiveFilters(prev =>
      prev.includes(key) ? prev.filter(f => f !== key) : [...prev, key]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('All');
    setActiveFilters([]);
    setSelectedCity('All Cities');
    setSearchParams({});
  };

  return (
    <div className="restaurants-page container">
      <div className="page-header">
        <h1 className="section-title">All <span className="text-orange">Restaurants</span></h1>
        <p className="location-context-line">
          <FiMapPin className="location-context-icon" />
          Showing results in <strong>{selectedCity === 'All Cities' ? 'all cities' : selectedCity}</strong>
          <LocationPicker className="restaurants-page-location" />
        </p>
        
        <div className="controls-bar">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search restaurants or food..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="sort-box">
            <span className="sort-label">Sort by:</span>
            <div className="select-wrapper">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="rating">Highest Rating</option>
                <option value="ratingLow">Lowest Rating</option>
                <option value="deliveryFast">Fastest Delivery</option>
                <option value="priceLow">Price (Low to High)</option>
                <option value="priceHigh">Price (High to Low)</option>
                <option value="alpha">Alphabetical</option>
              </select>
              <FiChevronDown className="select-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="quick-filters">
        {QUICK_FILTERS.map(f => {
          const Icon = f.icon;
          return (
            <button
              key={f.key}
              className={`filter-chip ${activeFilters.includes(f.key) ? 'active' : ''}`}
              onClick={() => toggleFilter(f.key)}
            >
              <Icon className="filter-chip-icon" /> {f.label}
            </button>
          );
        })}
      </div>

      <div className="categories-filter">
        <button 
          className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="results-info">
        <p>
          Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
          {selectedCity !== 'All Cities' ? ` in ${selectedCity}` : ''}
        </p>
      </div>

      {filteredRestaurants.length > 0 ? (
        <div className="restaurant-grid">
          {filteredRestaurants.map(restaurant => (
            <div key={restaurant.id} className="fade-in-up">
              <Link to={`/restaurant/${restaurant.id}`} className="card-link">
                <RestaurantCard restaurant={restaurant} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <img src="https://illustrations.popsy.co/amber/falling-error-404.svg" alt="No results" className="no-results-img" />
          <h2>Oops! We couldn't find what you're looking for.</h2>
          <p>
            {selectedCity !== 'All Cities'
              ? `No restaurants match your filters in ${selectedCity} yet. Try another city or adjust your filters.`
              : "Try adjusting your search or filters to find a restaurant."}
          </p>
          <button className="btn-primary" onClick={clearFilters}>Clear Filters</button>
        </div>
      )}
    </div>
  );
}
