import '../src/global.css'

import { initialize, mswLoader } from 'msw-storybook-addon'

import type { Preview } from '@storybook/react'

initialize({
  onUnhandledRequest: 'bypass'
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
	loaders: [mswLoader]
}

export default preview
