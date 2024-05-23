import React from 'react'
import Report from '../Report/Report'
import ReportFuel from '../ReportFuel/ReportFuel'
import Alert from '../Alert/Alert'
import DashboardCiterne from '../DashboardCiterne/DashboardCiterne'
export const View = () => {
  return (
    <div className='flex w-full h-full'>
      <div className=''>
      <Report titre="Groupes électrogènes" soustitre1='14' soustitre2='4' soustitre3='10' desc='Total' desc2='Allumés' desc3='Eteints'/>
        <Alert/>
      </div>
       
       <div className=''>
       <ReportFuel titre='Carburant disponible'citerne='Citerne 1' quantite='18.504 / 20.000'/>
       <ReportFuel titre='Total' disponible='Disponible' desc1='18.504 / 20.000' consomme='Consommé' desc2='10'/>

       <div>
          <DashboardCiterne />
       </div>
       </div>

       
    </div>
  )
}
