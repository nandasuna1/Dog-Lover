import { get5, useGetDogsBreedsQuery } from "@services/dogsApi";
import { breedAddToFavorite } from "@storage/favorites/breedAddToFavorites";
import { breedsGetFavoriteBreeds } from "@storage/favorites/breedsGetFavoriteBreed";
import { breedsRemoveFromFavorite } from "@storage/favorites/breedsRemoveFromFavorites";
import { ReactNode, useCallback, useEffect, useState } from "react"
import {createContext} from 'use-context-selector'
import { Alert } from "react-native";

interface BreedProviderProps {
    children: ReactNode
}

export interface OutBreedInterface {
    breedName?: string;
    isFavorite?: boolean;
}

export interface BreedInterface {
    breedName: string;
    isFavorite: boolean;
}

export interface FavoriteBreedInterface {
    breedName: string;
    images: string[];
}

interface BreedContextInterface {
    isLoading: boolean
    breeds: BreedInterface[]
    favoriteBreeds: OutBreedInterface[]
    addOrRemoveFavorites: (breedName: string) => Promise<void>
}
  
export const BreedContext = createContext({} as BreedContextInterface)


export function BreedProvider({ children }: BreedProviderProps) {
    const [favoriteBreeds, setFavoriteBreeds] = useState<OutBreedInterface[]>([])
    const {data, isLoading} = useGetDogsBreedsQuery()
    const [breeds, setBreeds] = useState<BreedInterface[]>([])

    async function loadBreeds() {        
        try{
            const favBreeds = await breedsGetFavoriteBreeds()
            const listData = Object.keys(data.message)
            const listWithFavorites = listData.map(breed => {
                const isFavorite = favBreeds.some(favoriteBreed => favoriteBreed.breedName === breed)
                return {
                    breedName: breed,
                    isFavorite
                }
            })
            setFavoriteBreeds(favBreeds);
            setBreeds(listWithFavorites);

        } catch (error) {
            console.log(error);
            Alert.alert('Breed', 'Something went wrong in loading')
        }
    }
        
    const addOrRemoveFavorites = useCallback(
        async (breedName?: string) => {
            const isInFavorites = favoriteBreeds.some(favoriteBreed => favoriteBreed.breedName === breedName)
            console.log(breedName, isInFavorites);
             
            if(!isInFavorites) {
                console.log('in');
                
                const url = get5(breedName)
                await fetch(url).then(async res => {
                    const breeds = await res.json()
                    const breedToAdd = { breedName, images:[...breeds.message]}
                    
                    await breedAddToFavorite(breedToAdd)
                }).catch(e => console.log(e))
            } else {
                breedsRemoveFromFavorite(breedName)
            }
        },
        []
    )
  
    useEffect(() => {
        console.log(isLoading);
        
        if(!isLoading) loadBreeds()
    }, [isLoading])
  
    return (
      <BreedContext.Provider
        value={{
            breeds,
            favoriteBreeds,
            addOrRemoveFavorites,
            isLoading
        }}
      >
        {children}
      </BreedContext.Provider>
    )
  }