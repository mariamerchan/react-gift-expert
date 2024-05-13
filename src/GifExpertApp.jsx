import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([" Picachu "]);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    setCategories([newCategory, ...categories]);
    //setCategories((cat) => [...cat, newCategory]);
  };

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory onNewValue={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
