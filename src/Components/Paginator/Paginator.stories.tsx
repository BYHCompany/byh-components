import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Paginator } from './Paginator'
import { PaginatorProps } from './PaginatorTypes'

export default {
  title: 'Common/Paginator',
  component: Paginator
} as Meta

const Template: Story<PaginatorProps> = (args) => <Paginator {...args} />

export const Primary = Template.bind({})
Primary.args = {
 allPagesCount: 200,
 currentPage: 1,
} as PaginatorProps