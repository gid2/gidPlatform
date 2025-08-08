import {addDecorator} from "@storybook/react";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};
addDecorator(ThemeDecorator(Theme.LIGHT))

export default preview;
