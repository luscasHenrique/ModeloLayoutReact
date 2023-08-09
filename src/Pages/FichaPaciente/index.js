import React from 'react';
// install biblioteca chart.js 
// npm install chart.js react-chartjs-2

// componentes
import RadarChart from '../../Components/RadarGrafico';
import SidebarMenu from '../../Components/NovoSideBar';
import UserCard from '../../Components/UserCard';
// Style
import './Ficha.css';

function FichaPaciente() {
  const datasets = [
    {
        label: 'Dados 1',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    },
    {
        label: 'Dados 2',
        data: [50, 70, 40, 90, 30, 80],
        backgroundColor: 'rgba(192, 75, 192, 0.2)',
        borderColor: 'rgba(192, 75, 192, 1)',
        borderWidth: 1,
    },
    {
        label: 'Dados 3',
        data: [85, 45, 70, 55, 65, 75],
        backgroundColor: 'rgba(192, 192, 75, 0.2)',
        borderColor: 'rgba(192, 192, 75, 1)',
        borderWidth: 1,
    },
    {
      label: 'Dados 4',
      data: [52, 19, 3, 35, 2, 3,69],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Dados 5',
      data: [22, 34, 53, 15, 28, 55,23],
      backgroundColor: 'rgba(105, 9, 132, 0.2)',
      borderColor: 'rgba(105, 8, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Dados 6',
      data: [55, 48, 23, 15, 20, 20,11],
      backgroundColor: 'rgba(60, 167, 161, 0.1)',
      borderColor: 'rgba(60, 167, 161, 1)',
      borderWidth: 1,
    },
    {
      label: 'Dados 7',
      data: [45, 68, 30, 65, 40, 5,56],
      backgroundColor: 'rgba(89, 9, 58, 0.1)',
      borderColor: 'rgba(89, 9, 58, 1)',
      borderWidth: 1,
    },
    {
      label: 'Dados 8',
      data: [56, 28, 33, 11, 2, 5,63],
      backgroundColor: 'rgba(1, 242, 174, 0.1)',
      borderColor: 'rgba(76, 242, 174, 0.96)',
      borderWidth: 1,
    },
  ];
  const chartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'];


  return (
    <div className="container-layout">

        <div className="container-left">
            <SidebarMenu/>
        </div>

        <div className="container-right ">
            <div className="header">
            <UserCard/>
            </div>
            
            <div className='grafico-paciente'>
              <h1>Grafico Paciente</h1>
                <RadarChart datasets={datasets} labels={chartLabels} />
            </div>

        </div>
        <div className="footer">
        </div>
    </div>
  );
}

export default FichaPaciente;
