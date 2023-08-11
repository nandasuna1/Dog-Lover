import { breedsGetFavoriteBreeds } from "./breedsGetFavoriteBreed"

describe ("Storage: Get FavoriteBreedStorage", () => {
    it("shoud be return null when dont have favorite breeds", async () => {
        const response = await breedsGetFavoriteBreeds()
        expect(response).toHaveLength(0)
    })
})