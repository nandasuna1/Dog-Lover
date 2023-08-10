import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_COLLECTION } from "@storage/storageConfig";
import { breedsGetFavoriteBreeds } from "./breedsGetFavoriteBreed";

export async function breedsRemoveFromFavorite(breedName: string) {
    try {
        const storedFavoriteBreeds = await breedsGetFavoriteBreeds();
        const breeds = storedFavoriteBreeds.filter(breed => breed.breedName !== breedName);

        await AsyncStorage.setItem(FAVORITE_COLLECTION, JSON.stringify(breeds));
    }catch(err) {
        throw err;
    }
}