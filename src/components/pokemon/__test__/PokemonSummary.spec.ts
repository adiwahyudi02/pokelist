import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonSummary from '../PokemonSummary.vue'

const summary = {
    types: 'fire/flying',
    height: 17,
    weight: 905
}

describe('PokemonSummary', () => {
    it('renders properly', () => {
        const wrapper = mount(PokemonSummary, {
            propsData: { ...summary }
        })

        expect(wrapper.text()).toContain(summary.types)
        expect(wrapper.text()).toContain(summary.height)
        expect(wrapper.text()).toContain(summary.weight)
    })
})