import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { forwardRef } from "react";
export interface ButtonProps {
    variant: "default" | "white" | "green" | "blue";
    size: "small" | "medium" | "large";
    fullWidth: boolean;
    loading: boolean;
    disabled: boolean;
    //onClick: (target:any) => ..
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const sizeStyles = (theme: any, size: string) => {
    switch (size) {
        case "small":
            return css`
                width: 77px;
                height: 32px;
                padding: 4px 20px;
                ${theme.typography.body3.semibold}
            `;
        case "large":
            return css`
                width: 147px;
                height: 56px;
                padding: 8px 50px;
                ${theme.typography.body1.bold}
            `;

        default:
            return css`
                width: 114px;
                height: 46px;
                padding: 6px 36px;
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

type Props = PartialPick<ButtonProps, "variant" | "size"> &
    React.HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
    {
        children,
        variant,
        size,
        loading,
        ...props
    }: React.PropsWithChildren<Props>,
    ref
) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked");
        console.log(event);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        console.log("Button KeyDown");
        console.log(event);
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        console.log("Button KeyUp");
        console.log(event);
    };

    return (
        <ButtonWrapper
            variant={variant}
            size={size}
            ref={ref}
            // onClick={handleClick}
            // onKeyDown={handleKeyDown}
            // onKeyUp={handleKeyUp}
            // TODO: 채우기
            // onClick={(event) => {
            //     props.onClick(event.target.)
            // }}
            // TODO: 여기 순서 바꿔보기
            {...props}
        >
            {loading ? "로딩중..." : children}
        </ButtonWrapper>
    );
});

export default Button;

const ButtonWrapper = styled.button<Props>`
    ${({ theme, size, variant, loading, fullWidth, disabled }) => css`
        ${sizeStyles(theme, size)}
        ${variantStyles(theme, variant)}     
        ${fullWidth ? `width: 100%;` : ""}   
        ${loading ? loadingStyles : ""}
        ${disabled ? disabledStyles(theme) : ""}
        border-radius: 8px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

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
