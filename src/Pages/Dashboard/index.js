
// bibliotecas
import { IoMdPaperPlane} from 'react-icons/io';
import React, { useState, useEffect} from 'react';



// components
import SidebarMenu from '../../Components/NovoSideBar';
import UserCard from '../../Components/UserCard';
import RadialProgressBar from '../../Components/CardProgressBar';

function Dashboard() {
  return (
    <div className="container-layout">

        <div className="container-left">
            <SidebarMenu/>
        </div>

        <div className="container-right ">
            <div className="header">
            <UserCard/>
            </div>

            <div>
            <RadialProgressBar
              percentage={50}
              icon={<IoMdPaperPlane />}
              total={120}
              title="Enviados"
              radialColor="#237141" // Defina a cor do radial 
              textColor="#237141" // Defina a cor do texto
            />
            </div>

        </div>   



        <div className="footer">
        </div>
    </div>
  )
}

export default Dashboard;