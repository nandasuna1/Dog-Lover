import { useState } from 'react'
import { Button, Card, CardText, Detail } from "./styled"
import { Heart } from "phosphor-react-native"
import { CommonActions, useNavigation } from '@react-navigation/native'
import { get5, useGet5FavoriteDogsByBreedQuery } from '@services/dogsApi'
import { breedAddToFavorite } from '@storage/favorites/breedAddToFavorites'
import { FavoriteStorageDTO } from '@storage/favorites/FavoriteStoraegDTO'
import { breedsRemoveFromFavorite } from '@storage/favorites/breedsRemoveFromFavorites'

interface BreedCardProps {
    breedName: string,
    isFavorite?: boolean,
    onPressDetail?: (breedName: string) => void
}

export function BreedCards({breedName = 'Default', isFavorite = false, onPressDetail = () => {}}: BreedCardProps) {
    const [setFavorite, setSetFavorite] = useState(isFavorite)
    const navigation = useNavigation()

    async function handleFavorite(breedName: string) {
        setSetFavorite((prevState) => !prevState)
        
        if(!setFavorite) {
            const url = get5(breedName)
            await fetch(url).then(async res => {
                const breeds = await res.json()
                const breedToAdd = { breedName, images:[...breeds.message]}
                
                await breedAddToFavorite(breedToAdd)
            }).catch(e => console.log(e))
        } else {
            breedsRemoveFromFavorite(breedName)
        }
    }

    function handleDetails(breedName: string) {
        navigation.navigate('breed', {breedName})
    }

    return (
        <Card onPress={() => handleDetails(breedName)}>
            <Detail >
                <CardText>{breedName}</CardText>
            </Detail>
            <Button onPress={() => handleFavorite(breedName)}>
                <Heart color="#fff" weight={setFavorite ? 'fill' : 'bold'} size={32}/>
            </Button>
        </Card>
    )
}