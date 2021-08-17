import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './header';
import React from 'react';

export default {
  component: Header,
  title: 'Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
