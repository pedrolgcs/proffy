import React, { useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  FavoriteIcon,
  ContactButton,
  ContactIcon,
  ContactButtonText,
} from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ favorited, teacher }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    if (isFavorited) {
      const favoritedIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id
      );
      favoritesArray.splice(favoritedIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: teacher.avatar,
          }}
        />
        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>{teacher.bio}</Bio>
      <Footer>
        <Price>
          Preço/hora {'  '} <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>
        <ButtonsContainer>
          <FavoriteButton
            favorited={isFavorited}
            onPress={handleToggleFavorite}
          >
            <FavoriteIcon
              source={isFavorited ? unfavoriteIcon : heartOutlineIcon}
            />
          </FavoriteButton>

          <ContactButton onPress={handleLinkToWhatsapp}>
            <ContactIcon source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
