import React, { useState, useEffect } from 'react';
import './UserProfileModules.css'; // Certifique-se de importar seu arquivo CSS
import Inputs from '../Inputs';
import useFlashMessage from '../../hooks/useFlashMessage';
import api from '../../utils/api';

function UserProfile() {
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
  return (
    <div className="container-user-profile">
      <div className="header-container ">
          <h1 className="main-heading">UserName  <span className="tag">Oque sou</span></h1>
        {/* END header */}
      </div>


      <div className="body-content">
        <img
          src="https://s17.postimg.cc/xcbukrwdr/Hugh_Jackman_f.jpg"
          alt="Hugh Jackman"
          className="body-image"
        />
        <span className="body-stats">Avaliações <br/> <span>3.5k</span></span>
        <span className="body-stats">Média <br/> <span>1.9k</span></span>
        <div className="body-info">
            <h3 className="titulo-form">Editar Usuario</h3>
            <h5 className="subtitulo-form">Atualize as informações abaixo:</h5>
            <form className="container-form" onSubmit={handleSubmit}>
              <div className='container-inputs'>
                <div className="">
                  <Inputs
                    type="text"
                    label="Nome do Cliente"
                    name="name"
                    value={user.name}
                    handleOnChange={handleOnChange}
                    placeholder="Digite o nome.."
                    required
                  />
                </div>
                <div className="">
                  <Inputs
                    type="number"
                    label="CPF"
                    name="cpf"
                    value={user.cpf}
                    handleOnChange={handleOnChange}
                    required
                  />
                </div>
                <div className="">
                  <Inputs
                    type="number"
                    label="RG"
                    name="rg"
                    value={user.rg}
                    handleOnChange={handleOnChange}
                    required
                  />
                </div>
                <div className="">
                  <Inputs
                    type="number"
                    label="Telefone"
                    name="fone"
                    value={user.fone}
                    handleOnChange={handleOnChange}
                    required
                  />
                </div>
                <div className="">
                  <Inputs
                    type="email"
                    label="E-mail"
                    name="email"
                    value={user.email}
                    handleOnChange={handleOnChange}
                    required
                  />
                </div>
              </div>
                
              {/* Adicione mais campos Inputs conforme necessário */}
              <div className="container-botao-atualizar" >
                <Inputs type="submit" value="atualizar"/>
              </div>
              
            </form>
          </div>
        </div>
      </div>
  );
}

export default UserProfile;
