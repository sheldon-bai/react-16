import React, { Component } from 'react'
import Recipe from './Recipe'
import './RecipeList.css'

export default class RecipeList extends Component {
    render() {

        const { recipes } = this.props

        const recipeItems = recipes.map(recipe => (
            <Recipe
                key={recipe.id}
                recipe={recipe}
            />
        ))

        return (
            <div className="recipe-container">
                <h1 className="title">🍽 Recipe Gallery</h1>

                <ul className="recipe-grid">
                    {recipeItems}
                </ul>
            </div>
        )
    }
}