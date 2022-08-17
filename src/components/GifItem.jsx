
export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={ url } alt={title} />

      <h1>
        <li>{ title }</li>
      </h1>
    </div>
  )
}
