import {useState, useEffect} from 'react'
import { DogCard } from '@components/DogCard'
import { Alert, FlatList } from "react-native";
import { CardContainer, CardListContainer, Container, SubTitle, Title } from './styled';
import { Header } from '@components/Header';
import { breedsGetFavoriteBreeds } from '@storage/favorites/breedsGetFavoriteBreed';
import { FavoriteStorageDTO } from '@storage/favorites/FavoriteStoraegDTO';

export function Favorites() {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState('Time A');
  const [favoriteBreeds, setFavoriteBreeds] = useState<FavoriteStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  async function fetchFavoriteBreeds() {
    try{
        setIsLoading(true);
        const favoritebreeds = await breedsGetFavoriteBreeds();
        setFavoriteBreeds(favoritebreeds);
    } catch (error) {
        Alert.alert('Breed', 'Something went wrong')
    } finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchFavoriteBreeds()
  }, [favoriteBreeds])

  const renderDogsList = () => {
      const dogsList = [];
      for (let i = 0; i < favoriteBreeds.length; i++) {
        dogsList.push(
          <>
            <SubTitle>{favoriteBreeds[i].breedName}</SubTitle>
            <FlatList
              keyExtractor={(item) => item}
              data={favoriteBreeds[i].images}
              renderItem={({item}) => (
                <CardContainer>
                    <DogCard imgSrc={item}/>
                </CardContainer>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
          />
          </>

        );
      }
      return dogsList;
    };

    return(
        <Container>
          <Header />
          <Title>Favorites</Title>
            <CardListContainer>
                {renderDogsList()}
            </CardListContainer>
        </Container>
    )
}