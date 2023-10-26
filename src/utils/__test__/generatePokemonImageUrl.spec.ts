import { describe, it, expect } from 'vitest'
import generatePokemonImageUrl, { BASE_URL } from '../generatePokemonImageUrl'

describe('generatePokemonImageUrl utils', () => {
    it.each([1, 2, 3])('generatePokemonImageUrl(%i)', (id) => {
        expect(generatePokemonImageUrl(id)).toBe(`${BASE_URL}/${id}.png`)
    })
})