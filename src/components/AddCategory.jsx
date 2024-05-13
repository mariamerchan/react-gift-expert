import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  //Necesario para que los usuarios puedan escribir en el input y la interfaz cambie en función de ese value
  const onSubmit = (event) => {
    // Evita que el navegador se recargue cuando se envía el formulario
    event.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewValue(newValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Búscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
