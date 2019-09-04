import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'

const req = require.context('./stories/', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(fileName => req(fileName))
}

configure(loadStories, module)

addParameters({
  options: {
    theme: themes.dark
  }
})
