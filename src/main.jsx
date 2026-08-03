import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { ViewedProvider } from './context/ViewedContext.jsx'
import { LocationProvider } from './context/LocationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LocationProvider>
        <AuthProvider>
          <CartProvider>
            <FavoritesProvider>
              <ViewedProvider>
                <App />
              </ViewedProvider>
            </FavoritesProvider>
          </CartProvider>
        </AuthProvider>
      </LocationProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
