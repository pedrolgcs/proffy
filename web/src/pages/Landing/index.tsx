import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

// styles
import './styles.css';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function loadTotalConnection() {
      const response = await api.get('connections');
      const { total } = response.data;
      setTotalConnections(total);
    }
    loadTotalConnection();
  }, []);

  return (
    <div id="page-landing">
      <div id="page-lading-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link className="study" to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link className="give-classes" to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
