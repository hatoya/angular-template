import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/component/atom/button/button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  moduleMetadata: {
    declarations: [ButtonComponent]
  },
  template: `<app-button [type]="type" [popup]="popup" [isDisabled]="isDisabled">Click me</app-button>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Flat = Template.bind({});
Flat.args = {
  ...Default.args,
  type: 'flat'
};
