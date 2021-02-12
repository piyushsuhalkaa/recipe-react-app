import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, link }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img src={image} alt=''></img>
      <p>{calories}</p>
      <a href={link} target='_blank'>
        Read More
      </a>
    </div>
  )
}

export default Recipe
