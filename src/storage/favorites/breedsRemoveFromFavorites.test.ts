import { FavoriteStorageDTO } from "./FavoriteStoraegDTO"
import { breedAddToFavorite } from "./breedAddToFavorites"
import { breedsGetFavoriteBreeds } from "./breedsGetFavoriteBreed"
import { breedsRemoveFromFavorite } from "./breedsRemoveFromFavorites"

describe ("Storage: Remove FavoriteBreedStorage", () => {
    it("shoud have info removed", async () => {
        const newBreed : FavoriteStorageDTO = {images: ['im1', 'im2', 'im3', 'im4', 'im5'], breedName: "newDogBreed"}
        const newBreed2 : FavoriteStorageDTO = {images: ['im1', 'im2', 'im3', 'im4', 'im5'], breedName: "newDogBreed2"}
        const newBreed3 : FavoriteStorageDTO = {images: ['im1', 'im2', 'im3', 'im4', 'im5'], breedName: "newDogBreed3"}

        await breedAddToFavorite(newBreed)
        await breedAddToFavorite(newBreed2)
        await breedAddToFavorite(newBreed3)

        await breedsRemoveFromFavorite(newBreed.breedName)
        
        const response = await breedsGetFavoriteBreeds()    
        
        expect(response).toEqual([newBreed2, newBreed3])
    })
})