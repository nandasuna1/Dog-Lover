import { FavoriteStorageDTO } from "./FavoriteStoraegDTO"
import { breedAddToFavorite } from "./breedAddToFavorites"
import { breedsGetFavoriteBreeds } from "./breedsGetFavoriteBreed"

describe ("Storage: Add FavoriteBreedStorage", () => {
    it("shoud have new info when added", async () => {
        const newBreed : FavoriteStorageDTO = {images: ['im1', 'im2', 'im3', 'im4', 'im5'], breedName: "newDogBreed"}
        const newBreed2 : FavoriteStorageDTO = {images: ['im1', 'im2', 'im3', 'im4', 'im5'], breedName: "newDogBreed2"}
        
        await breedAddToFavorite(newBreed)
        await breedAddToFavorite(newBreed2)
        
        const response = await breedsGetFavoriteBreeds()    
        
        expect(response).toEqual([newBreed, newBreed2])
    })
})