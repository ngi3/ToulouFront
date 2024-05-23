import React from 'react'
import Btn2 from '../Btn2/Btn2';

export const Table = () => {
  return (
    <div className='px-4 pt-3 '>

        <table className='border-separate border-spacing-2 '>
            <thead className='text-gray-400 '>
                <tr className='text-center'>
                    <td className='py-2 px-4 border-b-2 '>Identifiant</td>
                    <td className='py-2 px-4 border-b-2'>Marque</td>
                    <td className='py-2 px-4 border-b-2'>Modèle</td>
                    <td className='py-2 px-4 border-b-2'>Toulou</td>
                    <td className='py-2 px-4 border-b-2'>N/S</td>
                    <td className='py-2 px-4 border-b-2'>Site</td>
                    <td className='py-2 px-4 border-b-2' >Actions</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className='py-2 px-4' >OCI-S-01</td>
                    <td className='py-2 px-4'>SDMO</td>
                    <td className='py-2 px-4'>300KVA</td>
                    <td className='py-2 px-4'>TGS035</td>
                    <td className='py-2 px-4'>J0077K-0015012253</td>
                    <td className='py-2'>Orange Village</td>
                    <td className='flex py-2 px-4'><Btn2 text="Modifier" backgroundColor='#1E9F0B' width={'120px'} height={'35px'}/> <Btn2 backgroundColor='#C11111' text="Supprimer" width={'120px'} height={'35px'}/></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
};
export default Table;
