import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Progress from '../Progress.vue'

describe('Progress', () => {
    it('renders properly', () => {
        const wrapper = mount(Progress)
        const capacity = wrapper.find('#capacity-progress')
        const value = wrapper.find('#value-progress')

        expect(capacity.classes().join(' ')).toContain('w-full h-3 bg-slate-100 rounded-lg overflow-x-hidden')
        expect(value.classes().join(' ')).toContain('h-3 bg-purple-900 rounded')
    })
})
