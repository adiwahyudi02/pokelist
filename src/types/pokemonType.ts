export type GetPokemonsResType = {
    name: string
    url: string
}

export type GetPokemonsPayloadType = {
    limit: number
    offset: number
    search: string
}

export type PokemonType = {
    id: number
    name: string
    image: string
}