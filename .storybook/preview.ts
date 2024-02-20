import type { Preview } from '@storybook/vue3'


import '../src/assets/styles/global.scss'
import WitnetPlugin from '../src/main'
import { setup } from '@storybook/vue3'


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}



setup((app) => {
  app.use(WitnetPlugin)
})


export default preview