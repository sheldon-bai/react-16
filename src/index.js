import React from 'react'
import ReactDOM from 'react-dom'
import RecipeList from './components/RecipeList'

async function fetchRecipes() {
    const resp = await fetch('https://dummyjson.com/recipes')
    const data = await resp.json()

    return data.recipes
}

async function render() {
    const recipes = await fetchRecipes()

    ReactDOM.render(<RecipeList recipes={ recipes } />, document.getElementById('root'))
}

render()