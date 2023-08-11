import {render} from '@testing-library/react-native'

import { Loading } from '@components/Loading'

describe("Component: Loading", () => {
    it("should be rendered", () => {
        render(<Loading />)
    })
})