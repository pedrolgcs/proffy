import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

// styles
import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  Button,
  ButtonImage,
  ButtonText,
  TotalConnections,
  TotalConnectionsImage,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heardIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);
  const { navigate } = useNavigation();

  useEffect(() => {
    async function loadTotalConnections() {
      const { data } = await api.get('connections');
      setTotalConnections(data.total);
    }
    loadTotalConnections();
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <Container>
      <Banner source={landingImg} resizeMode="contain" />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>
      <ButtonsContainer>
        <Button primary onPress={handleNavigateToStudyPages}>
          <ButtonImage source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>
        <Button onPress={handleNavigateToGiveClassesPage}>
          <ButtonImage source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>
      <TotalConnections>
        Total de {totalConnections} conexões já realizadas{' '}
        <TotalConnectionsImage source={heardIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
