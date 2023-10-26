import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonCard from '../PokemonCard.vue'
import generateImageUrl from '@/utils/generatePokemonImageUrl'
import router from '@/router'

const pokemon = {
    id: 1,
    name: 'bulbasaur',
    image: generateImageUrl(1)
}

describe('PokemonCard', () => {
    const wrapper = mount(PokemonCard, {
        propsData: { ...pokemon },
        global: {
            plugins: [router],
        }
    })

    it('renders properly', () => {
        expect(wrapper.text()).toContain(pokemon.name)
        expect(wrapper.text()).toContain('See Details')
    })
})