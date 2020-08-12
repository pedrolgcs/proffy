import React from 'react';

// componentes
import PageHeader from '../../components/PageHeader';

// styles
import { Container } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />
    </Container>
  );
};

export default Favorites;
