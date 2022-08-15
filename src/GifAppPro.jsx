import { useState } from "react"
import AddCategory from "./components/AddCategory"

export default function GifAppPro() {
  const [ categories, setCategories ] = useState([ "Batman", "Superman" ])


  return (
    <>
      <h1>Gif App Pro</h1>

      <AddCategory setCategory={ setCategories }/>

      <ol>
        {categories.map(category => {
          return(
            <li key={category}>{ category }</li>
          )
        })}
      </ol>
      


    </>
  )
}
