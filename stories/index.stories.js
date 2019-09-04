import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import Button from '../src/components/Button'

storiesOf('Button', module).add('test btn', () => <Button />)
