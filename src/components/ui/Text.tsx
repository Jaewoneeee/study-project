import React, { ComponentPropsWithoutRef, ElementType, Ref, forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TypographyKey, WeightKey } from "@/styles/theme";

export type Combine<T, K> = T & Omit<K, keyof T>;

export type CombineElementProps<T extends ElementType, K = unknown> = Combine<K, ComponentPropsWithoutRef<T>>;

type OverridableProps<T extends ElementType, K = unknown> = {
    as?: T;
} & CombineElementProps<T, K>;

type TextBaseProps = {
    typography?: string;
};

type TextStylesProps = {
    typo: TypographyKey;
    weight: WeightKey;
    color?: string;
};

type TextProps<T extends ElementType> = OverridableProps<T, TextBaseProps & TextStylesProps>;

function Text<T extends ElementType = "span">(
    { children, as, typo, weight, color = "black", ...props }: React.PropsWithChildren<TextProps<T>>,
    ref: Ref<any>
) {
    const target = as ?? "span";
    const Component = target;

    return (
        <TextWrapper as={Component} typo={typo} weight={weight} color={color} ref={ref} {...props}>
            {children}
        </TextWrapper>
    );
}

export default forwardRef(Text) as typeof Text;

const TextWrapper = styled.span<TextProps<any>>`
    ${({ theme, typo, weight, color }) => css`
        ${theme.typography[typo][weight]}
        color: ${color};

        /* overflow: hidden; */
        text-overflow: ellipsis;
        /* white-space: nowrap; */
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Number of lines to clamp */
        -webkit-box-orient: vertical;
    `}
`;
