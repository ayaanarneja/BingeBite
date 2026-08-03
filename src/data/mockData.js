export const categories = [
  'Pizza', 'Burger', 'Salad', 'Biryani', 'Chinese', 'Drinks', 'Desserts',
  'Pasta', 'Healthy Food', 'Seafood', 'Italian', 'Mexican', 'Fast Food', 'Indian',
]

export const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata']

export const categoryImages = {
  Pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80',
  Burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80',
  Salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80',
  Biryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80',
  Chinese: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&q=80',
  Drinks: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300&q=80',
  Desserts: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&q=80',
  Pasta: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&q=80',
  'Healthy Food': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&q=80',
  Seafood: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=300&q=80',
  Italian: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&q=80',
  Mexican: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80',
  'Fast Food': 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=300&q=80',
  Indian: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=80',
}

export const FALLBACK_FOOD_IMAGE =
  'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&q=80'
export const FALLBACK_RESTAURANT_IMAGE =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'

// A distinct, non-overlapping unsplash photo id per dish name so no two menu items
// (even across restaurants) render the same picture.
const dishImageIds = {
  // Pizza
  'Margherita Pizza': '1574071318508-1cdbab80d002',
  'Pepperoni Pizza': '1628840042765-356cda07504e',
  'BBQ Chicken Pizza': '1594007654729-407eedc4be65',
  'Veggie Supreme': '1511689660979-10d2b1aada49',
  'Cheese Burst Pizza': '1548369937-47519962c11a',
  'Mushroom Truffle Pizza': '1601924582970-9238bcb495d9',
  'Hawaiian Pizza': '1594179047519-f347310d3322',
  'Paneer Tikka Pizza': '1565299624946-b28f40a0ae38',
  // Burger
  'Classic Cheeseburger': '1568901346375-23c9450c58cd',
  'Double Patty Burger': '1553979459-d2229ba7433b',
  'Chicken Zinger': '1606755962773-d324e0a13086',
  'Veggie Delight Burger': '1520072959219-c595dc870360',
  'Spicy Mexican Burger': '1550547660-d9450f859349',
  'Mushroom Swiss Burger': '1571091718767-18b5b1457add',
  'BBQ Bacon Burger': '1586190848861-99aa4a171e90',
  'Crispy Fish Burger': '1550317138-10000687a72b',
  // Indian
  'Chicken Biryani': '1563379091339-03b21ab4a4f8',
  'Paneer Butter Masala': '1631452180519-c014fe946bc7',
  'Mutton Rogan Josh': '1545247181-516773cae754',
  'Dal Makhani': '1626132647523-66f5bf380027',
  'Butter Chicken': '1588166524941-3bf61a9c41db',
  'Tandoori Roti': '1601050690597-df0568f70950',
  'Garlic Naan': '1626777553635-be3a68f9ba46',
  'Aloo Gobi': '1631292784640-2b24be784d5d',
  'Palak Paneer': '1601050690117-94f5f6fa8ab6',
  'Gulab Jamun': '1601303516361-e00c95e5c2f5',
  // Chinese
  'Hakka Noodles': '1585032226651-759b368d7246',
  'Manchow Soup': '1547592166-23ac45744acd',
  'Chilli Chicken': '1626200419199-391ae4be7a41',
  'Veg Spring Rolls': '1548507200-32aa9c5e5e28',
  'Fried Rice': '1603133872878-684f208fb84b',
  'Kung Pao Chicken': '1525755662778-989d0524087e',
  'Dim Sums': '1496116218417-1a781b1c416c',
  'Sweet and Sour Pork': '1617093727343-374698b1b08d',
  'Szechuan Noodles': '1552611052-33e04de081de',
  // Desserts
  'Chocolate Lava Cake': '1624353365286-3f8d62daad51',
  Cheesecake: '1533134242443-d4fd215305ad',
  Tiramisu: '1571877227200-a0d98ea607e9',
  'Vanilla Ice Cream': '1563805042-7684c8a9e9cb',
  'Brownie with Ice Cream': '1606313564200-e75d5e30476c',
  'Red Velvet Cake': '1586985289906-406988974504',
  Macarons: '1569864358642-9d1684040f43',
  'Fruit Tart': '1488477304112-4944851de03d',
  // Healthy
  'Quinoa Salad': '1512621776951-a57141f2eefd',
  'Grilled Chicken Breast': '1532550907401-a500c9a57435',
  'Greek Salad': '1540420773420-3366772f4999',
  'Avocado Toast': '1584365685547-9a5fb6f3a70c',
  'Acai Bowl': '1490474418585-ba9bad8fd0ea',
  'Kale Smoothie': '1610970881699-44a5587cabec',
  Oatmeal: '1517673132405-a56a62b18caf',
  'Fruit Salad': '1490645935967-10de6ba17061',
  'Steamed Veggies': '1540189549336-e6e99c3679fe',
  // Italian
  'Spaghetti Carbonara': '1612874742237-6526221588e3',
  'Fettuccine Alfredo': '1645112411341-6c4fd023714a',
  Lasagna: '1619895092538-128341789043',
  'Pesto Pasta': '1473093295043-cdd812d0e601',
  Risotto: '1476124369491-e7addf5db371',
  'Garlic Bread': '1619535212883-8c8ea4c98d5e',
  Bruschetta: '1572695157366-5e585ab2b69f',
  Ravioli: '1587740908075-9e245311f9c2',
  // Mexican
  Tacos: '1551504734-5ee1c4a1479b',
  Burritos: '1626700051175-6818013e1d4f',
  Quesadillas: '1618040996337-56904b7be47a',
  Nachos: '1582169296194-e4d644c48063',
  Enchiladas: '1584208632869-05fa2b2a5934',
  Fajitas: '1615870216519-2f9fa575fa5c',
  Churros: '1624471397144-1c1c02b28de1',
  Guacamole: '1600335895229-6e75511892c8',
  // Seafood
  'Grilled Salmon': '1467003909585-2f8a72700288',
  'Fish and Chips': '1579208030886-b937da0925dc',
  'Shrimp Scampi': '1633504581786-316c8002b1b9',
  'Lobster Roll': '1611599538835-e2b8b8b1c8fb',
  'Crab Cakes': '1615141982883-c7da0e698d5c',
  Oysters: '1606850780554-b55ea4dd0b70',
  Calamari: '1625944230945-1b7dd3b949ab',
  'Clam Chowder': '1547592180-85f173990554',
}

const foodImages = {
  Pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80',
  Burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
  Indian: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80',
  Chinese: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80',
  Desserts: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80',
  Healthy: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
  Italian: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80',
  Mexican: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',
  Seafood: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=500&q=80',
}

function imageForDish(name, categoryKey) {
  const id = dishImageIds[name]
  if (id) return `https://images.unsplash.com/photo-${id}?w=500&q=80`
  return foodImages[categoryKey] || foodImages.Burger
}

// Helper to generate food items
const generateFoodItems = (restaurantId, cuisine) => {
  const foodNames = {
    Pizza: ['Margherita Pizza', 'Pepperoni Pizza', 'BBQ Chicken Pizza', 'Veggie Supreme', 'Cheese Burst Pizza', 'Mushroom Truffle Pizza', 'Hawaiian Pizza', 'Paneer Tikka Pizza'],
    Burger: ['Classic Cheeseburger', 'Double Patty Burger', 'Chicken Zinger', 'Veggie Delight Burger', 'Spicy Mexican Burger', 'Mushroom Swiss Burger', 'BBQ Bacon Burger', 'Crispy Fish Burger'],
    Indian: ['Chicken Biryani', 'Paneer Butter Masala', 'Mutton Rogan Josh', 'Dal Makhani', 'Butter Chicken', 'Tandoori Roti', 'Garlic Naan', 'Aloo Gobi', 'Palak Paneer', 'Gulab Jamun'],
    Chinese: ['Hakka Noodles', 'Manchow Soup', 'Chilli Chicken', 'Veg Spring Rolls', 'Fried Rice', 'Kung Pao Chicken', 'Dim Sums', 'Sweet and Sour Pork', 'Szechuan Noodles'],
    Desserts: ['Chocolate Lava Cake', 'Cheesecake', 'Tiramisu', 'Vanilla Ice Cream', 'Brownie with Ice Cream', 'Red Velvet Cake', 'Macarons', 'Fruit Tart'],
    Healthy: ['Quinoa Salad', 'Grilled Chicken Breast', 'Greek Salad', 'Avocado Toast', 'Acai Bowl', 'Kale Smoothie', 'Oatmeal', 'Fruit Salad', 'Steamed Veggies'],
    Italian: ['Spaghetti Carbonara', 'Fettuccine Alfredo', 'Lasagna', 'Pesto Pasta', 'Risotto', 'Garlic Bread', 'Bruschetta', 'Ravioli'],
    Mexican: ['Tacos', 'Burritos', 'Quesadillas', 'Nachos', 'Enchiladas', 'Fajitas', 'Churros', 'Guacamole'],
    Seafood: ['Grilled Salmon', 'Fish and Chips', 'Shrimp Scampi', 'Lobster Roll', 'Crab Cakes', 'Oysters', 'Calamari', 'Clam Chowder'],
  }

  const getCategoryData = () => {
    for (const key of Object.keys(foodNames)) {
      if (cuisine.toLowerCase().includes(key.toLowerCase())) return { key, names: foodNames[key] }
    }
    return { key: 'Burger', names: foodNames.Burger } // fallback
  }

  const { key, names } = getCategoryData()

  return names.map((name, index) => ({
    id: `${restaurantId}-f${index + 1}`,
    restaurantId,
    name,
    image: imageForDish(name, key),
    description: `Delicious ${name} prepared with fresh ingredients and authentic recipe.`,
    category: cuisine,
    price: Math.floor(Math.random() * 400) + 100,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1), // 3.5 to 5.0
    calories: Math.floor(Math.random() * 500) + 200,
    isVeg: !name.toLowerCase().includes('chicken') && !name.toLowerCase().includes('mutton') && !name.toLowerCase().includes('fish') && !name.toLowerCase().includes('pork') && !name.toLowerCase().includes('bacon') && !name.toLowerCase().includes('salmon') && !name.toLowerCase().includes('shrimp') && !name.toLowerCase().includes('lobster') && !name.toLowerCase().includes('crab') && !name.toLowerCase().includes('oyster') && !name.toLowerCase().includes('clam') && !name.toLowerCase().includes('calamari'),
    ingredients: ['Fresh Ingredients', 'Secret Spices', 'Love'],
  }))
}

// Every restaurant gets its own unique cover photo (no repeats across the list).
export const restaurants = [
  { id: 'r1', name: 'Pizza Paradise', cuisine: 'Pizza, Fast Food', rating: 4.5, deliveryTime: '15-35 min', address: '11 Main St, Downtown', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: 'Free Delivery', deliveryFee: 30, isOpen: true },
  { id: 'r2', name: 'Mamma Mia Pizzeria', cuisine: 'Pizza, Italian', rating: 3.9, deliveryTime: '40-60 min', address: '12 Oak Avenue, City Center', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 0, isOpen: false },
  { id: 'r3', name: 'Burger Haven', cuisine: 'Burger, Fast Food', rating: 3.9, deliveryTime: '20-40 min', address: '13 Spice Lane, Westside', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', priceLevel: '₹', openingHours: '10:00 AM - 11:00 PM', discount: 'Free Garlic Bread', deliveryFee: 0, isOpen: true },
  { id: 'r4', name: 'Smash Burgers', cuisine: 'Burger, Fast Food', rating: 4.6, deliveryTime: '30-40 min', address: '14 Lotus Road, Old Town', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', priceLevel: '₹₹', openingHours: '11:00 AM - 10:00 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 50, isOpen: true },
  { id: 'r5', name: 'Spice Route Indian', cuisine: 'Indian, Biryani', rating: 3.8, deliveryTime: '20-40 min', address: '15 Sugar Street, Riverside', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 10:00 PM', discount: 'No Discount', deliveryFee: 40, isOpen: true },
  { id: 'r6', name: 'Royal Indian Fare', cuisine: 'Indian', rating: 4.9, deliveryTime: '25-35 min', address: '16 Fit Avenue, Uptown', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80', priceLevel: '₹₹₹', openingHours: '09:00 AM - 09:00 PM', discount: '15% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r7', name: 'Biryani Blues', cuisine: 'Indian, Biryani', rating: 4.2, deliveryTime: '25-35 min', address: '17 Olive Way, Market District', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80', priceLevel: '₹₹', openingHours: '09:00 AM - 09:00 PM', discount: 'Free Garlic Bread', deliveryFee: 50, isOpen: true },
  { id: 'r8', name: 'Dragon Wok', cuisine: 'Chinese, Asian', rating: 4.2, deliveryTime: '35-50 min', address: '18 Royal Road, Tech Park', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 35, isOpen: true },
  { id: 'r9', name: 'Sweet Tooth Bakery', cuisine: 'Desserts, Bakery', rating: 3.9, deliveryTime: '20-35 min', address: '19 Salsa Street, Lakeview', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 12:00 AM', discount: 'Free Delivery', deliveryFee: 0, isOpen: false },
  { id: 'r10', name: 'Green Bowl', cuisine: 'Healthy, Salad', rating: 4.1, deliveryTime: '40-55 min', address: '20 Pier Road, Central Plaza', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 10:00 PM', discount: 'No Discount', deliveryFee: 20, isOpen: true },
  { id: 'r11', name: 'Pasta House', cuisine: 'Italian, Pasta', rating: 4.1, deliveryTime: '40-60 min', address: '21 Baker Street, Garden Road', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80', priceLevel: '₹₹', openingHours: '08:00 AM - 08:00 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 0, isOpen: true },
  { id: 'r12', name: 'Taco Fiesta', cuisine: 'Mexican, Fast Food', rating: 4.6, deliveryTime: '20-35 min', address: '22 Chopstick Alley, Station Road', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', priceLevel: '₹', openingHours: '08:00 AM - 08:00 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 40, isOpen: true },
  { id: 'r13', name: 'Oceanic Seafood', cuisine: 'Seafood, Healthy', rating: 4.0, deliveryTime: '25-35 min', address: '23 Palace View, Hill View', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=800&q=80', priceLevel: '₹₹₹₹', openingHours: '12:00 PM - 12:00 AM', discount: '20% OFF', deliveryFee: 25, isOpen: true },
  { id: 'r14', name: 'Sushi Zen', cuisine: 'Seafood, Healthy', rating: 4.1, deliveryTime: '20-40 min', address: '24 Meat Lane, Sector 12', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', priceLevel: '₹₹₹', openingHours: '08:00 AM - 08:00 PM', discount: 'Free Delivery', deliveryFee: 35, isOpen: true },
  { id: 'r15', name: 'Pizza Paradise', cuisine: 'Pizza, Fast Food', rating: 4.8, deliveryTime: '40-55 min', address: '25 Main St, City Center', city: 'Delhi', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 20, isOpen: true },
  { id: 'r16', name: 'Mamma Mia Pizzeria', cuisine: 'Pizza, Italian', rating: 4.4, deliveryTime: '25-45 min', address: '26 Oak Avenue, Westside', city: 'Delhi', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 40, isOpen: true },
  { id: 'r17', name: 'Burger Haven', cuisine: 'Burger, Fast Food', rating: 4.9, deliveryTime: '20-40 min', address: '27 Spice Lane, Old Town', city: 'Delhi', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', priceLevel: '₹', openingHours: '12:00 PM - 12:00 AM', discount: '10% OFF', deliveryFee: 50, isOpen: false },
  { id: 'r18', name: 'Smash Burgers', cuisine: 'Burger, Fast Food', rating: 3.9, deliveryTime: '40-50 min', address: '28 Lotus Road, Riverside', city: 'Delhi', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', priceLevel: '₹₹', openingHours: '09:00 AM - 09:00 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 40, isOpen: true },
  { id: 'r19', name: 'Spice Route Indian', cuisine: 'Indian, Biryani', rating: 4.5, deliveryTime: '30-50 min', address: '29 Sugar Street, Uptown', city: 'Delhi', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 12:00 AM', discount: 'Free Garlic Bread', deliveryFee: 30, isOpen: true },
  { id: 'r20', name: 'Royal Indian Fare', cuisine: 'Indian', rating: 4.5, deliveryTime: '15-35 min', address: '30 Fit Avenue, Market District', city: 'Delhi', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80', priceLevel: '₹₹₹', openingHours: '09:00 AM - 09:00 PM', discount: 'No Discount', deliveryFee: 30, isOpen: true },
  { id: 'r21', name: 'Biryani Blues', cuisine: 'Indian, Biryani', rating: 4.0, deliveryTime: '15-35 min', address: '31 Olive Way, Tech Park', city: 'Delhi', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 12:00 AM', discount: 'Free Garlic Bread', deliveryFee: 30, isOpen: true },
  { id: 'r22', name: 'Dragon Wok', cuisine: 'Chinese, Asian', rating: 4.8, deliveryTime: '40-55 min', address: '32 Royal Road, Lakeview', city: 'Delhi', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', priceLevel: '₹₹', openingHours: '11:00 AM - 10:00 PM', discount: '15% OFF on orders above ₹500', deliveryFee: 25, isOpen: true },
  { id: 'r23', name: 'Sweet Tooth Bakery', cuisine: 'Desserts, Bakery', rating: 4.4, deliveryTime: '35-45 min', address: '33 Salsa Street, Central Plaza', city: 'Delhi', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80', priceLevel: '₹₹', openingHours: '09:00 AM - 09:00 PM', discount: '10% OFF on Rolls', deliveryFee: 35, isOpen: false },
  { id: 'r24', name: 'Green Bowl', cuisine: 'Healthy, Salad', rating: 4.2, deliveryTime: '25-35 min', address: '34 Pier Road, Garden Road', city: 'Delhi', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 11:00 PM', discount: 'Free Delivery', deliveryFee: 0, isOpen: true },
  { id: 'r25', name: 'Pasta House', cuisine: 'Italian, Pasta', rating: 3.9, deliveryTime: '30-40 min', address: '35 Baker Street, Station Road', city: 'Delhi', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80', priceLevel: '₹₹', openingHours: '08:00 AM - 08:00 PM', discount: '15% OFF on orders above ₹500', deliveryFee: 20, isOpen: true },
  { id: 'r26', name: 'Taco Fiesta', cuisine: 'Mexican, Fast Food', rating: 4.4, deliveryTime: '25-45 min', address: '36 Chopstick Alley, Hill View', city: 'Delhi', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', priceLevel: '₹', openingHours: '11:00 AM - 11:00 PM', discount: 'Free Delivery', deliveryFee: 40, isOpen: true },
  { id: 'r27', name: 'Oceanic Seafood', cuisine: 'Seafood, Healthy', rating: 4.6, deliveryTime: '40-55 min', address: '37 Palace View, Sector 12', city: 'Delhi', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=800&q=80', priceLevel: '₹₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'No Discount', deliveryFee: 40, isOpen: true },
  { id: 'r28', name: 'Sushi Zen', cuisine: 'Seafood, Healthy', rating: 4.3, deliveryTime: '20-30 min', address: '38 Meat Lane, Downtown', city: 'Delhi', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', priceLevel: '₹₹₹', openingHours: '09:00 AM - 09:00 PM', discount: 'No Discount', deliveryFee: 0, isOpen: true },
  { id: 'r29', name: 'Pizza Paradise', cuisine: 'Pizza, Fast Food', rating: 4.1, deliveryTime: '20-30 min', address: '39 Main St, Westside', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: '20% OFF', deliveryFee: 0, isOpen: false },
  { id: 'r30', name: 'Mamma Mia Pizzeria', cuisine: 'Pizza, Italian', rating: 3.8, deliveryTime: '25-35 min', address: '40 Oak Avenue, Old Town', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', priceLevel: '₹₹₹', openingHours: '08:00 AM - 08:00 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 25, isOpen: true },
  { id: 'r31', name: 'Burger Haven', cuisine: 'Burger, Fast Food', rating: 4.4, deliveryTime: '40-60 min', address: '41 Spice Lane, Riverside', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', priceLevel: '₹', openingHours: '12:00 PM - 12:00 AM', discount: 'Free Delivery', deliveryFee: 50, isOpen: true },
  { id: 'r32', name: 'Smash Burgers', cuisine: 'Burger, Fast Food', rating: 4.2, deliveryTime: '15-25 min', address: '42 Lotus Road, Uptown', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'No Discount', deliveryFee: 40, isOpen: true },
  { id: 'r33', name: 'Spice Route Indian', cuisine: 'Indian, Biryani', rating: 4.8, deliveryTime: '15-35 min', address: '43 Sugar Street, Market District', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: '20% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r34', name: 'Royal Indian Fare', cuisine: 'Indian', rating: 4.7, deliveryTime: '15-25 min', address: '44 Fit Avenue, Tech Park', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 11:00 PM', discount: 'Free Delivery', deliveryFee: 25, isOpen: true },
  { id: 'r35', name: 'Biryani Blues', cuisine: 'Indian, Biryani', rating: 4.3, deliveryTime: '25-40 min', address: '45 Olive Way, Lakeview', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 11:30 PM', discount: '10% OFF', deliveryFee: 25, isOpen: true },
  { id: 'r36', name: 'Dragon Wok', cuisine: 'Chinese, Asian', rating: 4.7, deliveryTime: '15-25 min', address: '46 Royal Road, Central Plaza', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 12:00 AM', discount: '10% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r37', name: 'Sweet Tooth Bakery', cuisine: 'Desserts, Bakery', rating: 4.0, deliveryTime: '30-45 min', address: '47 Salsa Street, Garden Road', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80', priceLevel: '₹₹', openingHours: '09:00 AM - 09:00 PM', discount: '15% OFF', deliveryFee: 25, isOpen: true },
  { id: 'r38', name: 'Green Bowl', cuisine: 'Healthy, Salad', rating: 3.8, deliveryTime: '30-45 min', address: '48 Pier Road, Station Road', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 50, isOpen: true },
  { id: 'r39', name: 'Pasta House', cuisine: 'Italian, Pasta', rating: 4.6, deliveryTime: '35-55 min', address: '49 Baker Street, Hill View', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: '15% OFF on orders above ₹500', deliveryFee: 50, isOpen: true },
  { id: 'r40', name: 'Taco Fiesta', cuisine: 'Mexican, Fast Food', rating: 4.9, deliveryTime: '35-55 min', address: '50 Chopstick Alley, Sector 12', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', priceLevel: '₹', openingHours: '09:00 AM - 09:00 PM', discount: 'No Discount', deliveryFee: 0, isOpen: false },
  { id: 'r41', name: 'Oceanic Seafood', cuisine: 'Seafood, Healthy', rating: 4.3, deliveryTime: '35-45 min', address: '51 Palace View, Downtown', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=800&q=80', priceLevel: '₹₹₹₹', openingHours: '09:00 AM - 09:00 PM', discount: 'Free Garlic Bread', deliveryFee: 0, isOpen: true },
  { id: 'r42', name: 'Sushi Zen', cuisine: 'Seafood, Healthy', rating: 3.9, deliveryTime: '15-35 min', address: '52 Meat Lane, City Center', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', priceLevel: '₹₹₹', openingHours: '09:00 AM - 09:00 PM', discount: '15% OFF', deliveryFee: 25, isOpen: true },
  { id: 'r43', name: 'Pizza Paradise', cuisine: 'Pizza, Fast Food', rating: 4.4, deliveryTime: '35-55 min', address: '53 Main St, Old Town', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', priceLevel: '₹₹', openingHours: '09:00 AM - 09:00 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 0, isOpen: true },
  { id: 'r44', name: 'Mamma Mia Pizzeria', cuisine: 'Pizza, Italian', rating: 4.4, deliveryTime: '35-50 min', address: '54 Oak Avenue, Riverside', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', priceLevel: '₹₹₹', openingHours: '08:00 AM - 08:00 PM', discount: 'Free Delivery', deliveryFee: 30, isOpen: true },
  { id: 'r45', name: 'Burger Haven', cuisine: 'Burger, Fast Food', rating: 4.1, deliveryTime: '30-40 min', address: '55 Spice Lane, Uptown', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', priceLevel: '₹', openingHours: '11:00 AM - 10:00 PM', discount: '10% OFF on Rolls', deliveryFee: 30, isOpen: true },
  { id: 'r46', name: 'Smash Burgers', cuisine: 'Burger, Fast Food', rating: 4.8, deliveryTime: '15-30 min', address: '56 Lotus Road, Market District', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', priceLevel: '₹₹', openingHours: '11:00 AM - 11:00 PM', discount: '10% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r47', name: 'Spice Route Indian', cuisine: 'Indian, Biryani', rating: 4.1, deliveryTime: '25-35 min', address: '57 Sugar Street, Tech Park', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 10:00 PM', discount: 'No Discount', deliveryFee: 25, isOpen: true },
  { id: 'r48', name: 'Royal Indian Fare', cuisine: 'Indian', rating: 4.7, deliveryTime: '40-55 min', address: '58 Fit Avenue, Lakeview', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 10:00 PM', discount: 'Free Garlic Bread', deliveryFee: 0, isOpen: true },
  { id: 'r49', name: 'Biryani Blues', cuisine: 'Indian, Biryani', rating: 3.9, deliveryTime: '20-35 min', address: '59 Olive Way, Central Plaza', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80', priceLevel: '₹₹', openingHours: '08:00 AM - 08:00 PM', discount: '10% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r50', name: 'Dragon Wok', cuisine: 'Chinese, Asian', rating: 4.1, deliveryTime: '35-45 min', address: '60 Royal Road, Garden Road', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', priceLevel: '₹₹', openingHours: '08:00 AM - 08:00 PM', discount: 'Free Delivery', deliveryFee: 35, isOpen: true },
  { id: 'r51', name: 'Sweet Tooth Bakery', cuisine: 'Desserts, Bakery', rating: 4.1, deliveryTime: '30-45 min', address: '61 Salsa Street, Station Road', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80', priceLevel: '₹₹', openingHours: '08:00 AM - 08:00 PM', discount: '10% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r52', name: 'Green Bowl', cuisine: 'Healthy, Salad', rating: 4.1, deliveryTime: '15-30 min', address: '62 Pier Road, Hill View', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', priceLevel: '₹₹₹', openingHours: '10:00 AM - 11:00 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 20, isOpen: true },
  { id: 'r53', name: 'Pasta House', cuisine: 'Italian, Pasta', rating: 4.4, deliveryTime: '30-50 min', address: '63 Baker Street, Sector 12', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80', priceLevel: '₹₹', openingHours: '09:00 AM - 09:00 PM', discount: '10% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r54', name: 'Taco Fiesta', cuisine: 'Mexican, Fast Food', rating: 4.6, deliveryTime: '20-40 min', address: '64 Chopstick Alley, Downtown', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', priceLevel: '₹', openingHours: '11:00 AM - 11:00 PM', discount: 'No Discount', deliveryFee: 0, isOpen: true },
  { id: 'r55', name: 'Oceanic Seafood', cuisine: 'Seafood, Healthy', rating: 4.3, deliveryTime: '15-30 min', address: '65 Palace View, City Center', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=800&q=80', priceLevel: '₹₹₹₹', openingHours: '11:00 AM - 10:00 PM', discount: '20% OFF', deliveryFee: 35, isOpen: true },
  { id: 'r56', name: 'Sushi Zen', cuisine: 'Seafood, Healthy', rating: 4.1, deliveryTime: '15-30 min', address: '66 Meat Lane, Westside', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', priceLevel: '₹₹₹', openingHours: '08:00 AM - 08:00 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 40, isOpen: true },
  { id: 'r57', name: 'Pizza Paradise', cuisine: 'Pizza, Fast Food', rating: 4.8, deliveryTime: '20-30 min', address: '67 Main St, Riverside', city: 'Chennai', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: '20% OFF', deliveryFee: 40, isOpen: true },
  { id: 'r58', name: 'Mamma Mia Pizzeria', cuisine: 'Pizza, Italian', rating: 4.2, deliveryTime: '30-50 min', address: '68 Oak Avenue, Uptown', city: 'Chennai', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', priceLevel: '₹₹₹', openingHours: '10:00 AM - 11:00 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 25, isOpen: true },
  { id: 'r59', name: 'Burger Haven', cuisine: 'Burger, Fast Food', rating: 3.9, deliveryTime: '15-30 min', address: '69 Spice Lane, Market District', city: 'Chennai', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', priceLevel: '₹', openingHours: '12:00 PM - 12:00 AM', discount: 'Free Delivery', deliveryFee: 25, isOpen: true },
  { id: 'r60', name: 'Smash Burgers', cuisine: 'Burger, Fast Food', rating: 4.2, deliveryTime: '20-30 min', address: '70 Lotus Road, Tech Park', city: 'Chennai', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Free Delivery', deliveryFee: 0, isOpen: true },
  { id: 'r61', name: 'Spice Route Indian', cuisine: 'Indian, Biryani', rating: 4.8, deliveryTime: '25-40 min', address: '71 Sugar Street, Lakeview', city: 'Chennai', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 10:00 PM', discount: 'Free Garlic Bread', deliveryFee: 40, isOpen: true },
  { id: 'r62', name: 'Royal Indian Fare', cuisine: 'Indian', rating: 3.9, deliveryTime: '25-35 min', address: '72 Fit Avenue, Central Plaza', city: 'Chennai', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80', priceLevel: '₹₹₹', openingHours: '09:00 AM - 09:00 PM', discount: '20% OFF', deliveryFee: 30, isOpen: true },
  { id: 'r63', name: 'Biryani Blues', cuisine: 'Indian, Biryani', rating: 4.2, deliveryTime: '25-40 min', address: '73 Olive Way, Garden Road', city: 'Chennai', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80', priceLevel: '₹₹', openingHours: '11:00 AM - 11:00 PM', discount: '15% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r64', name: 'Dragon Wok', cuisine: 'Chinese, Asian', rating: 3.8, deliveryTime: '30-40 min', address: '74 Royal Road, Station Road', city: 'Chennai', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'No Discount', deliveryFee: 25, isOpen: false },
  { id: 'r65', name: 'Sweet Tooth Bakery', cuisine: 'Desserts, Bakery', rating: 4.5, deliveryTime: '25-45 min', address: '75 Salsa Street, Hill View', city: 'Chennai', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80', priceLevel: '₹₹', openingHours: '08:00 AM - 08:00 PM', discount: '10% OFF', deliveryFee: 35, isOpen: true },
  { id: 'r66', name: 'Green Bowl', cuisine: 'Healthy, Salad', rating: 4.4, deliveryTime: '40-55 min', address: '76 Pier Road, Sector 12', city: 'Chennai', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', priceLevel: '₹₹₹', openingHours: '08:00 AM - 08:00 PM', discount: '15% OFF', deliveryFee: 35, isOpen: true },
  { id: 'r67', name: 'Pasta House', cuisine: 'Italian, Pasta', rating: 3.9, deliveryTime: '30-50 min', address: '77 Baker Street, Downtown', city: 'Chennai', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80', priceLevel: '₹₹', openingHours: '11:00 AM - 11:00 PM', discount: '15% OFF on orders above ₹500', deliveryFee: 40, isOpen: true },
  { id: 'r68', name: 'Taco Fiesta', cuisine: 'Mexican, Fast Food', rating: 4.2, deliveryTime: '15-30 min', address: '78 Chopstick Alley, City Center', city: 'Chennai', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', priceLevel: '₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Free Delivery', deliveryFee: 30, isOpen: true },
  { id: 'r69', name: 'Oceanic Seafood', cuisine: 'Seafood, Healthy', rating: 4.5, deliveryTime: '25-40 min', address: '79 Palace View, Westside', city: 'Chennai', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=800&q=80', priceLevel: '₹₹₹₹', openingHours: '08:00 AM - 08:00 PM', discount: '10% OFF on Rolls', deliveryFee: 50, isOpen: true },
  { id: 'r70', name: 'Sushi Zen', cuisine: 'Seafood, Healthy', rating: 4.3, deliveryTime: '40-50 min', address: '80 Meat Lane, Old Town', city: 'Chennai', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 11:00 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 0, isOpen: true },
  { id: 'r71', name: 'Pizza Paradise', cuisine: 'Pizza, Fast Food', rating: 4.5, deliveryTime: '15-25 min', address: '81 Main St, Uptown', city: 'Pune', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 12:00 AM', discount: 'Free Delivery', deliveryFee: 30, isOpen: true },
  { id: 'r72', name: 'Mamma Mia Pizzeria', cuisine: 'Pizza, Italian', rating: 3.8, deliveryTime: '20-35 min', address: '82 Oak Avenue, Market District', city: 'Pune', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: '10% OFF on Rolls', deliveryFee: 0, isOpen: true },
  { id: 'r73', name: 'Burger Haven', cuisine: 'Burger, Fast Food', rating: 4.4, deliveryTime: '40-60 min', address: '83 Spice Lane, Tech Park', city: 'Pune', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', priceLevel: '₹', openingHours: '12:00 PM - 11:30 PM', discount: '10% OFF on Rolls', deliveryFee: 40, isOpen: true },
  { id: 'r74', name: 'Smash Burgers', cuisine: 'Burger, Fast Food', rating: 4.5, deliveryTime: '15-25 min', address: '84 Lotus Road, Lakeview', city: 'Pune', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: 'Free Delivery', deliveryFee: 40, isOpen: true },
  { id: 'r75', name: 'Spice Route Indian', cuisine: 'Indian, Biryani', rating: 4.6, deliveryTime: '30-40 min', address: '85 Sugar Street, Central Plaza', city: 'Pune', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: '10% OFF', deliveryFee: 25, isOpen: true },
  { id: 'r76', name: 'Royal Indian Fare', cuisine: 'Indian', rating: 4.3, deliveryTime: '35-55 min', address: '86 Fit Avenue, Garden Road', city: 'Pune', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 11:00 PM', discount: '10% OFF on Rolls', deliveryFee: 35, isOpen: true },
  { id: 'r77', name: 'Biryani Blues', cuisine: 'Indian, Biryani', rating: 4.8, deliveryTime: '30-50 min', address: '87 Olive Way, Station Road', city: 'Pune', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80', priceLevel: '₹₹', openingHours: '08:00 AM - 08:00 PM', discount: '15% OFF on orders above ₹500', deliveryFee: 50, isOpen: true },
  { id: 'r78', name: 'Dragon Wok', cuisine: 'Chinese, Asian', rating: 4.3, deliveryTime: '20-40 min', address: '88 Royal Road, Hill View', city: 'Pune', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Free Garlic Bread', deliveryFee: 30, isOpen: true },
  { id: 'r79', name: 'Sweet Tooth Bakery', cuisine: 'Desserts, Bakery', rating: 4.1, deliveryTime: '15-35 min', address: '89 Salsa Street, Sector 12', city: 'Pune', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80', priceLevel: '₹₹', openingHours: '11:00 AM - 10:00 PM', discount: 'Free Delivery', deliveryFee: 30, isOpen: true },
  { id: 'r80', name: 'Green Bowl', cuisine: 'Healthy, Salad', rating: 4.8, deliveryTime: '15-25 min', address: '90 Pier Road, Downtown', city: 'Pune', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Free Delivery', deliveryFee: 20, isOpen: true },
  { id: 'r81', name: 'Pasta House', cuisine: 'Italian, Pasta', rating: 4.6, deliveryTime: '15-30 min', address: '91 Baker Street, City Center', city: 'Pune', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80', priceLevel: '₹₹', openingHours: '11:00 AM - 11:00 PM', discount: 'No Discount', deliveryFee: 40, isOpen: true },
  { id: 'r82', name: 'Taco Fiesta', cuisine: 'Mexican, Fast Food', rating: 3.9, deliveryTime: '30-45 min', address: '92 Chopstick Alley, Westside', city: 'Pune', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', priceLevel: '₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Flat ₹100 OFF above ₹499', deliveryFee: 0, isOpen: true },
  { id: 'r83', name: 'Oceanic Seafood', cuisine: 'Seafood, Healthy', rating: 4.8, deliveryTime: '25-40 min', address: '93 Palace View, Old Town', city: 'Pune', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=800&q=80', priceLevel: '₹₹₹₹', openingHours: '08:00 AM - 08:00 PM', discount: 'Free Garlic Bread', deliveryFee: 40, isOpen: true },
  { id: 'r84', name: 'Sushi Zen', cuisine: 'Seafood, Healthy', rating: 4.7, deliveryTime: '20-35 min', address: '94 Meat Lane, Riverside', city: 'Pune', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 25, isOpen: true },
  { id: 'r85', name: 'Pizza Paradise', cuisine: 'Pizza, Fast Food', rating: 4.2, deliveryTime: '40-60 min', address: '95 Main St, Market District', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 12:00 AM', discount: '15% OFF on orders above ₹500', deliveryFee: 40, isOpen: true },
  { id: 'r86', name: 'Mamma Mia Pizzeria', cuisine: 'Pizza, Italian', rating: 3.9, deliveryTime: '35-55 min', address: '96 Oak Avenue, Tech Park', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', priceLevel: '₹₹₹', openingHours: '11:00 AM - 11:00 PM', discount: '15% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r87', name: 'Burger Haven', cuisine: 'Burger, Fast Food', rating: 3.8, deliveryTime: '40-55 min', address: '97 Spice Lane, Lakeview', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', priceLevel: '₹', openingHours: '10:00 AM - 11:00 PM', discount: '10% OFF on Rolls', deliveryFee: 20, isOpen: false },
  { id: 'r88', name: 'Smash Burgers', cuisine: 'Burger, Fast Food', rating: 4.2, deliveryTime: '20-35 min', address: '98 Lotus Road, Central Plaza', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 12:00 AM', discount: 'No Discount', deliveryFee: 35, isOpen: true },
  { id: 'r89', name: 'Spice Route Indian', cuisine: 'Indian, Biryani', rating: 4.1, deliveryTime: '30-45 min', address: '99 Sugar Street, Garden Road', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', priceLevel: '₹₹₹', openingHours: '09:00 AM - 09:00 PM', discount: '10% OFF on Rolls', deliveryFee: 0, isOpen: true },
  { id: 'r90', name: 'Royal Indian Fare', cuisine: 'Indian', rating: 3.9, deliveryTime: '25-35 min', address: '100 Fit Avenue, Station Road', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 12:00 AM', discount: '20% OFF', deliveryFee: 0, isOpen: false },
  { id: 'r91', name: 'Biryani Blues', cuisine: 'Indian, Biryani', rating: 4.1, deliveryTime: '15-35 min', address: '101 Olive Way, Hill View', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: 'Free Delivery', deliveryFee: 20, isOpen: true },
  { id: 'r92', name: 'Dragon Wok', cuisine: 'Chinese, Asian', rating: 3.9, deliveryTime: '20-35 min', address: '102 Royal Road, Sector 12', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', priceLevel: '₹₹', openingHours: '10:00 AM - 11:00 PM', discount: 'No Discount', deliveryFee: 30, isOpen: true },
  { id: 'r93', name: 'Sweet Tooth Bakery', cuisine: 'Desserts, Bakery', rating: 4.9, deliveryTime: '40-50 min', address: '103 Salsa Street, Downtown', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80', priceLevel: '₹₹', openingHours: '09:00 AM - 09:00 PM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 20, isOpen: true },
  { id: 'r94', name: 'Green Bowl', cuisine: 'Healthy, Salad', rating: 4.8, deliveryTime: '35-55 min', address: '104 Pier Road, City Center', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', priceLevel: '₹₹₹', openingHours: '08:00 AM - 08:00 PM', discount: '15% OFF', deliveryFee: 40, isOpen: true },
  { id: 'r95', name: 'Pasta House', cuisine: 'Italian, Pasta', rating: 4.5, deliveryTime: '40-50 min', address: '105 Baker Street, Westside', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80', priceLevel: '₹₹', openingHours: '12:00 PM - 12:00 AM', discount: 'Buy 1 Get 1 Free on Cakes', deliveryFee: 0, isOpen: true },
  { id: 'r96', name: 'Taco Fiesta', cuisine: 'Mexican, Fast Food', rating: 4.7, deliveryTime: '35-45 min', address: '106 Chopstick Alley, Old Town', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', priceLevel: '₹', openingHours: '12:00 PM - 11:30 PM', discount: 'Free Garlic Bread', deliveryFee: 35, isOpen: true },
  { id: 'r97', name: 'Oceanic Seafood', cuisine: 'Seafood, Healthy', rating: 3.9, deliveryTime: '40-55 min', address: '107 Palace View, Riverside', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1615141982883-c7da0e698d5c?w=800&q=80', priceLevel: '₹₹₹₹', openingHours: '12:00 PM - 12:00 AM', discount: '15% OFF', deliveryFee: 0, isOpen: true },
  { id: 'r98', name: 'Sushi Zen', cuisine: 'Seafood, Healthy', rating: 4.3, deliveryTime: '25-45 min', address: '108 Meat Lane, Uptown', city: 'Kolkata', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', priceLevel: '₹₹₹', openingHours: '12:00 PM - 11:30 PM', discount: '15% OFF on orders above ₹500', deliveryFee: 50, isOpen: true },
]

export const allFoods = restaurants.flatMap((r) => generateFoodItems(r.id, r.cuisine))
