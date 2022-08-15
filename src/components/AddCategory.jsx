import { useState } from "react"

export default function AddCategory( { setCategory } ) {
  const [inputValue, setInputValue] = useState()

  const onInputChange = ( e ) => {
    setInputValue( e )
  }

  const onSubmit = ( event ) => {
    event.preventDefault()
    if( inputValue.trim().length <= 0 ) return;

    setCategory(categories => [ inputValue, ...categories ])
    setInputValue("")
  }

  return (
    <form onSubmit={ onSubmit }>
      
      <input
        type="text"
        placeholder="Procurar gifs"
        value={ inputValue }
        onChange={e => onInputChange(e.target.value)}
      />

    </form>
  )
}
