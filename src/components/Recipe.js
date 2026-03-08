import React from "react";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {

  const {
    name,
    image,
    cuisine,
    difficulty,
    prepTimeMinutes,
    servings,
    rating,
    reviewCount,
    tags
  } = recipe;

  return (
    <div className="recipe-card">

      <img
        className="recipe-image"
        src={image}
        alt={name}
      />

      <div className="recipe-body">

        <h3 className="recipe-title">{name}</h3>

        <div className="recipe-meta">
          <span>{cuisine}</span>
          <span>{difficulty}</span>
        </div>

        <div className="recipe-info">
          ⏱ {prepTimeMinutes} min
          <span> | </span>
          🍽 {servings} serving
        </div>

        <div className="recipe-rating">
          ⭐ {rating} ({reviewCount} reviews)
        </div>

        <div className="recipe-tags">
          {tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}