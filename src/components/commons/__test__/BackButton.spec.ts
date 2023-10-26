import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BackButton from '../BackButton.vue'

const mountButton = (option = {}) => {
    return mount(BackButton, option)
}

describe('BackButton', () => {
    it('renders properly', () => {
        const wrapper = mountButton()
        const button = wrapper.find('button')
        expect(button.exists()).toBe(true)
    })

    it('renders properly without slot', async () => {
        const wrapper = mountButton()
        expect(wrapper.text()).toContain('Back')
    })

    it('renders properly with slot', async () => {
        const defaultSlot = 'Back to list'
        const wrapper = mountButton({
            slots: {
                default: defaultSlot
            }
        })
        expect(wrapper.text()).toContain(defaultSlot)
    })

    it('emits onBack event when button clicked', async () => {
        const wrapper = mountButton()
        const button = wrapper.find('button')

        await button.trigger('click')
        expect(wrapper.emitted().onBack).toBeTruthy()
    })
})