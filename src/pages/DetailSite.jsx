import React from 'react'

const Route = ({}) => {
  return(
    <div style={{ width: '50%', margin: '20px', border: '1px solid gray', borderRadius: '15px'}}>
      <p>Ruta: Nombre</p>
      <p>Description</p>
      <p>Inicio: </p>
      <p>Fin: </p>
    </div>
  )
}
const DetailSite = () => {
  return(
    <div style={{padding: '0 15%', display: 'block'}}>
      <img style={{ objectFit: 'fill'}} src="https://sorprendete.pe/wp-content/uploads/2021/11/NOTA-MANCORA-02.jpg" width={'100%'} height={"450px"}/>
      <div style={{paddingLeft: '45px'}}>
        <h1>Mancora</h1>
        <p>Máncora es un balneario y localidad peruana capital del distrito homónimo ubicado en la provincia de Talara, en el departamento de Piura.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
          <Route />
          <Route />
          <Route />
        </div>
      </div>
    </div>
  )
}

export default DetailSite