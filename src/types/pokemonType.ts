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

export type PokemonAbility = {
    ability: {
        name: string
    }
}

export type PokemonStat = {
    base_stat: number
    stat: {
        name: string
    }
}

export type PokemonTypesType = {
    type: {
        name: string
    }
}

export type GetPokemonResType = {
    abilities: PokemonAbility[]
    height: number
    weight: number
    id: number
    name: string
    image: string
    stats: PokemonStat[]
    types: PokemonTypesType[]
}