import React, { useState } from 'react'
import {AddCategory, GifGrid} from "./components"
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';

import "./styles.css"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)){return};  

        setCategories([newCategory, ...categories]);
    }
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory = {onAddCategory}/>


        {
            categories.map( (category) => {
                return <GifGrid 
                    key={category} 
                    category={category}
                />  //<li key={category}> {category } </li>
            }) 
        }

        
    </>
  )
}
