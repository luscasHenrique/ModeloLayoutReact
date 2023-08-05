import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './RadialProgressBar.css';
import ProgressBar from 'progressbar.js';

function RadialProgressBar({ percentage, icon, title, radialColor, textColor, total}) {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Limpar o elemento com a classe "progress" antes de criar o novo ProgressBar.Circle
    const progressElement = progressBarRef.current;
    while (progressElement.firstChild) {
      progressElement.removeChild(progressElement.firstChild);
    }

    const progressBar = new ProgressBar.Circle(progressBarRef.current, {
      color: radialColor, // Usar a prop radialColor para definir a cor do radial
      strokeWidth: 10,
      duration: 2000, // milliseconds
      easing: 'easeInOut',
      text: {
        value: `${percentage}%`,
        style: {
          fontWeight: 'bold',
          color: textColor, // Usar a prop textColor para definir a cor do texto
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.5rem', // Defina aqui o tamanho da fonte desejado
        },
      },
    });

    progressBar.animate(percentage / 100);
  }, [percentage, radialColor, textColor]);

  return (
    <div className="radial-progress-container">
      <div className="box">
        <div className="progress" ref={progressBarRef}>
        </div>
      </div>
      <div className="icon-title-container">
        <div className="icon-progress">{icon} {total}</div>
        <div className="title-progress">{title}</div>
      </div>
    </div>
  );
}

RadialProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  total:PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  radialColor: PropTypes.string.isRequired, // Adicionando a prop radialColor do tipo string
  textColor: PropTypes.string.isRequired, // Adicionando a prop textColor do tipo string
};

export default RadialProgressBar;
