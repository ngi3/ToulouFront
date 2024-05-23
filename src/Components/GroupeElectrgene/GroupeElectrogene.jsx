import React from 'react'
import ge from '../Assets/Groupe Electrogene SDMO 100Kva 1.svg'
export const GroupeElectrogene = () => {
  return (
    <div className='flex mt-9 '>
        <div className=' shadow  w-96 border-t-4 border-orange-400 rounded-2xl'>
            <img src={ge} alt="" />
            <h2>KM4</h2>
            <p>Groupe : 2</p>
            <p>Geozone : Abidjan - Treich</p>

            <p>Marque : SDMO</p>
            <p>Modèle : 100 KVA</p>
</div>
    </div>
    
  )
}
export default GroupeElectrogene