import React, { useState } from "react";

function RecipeCreate({addNewRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const submitOnClick = (event) => {
    event.preventDefault()
    addNewRecipe({name, cuisine, photo, rating, ingredients, preparation})
    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")
  }
  const onNameChange = (event) => {setName(event.target.value)}
  const onCuisineChange = (event) => {setCuisine(event.target.value)}
  const onPhotoChange = (event) => {setPhoto(event.target.value)}
  const onIngredientsChange = (event) => {setIngredients(event.target.value)}
  const onPrepChange = (event) => {setPreparation(event.target.value)}
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td><input name="name" value={name} onChange={onNameChange}/></td>
            <td><input name="cuisine" value={cuisine} onChange={onCuisineChange}/></td>
            <td><input name="photo" type="url" value={photo} onChange={onPhotoChange}/></td>
            {/* <td><input name="rating" value={name} onChange={onNameChange}/></td> */}
            <td><textarea name="ingredients" value={ingredients} onChange={onIngredientsChange}/></td>
            <td><textarea name="preparation" value={preparation} onChange={onPrepChange}/></td>
            <td>
              <button type="submit" onClick={submitOnClick}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
