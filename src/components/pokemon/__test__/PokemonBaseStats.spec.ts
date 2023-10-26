import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonBaseStats from '../PokemonBaseStats.vue'
import type { PokemonStat } from '@/types/pokemonType'

const stats: PokemonStat[] = [
    {
        "base_stat": 45,
        "stat": { "name": "hp" }
    },
    {
        "base_stat": 49,
        "stat": { "name": "attack" }
    },
    {
        "base_stat": 49,
        "stat": { "name": "defense" }
    },
    {
        "base_stat": 65,
        "stat": { "name": "special-attack" }
    },
    {
        "base_stat": 65,
        "stat": { "name": "special-defense" }
    },
    {
        "base_stat": 45,
        "stat": { "name": "speed" }
    }
]

describe('PokemonBaseStats', () => {
    it('renders properly', () => {
        const wrapper = mount(PokemonBaseStats, {
            propsData: { stats }
        })

        expect(wrapper.text()).toContain('Base Stats')

        stats.forEach(item => {
            expect(wrapper.text()).toContain(item.stat.name)
            expect(wrapper.text()).toContain(item.base_stat)
        })
    })
})