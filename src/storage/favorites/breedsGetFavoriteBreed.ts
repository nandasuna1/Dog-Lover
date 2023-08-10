import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_COLLECTION } from "@storage/storageConfig";
import { FavoriteStorageDTO } from "./FavoriteStoraegDTO";

export async function breedsGetFavoriteBreeds() {
    try {
        const storage = await AsyncStorage.getItem(FAVORITE_COLLECTION)

        const breeds: FavoriteStorageDTO[] = storage ? JSON.parse(storage) : [];

        return breeds;
    } catch(error) {
        throw error;
    }

}