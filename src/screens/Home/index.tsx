import {useState, useEffect} from 'react'
import { Alert, FlatList } from 'react-native'
import { Container, Input, ListBox } from './styled'
import { BreedCards } from './Components/BreedCard'
import { useTheme } from 'styled-components/native';
import { Header } from '@components/Header';
import { useGetDogsBreedsQuery } from '@services/dogsApi';
import { Loading } from '@components/Loading';
import { breedsGetFavoriteBreeds } from '@storage/favorites/breedsGetFavoriteBreed';
import { FavoriteStorageDTO } from '@storage/favorites/FavoriteStoraegDTO';

interface BreedInterface {
    breedName: string;
    isFav: boolean;
}

export function Home() {
    const {COLORS} = useTheme();
    const {data, isLoading} = useGetDogsBreedsQuery()
    const [breeds, setBreeds] = useState<BreedInterface[]>([])
    const [filteredBreeds, setFilteredBreeds] = useState<BreedInterface[]>([])

    async function fetchBreedsListWithFavorites() {
        try{
            const favoriteBreeds = await breedsGetFavoriteBreeds()
            const listData = Object.keys(data.message)
            const listWithFavorites = listData.map(breed => {
                const isFav = favoriteBreeds.some(favoriteBreeds => favoriteBreeds.breedName === breed)
                return {
                    breedName: breed,
                    isFav
                }
            })
            setBreeds(listWithFavorites);
            setFilteredBreeds(listWithFavorites);

        } catch (error) {
            console.log(error);
            Alert.alert('Breed', 'Something went wrong')
        }
      }
    
    useEffect(() => {
        if(!isLoading) {
            fetchBreedsListWithFavorites()
        }
    }, [isLoading])

    if(isLoading) {
        return(
            <Loading />
        )
    }

    function handleOnChangeText(text: string) {
        if(text.length === 0) {
            setFilteredBreeds(breeds)
        } else {
            const filtered = breeds?.filter(dogBreed => {
                return dogBreed.breedName.includes(text.toLowerCase())
            })
            setFilteredBreeds(filtered)
        }
    }

    return(
        <Container>
            <Header />
            < Input 
                placeholder='Search for a breed'
                placeholderTextColor={COLORS.WHITE}
                onChangeText={(text: string) => handleOnChangeText(text)}
             />
            <ListBox>
                <FlatList 
                data={filteredBreeds}
                keyExtractor={(item) => item.breedName}
                renderItem={({item}) => (
                    <BreedCards 
                        breedName={item.breedName}
                        isFavorite={item.isFav}
                    />
                )}

                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100 },
                    filteredBreeds?.length === 0 && {flex: 1}
                ]}
            />        
            </ListBox>
        </Container>
    )
}





const breedMock = [
  { "id": 1, "breedName": "Labrador Retriever" },
  { "id": 2, "breedName": "Poodle" },
  { "id": 3, "breedName": "Bulldog" },
  { "id": 4, "breedName": "Beagle" },
  { "id": 5, "breedName": "Golden Retriever" },
  { "id": 6, "breedName": "Rottweiler" },
  { "id": 7, "breedName": "German Shepherd" },
  { "id": 8, "breedName": "Yorkshire Terrier" },
  { "id": 9, "breedName": "Boxer" },
  { "id": 10, "breedName": "Dachshund" },
  { "id": 11, "breedName": "Shih Tzu" },
  { "id": 12, "breedName": "Chihuahua" },
  { "id": 13, "breedName": "French Bulldog" },
  { "id": 14, "breedName": "Siberian Husky" },
  { "id": 15, "breedName": "Border Collie" }
]