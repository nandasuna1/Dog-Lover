import {render} from '@testing-library/react-native'

import { BreedCards } from '@screens/Home/Components/BreedCard'

describe("Component: BreedCards", () => {
    it("should be rendered", () => {
        render(<BreedCards breedName='DogBreed'/>)
    })
})