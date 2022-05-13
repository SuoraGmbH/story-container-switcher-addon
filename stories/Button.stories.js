import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    myAddonParameter: `
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`,
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

Primary.parameters = {
  contexts: [
    {
      id: "modal",
      label: "Modal",
      context: ({ children }) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fc0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      ),
    },
    {
      id: "inline",
      label: "Inline",
      context: ({ children }) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0cf",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      ),
    },
  ],
};
