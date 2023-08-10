import { DogCard } from '@components/DogCard'
import { FlatList } from 'react-native'
import { CardContainer, Container, Title } from './styled'
import { useRoute } from '@react-navigation/native';
import { Header } from '@components/Header';
import { useGetDogsByBreedQuery } from '@services/dogsApi';
import { Loading } from '@components/Loading';

interface BreedProps {
    breedName: string
}

export function Breed() {
    const route = useRoute();
    const { breedName } = route.params;
    const {data, isFetching, isLoading,  } = useGetDogsByBreedQuery(breedName)
        
    if(isFetching || isLoading) {
        return(
            <Loading />
        )
    }

    return(
    <Container>
        <Header />
        <Title>{breedName}</Title>
        <FlatList
            data={data.message}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <CardContainer>
                    <DogCard imgSrc={item}/>
                </CardContainer>
            )}
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                {paddingBottom: 200 },
            ]}
        />
    </Container>

    )
}