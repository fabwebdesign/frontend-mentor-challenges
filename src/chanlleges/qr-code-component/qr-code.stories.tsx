import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { QRCode } from "./qr-code.page";

export default {
  title: "Challenges/QRCode",
  component: QRCode,
} as ComponentMeta<typeof QRCode>;

export const Primary: ComponentStory<typeof QRCode> = () => <QRCode />;
