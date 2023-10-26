export const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

export default function generateImageUrl(id: number) {
    return `${BASE_URL}/${id}.png`
}
