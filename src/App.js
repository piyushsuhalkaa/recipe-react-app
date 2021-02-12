import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css'

const App = () => {
  const APP_ID = '7668791e'
  const APP_KEY = '8d793d68b2afe598b31db3e8c576deeb'
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('Indian Veg')

  useEffect(() => {
    console.log('working')
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=5`
    )
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-input'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-btn' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  )
}

export default App
