import React from 'react';
import './CardInfo.css';

function formatarData(data) {
  return new Intl.DateTimeFormat('pt-BR').format(data);
}

function CardInfo({ titulo, numero, total, data, cor }) {
  const cardStyle = {
    backgroundColor: cor,
  };


  return (
    <div className="card-info" style={cardStyle}>
      <div className="titulo-data">
        <h3>{titulo}</h3>
        <p>{formatarData(new Date(data))}</p>      </div>
      <div className="numero">{numero}</div>
      <hr />
    
      <div className="total">{total}</div>
    </div>
  );
}

export default CardInfo;

{/* <CardInfo
titulo="Atendentes Online"
numero={42}
total={1000}
data="2023-08-01"
// data={selectedDate.toDateString()} // Use a data selecionada aqui
cor="#805050" // Aqui você pode escolher a cor desejada
/> */}
