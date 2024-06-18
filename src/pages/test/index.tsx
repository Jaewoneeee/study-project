"use client";
import { useEffect, useState, useRef } from "react";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

export default function TestPage() {
    const [count, setCount] = useState(0);
    const [loadingTest, setLoadingTest] = useState(true);

    const plusCount = () => {
        setCount(count + 1);
    };

    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (buttonRef.current && inputRef.current) {
            buttonRef.current.focus();
            inputRef.current.focus();
            console.log(buttonRef.current);
            console.log(inputRef.current.value);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoadingTest(false);
        }, 3000);
    }, []);

    return (
        <>
            <div>테스트 메인 페이지</div>
            <Button variant={"green"} size={"small"} onClick={plusCount}>
                {count}
            </Button>
            <input ref={inputRef} />
            <Button
                variant={"blue"}
                size={"small"}
                ref={buttonRef}
                onClick={handleClick}
            >
                제출
            </Button>
            <button onClick={handleClick}>Ref</button>
            <Button variant={"default"} size={"medium"} loading={loadingTest}>
                버튼
            </Button>
            <Button variant={"white"} size={"large"} fullWidth>
                버튼
            </Button>
            <Button variant={"green"} size={"large"} disabled>
                버튼
            </Button>

            {/* ==== Text ==== */}
            <Text as={"span"} typo="body1" weight="normal">
                body1
            </Text>
            <Text as={"div"} typo="body2" weight="bold" color="red">
                body2
            </Text>
            <Text as={"p"} typo="h1" weight="semibold">
                h1
            </Text>
            <Text as="p" typo="body3" weight="normal">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using. making it
                look like readable English. Many desktop publishing packages and
                web page editors now use Lorem Ipsum as their default model
                text, and a search for will uncover many web sites still in
                their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like).
            </Text>
        </>
    );
}
