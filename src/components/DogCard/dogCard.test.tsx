import {render} from '@testing-library/react-native'

import { DogCard } from '@components/DogCard'

describe("Component: DogCard", () => {
    it("should be rendered", () => {
        render(<DogCard />)
    })
})