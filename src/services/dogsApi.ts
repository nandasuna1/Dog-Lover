import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseUrl = 'https://dog.ceo/api/'
export const get5 = (breed?: string) =>  `https://dog.ceo/api/breed/${breed}/images/random/5`

export const dogsApi = createApi({
    reducerPath: 'dogsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getDogsBreeds: builder.query({
            query: (arg: void) =>  `breeds/list/all`
        }),
        getDogsByBreed: builder.query({
            query: (breed: string) =>  `breed/${breed}/images`
        }),
        get5FavoriteDogsByBreed: builder.query({
            query: (breed: void) =>  `breed/${breed}/images/random/5`
        })
    })
})

export const {
    useGetDogsBreedsQuery,
    useLazyGetDogsBreedsQuery,
    useLazyGetDogsByBreedQuery,
    useLazyGet5FavoriteDogsByBreedQuery,
    useGetDogsByBreedQuery,
    useGet5FavoriteDogsByBreedQuery
} = dogsApi