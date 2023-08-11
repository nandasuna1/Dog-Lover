import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppErros";
import { FavoriteStorageDTO } from "./FavoriteStoraegDTO";
import { FAVORITE_COLLECTION } from "@storage/storageConfig";
import { breedsGetFavoriteBreeds } from "./breedsGetFavoriteBreed";

export async function breedAddToFavorite(newBreed?: FavoriteStorageDTO) {
    try {        
        const storedBreeds = await breedsGetFavoriteBreeds();

        const breedAlreadyInFavorites = storedBreeds.filter(breed => breed.breedName === newBreed?.breedName)
        
        
        if(breedAlreadyInFavorites.length > 0) throw new AppError('This breed is already a favorite');
        
        const storage = JSON.stringify([...storedBreeds, newBreed]);

        await AsyncStorage.setItem(FAVORITE_COLLECTION, storage);

        const newList = await breedsGetFavoriteBreeds()
        return newList        

    } catch(error) {
        throw(error);
    }
}