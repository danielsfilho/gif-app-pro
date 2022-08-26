import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ( { onNewCategory } ) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ( e ) => {
    setInputValue(e)
  }

  const onSubmit = ( event ) => {
    event.preventDefault()

    const newInputValue = inputValue.trim()
    if( newInputValue.length <= 0 ) return;

    onNewCategory( newInputValue  )
    setInputValue("")
  }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
      
      <input
        type="text"
        placeholder="Procurar gifs"
        value={ inputValue }
        onChange={e => onInputChange(e.target.value)}
      />

    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}