import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', anchor: '/home' },
    { label: 'Recipes', anchor: '/recipes' },
    { label: 'Meal Planner', anchor: '/meal-planner' },
    { label: 'Grocery List', anchor: '/grocery-list' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/home">MealTime</a>
        </div>
        <ul className="navbar-links">
          {navItems.map(({ label, anchor }) => (
            <li key={label}>
              <a href={anchor}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;