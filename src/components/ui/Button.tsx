import styled from "@emotion/styled";
import React from "react";
import { css } from "@emotion/react";

export interface ButtonProps {
    color: string;
    fullWidth: boolean;
    size: "small" | "medium" | "large";
    variant: "primary" | "secondary";
    loading: boolean; // loading 으로 받는데 isLoading 으로 바꿔서 사용할 수 있는 타입 유틸
    onClick1: () => void;
    //onClick2: (): void; // 타입스크립트 공변성, 반공변성 => 집합론(수학과 대학원) => 함수형 프로그래밍 => 펑터, 모나드 => Javscript 로 배우는 SICP
}

type Props = PartialPick<ButtonProps, "variant" | "size"> &
    React.HTMLAttributes<HTMLButtonElement>;

type Styled = Required<Pick<Props, "variant">>;

export default function Button({
    children,
    color,
    //variant = "priamry",
    ...props
}: React.PropsWithChildren<Props>) {
    return (
        // <CustomButton color={color} {...props}>
        //     {children}
        // </CustomButton>
        <Wrapper variant={"primary"}>{children}</Wrapper>
    );
}

const Wrapper = styled.button<Styled>`
    ${({ theme, variant }) => {
        return theme.colors;
    }}
`;
