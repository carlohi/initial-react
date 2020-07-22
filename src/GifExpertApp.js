import React,{useState} from "react";
import {AddCategory} from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Transformers"]);

  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <ol>
        {
            categories.map( category => (
              <GifGrid key={category} category={ category } />
            ))
        }
      </ol>
      <hr />
    </div>
  );
};
