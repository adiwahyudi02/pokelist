import { get } from '@/utils/fetcher'
import type {
    GetPokemonsPayloadType,
    GetPokemonsResType,
} from '@/types/pokemonType'
import generatePokemonImageUrl from '@/utils/generatePokemonImageUrl'

/**
 * BASE_URL_POKELIST
 * 
 * Because https://pokeapi.co/api/v2 does not support search queries and also prevents search filters on
 * the client side by fetching all the Pokemon data in bulk and then filtering it manually which will cause performance issues.
 * Therefore I created a new API endpoint to support search queries 
 * 
 * issue
 * https://github.com/PokeAPI/pokeapi/issues/383
 * https://github.com/PokeAPI/pokeapi/issues/474
 * 
 * NEW API
 * check on: https://pokelist-api.vercel.app/  
 * source: https://github.com/adiwahyudi02/pokelist-api
 */

const BASE_URL_POKELIST = 'https://pokelist-api.vercel.app'

export const getPokemons = async (payload: GetPokemonsPayloadType) => {
    const res = await get(
        `${BASE_URL_POKELIST}/pokemons?_limit=${payload.limit}&_start=${payload.offset}${payload.search ? `&name_like=${payload.search}` : ''}`
    )
    const results = await res.json()

    const formattedRes = results.map((res: GetPokemonsResType) => {
        const splittedUrl = res.url.slice(0, -1).split('/')
        const id = Number(splittedUrl[splittedUrl.length - 1])

        return {
            id,
            name: res.name,
            image: generatePokemonImageUrl(id),
        }
    })

    return { results: formattedRes }
}