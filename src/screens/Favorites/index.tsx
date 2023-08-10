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




const stringUrl = 'https://i0.statig.com.br/bancodeimagens/0w/c2/sj/0wc2sj3c14m22hlnf0ze4tjg8.jpg'
const dogs = [{id: '1', imgUrl: stringUrl}, {id: '2', imgUrl: stringUrl}, {id: '3', imgUrl: stringUrl}, {id: '4', imgUrl: stringUrl}, {id: '5', imgUrl: stringUrl}, {id: '6', imgUrl: stringUrl}, {id: '7', imgUrl: stringUrl}]
const dogsArr = [{dogBreed: 'cachorro', dogs: dogs}, {dogBreed: 'cachorro2', dogs: dogs}, {dogBreed: 'cachorro3', dogs: dogs}]