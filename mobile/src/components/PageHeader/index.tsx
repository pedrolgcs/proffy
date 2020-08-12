import React from 'react';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import loadImg from '../../assets/images/logo.png';

// styles
import {
  Container,
  TopBar,
  ButtonBack,
  BackIcon,
  LogoImg,
  Title,
} from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <ButtonBack onPress={handleGoBack}>
          <BackIcon source={backIcon} resizeMode="contain" />
        </ButtonBack>
        <LogoImg source={loadImg} resizeMode="contain" />
      </TopBar>
      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
