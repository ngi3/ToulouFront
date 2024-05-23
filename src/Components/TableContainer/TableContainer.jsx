import React from 'react'
import Table from '../Table/Table'
import Btn from '../Btn/Btn';
import { Link } from 'react-router-dom';
export const TableContainer = () => {
  return (
    <div className='min-h-screen flex mt-9 justify-center h-full w-full'>
        <div className=' shadow h-96 border-t-4 border-orange-400 rounded-2xl'>
            <div className='flex justify-between'>
              <div  className='flex'>
              <Btn text="Groupes" border='1px solid grey'/>
                <Btn text="Sites" border='1px solid grey'/>
                <Btn text="Utilisateurs" border='1px solid grey'/>
              </div>
              <div>
                <Link to="/addform"><Btn text="Ajouter un groupe" border='1px solid #ED8B3B' color='#ED8B3B'/></Link>
                </div>
            </div>

            
            <Table/>
        </div>
    </div>
  )
};
export default TableContainer;