import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifAppPro = () => {
  const [ categories, setCategories ] = useState([ "Konosuba" ])

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

      {categories.map(category => (
        <GifGrid
          key={category}
          category={category}
        />
      ))}

    </>
  )
}
