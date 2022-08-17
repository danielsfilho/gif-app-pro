import { useFetchGifs } from "../hooks"
import { GifItem } from "./index"

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  return (
    <>
      <h3>{ category }</h3>

      {
        isLoading && ( <h1>Carregando...</h1> )
      }

      <div className="card-grid">
        { 
          images.map( ( image ) => (
            <GifItem 
              key={ image.id } 
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}
