import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

// styles
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/11464809?s=460&u=6be0045e3810d86cf90c1ab8836aa92b389733a8&v=4"
          alt="Avatar"
        />
        <div>
          <strong>Pedro H.</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Apaixonado por explosões desde 2012
        <br /> <br />
        Lorem autem accusantium harum aliquid amet? Distinctio incidunt cumque
        doloribus maiores velit. Facilis possimus accusantium repellendus quas
        perspiciatis Expedita quia magnam quasi iure dolores. Non minus facere
        nulla nihil quasi?
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
