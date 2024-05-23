import React from 'react';
import alert_icon from "../Assets/alert.svg"
export const Alert = () => {
  return (
    <div className='flex flex-col mt-9 w-[450px]'>
      <div  className='shadow border-t-4 border-orange-400 rounded-2xl m-8 px-6'>
        <h3 className='text-center border-b-2 border-[#6D3100] text-[#6D3100] py-2'>Alertes</h3>

        <div className='flex items-center my-4'>
          <h4 className='mx-4'>Tout</h4>
          <h4 className='mx-4'>Normale</h4>
          <h4 className='mx-4'>Avertissement</h4>
          <h4 className='mx-4'>Urgent</h4>
        </div>

        <div className='flex border-t-2 border-[#6D3100] px-4 m-4'>
          <img className='h-8 my-2' src={alert_icon} />

          <div className='mx-2'>
          <h3>Citerne 1</h3>
          <p className='text-s'>Niveau de carburant bas !</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Alert;