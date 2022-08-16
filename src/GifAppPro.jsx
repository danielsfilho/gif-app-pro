import { useState } from "react"
import AddCategory from "./components/AddCategory"

export default function GifAppPro() {
  const [ categories, setCategories ] = useState([ "Batman", "Superman" ])

  const onAddCategory = ( newCategory ) => {

    const categoriesUpperCase = categories.map(category => {
      return category.toUpperCase()
    })

    const newCategoryUpperCase = newCategory.toUpperCase()

    if( categoriesUpperCase.includes(newCategoryUpperCase) ) return

    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>GifAppPro</h1>

      <AddCategory
        onNewCategory={ value => onAddCategory(value) }
      />

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
