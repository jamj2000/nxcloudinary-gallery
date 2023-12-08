
function Galeria({result}) {
//   console.log(result);
  return (
    <>
    <h1>Galería de imágenes</h1>
     {
        result.resources
          .map( r => (
              <img key={r.public_id} src={r.secure_url} 
                   style={{ aspectRatio: r.width / r.height, height: '300px' }}
              />
          ))
     }
    </>
  )
}

export default Galeria