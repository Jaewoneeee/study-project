import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface TextProps {
    as: "span" | "p" | "div";
    size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "4xl";
    bold: "normal" | "semibold" | "bold";
    color: string;
}

type Props = PartialPick<TextProps, "as" | "size"> &
    React.HTMLAttributes<HTMLElement>;

export default function Text({
    children,
    as,
    size,
    ...props
}: React.PropsWithChildren<Props>) {
    // lineClamp
    return (
        <TextWrapper as={as} size={size} {...props}>
            {children}
        </TextWrapper>
    );
}

// TODO: title / content를 어떻게 구분하지?
// TODO: as로 태그를 어떻게 구분하는게 좋을까?
const TextWrapper = styled.span<Props>`
    ${({ theme, as, size }) => css`
        ${theme.typography.content.normal[size]}
    `}
`;
