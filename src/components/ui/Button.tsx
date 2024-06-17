import styled from "@emotion/styled";
import { css } from "@emotion/react";
export interface ButtonProps {
    variant: "default" | "white" | "green" | "blue";
    size: "small" | "medium" | "large";
    fullWidth: boolean;
    loading: boolean;
    disabled: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    onDoubleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseUp: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const sizeStyles = (theme: any, size: string) => {
    switch (size) {
        case "small":
            return css`
                padding: 4px 28px;
                ${theme.typography.body3.semibold}
            `;
        case "large":
            return css`
                padding: 8px 48px;
                ${theme.typography.body1.bold}
            `;

        default:
            return css`
                padding: 6px 42px;
                ${theme.typography.body2.normal}
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

export default function Button({ children, variant, size, loading, ...props }: React.PropsWithChildren<Props>) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!loading && !props.disabled && props.onClick) {
            console.log(event);
            props.onClick(event);
        }
    };

    return (
        <ButtonWrapper variant={variant} size={size} onClick={handleClick} {...props}>
            {loading ? " 로딩중..." : children}
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled.button<Props>`
    ${({ theme, size, variant, loading, fullWidth, disabled }) => css`
        ${sizeStyles(theme, size)}
        ${variantStyles(theme, variant)}     
        ${fullWidth ? `width: 100%;` : ""}   
        ${loading ? loadingStyles : ""}
        ${disabled ? disabledStyles(theme) : ""}
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
