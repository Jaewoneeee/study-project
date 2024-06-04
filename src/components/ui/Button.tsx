import styled from "@emotion/styled";
import { css } from "@emotion/react";
export interface ButtonProps {
    variant: "default" | "white" | "green" | "blue";
    size: "xsmall" | "small" | "medium" | "large" | "xlarge";
    fullWidth: boolean;
    isLoading: boolean;
    disabled: boolean;
    onClick: () => void;
}

const sizeStyles = (theme: any, size: string) => {
    switch (size) {
        case "xsmall":
            return css`
                padding: 4px 14px;
                ${theme.typography.button.xsmall}
            `;
        case "small":
            return css`
                padding: 4px 28px;
                ${theme.typography.button.small}
            `;
        case "large":
            return css`
                padding: 8px 48px;
                ${theme.typography.button.large}
            `;
        case "xlarge":
            return css`
                padding: 8px 70px;
                ${theme.typography.button.xlarge}
            `;
        default:
            return css`
                padding: 6px 42px;
                ${theme.typography.button.medium}
            `;
    }
};

const variantStyles = (theme: any, variant: string) => {
    switch (variant) {
        case "white":
            return css`
                background-color: ${theme.colors.neutral[10]};
                color: ${theme.colors.primary};
                border: 1px solid ${theme.colors.primary};
            `;
        case "green":
            return css`
                background-color: ${theme.colors.secondary.green};
                color: ${theme.colors.neutral[10]};
                border: none;
            `;
        case "blue":
            return css`
                background-color: ${theme.colors.secondary.blue};
                color: ${theme.colors.neutral[10]};
                border: none;
            `;
        default:
            return css`
                background-color: ${theme.colors.primary};
                color: ${theme.colors.neutral[10]};
                border: none;
            `;
    }
};

const loadingStyles = css`
    opacity: 0.6;
    pointer-events: none;
`;

const disabledStyles = (theme: any) => {
    return css`
        background-color: ${theme.colors.neutral[40]};
        color: ${theme.colors.neutral[30]};
        cursor: not-allowed;
    `;
};

type Props = PartialPick<ButtonProps, "variant" | "size"> & React.HTMLAttributes<HTMLButtonElement>;
//type Styled = Required<Pick<Props, "variant" | "size">>; //중복

export default function Button({ children, variant, size, ...props }: React.PropsWithChildren<Props>) {
    const handleClick = () => {
        if (!props.isLoading && !props.disabled && props.onClick) {
            props.onClick();
        }
    };

    return (
        <Wrapper variant={variant} size={size} onClick={handleClick} {...props}>
            {props.isLoading ? " 로딩중..." : children}
        </Wrapper>
    );
}

const Wrapper = styled.button<Props>`
    ${({ theme, size, variant, fullWidth, isLoading, disabled }) => css`
        ${sizeStyles(theme, size)}
        ${variantStyles(theme, variant)}     
        ${fullWidth && `width: 100%;`}   
        ${isLoading && loadingStyles}
        ${disabled && disabledStyles(theme)}

        border-radius: 8px;
        cursor: pointer;

        &:not(:disabled) {
            &:hover {
                opacity: 0.8;
            }

            &:active {
                opacity: 0.6;
                transform: scale(0.98);
            }
        }
    `}
`;
