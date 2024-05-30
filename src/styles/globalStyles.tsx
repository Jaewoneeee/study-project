// globalStyles.tsx
import { Global, css } from "@emotion/react";
import theme from "./theme";

const GlobalStyles = () => (
    <Global
        styles={css`
            body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                background-color: ${theme.colors.neutral[10]};
                color: ${theme.colors.primary};
                font-family: ${theme.fontFamily};
            }
            * {
                box-sizing: inherit;
                font-size: 16px;
            }
            a {
                color: inherit;
                text-decoration: none;
            }
        `}
    />
);

export default GlobalStyles;
