import React from 'react';

// components
import PageHeader from '../../components/PageHeader';

// styles
import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />
    </Container>
  );
};

export default TeacherList;
