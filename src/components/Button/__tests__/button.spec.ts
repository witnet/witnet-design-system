import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WButton from '../WButton.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(WButton, { props: { label: 'Hello!' } })
    expect(wrapper.text()).toContain('Hello!')
  })
})
