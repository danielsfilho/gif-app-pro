import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {
  const [ images, setImages ] = useState([])

  useEffect( () => {
    getGifs(category)
      .then( newImages => setImages(newImages) )
  }, [])
  
  return (
    <>
      <h3>{ category }</h3>

      <ol>
        { 
          images.map( ({ id, title, url }) => (
            <div key={ id }>
              <li>{ title }</li>
              <img src={ url }/>
            </div>
          ))
        }
      </ol>
    </>
  )
}
