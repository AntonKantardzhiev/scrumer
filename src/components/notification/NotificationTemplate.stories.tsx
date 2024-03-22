import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotificationTemplate, { INotificationTemplate } from './NotificationTemplate';
import { mockNotificationTemplateProps } from './NotificationTemplate.mocks';

export default {
  title: 'templates/NotificationTemplate',
  component: NotificationTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NotificationTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationTemplate> = (args: any) => (
  <BaseTemplate {...args} />
);

export const Notification = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Notification.args = {
  ...mockNotificationTemplateProps.message,
} as INotificationTemplate;
