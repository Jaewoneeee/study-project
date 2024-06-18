import React, { ElementType, Ref, forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TypographyKey, WeightKey } from "@/styles/theme";

type TextProps<T extends ElementType = "span"> = {
    as?: T;
    typo: TypographyKey;
    weight?: WeightKey;
    color?: string;
} & React.HTMLAttributes<T>;

// eslint-disable-next-line react/display-name
// const Text = forwardRef(<T extends ElementType = "span">(
//     { children, as, typo, weight = "normal", color = "inherit", ...props }: React.PropsWithChildren<TextProps<T>>,
//     ref: Ref<any>
// ) => {
//     const Component = as || "span";
//     return (
//         <TextWrapper as={Component} typo={typo} weight={weight} color={color} ref={ref} {...props}>
//             {children}
//         </TextWrapper>
//     );
// });

export default Text;

const sizeStyles = (theme: any, size: string) => {
    switch (size) {
        case "xs":
            return css`
                ${theme.typography.xs}
            `;
        case "sm":
            return css`
                ${theme.typography.sm}
            `;
        case "lg":
            return css`
                ${theme.typography.lg}
            `;
        case "xl":
            return css`
                ${theme.typography.xl}
            `;
        case "2xl":
            return css`
                ${theme.typography["2xl"]}
            `;
        case "4xl":
            return css`
                ${theme.typography["4xl"]}
            `;
        default:
            return css`
                ${theme.typography.base}
            `;
    }
};

const boldStyles = (bold: string) => {
    switch (bold) {
        case "semibold":
            return css`
                font-weight: 600;
            `;
        case "bold":
            return css`
                font-weight: 700;
            `;
        default:
            return css`
                font-weight: 400;
            `;
    }
};
// ${sizeStyles(theme, typo)}
// ${boldStyles(bold)}
const TextWrapper = styled.span<TextProps>`
    ${({ theme, typo, weight, color }) => css`
        color: ${color};
    `}
`;
