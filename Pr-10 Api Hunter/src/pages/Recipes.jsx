import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../redux/action/recipyActions";
import "../App.css";

const Recipes = () => {
  const dispatch = useDispatch();
  const { recipes, error } = useSelector((state) => state.recipeData);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className="container">
        <div className="recipes-container">
      <h2 className="recipes-heading">🍽️ Recipes (via Axios)</h2>
      {error && <p className="error-text">Error: {error}</p>}

      {recipes.length === 0 ? (
        <p className="loading-text">Loading recipes...</p>
      ) : (
        <div className="recipes-grid">
          {recipes.map((r) => (
            <div key={r.id} className="recipe-card">
              <img src={r.image} alt={r.name} className="recipe-image" />
              <h3>{r.name}</h3>
              <p><b>Cuisine:</b> {r.cuisine}</p>
              <p><b>Difficulty:</b> {r.difficulty}</p>
              <p><b>Prep:</b> {r.prepTimeMinutes} mins | <b>Cook:</b> {r.cookTimeMinutes} mins</p>
              <p><b>Servings:</b> {r.servings}</p>
              <p><b>Calories:</b> {r.caloriesPerServing}</p>
              <p><b>Ingredients:</b> {r.ingredients.slice(0, 5).join(", ")}{r.ingredients.length > 5 ? "..." : ""}</p>
              <p><b>Steps:</b> {r.instructions.slice(0, 3).join(" ➤ ")}{r.instructions.length > 3 ? "..." : ""}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Recipes;
