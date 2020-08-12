import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

// componentes
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

// styles
import { Container, ScrollTeacher } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    const response = await AsyncStorage.getItem('favorites');
    if (response) {
      const favoritedTeachers = JSON.parse(response);
      setFavorites(favoritedTeachers);
    }
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />
      <ScrollTeacher
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 10,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollTeacher>
    </Container>
  );
};

export default Favorites;
