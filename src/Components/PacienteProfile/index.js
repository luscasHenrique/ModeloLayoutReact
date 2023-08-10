import React, { useState, useEffect } from 'react';
import './PacienteModules.css';
import api from '../../utils/api';
import useFlashMessage from '../../hooks/useFlashMessage';
import RadarChart from '../RadarGrafico';


function PacienteProfile(){
    const [user, setUser] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()
    
    useEffect(() => {
      api.get('/users/checkuser',{
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    })
    .then((response) => {
      setUser(response.data)
    }).catch((error) => {
      console.log(error)
    })}, [token])
  
    function handleOnChange(e){
      setUser({...user, [e.target.name]: e.target.value});
    }
    
    async function handleSubmit(e){
      e.preventDefault()
  
      let msgType = 'success'
      const formData = new FormData()
  
      await Object.keys(user).forEach((key) =>
        formData.append(key, user[key]) 
      )
  
      const data = await api.patch(`users/edit/${user.id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multpart/form-data'
        }
      })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        msgType = 'error'
        return err.response.data
      })
  
      setFlashMessage(data.message, msgType)
    }

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
          data: [52, 19, 3, 35,69,8],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Dados 5',
          data: [22, 34, 53, 15, 28, 55],
          backgroundColor: 'rgba(105, 9, 132, 0.2)',
          borderColor: 'rgba(105, 8, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Dados 6',
          data: [55, 48,15, 20, 20,11],
          backgroundColor: 'rgba(60, 167, 161, 0.1)',
          borderColor: 'rgba(60, 167, 161, 1)',
          borderWidth: 1,
        },
        {
          label: 'Dados 7',
          data: [45, 68, 30, 65, 40, 5],
          backgroundColor: 'rgba(89, 9, 58, 0.1)',
          borderColor: 'rgba(89, 9, 58, 1)',
          borderWidth: 1,
        },
        {
          label: 'Dados 8',
          data: [28, 33, 11, 2, 5,63],
          backgroundColor: 'rgba(1, 242, 174, 0.1)',
          borderColor: 'rgba(76, 242, 174, 0.96)',
          borderWidth: 1,
        },
      ];
    const chartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'];
    const [activeTab, setActiveTab] = useState('grafico');

    return (
        <div className="container-paciente-profile">
            <div className="header-container ">
              <div className="main-heading">
                <h1>UserName </h1>
              </div>
              <div className="main-heading">
                <span className="tag">Oque sou</span>
              </div>
            </div>
            {/* END header */}



            <div className="body-content">
                <img
                src="https://s17.postimg.cc/xcbukrwdr/Hugh_Jackman_f.jpg"
                alt="Hugh Jackman"
                className="body-image"
                />
                    <span className="body-stats">Tutor<br/> <span>User.name</span></span>
                    <span className="body-stats">Acompanhante <br/> <span>User.name</span></span>


                <div className="body-info">
                    <ul className="nav nav-tabs">
                        <li className={activeTab === 'grafico' ? 'active' : ''}>
                            <a className="custom-tab-btn" href="#grafico" onClick={() => setActiveTab('grafico')}>
                            Gráfico
                            </a>
                        </li>
                        <li className={activeTab === 'dados' ? 'active' : ''}>
                            <a className="custom-tab-btn" href="#dados" onClick={() => setActiveTab('dados')}>
                            Dados
                            </a>
                        </li>
                        <li className={activeTab === 'outros' ? 'active' : ''}>
                            <a className="custom-tab-btn" href="#outros" onClick={() => setActiveTab('outros')}>
                            Outros
                            </a>
                        </li>
                    </ul>


                    <div className="tab-content">
                        <div id="grafico" className={`tab-pane ${activeTab === 'grafico' ? 'active' : ''}`}>
                          <h3>Gráfico de {user.name}</h3>
                            <div className='sessao-grafico'>
                                <RadarChart datasets={datasets} labels={chartLabels} />
                            </div>

                            <div className=''>
                            </div>

                        </div>

                        <div id="dados" className={`tab-pane ${activeTab === 'dados' ? 'active' : ''}`}>
                            {/* Conteúdo da aba de Dados */}
                            <h1>Mais dados</h1>
                        </div>

                        <div id="outros" className={`tab-pane ${activeTab === 'outros' ? 'active' : ''}`}>
                            {/* Conteúdo da aba de Outros */}
                            <h1>Outros dados</h1>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default PacienteProfile;
