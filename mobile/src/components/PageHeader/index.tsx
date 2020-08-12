import React, { ReactNode } from 'react';
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
  Header,
  Title,
} from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
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

      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
