import styled from "@emotion/styled/macro";
import React from "react";
import theme, { ThemeType } from "@/styles/theme";
import { css } from "@emotion/react";

type Props = React.HTMLAttributes<HTMLButtonElement> & CustomProps;
type CustomProps = {
    // color: string;
    color: keyof ThemeType["colors"]["secondary"];
};

// const CustomButton = styled.button<CustomProps>`
//     background-color: ${(props) => props.color || "#4caf50"};
//     color: white;
//     border: none;
//     padding: 8px 16px;
//     font-size: 16px;
//     border-radius: 4px;
//     cursor: pointer;
// `;

export default function Button({ children, color, ...props }: Props) {
    return (
        // <CustomButton color={color} {...props}>
        //     {children}
        // </CustomButton>
        <button
            css={css`
                border-radius: 6px;
                border: 1px solid rgba(27, 31, 36, 0.15);
                background-color: white;
                color: ${theme.colors.secondary[color]};
                font-weight: 600;
                line-height: 20px;
                font-size: 14px;
                padding: 5px 16px;
                text-align: center;
                cursor: pointer;
                appearance: none;
                user-select: none;
                transition: background-color 0.3s;
            `}
        >
            {children}
        </button>
    );
}
