import React,{useState} from "react";
import {AddCategory} from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Ben 10", "Transformers", "Samurai Jack"]);

  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <ol>
        {
            categories.map((category) => {
                return <li key={category}>{category}</li>;
            })
        }
      </ol>
      <hr />
    </div>
  );
};
