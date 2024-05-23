import React from 'react'

export const ReportFuel = ({titre, citerne, quantite, disponible, consomme, desc1, desc2}) => {
  return (
    <div className='flex flex-col mt-9'>
        <div className='shadow border-t-4 border-orange-400 rounded-2xl mx-8 px-6'>
        <h3 className='text-center border-b-2 border-[#6D3100] text-[#6D3100] py-2'>{titre}</h3>
        <div className='flex'>
        <div className ='flex  items-center py-4 mx-6'>
          <h1 className='flex pr-4 text-s'>{citerne}</h1>
          <p className=' text-[#ED8B3B] font-medium' >{quantite}</p>

          <h1 className='flex pr-4 text-s'>{disponible}</h1>
          <p className=' text-[#ED8B3B] font-medium' >{desc1}</p>

          <h1 className='flex pr-4 text-s'>{consomme}</h1>
          <p className=' text-[#ED8B3B] font-medium' >{desc2}</p>
        </div>
        </div>
        </div>
    </div>
  )
}; export default ReportFuel
