import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonAbilities from '../PokemonAbilities.vue'
import type { PokemonAbility } from '@/types/pokemonType'

const abilities: PokemonAbility[] = [{
    ability: {
        name: 'blaze'
    }
},
{
    ability: {
        name: 'solar-power'
    },
}]

describe('PokemonAbilities', () => {
    it('renders properly', () => {
        const wrapper = mount(PokemonAbilities, {
            propsData: { abilities }
        })

        expect(wrapper.text()).toContain('Abilities')

        abilities.forEach(item => {
            expect(wrapper.text()).toContain(item.ability.name)
        })
    })
})