import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Input } from './Input'

const meta = {
   title: 'Mios/Input',
   component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DarkMode: Story = {
   args: {
      name: 'input',
      label: 'Input',
      type: 'text',
      placeholder: 'Input',
   },
}

export const DarkModeDisabled: Story = {
   args: {
      name: 'input',
      label: 'Input',
      type: 'text',
      placeholder: 'Input',
      value: 'Oscar',
      disabled: true,
   },
}
