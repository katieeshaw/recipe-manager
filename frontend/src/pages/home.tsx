// src/pages/home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home: React.FC = () => {
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const mealSections = ['Breakfast', 'Lunch', 'Dinner'];

  return (
    <div className="background">
      <div className="home-container">
        <h1 className="home-title">Your Meal Plan for {today}</h1>
        <div className="meal-card">
          {mealSections.map((meal) => (
            <div className="meal-section" key={meal}>
              <h3>{meal}</h3>
              <p className="empty-text">No recipe selected</p>
              <Link to="/meal-planner" className="choose-button">
                Choose recipe
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;